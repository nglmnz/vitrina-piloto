# Vitrina: propuesta de trabajo con las nuevas incorporaciones

Revisión: 11 de noviembre de 2026. Base: commits `a38f7f5` (add documentacion, 15 archivos) y `8c5a7c7` (add articulo adio, 1 archivo). Esta propuesta distingue lo observado en archivos de las decisiones sugeridas. Los documentos de julio son antecedentes: sus compromisos, plazos y descripciones de funciones operativas no acreditan el estado actual del sitio.

## 1. Qué hacer con cada archivo

| Archivo incorporado | Uso propuesto | Entregable / comprobación |
| --- | --- | --- |
| ARQUITECTURA.md.pdf | Base técnica de Vitrina: portada estática, piezas y medición desacopladas | Arquitectura vigente en Markdown; contrastar cada componente con código y servicios realmente disponibles |
| CARTELERA_ARQUITECTURA.md.pdf | Alternativa de agenda autónoma con formulario, moderación y JSON | Conservar como alternativa; no implementar simultáneamente con el modelo institucional |
| Agenda-UAH_arquitectura-hibrida-WordPress-Shiny (1).docx | Propuesta de integración institucional de Agenda UAH | Prueba técnica acotada de acceso de lectura a eventos y acuerdo de responsabilidades con TI/Comunicaciones |
| ESTRUCTURA_CARPETAS.md.pdf | Convenciones de archivos, separación público/privado e identificadores | Inventario con ID, fuente, versión, responsable y estado; evitar mover archivos antes de mapear enlaces |
| FLUJOS_ROLES.md.pdf | Organización del trabajo editorial | Tablero por pieza con responsable, próximo paso, bloqueo y criterio de aceptación |
| PLAN_NEGOCIOS.md.pdf | Hipótesis comercial de servicios y sostenibilidad | Oferta de servicios separada de criterios curatoriales; validar horas, costes y disposición de pago antes de presentar precios como contrastados |
| Pauta_Reunion_Comunicaciones_20072026.docx | Antecedente de reunión y necesidades institucionales | Lista de acuerdos confirmados, hipótesis y pendientes; no presentar notas de reunión como convenio vigente |
| Protocolo_Agenda_UAH_Unidades.docx | Requisitos funcionales de carga y moderación | Especificación de campos y estados; confirmar quién puede asumir el plazo de 48 horas hábiles |
| Scraping y simulación.R | Prototipo exploratorio de extracción y datos sintéticos | Separar extracción, limpieza y simulación; nunca usar las 500 personas simuladas ni asistencias generadas como indicadores reales |
| Sobre_las_distintas_etapas.docx | Fundamento editorial y límites de capacidad | Principios de fidelidad, selección y revisión; estimar capacidad con horas medidas, no con proyecciones del documento |
| piloto_difusion-interactiva.docx | Fuente editable del plan piloto | Actualizar alcance, calendario y productos; cotejar con la versión PDF |
| piloto_difusion-interactiva.pdf | Versión de circulación del piloto | Exportar solo después de reconciliarla con el editable; una propuesta, dos formatos |
| proceso_traduccion.pdf | Síntesis del ciclo editorial | Convertir en checklist por pieza: fuente → autorización → triaje → producción → revisión → publicación → evaluación |
| trazabilidad.pdf | Diseño de trazabilidad mediante ID | Relacionar fuente, autorización, revisión y commit sin exponer documentos privados |
| Jaime Rojas Castillo — Derechos humanos y pueblos originarios.html | Prototipo editorial y de perfil sobre derechos humanos | Reparar rutas locales `file:///C:/...` y recurso CSS ausente; auditar cifras y fuente antes de integrarlo en portada |
| WI.CP.5.3_Dinika-Sloane.pdf | Fuente para una nueva pieza sobre IA, contratación y desigualdad | Ficha verificable con páginas → estructura de contenido → artículo divulgativo → revisión |

## 2. Decisiones que ordenan el proyecto

1. **Vitrina es la plataforma editorial.** Mantener GitHub Pages y páginas de lectura propias para el piloto; no hace falta migrar de plataforma para abandonar las ventanas superpuestas.
2. **Agenda UAH es una línea relacionada con dependencias propias.** La arquitectura autónoma (Forms/Sheets/Apps Script) y la institucional (WordPress/Shiny) son alternativas de despliegue, no dos sistemas que deban construirse ahora. Recomiendo explorar la integración institucional descrita después de la reunión, condicionada a acceso y responsabilidades verificados. La alternativa autónoma queda disponible si esa vía no prospera.
3. **Servicios es la línea de sostenibilidad.** El plan comercial contiene supuestos y precios referenciales internos; no equivale a validación de mercado. Separar encargos pagados, patrocinio y selección editorial.
4. **La documentación no demuestra implementación.** El index revisado contiene siete tarjetas y ventanas modales; no contiene las constantes de cartelera que el PDF describe como existentes. El script R usa identificadores provisionales y registros simulados. La integración de métricas debe comprobarse en código y en un servicio funcionando.
5. **Distinguir tesis, diagnóstico de Pedagogías y Sustancia como aplicación.** La ficha editorial preexistente de Pedagogías tiene N=190 y pendientes propios. No trasladar resultados a la tesis de N=276 ni presentarlos como evaluación del juego. La documentación del piloto menciona cinco niveles interpretativos: confirmar versión vigente antes de reutilizar esa descripción.

