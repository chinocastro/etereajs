const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const procesarPedidoBtn = document.getElementById("procesar-pedido");

cargarEventos();

function cargarEventos(){
  productos.addEventListener("click", (e)=>{carro.comprarProducto(e)});

  carrito.addEventListener("click", (e)=>{carro.eliminarProducto(e)});

  vaciarCarritoBtn.addEventListener("click", (e)=>{carro.vaciarCarrito(e)});

  document.addEventListener("DOMContentLoaded", carro.leerLocalStorage());

  procesarPedidoBtn.addEventListener("click", (e)=>{carro.procesarPedido(e)});
}












/*
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


$(".btn-primary").click( function(){
  alert("agregaste el producto al carrito");
});

*/