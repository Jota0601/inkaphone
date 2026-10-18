
/** imagenes -inicio */

function zoom(e) {
    e.style.transform = "scale(1.2)";   // agranda un 20%
    e.style.transition = "transform 0.5s ease";
}

function volver(e) {
    e.style.transform = "scale(1)";     // vuelve al tamaño normal
    e.style.transition = "transform 0.5s ease";
}

let menuCards = document.getElementsByClassName("menu-cards");
for (let i = 0; i < menuCards.length; i++) {
    let img = menuCards[i].querySelector("img");
    img.setAttribute("onmouseover", "zoom(this)");
    img.setAttribute("onmouseout", "volver(this)");
}


/** imagenes - iphone */



let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    let img = cards[i].querySelector("img");
    img.setAttribute("onmouseover", "zoom(this)");
    img.setAttribute("onmouseout", "volver(this)");
}

/** imagenes - promociones */


let products = document.getElementsByClassName("product"); 
for (let i = 0; i < products.length; i++) {
    let img = products[i].querySelector("img"); 
    img.setAttribute("onmouseover", "zoom(this)");
    img.setAttribute("onmouseout", "volver(this)");
}


/**buscar*/

document.addEventListener("DOMContentLoaded", function() {
  const productos = [
    // iPhones
    { nombre: "iPhone 13 - 65GB", precio: "S/.2999", url: "../image/iphone.html" },
    { nombre: "iPhone 13 Pro - 65GB", precio: "S/.3400", url: "../image/iphone.html" },
    { nombre: "iPhone 13 Pro Max - 65GB", precio: "S/.3600", url: "../image/iphone.html" },
    { nombre: "iPhone 14 - 128GB", precio: "S/.3580", url: "../image/iphone.html" },
    { nombre: "iPhone 15 Pro - 128GB", precio: "S/.3880", url: "../image/iphone.html" },
    { nombre: "iPhone 15 Pro Max - 256GB", precio: "S/.4100", url: "../image/iphone.html" },
    { nombre: "iPhone 16e - 128GB", precio: "S/.4000", url: "../image/iphone.html" },
    { nombre: "iPhone 16 Pro - 256GB", precio: "S/.4600", url: "../image/iphone.html" },
    { nombre: "iPhone 17 Pro - 256GB", precio: "S/.7000", url: "../image/iphone.html" },

    // Macs
    { nombre: "MacBook Air 15'' M4", precio: "S/.5599", url: "../promo/mac.html" },
    { nombre: "MacBook Air 13'' M3", precio: "S/.8199", url: "../promo/mac.html" },
    { nombre: "MacBook Air 13'' M2", precio: "S/.3999", url: "../promo/mac.html" },
    { nombre: "MacBook Pro 14'' M4", precio: "S/.9199", url: "../promo/mac.html" },
    { nombre: "MacBook Pro 16'' M4 Max", precio: "S/.19599", url: "../promo/mac.html" },
    { nombre: "iMac 24'' Retina 4.5K M4", precio: "S/.8499", url: "../promo/mac.html" },
    { nombre: "iMac 24'' Retina 4.5K M1", precio: "S/.6999", url: "../promo/mac.html" },

    // Accesorios
    { nombre: "AirPods 2", precio: "S/.599", url: "../gerson/accesorios.html" },
    { nombre: "AirPods Pro 2", precio: "S/.799", url: "../gerson/accesorios.html" },
    { nombre: "AirPods Pro 3", precio: "S/.1299", url: "../gerson/accesorios.html" },
    { nombre: "AirPods 4", precio: "S/.1099", url: "../gerson/accesorios.html" },
    { nombre: "AirPods Max - Negro", precio: "S/.1599", url: "../gerson/accesorios.html" },
    { nombre: "AirPods Max - Azul", precio: "S/.1599", url: "../gerson/accesorios.html" },
    { nombre: "AirPods Max - Plata", precio: "S/.1599", url: "../gerson/accesorios.html" },
    { nombre: "AirTag", precio: "S/.249", url: "../gerson/accesorios.html" },
    { nombre: "Apple Watch Series 9 - Negro", precio: "S/.1899", url: "../gerson/accesorios.html" },
    { nombre: "Apple Watch Series 10 - Rose Gold", precio: "S/.1899", url: "../gerson/accesorios.html" },
    { nombre: "Apple Watch Ultra - Gris", precio: "S/.2599", url: "../gerson/accesorios.html" },
    { nombre: "Apple Pencil USB-C", precio: "S/.949", url: "../gerson/accesorios.html" },
    { nombre: "iPad Mini 128GB Violeta", precio: "S/.1599", url: "../gerson/accesorios.html" },
    { nombre: "iPad 10.9 Wi-Fi 256GB Rosa", precio: "S/.1999", url: "../gerson/accesorios.html" },
    { nombre: "iPad Air 64GB Azul", precio: "S/.2199", url: "../gerson/accesorios.html" },
    { nombre: "iPad Pro 11 M4 256GB Negro", precio: "S/.3299", url: "../gerson/accesorios.html" }
  ];

  let buscador = document.getElementById("buscador");
  let sugerencias = document.getElementById("sugerencias");

  buscador.addEventListener("input", function() {
    let filtro = buscador.value.toLowerCase();
    sugerencias.innerHTML = "";

    if (filtro.length > 0) {
      let resultados = productos.filter(p => p.nombre.toLowerCase().includes(filtro));

      resultados.forEach(p => {
        let item = document.createElement("div");
        item.textContent = `${p.nombre} — ${p.precio}`;
        item.onclick = () => { window.location.href = p.url; };
        sugerencias.appendChild(item);
      });

      sugerencias.style.display = resultados.length ? "block" : "none";
    } else {
      sugerencias.style.display = "none";
    }
  });
});



