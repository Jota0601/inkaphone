// RESPUESTAS INTELIGENTES
const respuestas = {
  1: "❌ No lo metas en arroz. Apágalo inmediatamente, no lo cargues y llévalo a servicio técnico.",
  2: "🔌 Verifica el cargador. Intenta reiniciar el sistema (SMC). Si sigue igual, puede ser placa.",
  3: "💻 Cierra programas en segundo plano, elimina archivos innecesarios y considera ampliar RAM o SSD.",
  4: "🔋 Revisa cable y cargador. Puede ser batería dañada o fallo en el puerto de carga."
};

const botones = document.querySelectorAll(".faq-btn");
const box = document.getElementById("respuesta");
const buscador = document.getElementById("buscador");

// CLICK EN BOTONES
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-id");

    // EFECTO LOADING
    box.innerHTML = "Analizando problema... ⏳";

    setTimeout(() => {
      box.innerHTML = respuestas[id];
    }, 800);
  });
});

// BUSCADOR INTELIGENTE
buscador.addEventListener("input", () => {
  const valor = buscador.value.toLowerCase();

  if (valor.includes("mojado") || valor.includes("agua")) {
    box.innerHTML = respuestas[1];
  } 
  else if (valor.includes("no enciende") || valor.includes("apagado")) {
    box.innerHTML = respuestas[2];
  } 
  else if (valor.includes("lento") || valor.includes("trabado")) {
    box.innerHTML = respuestas[3];
  } 
  else if (valor.includes("no carga") || valor.includes("bateria")) {
    box.innerHTML = respuestas[4];
  }
});