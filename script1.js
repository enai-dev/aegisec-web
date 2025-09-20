// script1.js
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos el hamburger y las nav-links
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('active');
    });
  }

  // ===== FORMULARIO DE CONTACTO =====
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        nombre: form.name.value,
        email: form.email.value,
        mensaje: form.message.value
      };

      try {
        const res = await fetch('http://localhost:3000/api/contactos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (data.id) {
          formMessage.textContent = "¡Mensaje enviado correctamente!";
          form.reset();
        } else {
          formMessage.textContent = "Error al enviar el mensaje, inténtalo de nuevo.";
        }
      } catch (err) {
        formMessage.textContent = "Error al conectar con el servidor.";
        console.error(err);
      }
    });
  }
});

