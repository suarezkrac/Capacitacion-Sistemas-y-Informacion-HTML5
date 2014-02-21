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
         		//Cargar sonidos en una configuración entendible para el codigo
         		//Ruta en donde se encuentra la carpeta de los audios
         		var assetsPath = "media/"
         		EC.Sound.setup(
         			[
         				//Relaciona el audio con el id del svg, el id del BASS esta en la linea 879
         				{src: assetsPath+"BassDrum.mp3|"+assetsPath+"BassDrum.ogg", id: "Base_x5F_Schlagfläche"},
         				{src: assetsPath+"Snare.mp3|"+assetsPath+"Snare.ogg", id: "Snare_x5F_Schlagfläche"},				
         				{src: assetsPath+"Hi-Hat.mp3|"+assetsPath+"Hi-Hat.ogg", id: "HiHat_x5F_Schlagfläche"},
         				{src: assetsPath+"Tom1.mp3|"+assetsPath+"Tom1.ogg", id: "Tom1_x5F_Schlagfläche"},
         				{src: assetsPath+"Tom2.mp3|"+assetsPath+"Tom2.ogg", id: "Tom2_x5F_Schlagfläche"},
         				{src: assetsPath+"Tom3.mp3|"+assetsPath+"Tom3.ogg", id: "Tom3_x5F_Schlagfläche"},
         				{src: assetsPath+"Becken.mp3|"+assetsPath+"Becken.ogg", id: "Becken_x5F_Schlagfläche"}
         			]
         		);
         		//Acceder al SVG para detectar el clic en la zona
         		EC.SVG.accessSVG(sym.$("drums")).done(
         			function(svgDocument){
         				//Adicionamos el evento de seleccion en el svg
         				svgDocument.addEventListener("select", function(event){
         						//Prueba de seleccion de una parte de el svg mediante la consola
         						console.log("Clic en : "+event.target.id);
         						// Reproducir el audio correspondiente al id que se hace clic
         						EC.Sound.play(event.target.id);
         						var mySymbolObject = sym.getSymbol("fondo");
         						mySymbolObject.play();
         				});
         			}
         		);
         	}
         });
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'fondo'
   (function(symbolName) {   
   
   })("fondo");
   //Edge symbol end:'fondo'

})(jQuery, AdobeEdge, "EDGE-1315868");