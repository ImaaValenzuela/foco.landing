/**
 * Componente: Cover.js (HTML5 Custom Element)
 * Portada de bienvenida autodescartable (Splash Screen) para F.O.C.O.
 * Encapsulado como Web Component nativo de Vanilla JS con persistencia por sesión.
 */
import './Cover.css';

class FocoCover extends HTMLElement {
  connectedCallback() {
    // 1. COMPROBAR SI YA FUE DESCARTADA EN LA SESIÓN ACTUAL
    if (sessionStorage.getItem('foco_cover_dismissed') === 'true') {
      this.remove(); // Se elimina físicamente del DOM inmediatamente
      const content = document.getElementById('landing-content');
      if (content) {
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
      }
      document.body.classList.remove('overflow-hidden');
      return;
    }

    // Configurar atributos estructurales de la etiqueta <foco-cover>
    this.id = 'landing-cover';
    this.className =
      'fixed inset-0 z-[100] flex flex-col justify-between items-center bg-gradient-to-br from-[#FDA35D] via-[#FC7206] to-[#22298A] p-6 text-white overflow-hidden block';

    // Inyectar el marcado HTML semántico
    this.innerHTML = `
        <style>
        :root{
            --bg-deep:#22298A;        /* fondo general de la página (navy muy oscuro) */
            --bg-panel:#12173f;       /* fondo de las "fichas" del tablero */
            --indigo:#2b2f8f;         /* azul del contorno del foco (no muy usado directo) */
            --indigo-soft:#3d43b5;    /* azul más claro, usado en el glow de fondo */
            --orange:#f5a623;         /* naranja principal: acento, botón, título "3 segundos" */
            --orange-bright:#ffcf6b;  /* naranja claro para hover / brillo */
            --cream:#fff;          /* texto principal (blanco cálido, no puro #fff) */
            --muted:#f4f1ea;          /* texto secundario (subtítulo, microcopy) */
            --chip-border:rgba(154,160,214,0.25); /* borde sutil de fichas y columnas */
        }

        /* Reset básico: todo usa box-sizing border-box, sin márgenes por defecto */
        *{box-sizing:border-box;}
        html,body{margin:0;padding:0;}

        body{
            /* Tres capas de fondo superpuestas (se leen de arriba/primera a abajo/última):
            1) glow naranja suave arriba a la derecha (detrás del logo flotante)
            2) glow naranja abajo a la izquierda (balance visual)
            3) color sólido de base --bg-deep */
            background:
            radial-gradient(60% 55% at 78% 18%, rgba(245,166,35,0.16) 0%, rgba(245,166,35,0) 60%),
            radial-gradient(50% 45% at 12% 88%, rgba(61,67,181,0.28) 0%, rgba(61,67,181,0) 65%),
            var(--bg-deep);
            color:var(--cream);
            font-family: 'Archivo', sans-serif;
            min-height:100vh;
            overflow-x:hidden; /* evita scroll horizontal si algo se pasa 1px */
            position:relative;
        }

        /* Accesibilidad: si el usuario tiene activado "reducir movimiento" en su
            sistema operativo, apagamos todas las animaciones casi por completo
            en vez de ignorarlo (buena práctica). */
        @media (prefers-reduced-motion: reduce){
            *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important;}
        }

        a{color:inherit;}

        /* Textura de grano muy sutil sobre toda la página (opacity 3.5%) para que
            el fondo oscuro no se vea "plano". Es un SVG de ruido generado inline,
            no una imagen aparte. */
        .noise{
            position:fixed; inset:0; pointer-events:none; opacity:0.035; mix-blend-mode:overlay;
            background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }


        /* -------------------- HERO (sección principal, pantalla completa) -------------------- */
        main.hero{
            position:relative; z-index:5;
            min-height:88vh; /* casi toda la altura de la pantalla */
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center; /* centra verticalmente el contenido */
            padding:56px clamp(20px,6vw,64px) 40px;
        }

        .hero-inner{
            /* z-index:10 es importante: así el contenido (título, botón) siempre
            queda ARRIBA del tablero fantasma que está más abajo en el DOM.
            Ver la nota junto a .board-cols para más detalle. */
            position:relative;
            z-index:10;
            max-width:760px;
            width:100%;
            text-align:center;
            display:flex;
            flex-direction:column;
            align-items:center;
        }

        /* Logo grande, flotando arriba del título, con una animación de
            "levitación" sutil e infinita (sube y baja 9px cada 6 segundos). */
        .logo-badge{
            width:96px; height:96px;
            margin-bottom:28px;
            position:relative;
            animation:float 6s ease-in-out infinite;
        }
        .logo-badge img{
            width:100%; height:100%; object-fit:contain;
            filter:drop-shadow(0 0 26px rgba(245,166,35,0.45));
        }
        @keyframes float{
            0%,100%{transform:translateY(0);}
            50%{transform:translateY(-9px);}
        }

        /* Eyebrow = la etiqueta pequeña "F · O · C · O" arriba del título. */
        .eyebrow{
            font-family:'Archivo',monospace;
            font-size:12.5px;
            letter-spacing:0.42em; /* muy espaciado*/
            color:var(--bg-deep);
            text-transform:uppercase;
            margin:0 0 20px;
            opacity:0;
            animation:riseIn 0.7s ease forwards;
            animation-delay:0.05s;
        }

        /* Título principal. Se compone de dos líneas, cada una envuelta en
            <span class="line"> con overflow:hidden, y adentro un <b> que arranca
            desplazado hacia abajo (translateY 110%) y "sube" a su lugar. Ese
            truco (envolver + ocultar) es lo que logra el efecto de cortina que
            se levanta, en vez de un simple fade. */
        h1{
            font-family:'Archivo',sans-serif;
            font-weight:800;
            font-size:clamp(2.4rem, 6.2vw, 4.6rem); /* tipografía fluida: mínimo, ideal, máximo */
            line-height:1.06;
            letter-spacing:-0.02em;
            margin:0 0 22px;
            color:var(--cream);
        }
        h1 .accent{
            color:var(--orange); /* resalta "3 segundos" en naranja */
            position:relative;
            white-space:nowrap;
        }
        h1 span.line{
            display:block;
            overflow:hidden; /* esconde el <b> mientras está desplazado hacia abajo */
        }
        h1 span.line b{
            display:block;
            transform:translateY(110%);
            opacity:0;
            animation:riseIn 0.8s cubic-bezier(.22,1,.36,1) forwards;
            font-weight:800;
        }
        /* Cada línea entra con un pequeño delay respecto a la anterior,
            para que el título "suba" en dos tiempos, no de golpe. */
        h1 span.line:nth-child(1) b{animation-delay:0.15s;}
        h1 span.line:nth-child(2) b{animation-delay:0.32s;}

        /* Animación genérica de entrada, reutilizada por eyebrow, subtítulo,
            botón y microcopy (todos entran con fade + leve subida). */
        @keyframes riseIn{
            to{ transform:translateY(0); opacity:1; }
        }

        /* Subtítulo debajo del H1 */
        .sub{
            font-family:'Inter',sans-serif;
            font-size:clamp(1rem, 2vw, 1.18rem);
            color:var(--muted);
            max-width:480px; /* evita líneas demasiado largas en pantallas anchas */
            line-height:1.6;
            margin:0 0 40px;
            opacity:0;
            animation:riseIn 0.8s ease forwards;
            animation-delay:0.5s;
        }

        /* -------------------- CTA (botón "Ingresar a la App") -------------------- */
        .cta{
            position:relative;
            display:inline-flex;
            align-items:center;
            gap:10px;
            padding:18px 34px;
            background:linear-gradient(135deg, var(--orange) 0%, #e08e15 100%);
            color:#1a1200; /* texto oscuro sobre fondo naranja, buen contraste */
            font-family:'Sora',sans-serif;
            font-weight:700;
            font-size:1.05rem;
            text-decoration:none;
            border-radius:999px; /* pill / cápsula */
            box-shadow:0 10px 30px -8px rgba(245,166,35,0.55); /* "glow" bajo el botón */
            transition:transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
            opacity:0;
            animation:riseIn 0.8s ease forwards;
            animation-delay:0.68s;
        }
        .cta:hover{
            transform:translateY(-3px); /* se "levanta" un poco al pasar el mouse */
            box-shadow:0 16px 38px -8px rgba(245,166,35,0.7);
            background:linear-gradient(135deg, var(--orange-bright) 0%, var(--orange) 100%);
        }
        /* Foco visible por teclado (accesibilidad): nunca se debe quitar el
            outline sin reemplazarlo por algo igual de visible. */
        .cta:focus-visible{
            outline:3px solid var(--orange-bright);
            outline-offset:4px;
        }
        .cta svg{
            width:18px; height:18px;
            transition:transform 0.25s ease;
        }
        .cta:hover svg{ transform:translateX(4px); } /* la flechita se corre al hover */

        /* Texto chiquito debajo del botón */
        .microcopy{
            margin-top:16px;
            font-family:'Space Mono',monospace;
            font-size:12px;
            letter-spacing:0.06em;
            color:var(--muted);
            opacity:0;
            animation:riseIn 0.8s ease forwards;
            animation-delay:0.85s;
        }

        footer.hint{
            position:relative; z-index:5;
            text-align:center;
            font-family:'Space Mono',monospace;
            font-size:11px;
            color:var(--muted);
            opacity:0.5;
            padding-bottom:22px;
        }

        /* -------------------- RESPONSIVE: pantallas chicas (celulares) -------------------- */
        @media (max-width:640px){
            header{padding:22px 20px 0;}
            main.hero{padding:40px 20px;}
            .logo-badge{width:76px; height:76px; margin-bottom:22px;}
            h1{font-size:clamp(2.1rem, 9vw, 2.8rem);}
            .sub{font-size:1rem; max-width:340px;}
            .cta{width:100%; justify-content:center; padding:17px 20px;} /* botón ancho completo */
        }
        </style>
        </head>
        <body>

        <!-- Capa de textura/grano sobre toda la página (puramente decorativa) -->
        <div class="noise"></div>


        <!-- ============================== HERO ============================== -->
        <main class="hero">
            <div class="hero-inner">

            <!-- Logo grande flotante, arriba del título -->
            <div class="logo-badge">
                <img src="public/logo.svg" alt="Isotipo F.O.C.O" />
            </div>

            <p class="eyebrow">F · O · C · O</p>

            <!-- Título principal. Cada línea va envuelta en <span class="line"><b>
                para poder animarla como una "cortina que sube" (ver CSS de h1). -->
            <h1>
                <span class="line"><b>Vaciá tu cabeza</b></span>
                <span class="line"><b>en <span class="accent">3 segundos</span></b></span>
            </h1>

            <p class="sub">Tu caos mental, ordenado en un tablero. Anotá la idea, soltala, y seguí con tu día.</p>

            <!-- Botón principal (CTA). El href="#" es un placeholder: la URL real
                se setea más abajo, en el <script>, para tenerla en un solo lugar
                fácil de encontrar y editar. -->
            <a class="cta" href="#" id="app-link" aria-label="Ingresar a la App F.O.C.O">
                Ingresar a la App
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
            </a>

            <p class="microcopy">SIN REGISTROS · SOLO ENTRÁ Y SOLTÁ LA IDEA</p>

            </div>
        </main>

        <footer class="hint">F.O.C.O · Foco Operativo contra el Caos y la Omisión</footer>

        <script>
        document.getElementById('app-link').setAttribute('href', 'https://app.foco.xyz');
        </script>
    `;

    // Vincular detectores de eventos multidispositivo
    this.initEvents();
  }

