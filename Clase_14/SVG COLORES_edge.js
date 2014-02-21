/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'character',
            type:'image',
            rect:['14px','12px','231px','376px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"SVG_Character.svg",'0px','0px']
         },
         {
            id:'globo',
            type:'rect',
            rect:['275px','13px','255px','131px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'pestana_globo',
            type:'rect',
            rect:['253px','94px','43px','38px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['50']]
         },
         {
            id:'mensaje',
            type:'text',
            rect:['292px','22px','221px','112px','auto','auto'],
            text:"Hola, selecciona mi gorra, camiseta o pantalon y cambia el color!!",
            font:['Arial, Helvetica, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'selectedPartTxt',
            type:'text',
            rect:['320px','157px','auto','auto','auto','auto'],
            text:"selectedPartTxt<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Titulo3',
            type:'text',
            rect:['239px','347px','auto','auto','auto','auto'],
            text:"Ojos:<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Titulo2',
            type:'text',
            rect:['244px','284px','auto','auto','auto','auto'],
            text:"Piel:<br>",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Titulo1',
            type:'text',
            rect:['235px','220px','auto','auto','auto','auto'],
            text:"Ropa:",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'color11',
            type:'ellipse',
            rect:['494px','339px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(51,140,228,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color10',
            type:'ellipse',
            rect:['433px','339px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(147,151,50,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color9',
            type:'ellipse',
            rect:['366px','339px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(162,218,145,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color8',
            type:'ellipse',
            rect:['305px','339px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(136,172,183,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color7',
            type:'ellipse',
            rect:['494px','276px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(156,133,116,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color6',
            type:'ellipse',
            rect:['433px','276px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(186,171,136,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color5',
            type:'ellipse',
            rect:['366px','276px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(152,111,30,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color4',
            type:'ellipse',
            rect:['305px','276px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(240,190,116,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color3',
            type:'ellipse',
            rect:['433px','212px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(95,93,180,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color2',
            type:'ellipse',
            rect:['494px','212px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(228,51,217,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color1',
            type:'ellipse',
            rect:['366px','212px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(228,169,51,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'color',
            type:'ellipse',
            rect:['305px','212px','43px','43px','auto','auto'],
            borderRadius:["50%","50%","50%","50%"],
            fill:["rgba(86,175,147,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_color4}": [
            ["style", "top", '276px'],
            ["style", "height", '43px'],
            ["style", "left", '305px'],
            ["color", "background-color", 'rgba(240,190,116,1.00)']
         ],
         "${_color11}": [
            ["style", "height", '43px'],
            ["color", "background-color", 'rgba(51,140,228,1.00)'],
            ["style", "left", '494px'],
            ["style", "top", '339px']
         ],
         "${_Titulo2}": [
            ["style", "left", '244px'],
            ["style", "top", '284px']
         ],
         "${_Titulo1}": [
            ["style", "left", '235px'],
            ["style", "top", '220px']
         ],
         "${_color9}": [
            ["style", "height", '43px'],
            ["color", "background-color", 'rgba(162,218,145,1.00)'],
            ["style", "left", '366px'],
            ["style", "top", '339px']
         ],
         "${_color8}": [
            ["style", "height", '43px'],
            ["color", "background-color", 'rgba(136,172,183,1.00)'],
            ["style", "left", '305px'],
            ["style", "top", '339px']
         ],
         "${_color7}": [
            ["style", "top", '276px'],
            ["style", "height", '43px'],
            ["style", "left", '494px'],
            ["color", "background-color", 'rgba(156,133,116,1.00)']
         ],
         "${_globo}": [
            ["style", "top", '13px'],
            ["style", "height", '131px'],
            ["style", "left", '275px'],
            ["style", "width", '255px']
         ],
         "${_color10}": [
            ["style", "height", '43px'],
            ["color", "background-color", 'rgba(147,151,50,1.00)'],
            ["style", "left", '433px'],
            ["style", "top", '339px']
         ],
         "${_color5}": [
            ["style", "top", '276px'],
            ["style", "height", '43px'],
            ["style", "left", '366px'],
            ["color", "background-color", 'rgba(152,111,30,1.00)']
         ],
         "${_color6}": [
            ["style", "top", '276px'],
            ["style", "height", '43px'],
            ["style", "left", '433px'],
            ["color", "background-color", 'rgba(186,171,136,1.00)']
         ],
         "${_Titulo3}": [
            ["style", "left", '239px'],
            ["style", "top", '347px']
         ],
         "${_color2}": [
            ["color", "background-color", 'rgba(228,51,217,1.00)'],
            ["style", "top", '212px'],
            ["style", "left", '494px'],
            ["style", "height", '43px']
         ],
         "${_color1}": [
            ["color", "background-color", 'rgba(228,169,51,1.00)'],
            ["style", "top", '212px'],
            ["style", "left", '366px'],
            ["style", "height", '43px']
         ],
         "${_pestana_globo}": [
            ["style", "top", '94px'],
            ["style", "left", '253px'],
            ["transform", "rotateZ", '50deg']
         ],
         "${_color3}": [
            ["color", "background-color", 'rgba(95,93,180,1.00)'],
            ["style", "top", '212px'],
            ["style", "left", '433px'],
            ["style", "height", '43px']
         ],
         "${_color}": [
            ["color", "background-color", 'rgba(86,175,147,1.00)'],
            ["style", "top", '212px'],
            ["style", "left", '305px'],
            ["style", "height", '43px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_selectedPartTxt}": [
            ["style", "left", '320px'],
            ["style", "top", '157px']
         ],
         "${_mensaje}": [
            ["style", "top", '22px'],
            ["style", "height", '112px'],
            ["style", "left", '292px'],
            ["style", "width", '221px']
         ],
         "${_character}": [
            ["style", "top", '12px'],
            ["style", "height", '376px'],
            ["style", "left", '14px'],
            ["style", "width", '231px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1213759");
