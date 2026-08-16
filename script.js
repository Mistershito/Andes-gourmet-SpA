// Cadena & Rueda — comportamiento compartido del sitio

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "Cerrar ✕" : "Menú ☰";
    });
  }

  // Marca como activo el enlace que corresponde a la página actual
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("a[data-nav]").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === current) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Formulario de contacto: confirmación simple sin backend
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.querySelector("#form-status");
      const name = form.querySelector("#name").value.trim() || "ciclista";
      status.textContent = `Orden registrada, ${name}. Te escribimos para confirmar la hora.`;
      status.hidden = false;
      form.reset();
    });
  }
});