  initEvents() {
    const cover = this;
    const content = document.getElementById('landing-content');

    function dismissCover() {
      // Inicia transición de deslizamiento hacia arriba
      cover.classList.add('cover-dismissed');

      // Desvanece la landing de fondo
      if (content) {
        content.classList.remove('opacity-0');
        content.classList.add('opacity-100');
      }

      // Restaura el scroll natural
      document.body.classList.remove('overflow-hidden');

      // Guarda estado en sesión
      sessionStorage.setItem('foco_cover_dismissed', 'true');

      // Limpia eventos para liberar memoria (garbage collection)
      cleanupEvents();

      // Remueve del DOM al terminar animación
      setTimeout(() => {
        cover.remove();
      }, 900); // Mismo tiempo que la transición de CSS
    }

    // A. Botón de ingreso
    const enterBtn = this.querySelector('#cover-enter-btn');
    if (enterBtn) {
      enterBtn.addEventListener('click', dismissCover);
    }

    // B. Indicador de scroll
    const scrollIndicator = this.querySelector('#cover-scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', dismissCover);
    }

    // C. Scroll de rueda de mouse hacia abajo
    function handleWheel(e) {
      if (e.deltaY > 0) {
        dismissCover();
      }
    }
    window.addEventListener('wheel', handleWheel, { passive: true });

    // D. Teclas de accesibilidad (Enter, Space, ArrowDown, PageDown)
    function handleKeyDown(e) {
      const triggerKeys = ['ArrowDown', 'PageDown', ' ', 'Enter'];
      if (triggerKeys.includes(e.key)) {
        if (e.key === ' ') {
          e.preventDefault(); // Evita scroll nativo molesto
        }
        dismissCover();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    // E. Swipe táctil vertical hacia arriba (Mobile & Tablets)
    let touchStartY = 0;

    function handleTouchStart(e) {
      touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
      if (!touchStartY) return;
      const touchEndY = e.touches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (diffY > 50) {
        // Umbral de 50px para deslizar hacia arriba
        dismissCover();
      }
    }
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // F. Limpieza de listeners
    function cleanupEvents() {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    }
  }
}

// Registro oficial del Custom Element de HTML5 en el navegador
customElements.define('foco-cover', FocoCover);
