/**
 * Componente FocoHero
 * Encapsula la sección de presentación (Hero) de la landing page con la ilustración del tablero.
 */
import './Hero.css';

export class FocoHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="wrap hero-grid">
          <div>
            <span class="eyebrow">Segundo cerebro visual</span>
            <h1>Tu caos mental, <em>ordenado</em> en un tablero.</h1>
            <p class="lede">F.O.C.O es una webapp de productividad que centraliza tareas, notas, hábitos y recursos en un tablero visual e intuitivo. Mediante captura rápida y organización con drag &amp; drop, simplifica la gestión de información y reduce la carga mental de estudiantes y profesionales.</p>
            <div class="hero-ctas">
              <a href="#planes" class="btn btn-primary">Probar F.O.C.O gratis →</a>
              <a href="#funcionalidades" class="btn btn-ghost">Ver funcionalidades</a>
            </div>
            <div class="hero-proof">
              <span class="dots"><span></span><span></span><span></span></span>
              Pensado para mentes con demasiadas pestañas abiertas
            </div>
          </div>

          <div class="board" aria-hidden="true">
            <div class="board-connectors">
              <svg width="100%" height="100%" viewBox="0 0 460 460" style="position:absolute; inset:0;">
                <path d="M110 70 C 150 120, 180 140, 230 160" stroke="rgba(255,255,255,0.28)" stroke-width="1.6" stroke-dasharray="4 6" fill="none"/>
                <path d="M330 100 C 300 150, 280 180, 260 230" stroke="rgba(255,255,255,0.28)" stroke-width="1.6" stroke-dasharray="4 6" fill="none"/>
                <path d="M150 250 C 190 280, 230 300, 270 330" stroke="rgba(255,255,255,0.28)" stroke-width="1.6" stroke-dasharray="4 6" fill="none"/>
              </svg>
            </div>
            <div class="card c1"><span class="tag">Nota rápida</span>Ideas para el TP de Historia</div>
            <div class="card c2"><span class="tag">Recurso</span>PDF · Apuntes cátedra</div>
            <div class="card c3">
              <span class="tag">Hábito · Semana</span>
              <div class="check"><i class="done"></i> Leer 20 min</div>
              <div class="check"><i class="done"></i> Estudiar inglés</div>
              <div class="check"><i></i> Dormir 8 hs</div>
            </div>
            <div class="card c4"><span class="tag">Pomodoro</span>18:24 — Foco activo</div>
            <div class="card c5"><span class="tag">Tarea</span>Entregar informe · Vie</div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('foco-hero', FocoHero);
