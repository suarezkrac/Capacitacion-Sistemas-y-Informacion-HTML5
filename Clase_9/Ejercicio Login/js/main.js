$(document).on('ready', paginaCargada);
var paginas = 4;
var contador = 1;
var contador_atras = 0;

function paginaCargada () {

	$('#background_lightbox').addClass('mostrar');
	$('#lightbox').addClass('mostrar');

	$('button').on('click', ingresar);
	$('#next').on('click', siguiente);

	$('#back').on('click', atras);
}
function siguiente () {
	$('#back').show();
	console.log('adelante: '+contador);
	
	if (contador<= paginas) {
		$('.page_new').load('pagina'+contador+'.html', function(){
			 /* Agregue*/
			$('#container').css({
				'background': 'url(img/fondo2.jpg)',
				'background-size': 'cover'
			});
			 /*aqui*/

			$('.principal').addClass('desplazar-izquierda');
			$('.principal').addClass('oculto-izquierda');
			$(this).addClass('desplazar-centro');
			$(this).addClass('principal');
			$('#next').off('click', siguiente);

			setTimeout(function(){
				$('.oculto-izquierda').removeClass('principal');
				$('.oculto-izquierda').addClass('page_new');
				$('.page_new').removeClass('oculto-izquierda');
				$('.page_new').removeClass('desplazar-izquierda');
				$('.principal').removeClass('page_new');
				$('.principal').removeClass('desplazar-centro');
				$('#next').on('click', siguiente);
				
			}, 1000);

		});

		contador++;
	}
	if (contador==5){
		$('#next').hide();
	};
}
function animar_atras(){
	
	$('.principal').addClass('desplazar-derecha');
	$('.principal').addClass('oculto-derecha');
	$(this).addClass('desplazar-centro');
	$(this).addClass('principal');
	$('#back').off('click', atras);

	setTimeout(function(){
		$('.oculto-derecha').removeClass('principal');
		$('.oculto-derecha').addClass('page_old');
		$('.page_old').removeClass('oculto-derecha');
		$('.page_old').removeClass('desplazar-derecha');
		$('.principal').removeClass('page_old');
		$('.principal').removeClass('desplazar-centro');
		$('#back').on('click', atras);
		
	}, 1000);
}

function atras () {
	if (contador<5){
		$('#next').show();
	};


	contador_atras= contador-2;

	console.log('atras: '+contador_atras);

	if (contador_atras==0) {
		$('.page_old').load('home.html', animar_atras); 
		$('#container').css({
			'background': 'url(img/fondo1.jpg)',
			'background-size': 'cover'
		});
		$('#back').hide();

	}else{
		$('.page_old').load('pagina'+contador_atras+'.html', animar_atras);

	}

	contador--;


}

function ingresar () {

	$('#main').load('home.html', function(){
		/*ESTO YA TENIAMOS*/
		var nombre = $('#user').val();
		var contrasena = $('#pass').val();

		if (nombre == "admin" && contrasena=="123") {
			$('#user_login').html(nombre);
			$('#background_lightbox').removeClass('mostrar');
			$('#lightbox').removeClass('mostrar');
			$('#main').addClass('mostrar');
			$('#back').addClass('mostrar');
			$('#next').addClass('mostrar');
			$('#back').hide();

		}else{
			alert("Usuario o Contraseña no valido");
		}
		/*HASTA AQUI*/
	});
}
