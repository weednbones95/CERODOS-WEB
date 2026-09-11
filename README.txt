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
precios/index.html                Precios
contacto/index.html               Contacto + Cómo empezamos

assets/css/cerodos.css            Hoja de estilos única, compartida
assets/js/cerodos.js              JavaScript único, compartido
assets/logo/                      Logo, favicon y su documentación
assets/img/                       Capturas reales del sistema (pendientes)

_partials.html                    Referencia del header y del footer. NO es
                                  una página del sitio y no se publica.
_v1-landing/                      Snapshot de la landing anterior. No publicar.


CONVENCIONES
------------

Rutas
  Siempre relativas, nunca absolutas. Desde la raíz: assets/… y productos/….
  Desde una página de nivel 1: ../assets/… y ../productos/….
  Los enlaces a carpetas siempre terminan en index.html, para que el sitio
  funcione también abierto directamente desde el disco (file://).

Profundidad
  Máximo un nivel de carpetas. Nada de productos/conversa/index.html.

Header y footer
  Duplicados en cada página a propósito (duplicación controlada). La fuente
  de verdad documental es _partials.html: si cambian, se actualiza primero
  ese archivo y después las 14 páginas.

Metadatos
  Cada página tiene su propio <title> y su propia meta description. No se
  copian de la Home.

CSS
  Un solo archivo para todo el sitio. Los componentes nuevos (bloque 8) están
  escritos mobile-first: base = mobile, y se amplían con @media (min-width: …).
  Los componentes heredados de la landing v1 (bloques 1-7) siguen siendo
  desktop-first y se migran solo cuando hace falta tocarlos.
  Breakpoints de referencia: 640 / 860 / 1024.

JavaScript
  Un solo archivo para todo el sitio. Cada módulo se auto-protege: si su HTML
  no existe en la página, no hace nada. Por eso el mismo archivo se carga en
  las 14 páginas sin condicionales.


ESTADO ACTUAL
-------------

Sin backend. El formulario de contacto y la demo del agente son simulaciones
de front-end: no envían nada ni están conectados a ninguna IA real.

Pendientes conocidos:

- Capturas reales del sistema para casos/la-ribera.html. Hoy hay marcos
  placeholder claramente identificados; ver assets/img/README.txt.
- Assets del logo: ver assets/logo/README.txt. La limpieza de los archivos
  extraídos del manual (incluidos dos recortes de prueba que quedaron sin
  uso) está pendiente para una fase posterior.
- Intro de marca animada: existe solo en la Home. Suma una pantalla completa
  antes del mensaje principal, lo que hoy contradice el objetivo de recorrer
  la Home en unos tres scrolls en celular. Pendiente de revisión.
- Precios: los valores publicados son de referencia y están sujetos a
  confirmación según alcance e implementación.
- Nosotros: versión breve, escrita solo con información disponible. Pendiente
  de ampliar cuando haya más material corporativo.


DECISIONES COMERCIALES PENDIENTES
---------------------------------

Cerodos Pulse — posible servicio complementario / pendiente de definición
comercial. No tiene página, no aparece en la navegación y no forma parte de
los cuatro productos.
