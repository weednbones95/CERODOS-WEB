/* =====================================================================
   CERODOS — Frontend v1 (sin backend)
   app.js: todas las interacciones son de front-end puro. Nada de esto
   se conecta a una API, una IA real o una base de datos.
   ===================================================================== */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* -------------------------------------------------------------
     1. Menú móvil
     ------------------------------------------------------------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  function closeMobileNav() {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú de navegación");
    mobileNav.dataset.state = "closed";
  }

  function openMobileNav() {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Cerrar menú de navegación");
    mobileNav.dataset.state = "open";
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.dataset.state === "open";
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Cerrar el menú móvil al elegir un link
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });

    // Cerrar con la tecla Escape
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mobileNav.dataset.state === "open") {
        closeMobileNav();
        navToggle.focus();
      }
    });
  }

  /* -------------------------------------------------------------
     2. Animación de entrada al hacer scroll (IntersectionObserver)
     ------------------------------------------------------------- */
  var revealTargets = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window && revealTargets.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (target) {
      revealObserver.observe(target);
    });
  } else {
    // Sin soporte de IntersectionObserver: mostrar todo directamente
    revealTargets.forEach(function (target) {
      target.classList.add("is-visible");
    });
  }

  /* -------------------------------------------------------------
     3. Animación secuencial del flujo del hero
     ------------------------------------------------------------- */
  var heroFlow = document.getElementById("hero-flow");

  if (heroFlow) {
    var flowSteps = heroFlow.querySelectorAll(".flow__step");

    function playFlowSequence() {
      flowSteps.forEach(function (step, index) {
        if (prefersReducedMotion) {
          step.classList.add("is-active");
          return;
        }
        setTimeout(function () {
          step.classList.add("is-active");
        }, index * 550);
      });
    }

    // Se dispara solo cuando el hero entra en pantalla, para que la
    // secuencia se vea completa la primera vez que aparece.
    if ("IntersectionObserver" in window) {
      var heroObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              playFlowSequence();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      heroObserver.observe(heroFlow);
    } else {
      playFlowSequence();
    }
  }

  /* -------------------------------------------------------------
     4. Demo del agente (respuestas predefinidas, sin IA real)
     ------------------------------------------------------------- */
  var agentMessages = document.getElementById("agent-messages");
  var agentSuggestions = document.getElementById("agent-suggestions");

  var AGENT_RESPONSES = {
    automatizar:
      "Normalmente podemos automatizar la atención por WhatsApp e Instagram, el registro de contactos, el seguimiento comercial y las tareas repetitivas del equipo. Lo vemos juntos según cómo trabaja tu empresa hoy.",
    producto:
      "Depende de tu prioridad: si el problema es ordenar conversaciones, te conviene Cerodos Conversa. Si necesitás atención y ventas automáticas, es Cerodos Agentes. Si tenés una inmobiliaria, tenemos un CRM especializado para eso.",
    agente:
      "El agente se entrena con la información real de tu empresa: precios, productos, preguntas frecuentes. Responde consultas, califica oportunidades y deriva a una persona del equipo cuando la situación lo requiere.",
    inmobiliaria:
      "Para inmobiliarias tenemos un CRM con inventario de propiedades, un agente comercial por WhatsApp que consulta precios y cuotas reales, un embudo de leads y un copiloto de supervisión. El agente nunca inventa precios: siempre consulta el CRM.",
    precio:
      "Los precios varían según cantidad de usuarios, canales conectados, volumen de conversaciones y nivel de personalización del agente. Más abajo en 'Precios' vas a ver valores de referencia.",
  };

  var FALLBACK_RESPONSE =
    "Soy una demo educativa, así que por ahora solo respondo estas preguntas sugeridas. Para una respuesta a medida, escribinos en 'Hablemos'.";

  function appendMessage(text, role) {
    var bubble = document.createElement("p");
    bubble.className =
      "mini-chat__bubble " +
      (role === "user" ? "mini-chat__bubble--user" : "mini-chat__bubble--agent");
    bubble.textContent = text;
    agentMessages.appendChild(bubble);
    agentMessages.scrollTop = agentMessages.scrollHeight;
    return bubble;
  }

  function showTypingIndicator() {
    var typing = document.createElement("p");
    typing.className = "mini-chat__bubble mini-chat__bubble--agent";
    typing.setAttribute("data-typing", "true");
    typing.textContent = "Escribiendo…";
    agentMessages.appendChild(typing);
    agentMessages.scrollTop = agentMessages.scrollHeight;
    return typing;
  }

  if (agentMessages && agentSuggestions) {
    agentSuggestions.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-question]");
      if (!button || button.disabled) return;

      var questionKey = button.dataset.question;
      var questionText = button.textContent;
      var responseText = AGENT_RESPONSES[questionKey] || FALLBACK_RESPONSE;

      // Deshabilitar todos los chips mientras "responde" el agente
      var allChips = agentSuggestions.querySelectorAll("button");
      allChips.forEach(function (chip) {
        chip.disabled = true;
      });

      appendMessage(questionText, "user");
      var typingBubble = showTypingIndicator();

      var delay = prefersReducedMotion ? 150 : 700;
      setTimeout(function () {
        typingBubble.remove();
        appendMessage(responseText, "agent");
        allChips.forEach(function (chip) {
          chip.disabled = false;
        });
      }, delay);
    });
  }

  /* -------------------------------------------------------------
     5. Formulario de contacto (demo de front-end, sin envío real)
     ------------------------------------------------------------- */
  var contactForm = document.getElementById("contact-form");
  var formNote = document.getElementById("form-note");

  if (contactForm && formNote) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // No hay backend: este mensaje es un placeholder de confirmación.
      // Cuando exista un servicio real, acá va la llamada a la API.
      formNote.textContent =
        "¡Gracias! Esta es una demo sin backend: todavía no enviamos el mensaje a ningún lado.";
      contactForm.reset();
    });
  }

  /* -------------------------------------------------------------
     6. Año dinámico en el footer
     ------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* -------------------------------------------------------------
     7. PRUEBA: intro de marca (temporal)
     Función aislada con su propia guarda de entrada. No modifica ni
     depende de ninguna otra función de este archivo. Para eliminar esta
     prueba alcanza con borrar este bloque completo (hasta el cierre del
     IIFE) más la sección #intro en index.html y su bloque de CSS.
     ------------------------------------------------------------- */
  (function initBrandIntro() {
    var introEl = document.getElementById("intro");
    if (!introEl) return;

    var isotipo = introEl.querySelector(".brand-intro__isotipo");
    var wordmark = introEl.querySelector(".brand-intro__wordmark");
    var claim = introEl.querySelector(".brand-intro__claim");

    if (prefersReducedMotion) {
      // Sin secuencia animada: mostrar todo de inmediato.
      [isotipo, wordmark, claim].forEach(function (el) {
        if (el) el.classList.add("is-active");
      });
      return;
    }

    // Secuencia de entrada: 1) isotipo  2) se estabiliza  3) wordmark
    // 4) claim  5) todo queda estable un instante.
    [
      { el: isotipo, delay: 150 },
      { el: wordmark, delay: 650 },
      { el: claim, delay: 1050 },
    ].forEach(function (step) {
      if (!step.el) return;
      setTimeout(function () {
        step.el.classList.add("is-active");
      }, step.delay);
    });

    // Desvanecimiento progresivo atado al scroll. La sección vive en el
    // flujo normal del documento (no es sticky ni bloquea el scroll):
    // esto solo controla su propia opacidad mientras el visitante la
    // scrollea hacia arriba y afuera de la pantalla.
    var fadeDistance = introEl.offsetHeight * 0.8;
    var ticking = false;

    function updateFade() {
      var progress = Math.min(Math.max(window.scrollY / fadeDistance, 0), 1);
      introEl.style.opacity = String(1 - progress);
      introEl.style.transform = "translateY(" + -progress * 30 + "px)";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateFade);
          ticking = true;
        }
      },
      { passive: true }
    );
  })();
})();
