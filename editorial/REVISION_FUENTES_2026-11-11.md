# Incorporación de fuentes y primera edición de lecturas

Base documental: commit `761fd482c2373684e82078c02edaa716a80e9965` (add tesis). Las lecturas son versiones editoriales, no textos aprobados por sus autores. El sitio identifica ese estado y muestra referencias bibliográficas sin enlaces de descarga. Las fuentes no se modifican.

| Fuente | Salida | Evidencia / alcance | Pendiente |
| --- | --- | --- | --- |
| sg_final_v01.docx | `articulo.html?id=sustancia` | Método pp. 14–15; tabla 9 p. 31; límites p. 36. 276 cuestionarios válidos; regresión n=214. Páginas de la versión renderizada para revisión. | Revisar con el autor y actualizar portada del original: mantiene un título anterior. |
| Seminario de Grado_Bravo_Carmona.pdf | `articulo.html?id=tecno` | Método pp. 10–13; tabla 2 p. 20. Recuentos visualmente cotejados: antagonismo 144/63/11/2; tono 116/23/19/35/27, ambos total 220. | Revisión por autora. |
| Seminario de grado Francesca Roco (1).pdf | `articulo.html?id=arq` | Método p. 8; resultados pp. 9–14; conclusión pp. 14–15. 15 entrevistas (6+9). | Revisión por autora; aclarar fechas de citas internas. No hay base geográfica verificable para mapa. |
| Diego_Navarro_Artículo_CESI.docx | `articulo.html?id=bosque` | Introducción, discusión conceptual y sección 3. Artículo de 2025; casos documentales, no estimación de prevalencia. | Revisión por autor. Actualizar casos antes de cualquier cronología de actualidad o guía jurídica. |
| 1.-+(FINAL)+LAS+ESCUELAS+RESIDENCIALES…pdf | `articulo.html?id=escuelas-residenciales` | Resumen/introducción pp. 7–9 (PDF 1–3); conclusiones pp. 27–28 (PDF 21–22). Análisis histórico-jurídico. | Revisión por autor. Contrastar cifras antes de incorporarlas. |
| Epidemiología_y_Sociología.docx | Reserva de ideas, no artículo publicado | Borrador conceptual; no se identifica una investigación empírica trazable que sostenga las analogías como hallazgos. | Definir pregunta, bibliografía y alcance antes de una ficha editorial. |

## Decisiones de fidelidad

- Título de tesis confirmado por Ángel: **La compulsividad, no el tiempo: habitus tecnológico y deterioro de la salud mental en estudiantes universitarios de primer año**. Conservamos el ID histórico `sustancia` para no romper enlaces. No es una evaluación de la aplicación Sustancia ni el diagnóstico de Pedagogías de N=190.
- La tabla 9 se revisó visualmente. El modelo reporta n=214, R²=0,198; tiempo p=0,479 e IDA p mostrado 0,000 (se interpreta p<0,001, nunca probabilidad cero). No se presentan coeficientes como estandarizados sin verificación. No se convierten covariables en moderadores ni asociaciones en causas.
- En Antonia se usa la tabla 2, no porcentajes de formatos con discrepancias de redondeo. Publicaciones y comentarios tienen bases diferentes. El gráfico tiene etiquetas y recuentos: el color no es necesario para entenderlo.
- Francesca: se corrige año a 2024 y se retiran las promesas de mapa y datos computacionales que no corresponden a la fuente. No se inventa un número de dispositivos.
- Diego: se corrige año a 2025; no se actualizan por inferencia casos judiciales ni se atribuyen responsabilidades nuevas.
- Jaime: no se reproducen la cifra tipográficamente problemática de la introducción ni afirmaciones sobre hallazgos funerarios que requieren contraste. La nueva página sustituye como entrada editorial al prototipo con rutas locales, sin borrar el archivo original.
- Las preguntas de apertura y cierre son propuestas de Vitrina; las páginas distinguen resultados e interpretaciones atribuidas al estudio.

## Secuencia de trabajo hacia Deusto

1. Demostrar con la tesis de Ángel y la de Antonia dos rutas: relato con límites explícitos y comparación interactiva con denominadores visibles.
2. Llevar las cinco lecturas a revisión de autoría: fidelidad, permisos de reproducción y aprobación de la versión editorial. Registrar correcciones por fuente y commit.
3. Solicitar a una contraparte de Deusto una investigación candidata y una persona revisora para el piloto propuesto. No presentar colaboración institucional como acordada.
4. Probar comprensión con lectores: distinguir muestra total de base analítica; distinguir asociación de causalidad; identificar el respaldo bibliográfico sin ayuda. Registrar resultados antes de prometer impacto.
5. Completar la ficha de Dinika y Sloane con el PDF ya disponible. Gabriela sigue pendiente de fuente; ALAS de material de cobertura. TRAMA conserva su enlace al proyecto.

## Alcance técnico

`stories.js` concentra contenido, citas y series verificadas; `article.js` conserva el renderizador compartido y el estado provisional de fichas sin fuente. Cinco lecturas completas; tres fichas existentes en preparación/proyecto. La interfaz mantiene ES/PT/EN; los nuevos artículos se identifican como escritos en español. No se simulan traducciones. Cada pieza usa su propia URL. Se retiran las barras decorativas de las tarjetas para no sugerir datos inexistentes.

## Corrección de acceso a originales

Se retiran las descargas de las páginas y los nombres de archivo del contenido público estructurado. `_config.yml` excluye originales y documentación de trabajo de GitHub Pages. La metodología de ESTRUCTURA_CARPETAS.md.pdf y trazabilidad.pdf reserva las fuentes para almacenamiento privado y publica crédito, cita e ID de pieza.

**Limitación pendiente:** el repositorio es público. Las exclusiones de Pages no son control de acceso a GitHub: los originales subidos por el usuario siguen accesibles en el repositorio y su historial. La separación completa requiere trasladar y respaldar las fuentes en almacenamiento privado y resolver la exposición histórica; no basta con borrar archivos o enlaces. No se ha reescrito el historial ni cambiado la visibilidad del repositorio.
