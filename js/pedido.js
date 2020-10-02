const productos = [
  {
    gorraEfimera: { nombre: "Gorra Efimera", precio: 450 },
    gorraAurora: { nombre: "Gorra Aurora", precio: 500 },
  },
];

const gorras = [];
const precios = [];

const articuloUno = () => {
  const listadoProductos = productos.map((producto) => {
    gorras.push(producto.gorraEfimera.nombre);
    precios.push(producto.gorraEfimera.precio);
    document.querySelector(
      ".listados"
    ).innerHTML += `<li>${producto.gorraEfimera.nombre}</li>
        <li>${producto.gorraEfimera.precio}</li>`;
  });

  sumaTotal();
};

const carrito2 = () => {
  const listadoProductos = productos.map((producto) => {
    gorras.push(producto.gorraAurora.nombre);
    precios.push(producto.gorraAurora.precio);
    document.querySelector(
      ".listados"
    ).innerHTML += `<li>${producto.gorraAurora.nombre}</li>
        <li>${producto.gorraAurora.precio}</li>`;
  });

  sumaTotal();
};

const sumaTotal = () => {
  suma = 0;
  parseInt(suma);
  precios.forEach(function (valor) {
    suma += parseInt(valor);
  });
  document.querySelector(".total").innerHTML = `Total: $${suma}`;
  document.querySelector(".contador").innerHTML = `${gorras.length}`;
  localStorage.setItem("gorras", JSON.stringify(gorras));
  localStorage.setItem("precios", JSON.stringify(precios));
};
