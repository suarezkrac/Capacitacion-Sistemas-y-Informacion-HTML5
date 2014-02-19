$(document).on('ready', paginaCargada);

function paginaCargada () {
	//Selector por Clase
	$('.job').on('click', jobClick);

	//Selector por etiqueta especifica
	$('tr:nth-child(even)').css('background', '#f1f1f1');
	$('tr:nth-child(odd)').css('background', 'gray');

	$('tr:eq(0)').css({
		"background" : "black",
		"color" : "white"
	});

	//Selector por atributo
	$('[href$=".pdf"]').css({
		'font-style':'italic',
		'color':'black'
	});
	

	var numero_paises;
	numero_paises = $('#box_3 li:not(#ciudades>li)').size();
	console.log(numero_paises);
	$('#numero').html(numero_paises);

	$('#box_3 li:eq(2)').on('click', ciudadesClick);
	$('#box_3 li:eq(2)').css('cursor', 'pointer');

	$('#imprimir').on('click', imprimirClick);
}

//CODIGO FUERA RIESGO

function imprimirClick () {
	var valor = $('#numero_imprimir').val();
	console.log(valor);
	$('#salida').html(valor);
}

function ciudadesClick () {
	var estado = $('#ciudades').css('display');
	console.log(estado);
	if (estado == "none") {
		$('#ciudades').show();
	} else if(estado == "block"){
		$('#ciudades').hide();
	};
}

function jobClick () {
	//console.log("Click en job");
	$(this).css('font-weight', 'bold');
}