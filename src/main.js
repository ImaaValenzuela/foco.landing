// =========================================================
// F.O.C.O — Landing page
// Lógica de interacción (sin estilos ni contenido acá)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFooterYear();
});

/**
 * Abre/cierra el menú de navegación en pantallas chicas.
 */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

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

/**
 * Mantiene el año del footer actualizado automáticamente.
 */
function initFooterYear() {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}