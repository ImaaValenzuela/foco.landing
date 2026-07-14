/**
 * Componente FocoMisionVision
 * Encapsula la sección de Misión y Visión de la plataforma.
 */
export class FocoMisionVision extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="mv" id="mision">
        <div class="wrap">
          <div class="mv-grid">
            <div class="mv-card mission">
              <span class="tag2">Misión</span>
              <h3>Transformar el caos informativo en claridad accionable.</h3>
              <p>Darle a cada estudiante y profesional una forma simple y visual de centralizar sus tareas, notas, hábitos y recursos, para que puedan enfocarse en hacer en vez de en recordar dónde anotaron qué.</p>
            </div>
            <div class="mv-card vision">
              <span class="tag2">Visión</span>
              <h3>Ser el punto de partida de la organización personal digital.</h3>
              <p>Que F.O.C.O sea, para cualquier persona sin importar su nivel técnico, la primera herramienta a la que recurre para ordenar sus ideas — tan natural de usar como mover un papel sobre un escritorio.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('foco-mv', FocoMisionVision);
