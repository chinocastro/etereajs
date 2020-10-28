const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra() {
    // e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'info',
            title: 'Hey',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "product.html";
        })
    }
    else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Hey',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 1000
        })
    }
    else {
        

            const enviado = document.createElement('img');
            enviado.src = 'img/logo.png';
            enviado.style.display = 'block';
            enviado.width = '150';

            setTimeout(() => {
                document.querySelector("#loaders").appendChild(enviado);
                 setTimeout(() => {
                        compra.vaciarLocalStorage();
                        enviado.remove();
                        Swal.fire('Gracias por tu compra');
                        window.location = "product.html";
                    }, 2000);

            })
    

                   

    }
}

