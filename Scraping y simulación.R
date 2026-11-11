library(rvest)
library(dplyr)
library(stringr)
library(purrr)
library(lubridate)
library(tidyr)

# Definir la URL
url_agenda <- "https://www.uahurtado.cl/events/"
pagina <- read_html(url_agenda)

# 1. Aislar la unidad repetitiva (el contenedor de cada evento)
nodos_eventos <- html_elements(pagina, ".tribe-events-calendar-list__event-row")

# 2. Extraer la información iterando sobre cada nodo
extraer_datos_evento <- function(nodo) {
  tibble(
    # Extraemos usando las clases específicas del plugin The Events Calendar
    titulo = nodo |> 
      html_element(".tribe-events-calendar-list__event-title") |> 
      html_text(trim = TRUE),
    
    url = nodo |> 
      html_element(".tribe-events-calendar-list__event-title a") |> 
      html_attr("href"),
    
    fecha_texto = nodo |> 
      html_element(".tribe-event-date-start") |> 
      html_text(trim = TRUE),
    
    descripcion = nodo |> 
      html_element(".tribe-events-calendar-list__event-description") |> 
      html_text(trim = TRUE)
  )
}

# Aplicar la función a todos los nodos
eventos_raw <- map_dfr(nodos_eventos, extraer_datos_evento)

# 3. Limpieza y Enriquecimiento (Regex)
EVENTOS_CACHE <- eventos_raw |>
  mutate(
    # Limpieza de texto y codificación
    titulo = str_squish(titulo),
    descripcion = str_squish(descripcion),
    
    # Generar un ID simulado (wp_post_id) temporal hasta tener la REST API
    wp_post_id = row_number() + 1000,
    
    # Enriquecimiento automático vía Regex
    modalidad = case_when(
      str_detect(tolower(descripcion), "online|virtual|zoom|teams") ~ "Virtual",
      str_detect(tolower(descripcion), "híbrido|hibrido") ~ "Híbrido",
      TRUE ~ "Presencial"
    ),
    
    tipo_evento = case_when(
      str_detect(tolower(titulo), "seminario") ~ "Seminario",
      str_detect(tolower(titulo), "conversatorio") ~ "Conversatorio",
      str_detect(tolower(titulo), "taller") ~ "Taller",
      TRUE ~ "Charla"
    ),
    
    # Metadatos del sistema
    estado = "publish",
    ultima_sincronizacion = Sys.time()
  ) |>
  # Reordenar columnas según el esquema del documento
  select(wp_post_id, titulo, fecha_texto, tipo_evento, modalidad, estado, ultima_sincronizacion, url, descripcion)










#Simulación
# Parámetros de la simulación
set.seed(2026)
n_personas <- 500
facultades_uah <- c("Sociología", "Derecho", "Psicología", "Economía y Negocios", "Filosofía y Humanidades", "Educación")

# 1. Simular perfiles de usuarios (PERSONAS)
personas_simuladas <- tibble(
  persona_id = 1:n_personas,
  facultad = sample(facultades_uah, n_personas, replace = TRUE, prob = c(0.25, 0.15, 0.20, 0.15, 0.15, 0.10)),
  interes_principal = sample(c("Política Pública", "Investigación Cuantitativa", "Género", "Sustentabilidad", "Arte y Cultura"), n_personas, replace = TRUE)
)

# 2. Simular inscripciones y asistencia (INSCRIPCIONES)
# Asumiremos que cada evento tiene entre 20 y 80 inscritos
inscripciones_simuladas <- EVENTOS_CACHE |>
  select(wp_post_id) |>
  mutate(n_inscritos = sample(20:80, n(), replace = TRUE)) |>
  uncount(n_inscritos) |>
  mutate(
    # Asignar asistentes aleatorios
    persona_id = sample(personas_simuladas$persona_id, n(), replace = TRUE),
    fecha_inscripcion = Sys.time() - days(sample(1:15, n(), replace = TRUE)),
    # Simular un 65% de tasa de asistencia real sobre los inscritos
    asistio = rbinom(n(), 1, 0.65) == 1
  ) |>
  distinct(wp_post_id, persona_id, .keep_all = TRUE) # Evitar duplicados


#Simulación event_log

# 3. Simular comportamiento de navegación (EVENT_LOG)
event_log_simulado <- inscripciones_simuladas |>
  # Si se inscribió, antes tuvo que ver el evento y hacer clic
  mutate(
    timestamp_vista = fecha_inscripcion - hours(sample(1:48, n(), replace = TRUE)),
    timestamp_clic = timestamp_vista + minutes(sample(1:15, n(), replace = TRUE))
  ) |>
  pivot_longer(
    cols = c(timestamp_vista, timestamp_clic, fecha_inscripcion),
    names_to = "tipo_accion",
    values_to = "timestamp"
  ) |>
  mutate(
    accion = case_when(
      tipo_accion == "timestamp_vista" ~ "vio_evento",
      tipo_accion == "timestamp_clic" ~ "hizo_clic",
      tipo_accion == "fecha_inscripcion" ~ "se_inscribio"
    )
  ) |>
  select(persona_id, wp_post_id, accion, timestamp) |>
  arrange(timestamp)
