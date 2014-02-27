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
            id:'cloud',
            type:'image',
            rect:['251px','11px','181px','96px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cloud.png",'0px','0px']
         },
         {
            id:'edificionpng',
            type:'image',
            rect:['155px','38px','467px','313px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edificionpng.png",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['1px','343px','550px','57px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'arbol',
            type:'image',
            rect:['33px','75px','198px','289px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"arbol.png",'0px','0px']
         },
         {
            id:'muneco2',
            type:'rect',
            rect:['65','226','auto','auto','auto','auto'],
            overflow:'hidden'
         },
         {
            id:'mensaje',
            display:'none',
            type:'rect',
            rect:['216','103','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'muneco2',
            symbolName:'muneco'
         },
         {
            id:'mensaje',
            symbolName:'mensaje'
         }
         ]
      },
   states: {
      "Base State": {
         "${_mensaje}": [
            ["style", "top", '105px'],
            ["transform", "scaleY", '0.71825'],
            ["transform", "scaleX", '0.71825'],
            ["style", "left", '279px'],
            ["style", "display", 'none']
         ],
         "${_muneco2}": [
            ["style", "left", '-94px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["style", "height", '57px'],
            ["style", "top", '343px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(200,228,249,1.00)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_arbol}": [
            ["style", "top", '75px'],
            ["style", "height", '289px'],
            ["style", "left", '33px'],
            ["style", "width", '198px']
         ],
         "${_cloud}": [
            ["style", "top", '11px'],
            ["style", "height", '96px'],
            ["style", "left", '251px'],
            ["style", "width", '181px']
         ],
         "${_edificionpng}": [
            ["style", "top", '38px'],
            ["style", "height", '313px'],
            ["style", "left", '155px'],
            ["style", "width", '467px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid29", tween: [ "style", "${_arbol}", "left", '-153px', { fromValue: '33px'}], position: 0, duration: 3000 },
            { id: "eid55", tween: [ "style", "${_arbol}", "left", '-587px', { fromValue: '-153px'}], position: 7000, duration: 3000 },
            { id: "eid27", tween: [ "style", "${_edificionpng}", "left", '66px', { fromValue: '155px'}], position: 0, duration: 3000 },
            { id: "eid56", tween: [ "style", "${_edificionpng}", "left", '-143px', { fromValue: '66px'}], position: 7000, duration: 3000 },
            { id: "eid54", tween: [ "style", "${_muneco2}", "left", '220px', { fromValue: '-94px'}], position: 0, duration: 3000 },
            { id: "eid78", tween: [ "style", "${_muneco2}", "left", '550px', { fromValue: '220px'}], position: 7000, duration: 3000 },
            { id: "eid25", tween: [ "style", "${_cloud}", "left", '208px', { fromValue: '251px'}], position: 0, duration: 3000 },
            { id: "eid57", tween: [ "style", "${_cloud}", "left", '108px', { fromValue: '208px'}], position: 7000, duration: 3000 },
            { id: "eid51", tween: [ "style", "${_mensaje}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_mensaje}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_mensaje}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
            { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Stop'] ], ""], position: 3100 },
            { id: "eid73", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Triste'] ], ""], position: 3250 },
            { id: "eid66", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Hablar'] ], ""], position: 3500 },
            { id: "eid64", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_mensaje}', [] ], ""], position: 3500 },
            { id: "eid71", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Triste'] ], ""], position: 3750 },
            { id: "eid68", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Hablar'] ], ""], position: 4000 },
            { id: "eid69", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Stop'] ], ""], position: 4250 },
            { id: "eid70", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Hablar'] ], ""], position: 4621 },
            { id: "eid72", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Feliz'] ], ""], position: 5101 },
            { id: "eid79", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Feliz'] ], ""], position: 5162 },
            { id: "eid80", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Feliz'] ], ""], position: 5162 },
            { id: "eid81", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_muneco2}', ['Triste'] ], ""], position: 5500 },
            { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_muneco2}', ['Caminado'] ], ""], position: 7000 }         ]
      }
   }
},
"muneco": {
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
      id: 'Welcome_Spritesheet2',
      type: 'image',
      rect: ['0px','5px','1429px','146px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Welcome_Spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Welcome_Spritesheet2}": [
            ["style", "top", '5px'],
            ["style", "height", '146px'],
            ["style", "left", '0px'],
            ["style", "width", '1429px']
         ],
         "${symbolSelector}": [
            ["style", "height", '160px'],
            ["style", "width", '110px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1300,
         autoPlay: true,
         labels: {
            "Caminado": 100,
            "Stop": 1000,
            "Hablar": 1100,
            "Triste": 1200,
            "Feliz": 1300
         },
         timeline: [
            { id: "eid9", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-110px', { fromValue: '0px'}], position: 100, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-220px', { fromValue: '-110px'}], position: 200, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-330px', { fromValue: '-220px'}], position: 300, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-440px', { fromValue: '-330px'}], position: 400, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-550px', { fromValue: '-440px'}], position: 500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-660px', { fromValue: '-550px'}], position: 600, duration: 0 },
            { id: "eid18", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-770px', { fromValue: '-660px'}], position: 700, duration: 0 },
            { id: "eid19", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-880px', { fromValue: '-770px'}], position: 800, duration: 0 },
            { id: "eid20", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-990px', { fromValue: '-880px'}], position: 1000, duration: 0 },
            { id: "eid21", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1100px', { fromValue: '-990px'}], position: 1100, duration: 0 },
            { id: "eid22", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1210px', { fromValue: '-1100px'}], position: 1200, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1320px', { fromValue: '-1210px'}], position: 1300, duration: 0 }         ]
      }
   }
},
"mensaje": {
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
      id: 'bubble2',
      type: 'image',
      rect: ['0px','0px','252px','190px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bubble2.png','0px','0px']
   },
   {
      rect: ['66px','41px','171px','96px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: 'HOLA!!, MI NOMBRE ES PEPITO',
      clip: ['rect(0px 171pxpx 96pxpx 0px)'],
      type: 'text'
   },
   {
      rect: ['66px','97px','109px','27px','auto','auto'],
      transform: [[],[],[],[],['100%']],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,251,251,1.00)']
   },
   {
      rect: ['66px','69px','153px','27px','auto','auto'],
      transform: [[],[],[],[],['100%']],
      id: 'Rectangle3Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,251,251,1.00)']
   },
   {
      rect: ['66px','39px','153px','27px','auto','auto'],
      transform: [[],[],[],[],['100%']],
      id: 'Rectangle3Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,251,251,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '41px'],
            ["style", "clip", [0,171,96,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "height", '96px'],
            ["style", "left", '66px'],
            ["style", "width", '171px']
         ],
         "${_bubble2}": [
            ["style", "height", '190px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '252px']
         ],
         "${_Rectangle3Copy2}": [
            ["style", "top", '39px'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "width", '153px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '69px'],
            ["transform", "scaleX", '1'],
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "width", '153px']
         ],
         "${_Rectangle3}": [
            ["style", "-webkit-transform-origin", [100,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleX", '1'],
            ["style", "top", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '190px'],
            ["style", "width", '252px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "transform", "${_Rectangle3Copy}", "scaleX", '0', { fromValue: '1'}], position: 750, duration: 500 },
            { id: "eid39", tween: [ "transform", "${_Rectangle3}", "scaleX", '0', { fromValue: '1'}], position: 1250, duration: 500 },
            { id: "eid35", tween: [ "transform", "${_Rectangle3Copy2}", "scaleX", '0', { fromValue: '1'}], position: 250, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-836671");
