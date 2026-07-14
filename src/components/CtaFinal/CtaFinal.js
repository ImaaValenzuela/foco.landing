/**
 * Componente FocoCtaFinal
 * Encapsula la sección de Call-To-Action (llamado a la acción) final.
 */
import './CtaFinal.css';

export class FocoCtaFinal extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="cta-final" id="planes">
        <div class="wrap">
          <div class="cta-box">
            <h2>Dejá de buscar tus propias ideas.</h2>
            <p>Empezá gratis hoy y armá tu primer tablero en menos de cinco minutos.</p>
            <div class="hero-ctas">
              <a href="#" class="btn btn-light">Crear mi cuenta gratis →</a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('foco-cta-final', FocoCtaFinal);