/** rotacion logo*/

function giro(g)
{
    g.style.transform= "rotateY(360deg)";
    g.style.transition= "all 1s";

}

function ver(g)
{
   g.style.transform= "rotateY(0deg)";
    g.style.transition="all 1s";

}

for(var i=0; i<document.getElementsByClassName("icono").length; i++)
{
 document.getElementsByClassName("icono")[i].setAttribute("onmouseover","giro(this)");
document.getElementsByClassName("icono")[i].setAttribute("onmouseout","ver(this)");
} 

for(var i=0; i<document.getElementsByClassName("logo").length; i++)
{
 document.getElementsByClassName("logo")[i].setAttribute("onmouseover","giro(this)");
document.getElementsByClassName("logo")[i].setAttribute("onmouseout","ver(this)");
} 


/**rotacion texto */

document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto");
  let direccion = 1; // 1 = hacia el centro, -1 = regreso
  let posicion = 0;

  setInterval(() => {
    // mover de a poco
    posicion += direccion;

    // aplicar movimiento
    texto.style.transform = `translateX(${posicion}px)`;

    // cuando llega a 100px, cambia dirección
    if (posicion >= 100) {
      direccion = -1;
    }
    // cuando regresa a 0, vuelve a avanzar
    if (posicion <= 0) {
      direccion = 1;
    }
  }, 10); // cada 30ms → movimiento lento
});

document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto1");
  let direccion = 1; // 1 = hacia el centro, -1 = regreso
  let posicion = 0;

  setInterval(() => {
    // mover de a poco
    posicion += direccion;

    // aplicar movimiento
    texto.style.transform = `translateX(${posicion}px)`;

    // cuando llega a 100px, cambia dirección
    if (posicion >= 100) {
      direccion = -1;
    }
    // cuando regresa a 0, vuelve a avanzar
    if (posicion <= 0) {
      direccion = 1;
    }
  }, 10); // cada 30ms → movimiento lento
});


document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto2");
  let direccion = 1; // 1 = hacia el centro, -1 = regreso
  let posicion = 0;

  setInterval(() => {
    // mover de a poco
    posicion += direccion;

    // aplicar movimiento
    texto.style.transform = `translateX(${posicion}px)`;

    // cuando llega a 100px, cambia dirección
    if (posicion >= 100) {
      direccion = -1;
    }
    // cuando regresa a 0, vuelve a avanzar
    if (posicion <= 0) {
      direccion = 1;
    }
  }, 10); // cada 30ms → movimiento lento
});

document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto3");
  let direccion = 1; // 1 = hacia el centro, -1 = regreso
  let posicion = 0;

  setInterval(() => {
    // mover de a poco
    posicion += direccion;

    // aplicar movimiento
    texto.style.transform = `translateX(${posicion}px)`;

    // cuando llega a 100px, cambia dirección
    if (posicion >= 100) {
      direccion = -1;
    }
    // cuando regresa a 0, vuelve a avanzar
    if (posicion <= 0) {
      direccion = 1;
    }
  }, 10); // cada 30ms → movimiento lento
});

document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto4");
  let direccion = 1; // 1 = hacia el centro, -1 = regreso
  let posicion = 0;

  setInterval(() => {
    // mover de a poco
    posicion += direccion;

    // aplicar movimiento
    texto.style.transform = `translateX(${posicion}px)`;

    // cuando llega a 100px, cambia dirección
    if (posicion >= 100) {
      direccion = -1;
    }
    // cuando regresa a 0, vuelve a avanzar
    if (posicion <= 0) {
      direccion = 1;
    }
  }, 10); // cada 30ms → movimiento lento
});


document.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("texto5");
  let direccion = 1; // 1 = hacia el centro, -1 = regreso
  let posicion = 0;

  setInterval(() => {
    // mover de a poco
    posicion += direccion;

    // aplicar movimiento
    texto.style.transform = `translateX(${posicion}px)`;

    // cuando llega a 100px, cambia dirección
    if (posicion >= 100) {
      direccion = -1;
    }
    // cuando regresa a 0, vuelve a avanzar
    if (posicion <= 0) {
      direccion = 1;
    }
  }, 10); // cada 30ms → movimiento lento
});


/**color texto */

function color() {
  let x = Math.floor(Math.random() * 150);
  let y = Math.floor(Math.random() * 150);
  let z = Math.floor(Math.random() * 150);

  const titulos = document.getElementsByClassName("texto");
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.color = `rgb(${x},${y},${z})`;
  }

  setTimeout(color, 1500);
}

color();

