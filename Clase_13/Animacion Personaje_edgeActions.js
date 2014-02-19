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
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'muneco'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 900, function(sym, e) {
         // introducir código aquí
         // reproducir la línea de tiempo en la posición determinada (ms o etiqueta)
         sym.play('Caminado');

      });
      //Edge binding end

   })("muneco");
   //Edge symbol end:'muneco'

   //=========================================================
   
   //Edge symbol: 'mensaje'
   (function(symbolName) {   
   
   })("mensaje");
   //Edge symbol end:'mensaje'

})(jQuery, AdobeEdge, "EDGE-836671");