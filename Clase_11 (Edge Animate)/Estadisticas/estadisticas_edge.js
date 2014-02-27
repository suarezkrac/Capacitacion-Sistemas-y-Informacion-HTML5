/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['almendra-sc, serif']='<script src=\"http://use.edgefonts.net/almendra-sc:n4:all.js\"></script>';

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
                id: 'Rectangle3',
                type: 'rect',
                rect: ['10px', '13px','531px','373px','auto', 'auto'],
                borderRadius: ["73px 73px", "16px 16px", "64px 64px", "0px 0px"],
                fill: ["rgba(211,253,255,1.00)",[270,[['rgba(87,142,143,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['157px', '13px','auto','auto','auto', 'auto'],
                text: "ESTADISTICAS<br>",
                font: ['almendra-sc, serif', 44, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
            },
            {
                id: 'Barra1',
                type: 'rect',
                rect: ['70px', '247px','45px','109px','auto', 'auto'],
                fill: ["rgba(49,255,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],[],['50%','100%']]
            },
            {
                id: 'Barra2',
                type: 'rect',
                rect: ['129px', '172px','45px','185px','auto', 'auto'],
                fill: ["rgba(0,148,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],[],['50%','100%']]
            },
            {
                id: 'Barra3',
                type: 'rect',
                rect: ['191px', '140px','45px','219px','auto', 'auto'],
                fill: ["rgba(255,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],[],['50%','100%']]
            },
            {
                id: 'Barra4',
                type: 'rect',
                rect: ['248px', '100px','45px','258px','auto', 'auto'],
                fill: ["rgba(255,205,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],[],['50%','100%']]
            },
            {
                id: 'Barra5',
                type: 'rect',
                rect: ['310px', '336px','45px','22px','auto', 'auto'],
                fill: ["rgba(0,246,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],[],['50%','100%']]
            },
            {
                id: 'Barra6',
                type: 'rect',
                rect: ['371px', '247px','45px','111px','auto', 'auto'],
                fill: ["rgba(232,0,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],['1','0'],['50%','100%']]
            },
            {
                id: 'Barra7',
                type: 'rect',
                rect: ['431px', '287px','45px','72px','auto', 'auto'],
                fill: ["rgba(255,131,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["inset", 8, 8, 0, -2, "rgba(255,255,255,0.65)"],
                transform: [[],[],[],[],['50%','100%']]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['21px', '357px','508px','2px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Texto1',
                type: 'text',
                rect: ['87px', '227px','auto','auto','auto', 'auto'],
                opacity: 0,
                text: "260",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy7',
                type: 'text',
                rect: ['93px', '365px','12px','auto','auto', 'auto'],
                text: "1<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy18',
                type: 'text',
                rect: ['157px', '365px','12px','auto','auto', 'auto'],
                text: "2<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy15',
                type: 'text',
                rect: ['271px', '365px','12px','auto','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy14',
                type: 'text',
                rect: ['213px', '365px','12px','auto','auto', 'auto'],
                text: "3",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy17',
                type: 'text',
                rect: ['389px', '365px','12px','auto','auto', 'auto'],
                text: "6",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy16',
                type: 'text',
                rect: ['331px', '365px','12px','auto','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy13',
                type: 'text',
                rect: ['451px', '365px','6px','auto','auto', 'auto'],
                text: "7",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Texto2',
                type: 'text',
                rect: ['145px', '160px','auto','auto','auto', 'auto'],
                opacity: 0,
                text: "780<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Texto3',
                type: 'text',
                rect: ['204px', '120px','auto','auto','auto', 'auto'],
                opacity: 0,
                text: "960",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Texto4',
                type: 'text',
                rect: ['263px', '81px','auto','auto','auto', 'auto'],
                opacity: 0,
                text: "1024",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Texto5',
                type: 'text',
                rect: ['323px', '317px','auto','12px','auto', 'auto'],
                opacity: 0,
                text: "120",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Texto6',
                type: 'text',
                rect: ['385px', '219px','auto','12px','auto', 'auto'],
                opacity: 0,
                text: "260",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Texto7',
                type: 'text',
                rect: ['445px', '278px','auto','12px','auto', 'auto'],
                opacity: 0,
                text: "180",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '357px'],
                ["style", "height", '2px'],
                ["style", "left", '21px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_Texto3}": [
                ["style", "top", '120px'],
                ["style", "opacity", '0'],
                ["style", "left", '204px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy9}": [
                ["style", "top", '365px'],
                ["style", "width", 'auto'],
                ["style", "left", '151px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy16}": [
                ["style", "top", '365px'],
                ["style", "width", '12px'],
                ["style", "left", '331px'],
                ["style", "font-size", '11px']
            ],
            "${_Texto7}": [
                ["style", "top", '278px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '445px'],
                ["style", "font-size", '11px']
            ],
            "${_Barra7}": [
                ["color", "background-color", 'rgba(255,131,0,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)'],
                ["style", "left", '431px'],
                ["style", "width", '45px'],
                ["style", "top", '287px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "height", '72px'],
                ["subproperty", "boxShadow.offsetV", '8px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.spread", '-2px']
            ],
            "${_Text2Copy18}": [
                ["style", "top", '365px'],
                ["style", "font-size", '11px'],
                ["style", "left", '157px'],
                ["style", "width", '12px']
            ],
            "${_Barra5}": [
                ["color", "background-color", 'rgba(0,246,255,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '310px'],
                ["style", "width", '45px'],
                ["style", "top", '336px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)'],
                ["style", "height", '22px'],
                ["subproperty", "boxShadow.spread", '-2px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.offsetV", '8px']
            ],
            "${_Texto6}": [
                ["style", "top", '219px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '385px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy8}": [
                ["style", "top", '365px'],
                ["style", "width", '12px'],
                ["style", "left", '93px'],
                ["style", "font-size", '11px']
            ],
            "${_Texto5}": [
                ["style", "top", '317px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0'],
                ["style", "left", '323px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy17}": [
                ["style", "top", '365px'],
                ["style", "width", '12px'],
                ["style", "left", '389px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy15}": [
                ["style", "top", '365px'],
                ["style", "font-size", '11px'],
                ["style", "left", '271px'],
                ["style", "width", '12px']
            ],
            "${_Barra3}": [
                ["color", "background-color", 'rgba(255,0,0,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '191px'],
                ["style", "width", '45px'],
                ["style", "top", '140px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)'],
                ["style", "height", '219px'],
                ["subproperty", "boxShadow.spread", '-2px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.offsetV", '8px']
            ],
            "${_Text2Copy10}": [
                ["style", "top", '365px'],
                ["style", "width", 'auto'],
                ["style", "left", '93px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy14}": [
                ["style", "top", '365px'],
                ["style", "font-size", '11px'],
                ["style", "left", '213px'],
                ["style", "width", '12px']
            ],
            "${_Text2Copy11}": [
                ["style", "top", '365px'],
                ["style", "font-size", '11px'],
                ["style", "left", '271px'],
                ["style", "width", 'auto']
            ],
            "${_Barra1}": [
                ["color", "background-color", 'rgba(49,255,0,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)'],
                ["transform", "scaleX", '1'],
                ["style", "left", '70px'],
                ["style", "width", '45px'],
                ["style", "top", '247px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "height", '109px'],
                ["subproperty", "boxShadow.offsetV", '8px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.spread", '-2px']
            ],
            "${_Barra2}": [
                ["color", "background-color", 'rgba(0,148,255,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.blur", '0px'],
                ["style", "left", '129px'],
                ["style", "width", '45px'],
                ["style", "top", '172px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.spread", '-2px'],
                ["style", "height", '185px'],
                ["subproperty", "boxShadow.offsetV", '8px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)']
            ],
            "${_Texto4}": [
                ["style", "top", '81px'],
                ["style", "opacity", '0'],
                ["style", "left", '263px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy7}": [
                ["style", "top", '365px'],
                ["style", "width", '12px'],
                ["style", "left", '93px'],
                ["style", "font-size", '11px']
            ],
            "${_Texto2}": [
                ["style", "top", '160px'],
                ["style", "opacity", '0'],
                ["style", "left", '145px'],
                ["style", "font-size", '11px']
            ],
            "${_Texto1}": [
                ["style", "top", '227px'],
                ["style", "opacity", '0'],
                ["style", "left", '87px'],
                ["style", "font-size", '11px']
            ],
            "${_Rectangle3}": [
                ["color", "background-color", 'rgba(211,253,255,1.00)'],
                ["style", "border-top-left-radius", [73,73], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [64,64], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["gradient", "background-image", [270,[['rgba(87,142,143,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "border-top-right-radius", [16,16], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_Text}": [
                ["subproperty", "textShadow.blur", '3px'],
                ["subproperty", "textShadow.offsetH", '3px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '3px'],
                ["style", "left", '154px'],
                ["style", "font-size", '44px'],
                ["style", "top", '175px'],
                ["style", "width", '269px'],
                ["transform", "scaleY", '0.15'],
                ["transform", "scaleX", '0.15'],
                ["style", "height", '58px'],
                ["style", "font-family", 'almendra-sc, serif'],
                ["style", "opacity", '0'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,0.65098)']
            ],
            "${_Text2Copy13}": [
                ["style", "top", '365px'],
                ["style", "width", 'auto'],
                ["style", "left", '451px'],
                ["style", "font-size", '11px']
            ],
            "${_Text2Copy12}": [
                ["style", "top", '365px'],
                ["style", "font-size", '11px'],
                ["style", "left", '213px'],
                ["style", "width", 'auto']
            ],
            "${_Barra6}": [
                ["color", "background-color", 'rgba(232,0,255,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)'],
                ["style", "left", '371px'],
                ["style", "width", '45px'],
                ["style", "top", '247px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.offsetV", '8px'],
                ["style", "height", '111px'],
                ["subproperty", "boxShadow.spread", '-2px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_Barra4}": [
                ["color", "background-color", 'rgba(255,205,0,1.00)'],
                ["subproperty", "boxShadow.inset", 'inset'],
                ["subproperty", "boxShadow.color", 'rgba(255,255,255,0.65)'],
                ["style", "left", '248px'],
                ["style", "width", '45px'],
                ["style", "top", '100px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["subproperty", "boxShadow.offsetV", '8px'],
                ["style", "height", '258px'],
                ["subproperty", "boxShadow.spread", '-2px'],
                ["subproperty", "boxShadow.offsetH", '8px'],
                ["subproperty", "boxShadow.blur", '0px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
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
            duration: 6000,
            autoPlay: true,
            timeline: [
                { id: "eid75", tween: [ "style", "${_Text}", "width", '269px', { fromValue: '269px'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid36", tween: [ "transform", "${_Barra5}", "scaleY", '1', { fromValue: '0'}], position: 4000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid37", tween: [ "transform", "${_Barra2}", "scaleY", '1', { fromValue: '0'}], position: 2500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid74", tween: [ "style", "${_Text}", "height", '58px', { fromValue: '58px'}], position: 1000, duration: 0, easing: "easeOutBounce" },
                { id: "eid38", tween: [ "transform", "${_Barra3}", "scaleY", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid46", tween: [ "style", "${_Texto2}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid56", tween: [ "style", "${_Texto2}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 500, easing: "easeOutBounce" },
                { id: "eid84", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutExpo" },
                { id: "eid64", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid42", tween: [ "transform", "${_Barra4}", "scaleY", '1', { fromValue: '0'}], position: 3500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid71", tween: [ "style", "${_Text}", "top", '13px', { fromValue: '175px'}], position: 1000, duration: 1000, easing: "easeOutCirc" },
                { id: "eid40", tween: [ "transform", "${_Barra1}", "scaleY", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid47", tween: [ "style", "${_Texto1}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid54", tween: [ "style", "${_Texto1}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 500, easing: "easeOutBounce" },
                { id: "eid52", tween: [ "style", "${_Texto7}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid61", tween: [ "style", "${_Texto7}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 500, easing: "easeOutBounce" },
                { id: "eid45", tween: [ "transform", "${_Barra6}", "scaleY", '1', { fromValue: '0'}], position: 4500, duration: 1000, easing: "easeOutBounce" },
                { id: "eid83", tween: [ "transform", "${_Text}", "scaleY", '1.89', { fromValue: '0.15'}], position: 0, duration: 1000, easing: "easeOutExpo" },
                { id: "eid80", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '1.89'}], position: 1000, duration: 1000, easing: "easeOutCirc" },
                { id: "eid82", tween: [ "transform", "${_Text}", "scaleX", '1.89', { fromValue: '0.15'}], position: 0, duration: 1000, easing: "easeOutExpo" },
                { id: "eid79", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '1.89'}], position: 1000, duration: 1000, easing: "easeOutCirc" },
                { id: "eid39", tween: [ "transform", "${_Barra7}", "scaleY", '1', { fromValue: '0'}], position: 5000, duration: 1000, easing: "easeOutBounce" },
                { id: "eid49", tween: [ "style", "${_Texto4}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid57", tween: [ "style", "${_Texto4}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500, easing: "easeOutBounce" },
                { id: "eid50", tween: [ "style", "${_Texto5}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid59", tween: [ "style", "${_Texto5}", "opacity", '1', { fromValue: '0.000000'}], position: 4500, duration: 500, easing: "easeOutBounce" },
                { id: "eid70", tween: [ "style", "${_Text}", "left", '157px', { fromValue: '154px'}], position: 1000, duration: 1000, easing: "easeOutCirc" },
                { id: "eid51", tween: [ "style", "${_Texto6}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid60", tween: [ "style", "${_Texto6}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 500, easing: "easeOutBounce" },
                { id: "eid48", tween: [ "style", "${_Texto3}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutBounce" },
                { id: "eid58", tween: [ "style", "${_Texto3}", "opacity", '1', { fromValue: '0.000000'}], position: 3500, duration: 500, easing: "easeOutBounce" }            ]
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
})(jQuery, AdobeEdge, "EDGE-6534000");
