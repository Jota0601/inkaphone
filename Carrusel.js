const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

function siguienteSlide() {
  index++;
  if (index >= slides.length) index = 0;
  mostrarSlide(index);
}

/* CLICK EN PUNTITOS */
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    index = dot.getAttribute("data-index");
    mostrarSlide(index);
  });
});

/* AUTO despues de 2,5 segundos */
setInterval(siguienteSlide, 2500);