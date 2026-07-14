/**
 * Componente FocoWhy
 * Encapsula la sección que describe la importancia del proyecto (bienestar mental, inclusión, etc.).
 */
import './WhyImporta.css';

export class FocoWhy extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="why" id="por-que">
        <div class="wrap">
          <div class="why-head">
            <span class="eyebrow">Por qué importa</span>
            <h2>Organizar la cabeza también es cuidar la cabeza.</h2>
            <p>Una app de este tipo no es un lujo de productividad: es una herramienta de bienestar y de acceso.</p>
          </div>
          <div class="why-grid">
            <div class="why-card">
              <span class="num">01</span>
              <h3>Bienestar mental</h3>
              <p>Descargar el caos mental en un mapa visual ordenado ataca directamente el estrés académico y laboral acumulado día a día.</p>
            </div>
            <div class="why-card">
              <span class="num">02</span>
              <h3>Inclusión digital real</h3>
              <p>Reemplaza configuraciones complejas de bases de datos y sistemas relacionales por una metáfora universal: arrastrar y soltar.</p>
            </div>
            <div class="why-card">
              <span class="num">03</span>
              <h3>Curva de aprendizaje cero</h3>
              <p>No hace falta un tutorial de dos horas. Si alguna vez moviste un papel sobre una mesa, ya sabés usar F.O.C.O.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('foco-why', FocoWhy);
