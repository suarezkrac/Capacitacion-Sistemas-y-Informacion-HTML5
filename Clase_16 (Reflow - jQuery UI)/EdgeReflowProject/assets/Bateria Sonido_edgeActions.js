
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){yepnope({load:"http://cdn.edgecommons.org/an/1.1.2/js/min/EdgeCommons.js",complete:function(){var assetsPath="media/"
EC.Sound.setup([{src:assetsPath+"BassDrum.mp3|"+assetsPath+"BassDrum.ogg",id:"Base_x5F_Schlagfläche"},{src:assetsPath+"Snare.mp3|"+assetsPath+"Snare.ogg",id:"Snare_x5F_Schlagfläche"},{src:assetsPath+"Hi-Hat.mp3|"+assetsPath+"Hi-Hat.ogg",id:"HiHat_x5F_Schlagfläche"},{src:assetsPath+"Tom1.mp3|"+assetsPath+"Tom1.ogg",id:"Tom1_x5F_Schlagfläche"},{src:assetsPath+"Tom2.mp3|"+assetsPath+"Tom2.ogg",id:"Tom2_x5F_Schlagfläche"},{src:assetsPath+"Tom3.mp3|"+assetsPath+"Tom3.ogg",id:"Tom3_x5F_Schlagfläche"},{src:assetsPath+"Becken.mp3|"+assetsPath+"Becken.ogg",id:"Becken_x5F_Schlagfläche"}]);EC.SVG.accessSVG(sym.$("drums")).done(function(svgDocument){svgDocument.addEventListener("select",function(event){console.log("Clic en : "+event.target.id);EC.Sound.play(event.target.id);var mySymbolObject=sym.getSymbol("fondo");mySymbolObject.play();});});}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fondo'
(function(symbolName){})("fondo");
//Edge symbol end:'fondo'
})(jQuery,AdobeEdge,"EDGE-1315868");