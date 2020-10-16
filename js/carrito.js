/* JS carrito*/

class Carrito {
	comprarProducto(e){
		e.preventDefault();
		if(e.target.classList.contains("agregar-carrito")){
			const producto = e.target.parentElement.parentElement;
			this.leerDatosProducto(producto);
		}
	}

/*datos de productos*/

	leerDatosProducto(producto){
		const infoProducto = {
			imagen : producto.querySelector("img").src,
			titulo : producto.querySelector("h2").textContent,
			precio : producto.querySelector(".precio").textContent,
			id : producto.querySelector("button").getAttribute("data-id"),
			cantidad : 1
		}
		let productosLS;
		productosLS = this.obtenerProductosLocalStorage();
		productosLS.forEach(function(productoLS){
			if(productoLS.id === infoProducto.id){
				productosLS = productoLS.id;
			}

		});
		if(productosLS === infoProducto.id){
			Swal.fire({
				title: 'Ya agregaste este producto',
				text: 'tu carrito ya tiene esta gorra, recorda que nuestros productos son unicos. Podes elegir otro modelo.',
				icon: 'error',
			  })
		}
		else{
			this.insertarCarrito(infoProducto);
		}
		
	}


/*agregar al carrito*/

	insertarCarrito(producto){
		const row = document.createElement("tr");
		row.innerHTML = ` 
			<td>
				<img src="${producto.imagen}" width=100>
			</td>
			<td style="color: white">${producto.titulo}</td>
			<td style="color: white">${producto.precio}</td>
			<td style="color: white">
				<a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
			</td>
		`;
		listaProductos.appendChild(row);
		this.guardarProductosLocalStorage(producto);
	}

/*Eliminar Producto individual*/

	eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
	}

/* Vaciar carrito */

	vaciarCarrito(e){
		e.preventDefault();
		while(listaProductos.firstChild){
			listaProductos.removeChild(listaProductos.firstChild);
		}
		this.vaciarLocalStorage();
		return false;
	}

/*Productos guardados LS*/

	guardarProductosLocalStorage(producto){
		let productos;
		productos = this.obtenerProductosLocalStorage();
		productos.push(producto);
		localStorage.setItem("productos", JSON.stringify(productos));

	}

	obtenerProductosLocalStorage(){
		let productoLS;

		if(localStorage.getItem("productos") === null) {
			productoLS = [];
		}
		else {
			productoLS = JSON.parse(localStorage.getItem("productos"));
		}
		return productoLS;
	}

/*Eliminar productos LS*/
	eliminarProductoLocalStorage(productoID){
		let productosLS;
		productosLS = this.obtenerProductosLocalStorage();
		productosLS.forEach(function(productoLS, index){
			if(productoLS.id === productoID){
				productosLS.splice(index, 1);
			}
		});
		localStorage.setItem("productos", JSON.stringify(productosLS));
	}

/*leer en LS*/
	leerLocalStorage(){
		let productosLS;
		productosLS = this.obtenerProductosLocalStorage();
		productosLS.forEach(function(producto){
			const row = document.createElement("tr");
			row.innerHTML = ` 
				<td>
					<img src="${producto.imagen}" width=100>
				</td>
				<td style="color: white">${producto.titulo}</td>
				<td style="color: white">${producto.precio}</td>
				<td style="color: white">
					<a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
				</td>
			`;
			listaProductos.appendChild(row);
		});
	}

/*Leer LS compra*/
	leerLocalStorageCompra(){
		let productosLS;
		productosLS = this.obtenerProductosLocalStorage();
		productosLS.forEach(function(producto){
			const row = document.createElement("tr");
			row.innerHTML = ` 
				<td>
					<img src="${producto.imagen}" width=100>
				</td>
				<td>${producto.titulo}</td>
				<td>${producto.precio}</td>
				<td>
					<input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
				</td>
				<td>
					${producto.precio * producto.cantidad}
				<td>
					<a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
				</td>
			`;
			listaCompra.appendChild(row);
		});
	}

/*Vaciar LS*/
	vaciarLocalStorage(){
		localStorage.clear();

	}

/*Procesar pedido*/

	procesarPedido(e){
		e.preventDefault();
		if(this.obtenerProductosLocalStorage().length === 0){
			Swal.fire({
				title: 'Tu carrito esta vacio',
				text: 'agrega al menos un producto para continuar con la compra',
				icon: 'error',
				})
		}
		else {
			location.href = "compra.html";
		}
		
	}
}

