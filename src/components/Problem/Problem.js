/**
 * Componente FocoProblem
 * Encapsula la sección explicativa sobre la sobrecarga de información y dispersión digital.
 */
import './Problem.css';

export class FocoProblem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="problem">
        <div class="wrap">
          <div>
            <span class="eyebrow">El problema</span>
            <h2>La sobrecarga de información tiene nombre: intoxicación.</h2>
            <p>Apuntes en el celular, tareas en un chat, ideas en una pestaña que nunca se vuelve a abrir. Esa dispersión constante genera fatiga mental, ansiedad y bloqueos creativos — y las herramientas potentes que existen hoy suman una curva de aprendizaje que termina siendo otra fuente de frustración.</p>
          </div>
          <div class="scatter">
            <div class="scatter-row">
              <div class="chip"><b>Canales de chat</b>Tareas mezcladas con charla informal</div>
              <div class="chip"><b>Notas genéricas</b>Sin estructura ni conexión entre ideas</div>
            </div>
            <div class="scatter-row">
              <div class="chip"><b>Pestañas sin cerrar</b>Recursos que se pierden con el tiempo</div>
              <div class="chip hot"><b>F.O.C.O</b>Todo en un solo tablero visual, sin fricción</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('foco-problem', FocoProblem);
