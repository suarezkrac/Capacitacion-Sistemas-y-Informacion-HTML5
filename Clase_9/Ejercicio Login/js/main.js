$(document).on('ready', paginaCargada);
var paginas = 3;
var contador = 1;

function paginaCargada () {

	$('#background_lightbox').addClass('mostrar');
	$('#lightbox').addClass('mostrar');

	$('button').on('click', ingresar);
	$('#next').on('click', siguiente);
}
function siguiente () {
	
	if (contador<= paginas) {
		$('.page_new').load('pagina'+contador+'.html', function(){
			$('.principal').addClass('desplazar-izquierda');
			$('.principal').addClass('oculto-izquierda');
			$(this).addClass('desplazar-centro');
			$(this).addClass('principal');
			setTimeout(function(){
				$('.oculto-izquierda').removeClass('principal');
				$('.oculto-izquierda').addClass('page_new');
				$('.page_new').removeClass('oculto-izquierda');
				$('.page_new').removeClass('desplazar-izquierda');
			}, 1000);
			setTimeout(function(){
				$('.principal').removeClass('page_new');
				$('.principal').removeClass('desplazar-centro');

			},2000);
		});

		contador++;
	}
	if (contador==4){
		$('#next').hide();
	};
}
function ingresar () {
	var nombre = $('#user').val();
	var contrasena = $('#pass').val();

	if (nombre == "admin" && contrasena=="123") {
		$('#user_login').html(nombre);
		$('#background_lightbox').removeClass('mostrar');
		$('#lightbox').removeClass('mostrar');
		$('#main').addClass('mostrar');
		$('#next').addClass('mostrar');

	}else{
		alert("Usuario o Contraseña no valido");
	}
		
}
