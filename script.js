// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
});
function downloadChecklist(e) {
  e.preventDefault();
  const text = [
    "Checklist Auditoría Web - Aegisec",
    "",
    "- Revisar security headers (CSP, HSTS, X-Frame-Options, etc.)",
    "- Pruebas OWASP Top 10 (XSS, SQLi, CSRF, Broken Auth, etc.)",
    "- Revisión de páginas de login (rate limiting, MFA, sesiones)",
    "- Revisar CORS y exposición de datos",
    "- Revisión de configuraciones del servidor (TLS, cabeceras)",
    "- Reporte con PoC y recomendaciones"
  ].join("\n");

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "checklist-auditoria-aegisec.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function handleContactSubmit(e) {
  e.preventDefault();
  // aquí puedes integrar lo que quieras: enviar por fetch a tu backend, mostrar modal, etc.
  alert("Gracias — hemos recibido tu solicitud. Te escribiremos pronto.");
  e.target.reset();
}
