/* Bienvenida index*/
/*
function sumar() {
	var nombre
	var edad  
	var nombre= prompt ("Hola ¿como te llamas?:");
	

	alert ("Hola " + nombre);

	var edad= prompt (nombre + " ¿Cuantos años tenes?: ");

	alert ("Entonces tu nombre es " + nombre + " y tenes " + edad + " años ")
		if (nombre && nombre.trim()){
		var confirmar = confirm ("estos datos son correctos?")
			if (confirmar) {
			alert ("Bienvenid@ entonces");
		}else {
				alert ("Empecemos de nuevo") 
				if(prompt("¿Como te llamas?"));
				alert ("Hola " + nombre);
		}	
	}

}
*/

/* arrays prodctos */

/*
var elementos = document.getElementsByTagName ("");


var elemento = document.createElement (" "),
	contenido = document.createTextNode ("Nuevo Texto");

elemento.appendChild (contenido);

var padre = document.getElementById (" ");
padre.appendChild (elemento);

//

var primerElemento = document.getElementById (" ");
primerElemento.innerHTML = "Nuevo Texto"
*/
/*
var elemento = document.getElementById("condiciones");
alert(" Elemento: " + elemento.value + "Seleccionado: " + elemento.checked);
*/


/*
var inputs = document.getElementsByClassName ("form-control");
for (var i =0; i <  inputs.length; i++) {
	inputs[i].addEventListener ("keyup", function(){
		if(this.value.length>=1){
			this.nextElementSibling.classList.add("fijar ");
		} else {
			this.nextElementSibling.classList.remove("fijar ");
		}
	});
}
*/



/*cambio de color en "somos" */

function cambiarFondo (x) {
	console.log(x.value);

	var body =document.getElementById("body");
	body.style.backgroundColor = x.value;
}



/* FORMULARIO */
/*
(function(){

		var formulario = document.getElementsByName("formulario")[0],
			elementos = formulario.elements,
			boton = document.getElementById("btn");

		var validarNombre = function(e){
			if (formulario.nombre.value == 0) {
				alert("Oops tu nombre");
				e.preventDefault();
			}
		};

		var validarTexto = function (e) {
			if (formulario.texto.value == 0) {
				alert("Olvidaste lo que nos queres decir");
				e.preventDefault();
			}
		}

		var validarEmail = function (e) {
			if (formulario.mail.value == 0) {
				alert("Falto tu Mail");
				e.preventDefault();
			}
		};

		var validar = function(e){
			validarNombre(e);
			validarEmail(e);
			validarTexto(e);
		};

		formulario.addEventListener("submit", validar);

	}());
	

/* entrega ajax */



