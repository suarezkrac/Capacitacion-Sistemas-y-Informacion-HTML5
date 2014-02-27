/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         yepnope({
         	load: "http://cdn.edgecommons.org/an/1.1.2/js/min/EdgeCommons.js",
         	complete: function() {
         
         		//Cargar el acceso al SVG para obtner las partes a editar.
         		EC.SVG.accessSVG(sym.$("character")).done(
         			function(svgDocument){
         				//Adicionar el evento de seleccion de una parte del svg
         				svgDocument.addEventListener("select", function(event){
         					//Recordar la parte seleccionada en una variable
         					sym.setVariable("selectedPart", event.target);
         					
         					console.log(event);
         
         					//Mostrar la parte seleccionada en el campo de texto de la escena
         					sym.$('selectedPartTxt').html(event.target.id);
         
         				});//Cierra el add Event Listener
         			}//Cierra el function(svgDocument)
         		);// Cierra el access SVG  done
         	}//Cierra la complete: function
         });//Cierra YEPNOPE

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         //Cargar la parte del svg que selecciono el usuario y almacenamos en una variable
         
         var pedazo = sym.getVariable("selectedPart");
         console.log(pedazo);
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         //Cargar la parte del svg que selecciono el usuario y almacenamos en una variable
         
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color8}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         //Cargar la parte del svg que selecciono el usuario y almacenamos en una variable
         
         var pedazo = sym.getVariable("selectedPart");
         $(grupo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color9}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color11}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_color10}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var pedazo = sym.getVariable("selectedPart");
         $(pedazo).css("fill", $(e.currentTarget).css("background-color"));

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-1213759");