/**
 * Componente FocoFeatures
 * Encapsula la sección de las funcionalidades principales de F.O.C.O.
 */
import './Features.css';

export class FocoFeatures extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="features" id="funcionalidades">
        <div class="wrap">
          <div class="features-head">
            <span class="eyebrow">Funcionalidades</span>
            <h2>Todo lo que tu cabeza necesita, en un solo espacio.</h2>
            <p>Cada módulo de F.O.C.O está pensado para sacarte trabajo mental de encima, no para sumarte otro sistema que aprender.</p>
          </div>
          <div class="feat-grid">
            <div class="feat-card full-width">
              <div class="feat-icon i-navy-solid">▦</div>
              <h3>Lienzo visual "Segundo Cerebro"</h3>
              <p>Un tablero libre y modular, organizado en bloques (Personal, Objetivos Activos, Inspiración, Archivo), donde arrastrás, soltás y conectás notas, tareas y recursos como si trabajaras sobre una pared de corcho digital.</p>
            </div>
            <div class="feat-card">
              <div class="feat-icon i-orange">◎</div>
              <h3>Onboarding inteligente</h3>
              <p>Un registro que entiende tu rutina, tus intereses y tus motivaciones para configurar tu espacio de trabajo desde el primer minuto.</p>
            </div>
            <div class="feat-card">
              <div class="feat-icon i-orange-solid">⏱</div>
              <h3>Pomodoro + Habit Tracker</h3>
              <p>Cronómetro de enfoque con ciclos configurables y un tracker visual de hábitos diarios y semanales, directo en tu tablero.</p>
            </div>
            <div class="feat-card">
              <div class="feat-icon i-navy">✦</div>
              <h3>Asistente con IA</h3>
              <p>Analiza tu rutina, tus hábitos y tus notas para sugerirte resúmenes de rendimiento y planes semanales de organización.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('foco-features', FocoFeatures);
