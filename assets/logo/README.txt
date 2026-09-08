LOGO — PENDIENTE DE REEMPLAZO
=============================

El manual de marca (Graphic/CERODOS Manual 1.png) solo tiene el logo
incrustado en capturas de baja resolución (~120x100 px). Usar esas capturas
como archivo final se vería borroso en un header real, y la consigna del
proyecto es "no redibujar ni reinterpretar el logo". Por eso, en esta
primera versión el header y el footer usan un wordmark de texto
("cerodos" en Manrope) más un cuadrado placeholder con el gradiente
azul→verde de marca, en vez del isotipo real.

Qué hace falta para reemplazarlo
---------------------------------
Colocar acá los archivos reales del logo (idealmente vectoriales) y avisar
para conectar cada uno en el header, footer y favicon:

- cerodos-horizontal.svg   -> isotipo + wordmark en línea (para el header)
- cerodos-isotipo.svg      -> solo el isotipo (para usos pequeños/favicon)
- cerodos-vertical.svg     -> isotipo arriba, wordmark abajo (para portadas)
- cerodos-monocromo-neg.svg -> versión clara para fondos oscuros (footer,
  bloque de CRM inmobiliario)

Si solo hay PNG en alta resolución (mínimo ~800 px de ancho), también sirve;
simplemente no se va a ver tan nítido como un SVG en pantallas de alta
densidad.

Colores y tipografía ya extraídos del manual (alta confianza, son datos,
no interpretación visual):
- Azul CERODOS   #2563EB
- Verde CERODOS  #10B981
- Grafito        #0F172A
- Gris claro     #E5E7EB
- Blanco         #FFFFFF
- Tipografía principal: Manrope (títulos)
- Tipografía secundaria: Inter (texto/interfaz)


ASSETS TEMPORALES DE PRUEBA (intro de marca animada)
=====================================================

manual-extract-isotipo.png   (205×130 px nativos)
manual-extract-wordmark.png  (196×43 px nativos)

Son recortes directos de la aplicación principal del logo que aparece en
la portada del propio manual (Graphic/CERODOS Manual 1.png, panel "01"),
localizados por detección de color y recortados tal cual — sin redibujar,
sin reinterpretar colores, sin degradés/texturas/filtros ni reescalado
agresivo. El único procesamiento aplicado, además del recorte, fue quitar
el fondo plano oscuro del recorte (dejarlo transparente) porque su tono
exacto no coincidía con el --color-graphite del sitio y se veía un
recuadro alrededor del logo; es una operación mecánica por color de fondo,
no toca ni un píxel de las formas ni de los colores propios del logo (la
sombra/espacio negativo entre las dos figuras, que es parte del diseño
original, se conservó intacta). Se usan únicamente en la sección de
prueba `#intro` (ver index.html / styles.css / app.js, bloques marcados
como "PRUEBA: intro de marca") para evaluar una animación conceptual de
movimiento de marca.

No son el asset final de producción: la resolución nativa es baja (son
una captura de manual, no un vector) y solo se ven nítidos mostrados a
tamaño moderado. Si se aprueba la intro, reemplazar por un archivo
vectorial o de alta resolución real cuando esté disponible — mismo
pendiente que ya explica este README para el header y el footer.

Nota: se probó una variante experimental que separaba el isotipo en dos
figuras (azul y verde) recortadas por separado del panel "03 — Logo
principal", para animarlas en secuencia. Se implementó, se revisó
visualmente y no convenció, así que se revirtió por completo: la intro
volvió a esta versión de un único isotipo combinado. No quedan archivos
de esa variante en esta carpeta.


LOGO REAL EN EL HEADER: WORDMARK OSCURO
========================================

manual-extract-wordmark-dark.png  (117×27 px nativos)

El header (no el footer, que sigue con el placeholder de arriba) ya usa
el logo real: el isotipo es el mismo manual-extract-isotipo.png de la
intro (funciona bien sobre fondo blanco, no hizo falta tocarlo), pero el
wordmark existente (manual-extract-wordmark.png) es blanco — se recortó
de la portada oscura del manual y sobre un header blanco queda invisible.
Por eso se generó este segundo recorte de wordmark, esta vez del panel
"03 — Logo principal" (el mismo panel de donde salieron las figuras
azul/verde), que tiene el "cerodos" en grafito/azul oscuro sobre fondo
blanco plano. Mismo método mecánico que el resto de esta carpeta:
localización por distancia de color, recorte tal cual (sin redibujar ni
reinterpretar las letras) y remoción del fondo blanco por transparencia
(no se tocó el color propio del texto). Se verificó que el recorte no
incluye restos del isotipo de arriba ni del párrafo de texto de al lado
del panel.

Se usa únicamente en el `.brand` del header (`.brand__isotipo` +
`.brand__wordmark` en styles.css). El footer conserva el placeholder
`.brand__mark`/`.brand__word` sin cambios — queda pendiente un reemplazo
aparte si se decide actualizarlo también.
