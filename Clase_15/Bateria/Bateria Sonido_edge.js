/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
                id: 'fondo',
                type: 'rect',
                rect: ['-122', '-21','auto','auto','auto', 'auto']
            },
            {
                id: 'drums',
                type: 'image',
                rect: ['145px', '115px','399px','270px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"drums.svg",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'fondo',
                symbolName: 'fondo'
            }
            ]
        },
    states: {
        "Base State": {
            "${_drums}": [
                ["style", "height", '270px'],
                ["style", "top", '115px'],
                ["style", "left", '145px'],
                ["style", "width", '399px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
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
},
"fondo": {
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
                    id: 'bg',
                    type: 'image',
                    rect: ['0px', '0px', '794px', '538px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bg}": [
                ["style", "top", '0px'],
                ["style", "height", '538px'],
                ["style", "left", '0px'],
                ["style", "width", '794px']
            ],
            "${symbolSelector}": [
                ["style", "height", '538px'],
                ["style", "width", '794px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "style", "${_bg}", "top", '-9px', { fromValue: '0px'}], position: 0, duration: 125 },
                { id: "eid3", tween: [ "style", "${_bg}", "top", '0px', { fromValue: '-9px'}], position: 125, duration: 125 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1315868");
