$(document).on("ready", Listo);
function Listo () {
	// body...
	$('#ingresar_servicio').on('click', serviciosPage);

	$('#enviar_mail').on('click', enviarDatosMail);
}

function enviarDatosMail () {
	var nombre = $('#name').val();
	var correo = $('#mail').val();
	var mensaje = $('#mensaje').val();

	console.log(nombre);
	console.log(correo);
	console.log(mensaje);

	$.post("http://192.185.175.178/~pruebaca/profe/App/php/enviarMail.php",{nombrePHP: nombre, correoPHP: correo, mensajePHP: mensaje}, function () {
		alert("Gracias por contactarnos!!..");
	});

}

function serviciosPage () {
	// body...

	$('.servicios-icon').addClass('animated slideInLeft');

	$('.ui-block-b').addClass('animated lightSpeedIn');
	
	$('.servicios-icon, .ui-block-b').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
		$(this).removeClass('animated slideInLeft lightSpeedIn');
	});

}
