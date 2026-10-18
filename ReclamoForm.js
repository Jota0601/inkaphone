const form = document.getElementById("reclamoForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbwwPaQuvrYCOeSEWDCVAbtpdcw6Pn5mu52EgCPX_bmrBuqdQmYhbO1BJV3hTM1KFuYVJQ/exec", {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  // ⚠️ Como no-cors no devuelve respuesta, manejamos manualmente
  alert("Reclamo enviado correctamente ✅");
  form.reset();
});