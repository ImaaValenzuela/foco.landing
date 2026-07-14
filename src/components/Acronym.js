/**
 * Componente FocoAcronym
 * Encapsula la sección que describe el significado del nombre F.O.C.O.
 */
export class FocoAcronym extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="acronym">
        <div class="wrap">
          <span class="eyebrow">El nombre tiene un porqué</span>
          <div class="acronym-letters">
            <span class="o">F</span><span>.</span><span class="o">O</span><span>.</span><span class="o">C</span><span>.</span><span class="o">O</span>
          </div>
          <div class="acronym-words">
            <span><b>F</b>iltro</span>
            <span><b>O</b>perativo</span>
            <span>contra el <b>C</b>aos</span>
            <span>y la <b>O</b>misión</span>
          </div>
          <p class="big">Es la función de la app. F.O.C.O filtra lo que importa, le da un lugar operativo dentro de tu día y evita que se te escape lo que no querés omitir.</p>
          <img class="acronym-mark" src="/logo.svg" alt="Isotipo F.O.C.O">
        </div>
      </section>
    `;
  }
}

customElements.define('foco-acronym', FocoAcronym);
