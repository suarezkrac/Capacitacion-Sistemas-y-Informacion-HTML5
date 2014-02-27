/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['passero-one, fantasy']='<script src=\"http://use.edgefonts.net/passero-one:n4:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['41px', '21px','101px','101px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["50%", "0% 0%", "49.7%", "49.7% 49.7%"],
                opacity: 0.64967672413793,
                fill: ["rgba(255,0,0,1.00)",[50,50,true,'farthest-corner',[['rgba(254,185,185,1.00)',0],['rgba(242,0,0,1.00)',72]]]],
                stroke: [3,"rgba(0,0,0,1)","solid"],
                boxShadow: ["", 3, 3, 3, -24, "rgba(0,0,0,0.65098)"],
                filter: [0, 0, 1, 0.87339743589744, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                transform: [[],['77']]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['337px', '43px','113px','auto','auto', 'auto'],
                text: "HOLA<br>",
                align: "center",
                font: ['passero-one, fantasy', 53, "rgba(0,0,0,1)", "100", "none", "normal"],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3],
                transform: [[],[],[],[],['2%']]
            },
            {
                id: 'screen2',
                type: 'image',
                rect: ['142px', '150px','286px','222px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"screen.png",'0px','0px','100%','100%'],
                transform: [[],[],[],['0.66','0.66']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '200px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '100%']
            ],
            "${_Ellipse}": [
                ["subproperty", "boxShadow.inset", ''],
                ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(254,185,185,1.00)',0],['rgba(242,0,0,1.00)',72]]]],
                ["style", "cursor", 'pointer'],
                ["subproperty", "filter.saturate", '0.87339743589744'],
                ["style", "border-bottom-left-radius", [49.7,49.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["style", "border-top-left-radius", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [49.7,49.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-style", 'solid'],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["subproperty", "boxShadow.spread", '-24px'],
                ["style", "top", '21px'],
                ["style", "left", '41px'],
                ["transform", "rotateZ", '77deg'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "filter.blur", '0px'],
                ["style", "border-width", '3px'],
                ["style", "opacity", '0.64967672413793']
            ],
            "${_Text}": [
                ["style", "-webkit-transform-origin", [2,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [2,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "font-weight", '100'],
                ["style", "left", '337px'],
                ["style", "font-size", '53px'],
                ["style", "top", '43px'],
                ["subproperty", "textShadow.blur", '3px'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'passero-one, fantasy'],
                ["style", "text-decoration", 'none'],
                ["style", "width", '113px']
            ],
            "${_screen2}": [
                ["style", "top", '150px'],
                ["transform", "scaleY", '0.66'],
                ["transform", "scaleX", '0.66'],
                ["style", "height", '222px'],
                ["style", "background-size", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '142px'],
                ["style", "width", '286px']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1914261");
