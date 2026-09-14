CERODOS — SITIO WEB
===================

Sitio estático multipágina. Sin backend, sin framework, sin build.
Solo HTML, CSS y JavaScript. Se puede abrir con doble clic (file://) o
servir desde cualquier servidor estático: todas las rutas son relativas.


MAPA DEL SITIO
--------------

index.html                        Home
productos/index.html              Índice de productos
productos/conversa.html           Cerodos Conversa — CRM Conversacional
productos/agentes.html            Cerodos Agentes — Agentes Inteligentes
productos/crm-integrado.html      Cerodos CRM Integrado
productos/proyectos.html          Cerodos Proyectos
soluciones/index.html             Soluciones (por problema)
soluciones/inmobiliarias.html     Solución por industria: inmobiliarias
probar-cerodos/index.html         Demo del agente
casos/index.html                  Índice de casos
casos/la-ribera.html              Caso La Ribera
nosotros/index.html               Nosotros
contacto/index.html               Contacto + Cómo empezamos

Trece páginas en total. Los precios ya no tienen página propia: cada
producto muestra su bloque comercial dentro de su propia página.

assets/css/                       Hojas de estilo. cerodos.css es la base
                                  compartida por las trece páginas; el resto
                                  son capas por bloque o por página.
assets/js/                        JavaScript. cerodos.js es el compartido;
                                  whatsapp.js y home-circular-v17.js son
                                  complementos.
assets/fondos-v12/                Fondo decorativo SVG, uno por página.
assets/graphics/                  Ilustraciones sueltas usadas en CSS.
assets/logo/                      Logo, favicons y su documentación.
assets/img/                       Capturas reales del sistema.

_partials.html                    Referencia del header y del footer. NO es
                                  una página del sitio y no se publica.
_v1-landing/                      Snapshot de la landing anterior. No publicar.
                                  Excluido del repositorio por .gitignore.


CONVENCIONES
------------

Rutas
  Siempre relativas, nunca absolutas. Desde la raíz: assets/… y productos/….
  Desde una página de nivel 1: ../assets/… y ../productos/….
  Los enlaces a carpetas siempre terminan en index.html, para que el sitio
  funcione también abierto directamente desde el disco (file://).

  Excepción deliberada: el fondo de cada página se declara en la propia
  página como --fondo-v08: url('../fondos-v12/NOMBRE.svg'). Ese ../ parece
  incorrecto desde la raíz, pero no lo es: la variable se consume dentro de
  assets/css/fondos-v08.css, y el navegador resuelve la ruta relativa a ese
  archivo CSS, no a la página. Por eso la misma forma funciona igual desde
  la raíz y desde las subcarpetas. No "corregirla".

Profundidad
  Máximo un nivel de carpetas. Nada de productos/conversa/index.html.

Header y footer
  Duplicados en cada página a propósito (duplicación controlada). La fuente
  de verdad documental es _partials.html: si cambian, se actualiza primero
  ese archivo y después las trece páginas.

Metadatos
  Cada página tiene su propio <title> y su propia meta description. No se
  copian de la Home.

CSS
  cerodos.css cubre todo el sitio. Los componentes nuevos (bloque 8) están
  escritos mobile-first: base = mobile, y se amplían con @media (min-width: …).
  Los componentes heredados de la landing v1 (bloques 1-7) siguen siendo
  desktop-first y se migran solo cuando hace falta tocarlos.
  Breakpoints de referencia: 640 / 860 / 1024.
  Las hojas versionadas (v07, v13, v15, v16, v17, v20, v22) se cargan solo
  en las páginas que las necesitan y no modifican el resto del sitio.

JavaScript
  cerodos.js se carga en las trece páginas. Cada módulo se auto-protege: si
  su HTML no existe en la página, no hace nada. Por eso el mismo archivo se
  carga en todas sin condicionales.

Intro de marca
  Solo en la Home. Es una capa superpuesta (position: fixed) que se desvanece
  sola: no ocupa espacio en el flujo, no desplaza contenido y no usa
  JavaScript. Dura 1,2 s en mobile y 1,5 s en pantallas anchas, y no aparece
  si el visitante pidió menos animación en su sistema.


PUBLICACIÓN
-----------

No hay proceso de build: lo que está en el repositorio es lo que se publica.
Se sube el contenido de la raíz tal cual, excluyendo lo que marca .gitignore
(_v1-landing/, Graphic/, Claude outputs/, app.js y styles.css de la raíz).

La página de inicio es index.html en la raíz.

Sirve cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub
Pages o un hosting tradicional por FTP). No requiere Node, PHP ni base de
datos.

Antes de publicar conviene completar el número de WhatsApp: ver abajo.


ESTADO ACTUAL
-------------

Sin backend. El formulario de contacto y la demo del agente son simulaciones
de front-end: no envían nada ni están conectados a ninguna IA real.

Pendientes conocidos:

- WhatsApp: assets/js/whatsapp-config.js tiene el número vacío. Mientras
  siga así, los botones de WhatsApp abren un aviso que dice que el canal
  estará disponible próximamente. Al completar el número internacional
  (solo dígitos) pasan a abrir la conversación real.
- Contenido: los valores comerciales publicados en cada producto son de
  referencia y están sujetos a confirmación según alcance e implementación.
- Nosotros: versión breve, escrita solo con información disponible. Pendiente
  de ampliar cuando haya más material corporativo.
- Assets del logo: ver assets/logo/README.txt.


DECISIONES COMERCIALES PENDIENTES
---------------------------------

Cerodos Pulse — posible servicio complementario / pendiente de definición
comercial. No tiene página, no aparece en la navegación y no forma parte de
los cuatro productos.