## 3. Primera pieza nueva: IA y desigualdad en la contratación

Fuente: Adio-Adet Dinika y Mona Sloane, *AI and Inequality in Hiring and Recruiting: A Field Scan*, actas de Weizenbaum Conference 2023, DOI 10.34669/wi.cp/5.3.

Observado en el documento: el resumen (página impresa 24, PDF 2) presenta tres ejes superpuestos: productividad, género y sesgo de IA. El método (página impresa 25, PDF 3) describe una revisión semisistemática de 56 artículos, leídos y codificados cualitativamente. No son 56 empresas ni participantes, y no se trata de un experimento que estime efectos causales de usar IA.

Propuesta editorial: **¿Qué cambia cuando una IA participa en la selección de personal?** Es un título propuesto, no una conclusión del estudio. Estructura: pregunta cotidiana → qué literatura se revisó → tres ejes → tensiones y límites → referencias y acceso al original. Una navegación temática puede ayudar; no corresponde fabricar porcentajes de discriminación ni indicadores que el artículo no reporte.

Primer entregable: ficha con cada afirmación y su página, clasificación (resultado de revisión / interpretación de autores / propuesta editorial), limitaciones y condiciones de reutilización. Luego redactar el artículo y producir únicamente interacciones sustentadas por esa matriz.

## 4. Segunda pieza: Jaime Rojas

El HTML ya contiene un perfil y una narrativa interactiva sobre escuelas residenciales indígenas de Canadá. Puede servir de base de una pieza de lectura extensa. Antes de incorporarlo a las tarjetas:

- Recuperar y cotejar el artículo original citado; no se ha verificado externamente en esta revisión.
- Distinguir la voz del autor, las fuentes históricas y las decisiones editoriales de Vitrina.
- Revisar especialmente cifras, fechas y formulaciones que presentan hallazgos como confirmados; documentar localización de cada respaldo.
- Corregir enlaces de navegación locales y dependencias que no están en el repositorio.
- Separar perfil de autor y artículo, enlazándolos entre sí; conservar el aviso de contenido.

## 5. Modelo de contenido y publicación

Para cada pieza: `id`, `slug`, títulos por idioma, autoría, institución, tipo, estado editorial, fuente y versión, cuatro secciones de lectura, evidencias con página impresa/PDF y tabla, limitaciones, revisión y fecha de actualización. La autorización puede referenciarse por ID interno; no publicar firmas, contactos privados ni datos de participantes.

Flujo propuesto: inventario → ficha verificable → revisión de la ficha → contenido estructurado → redacción y visualizaciones → vista previa → revisión de fidelidad y permisos → publicación. Un archivo subido al repositorio no implica que la pieza esté lista para aparecer como artículo terminado.

## 6. Ruta priorizada

| Orden | Trabajo | Responsable propuesto | Condición de terminado |
| --- | --- | --- | --- |
| 1 | Navegación a página propia | Desarrollo | Siete tarjetas abren URLs propias; regreso, recarga, idioma y enlaces de sección funcionan |
| 2 | Inventario y reconciliación documental | Coordinación + desarrollo | Los 16 archivos tienen función y estado; arquitectura vigente distinguida de antecedentes |
| 3 | Ficha Dinika–Sloane | Traducción + curaduría | Afirmaciones rastreables; método y alcance correctamente descritos |
| 4 | Artículo Dinika–Sloane | Traducción + revisión editorial | Página con contenido revisado y fuentes; no solo una ficha vacía |
| 5 | Recuperación de pieza Jaime Rojas | Desarrollo + curaduría + autoría | Enlaces operativos y revisión de fidelidad completada |
| 6 | Completar piezas previas | Coordinación + autorías | Fuente de cada pieza localizada; pendientes del informe de Pedagogías resueltos por separado |
| 7 | Prueba de Agenda UAH | TI/Comunicaciones + desarrollo, por confirmar | Acceso de lectura verificado y responsable de moderación definido |
| 8 | Medición y oferta comercial | Coordinación | Eventos de uso comprobados, horas de producción registradas y costes calculados |

Son hitos propuestos, no compromisos aceptados por terceros. Recomiendo trabajar primero una pieza completa para medir el esfuerzo real y luego fijar el tamaño de la siguiente cohorte.

## 7. Cambio de navegación de esta entrega

Se reemplaza la ventana modal por `articulo.html?id=<id>&lang=<idioma>`, con secciones enlazables Idea, Evidencia, Método y Datos y fuentes. Se extraen contenido y estilos compartidos para que portada y lectura usen la misma base. Se mantienen los siete contenidos existentes, el enlace externo de TRAMA, idioma y tema. Las secciones sin evidencia incorporada quedan expresamente pendientes; no se inventa profundidad editorial.

Esta entrega implementa navegación y prepara el plan. La redacción y publicación de los dos nuevos artículos sigue el flujo propuesto arriba.
