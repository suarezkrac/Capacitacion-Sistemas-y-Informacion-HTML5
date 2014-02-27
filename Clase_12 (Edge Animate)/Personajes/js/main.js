$(document).on("ready", paginaLista);

function paginaLista () {
	$('#inicio h1').addClass('animated bounceIn');
	$('#inicio h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', animacion2());

	$('#inicio div>div').on('click', clicPersonaje);
}

function animacion2(){
	$('#inicio div:eq(0)').addClass('animated fadeInUp');
}

function clicPersonaje(){
	$('#inicio').addClass('animated bounceOutUp');
	var personaje = $(this).attr('id');
	console.log(personaje);
	if (personaje == "personaje1") {
		$('#personaje').addClass('personaje_1 animated slideInLeft');
	}else if(personaje == "personaje2"){
		$('#personaje').addClass('personaje_2 animated slideInLeft');
	}

	$('.contenido').show();
	$('#animacion').html('<iframe src="assets/animacion_01/estadisticas.html"></iframe>');
}