/**
 * Componente FocoFooter
 * Encapsula la estructura del pie de página y la lógica del año dinámico.
 */
import './Footer.css';

export class FocoFooter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initFooterYear();
  }

  render() {
    this.innerHTML = `
      <footer>
        <div class="wrap">
          <div class="foot-top">
            <div class="brand">
              <img src="/logo.svg" alt="Logo F.O.C.O">
              <span>F.O.C.O</span>
            </div>
            <div class="foot-links">
              <div class="foot-col">
                <h4>Producto</h4>
                <a href="#funcionalidades">Funcionalidades</a>
                <a href="#planes">Planes y precios</a>
              </div>
              <div class="foot-col">
                <h4>Compañía</h4>
                <a href="#mision">Misión y visión</a>
                <a href="#por-que">Por qué F.O.C.O</a>
              </div>
              <div class="foot-col">
                <h4>Soporte</h4>
                <a href="#">Centro de ayuda</a>
                <a href="#">Contacto</a>
              </div>
            </div>
          </div>
          <div class="foot-bottom">
            <span>© <span data-year>${new Date().getFullYear()}</span> F.O.C.O — Filtro Operativo contra el Caos y la Omisión.</span>
            <span>Proyecto Integrador · Fundación Pescar</span>
          </div>
        </div>
      </footer>
    `;
  }

  initFooterYear() {
    // Ya lo manejamos directamente con Javascript template literal, 
    // pero si quisiéramos actualizar dinámicamente en el futuro:
    const yearEl = this.querySelector('[data-year]');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }
}

customElements.define('foco-footer', FocoFooter);
