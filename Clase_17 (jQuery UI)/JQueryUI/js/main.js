$(document).on("ready", paginaCargada);

function paginaCargada () {
	$('#box_1').resizable();
	$('#box_1').draggable();
	$('#ciudades').selectable();
	$('#paises').sortable({
		stop: function(event, ui){
			alert("Nueva posicion :"+ui.item.index());
		}
	});

	$('#acordeon').accordion();

	var posibilidades = ["Juan", "Pedro", "Pepe", "Sandra"];
	$('#nombres').autocomplete({source: posibilidades});

	$('.boton_ui').button();

	$('#calendario').datepicker();

	$('#dialogo').dialog();

	$('#pestana').tabs();

	$('.tool').tooltip();

	$('#aplicar').on('click', aplicarEfecto);

}
function aplicarEfecto () {
	var x =$('#efectos').val();
	var options = {};
	if (x==="scale") {
		options = { percent:0 };
	}else if(x==="transfer"){
		options = { to: "#aplicar", className: "ui-effects-transfer" };
	} else if (x ==="size"){
		options = { to: {width: 10, height: 100}};
	}
	$('#box_2').effect(x, options, 2000);
}















