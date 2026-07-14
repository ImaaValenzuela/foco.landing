/**
 * Componente FocoHeader
 * Encapsula la estructura y lógica de interacción del encabezado (menú de navegación y responsive toggle).
 */
import './Header.css';

export class FocoHeader extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initMobileNav();
  }

  render() {
    this.innerHTML = `
      <header>
        <nav>
          <div class="brand">
            <img src="/logo.svg" alt="Logo F.O.C.O">
            <span>F.O.C.O</span>
          </div>
          <ul class="nav-links">
            <li><a href="#funcionalidades">Funcionalidades</a></li>
            <li><a href="#mision">Misión &amp; Visión</a></li>
            <li><a href="#por-que">Por qué F.O.C.O</a></li>
            <li><a href="#planes">Planes</a></li>
          </ul>
          <div class="nav-cta">
            <a href="#" class="nav-login">Iniciar sesión</a>
            <a href="#planes" class="btn btn-primary">Probar gratis</a>
          </div>
          <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </header>
    `;
  }

  initMobileNav() {
    const toggle = this.querySelector('.nav-toggle');
    const links = this.querySelector('.nav-links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Cierra el menú al elegir un link
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

customElements.define('foco-header', FocoHeader);
