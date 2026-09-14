LOGO — ESTADO Y ORIGEN DE LOS ARCHIVOS
======================================

Todos los archivos de esta carpeta son recortes mecánicos del manual de
marca (Graphic/CERODOS Manual 1.png). Ninguno fue redibujado ni
reinterpretado: se localizaron por distancia de color, se recortaron tal
cual y, cuando hizo falta, se quitó el fondo plano por transparencia. No se
tocó un solo píxel de las formas ni de los colores propios del logo, y el
espacio negativo entre las dos figuras del isotipo —que es parte del diseño
original— se conservó intacto.

Esa es la regla del proyecto y sigue vigente: no redibujar, no reinterpretar,
no agregar degradés, texturas ni filtros, no teñir ni recolorear por CSS.


ARCHIVOS EN USO
---------------

cerodos-isotipo-caja-205x130.png   (205×130)
  Isotipo del header, en las trece páginas, y también el isotipo de la
  intro de marca de la Home.

manual-extract-wordmark-dark.png   (117×27)
  Wordmark del header, en las trece páginas. Es la versión en grafito,
  recortada del panel "03 — Logo principal" del manual (fondo blanco).

manual-extract-wordmark.png        (196×43)
  Wordmark de la intro de marca de la Home, únicamente. Es la versión
  blanca, recortada de la portada oscura del manual: sirve sobre el fondo
  grafito de la intro y sería invisible sobre el header blanco. Por eso
  conviven las dos versiones.

cerodos-isotipo-plano.png
  Usado desde CSS como recurso decorativo. No se referencia desde el HTML.

cerodos-favicon-16.png
cerodos-favicon-32.png
cerodos-favicon-64.png
  Favicons declarados en las trece páginas, en los tres tamaños.


ARCHIVOS RETIRADOS
------------------

Se eliminaron cuatro archivos que ya no referencia ninguna página:

favicon.svg                     Reemplazado por los favicons PNG.
manual-extract-isotipo.png      Reemplazado en header e intro por
                                cerodos-isotipo-caja-205x130.png.
manual-extract-isotipo-blue.png   Recortes de una prueba experimental que
manual-extract-isotipo-green.png  separaba el isotipo en sus dos figuras
                                  para animarlas en secuencia. Se implementó,
                                  se revisó y no convenció: se revirtió por
                                  completo y la intro volvió al isotipo único.
                                  Los dos recortes habían quedado sin uso.


PENDIENTES
----------

Assets vectoriales reales
  Los archivos de hoy son recortes de un manual en mapa de bits, no
  vectores. Se ven nítidos a tamaño moderado, pero no escalan. Cuando haya
  material vectorial disponible, lo ideal sería reemplazarlos por:

  - cerodos-horizontal.svg      isotipo + wordmark en línea (header)
  - cerodos-isotipo.svg         solo el isotipo (usos chicos y favicon)
  - cerodos-vertical.svg        isotipo arriba, wordmark abajo (portadas)
  - cerodos-monocromo-neg.svg   versión clara para fondos oscuros

  Si solo hay PNG de alta resolución (mínimo ~800 px de ancho) también
  sirve; simplemente no se verá tan nítido en pantallas de alta densidad.

Footer
  El header ya usa el logo real, pero el footer sigue con el placeholder
  de CSS (.brand__mark + .brand__word en cerodos.css): un cuadrado con el
  gradiente azul→verde más la palabra "cerodos" en Manrope. Queda pendiente
  decidir si se reemplaza por el logo real en versión clara.


COLORES Y TIPOGRAFÍA DE MARCA
-----------------------------

Extraídos del manual. Son datos, no interpretación visual.

  Azul CERODOS    #2563EB
  Verde CERODOS   #10B981
  Grafito         #0F172A
  Gris claro      #E5E7EB
  Blanco          #FFFFFF

  Tipografía principal    Manrope (títulos)
  Tipografía secundaria   Inter (texto e interfaz)
