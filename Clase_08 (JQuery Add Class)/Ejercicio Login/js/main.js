$(document).on('ready', paginaCargada);

function paginaCargada () {
	$('#background_lightbox').addClass('mostrar');
	$('#lightbox').addClass('mostrar');

	$('button').on('click', ingresar);
	$('#next').on('click', desplazarIZQ);
}
function desplazarIZQ () {
	$('#main').addClass('desplazar-izquierda');
}
function ingresar () {
	var nombre = $('#user').val();
	var contrasena = $('#pass').val();

	//SOLUCION 1
	/*
	if (nombre == "admin") {
		if (contrasena=="123") {
			$('#user_login').html(nombre);
			$('#background_lightbox').removeClass('mostrar');
			$('#lightbox').removeClass('mostrar');
			$('#main').addClass('mostrar');
		}else{
			alert("Contraseña no valida");
		}
	}else{
		alert("Usuario no valido");
	}
*/
	//SOLUCION 2

	if (nombre == "admin" && contrasena=="123") {
		$('#user_login').html(nombre);
		$('#background_lightbox').removeClass('mostrar');
		$('#lightbox').removeClass('mostrar');
		$('#main').addClass('mostrar');

	}else{
		alert("Usuario o Contraseña no valido");
	}
		
}
