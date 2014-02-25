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
}
