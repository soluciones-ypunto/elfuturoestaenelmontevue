/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Ellipse-cuida',
                            type: 'ellipse',
                            rect: ['587px', '170px', '142px', '143px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(18,150,164,0.15)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Ellipse-comparte',
                            type: 'ellipse',
                            rect: ['469px', '95px', '152px', '152px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(239,44,0,0.16)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Ellipse-aprende',
                            type: 'ellipse',
                            rect: ['139px', '216px', '142px', '142px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(18,77,164,0.14)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Ellipse-produce',
                            type: 'ellipse',
                            rect: ['68px', '369px', '142px', '142px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(31,164,18,0.20)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Ellipse-agua',
                            type: 'ellipse',
                            rect: ['237px', '422px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(173,98,219,0.16)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'sprite-ave-2_symbol_1',
                            symbolName: 'sprite-ave-2_symbol_1',
                            type: 'rect',
                            rect: ['488px', '177px', '66px', '40px', 'auto', 'auto'],
                            transform: [[],[],[],['0.27273','0.27273']]
                        },
                        {
                            id: 'sprite-ave_symbol_1',
                            symbolName: 'sprite-ave_symbol_1',
                            type: 'rect',
                            rect: ['531px', '193px', '18px', '32px', 'auto', 'auto']
                        },
                        {
                            id: 'sprite-ave-2_symbol_12',
                            symbolName: 'sprite-ave-2_symbol_1',
                            type: 'rect',
                            rect: ['148px', '383px', 'undefined', 'undefined', 'auto', 'auto'],
                            transform: [[],[],[],['0.55','0.55']]
                        },
                        {
                            id: 'sprite-ave_symbol_12',
                            symbolName: 'sprite-ave_symbol_1',
                            type: 'rect',
                            rect: ['649px', '193px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'sprite-ave_symbol_13',
                            symbolName: 'sprite-ave_symbol_1',
                            type: 'rect',
                            rect: ['182px', '258px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'agua-rot',
                            type: 'image',
                            rect: ['246px', '423px', '152px', '156px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"agua-rot.svg",'0px','0px']
                        },
                        {
                            id: 'Arbol',
                            type: 'image',
                            rect: ['86px', '134px', '722px', '536px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arbol.svg",'0px','0px']
                        },
                        {
                            id: 'Produce3',
                            type: 'image',
                            rect: ['41px', '349px', '191px', '187px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Produce3.svg",'0px','0px']
                        },
                        {
                            id: 'Agua-para-la-vida2',
                            type: 'image',
                            rect: ['210px', '414px', '231px', '222px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Agua-para-la-vida2.svg",'0px','0px']
                        },
                        {
                            id: 'Comparte22',
                            type: 'image',
                            rect: ['441px', '43px', '215px', '215px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Comparte2.svg",'0px','0px']
                        },
                        {
                            id: 'Cuida2',
                            type: 'image',
                            rect: ['560px', '148px', '214px', '214px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Cuida2.svg",'0px','0px']
                        },
                        {
                            id: 'Aprende2',
                            type: 'image',
                            rect: ['114px', '144px', '225px', '225px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Aprende2.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '670px', 'auto', 'auto'],
                            sizeRange: ['','900px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 916.33333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid485",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave_symbol_1}",
                            '193px',
                            '193px'
                        ],
                        [
                            "eid480",
                            "left",
                            458,
                            0,
                            "linear",
                            "${sprite-ave_symbol_12}",
                            '649px',
                            '649px'
                        ],
                        [
                            "eid489",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave_symbol_13}",
                            '258px',
                            '258px'
                        ],
                        [
                            "eid484",
                            "left",
                            458,
                            0,
                            "linear",
                            "${sprite-ave_symbol_1}",
                            '531px',
                            '531px'
                        ],
                        [
                            "eid481",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave_symbol_12}",
                            '193px',
                            '193px'
                        ],
                        [
                            "eid486",
                            "left",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2_symbol_1}",
                            '488px',
                            '488px'
                        ],
                        [
                            "eid482",
                            "left",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2_symbol_12}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid487",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2_symbol_1}",
                            '177px',
                            '177px'
                        ],
                        [
                            "eid488",
                            "left",
                            458,
                            0,
                            "linear",
                            "${sprite-ave_symbol_13}",
                            '182px',
                            '182px'
                        ],
                        [
                            "eid483",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2_symbol_12}",
                            '383px',
                            '383px'
                        ],
                            [ "eid289", "trigger", 458, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sprite-ave-2_symbol_1}', [0] ] ],
                            [ "eid288", "trigger", 458, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sprite-ave_symbol_1}', [0] ] ],
                            [ "eid290", "trigger", 458, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sprite-ave-2_symbol_12}', [0] ] ],
                            [ "eid291", "trigger", 458, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sprite-ave_symbol_12}', [0] ] ],
                            [ "eid292", "trigger", 458, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sprite-ave_symbol_13}', [0] ] ]
                    ]
                }
            },
            "sprite-ave_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '128px', 'auto', 'auto'],
                            id: 'sprite-ave',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sprite-ave.png', '0px', '0px', '64px', '128px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 458.33333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "width",
                            0,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '0px',
                            '18px'
                        ],
                        [
                            "eid8",
                            "top",
                            41,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '0px',
                            '3px'
                        ],
                        [
                            "eid11",
                            "top",
                            83,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '3px',
                            '6px'
                        ],
                        [
                            "eid14",
                            "top",
                            125,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid17",
                            "top",
                            166,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '9px',
                            '11px'
                        ],
                        [
                            "eid20",
                            "top",
                            208,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '11px',
                            '10px'
                        ],
                        [
                            "eid23",
                            "top",
                            250,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '10px',
                            '9px'
                        ],
                        [
                            "eid26",
                            "top",
                            291,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '9px',
                            '7px'
                        ],
                        [
                            "eid29",
                            "top",
                            333,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid32",
                            "top",
                            375,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '6px',
                            '4px'
                        ],
                        [
                            "eid35",
                            "top",
                            416,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '4px',
                            '3px'
                        ],
                        [
                            "eid38",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '3px',
                            '2px'
                        ],
                        [
                            "eid5",
                            "height",
                            0,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '0px',
                            '32px'
                        ],
                        [
                            "eid9",
                            "height",
                            41,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '32px',
                            '26px'
                        ],
                        [
                            "eid12",
                            "height",
                            83,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '26px',
                            '20px'
                        ],
                        [
                            "eid15",
                            "height",
                            125,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '20px',
                            '14px'
                        ],
                        [
                            "eid18",
                            "height",
                            166,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '14px',
                            '10px'
                        ],
                        [
                            "eid21",
                            "height",
                            208,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '10px',
                            '12px'
                        ],
                        [
                            "eid24",
                            "height",
                            250,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '12px',
                            '14px'
                        ],
                        [
                            "eid27",
                            "height",
                            291,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '14px',
                            '18px'
                        ],
                        [
                            "eid30",
                            "height",
                            333,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '18px',
                            '21px'
                        ],
                        [
                            "eid33",
                            "height",
                            375,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '21px',
                            '24px'
                        ],
                        [
                            "eid36",
                            "height",
                            416,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '24px',
                            '27px'
                        ],
                        [
                            "eid39",
                            "height",
                            458,
                            0,
                            "linear",
                            "${sprite-ave}",
                            '27px',
                            '30px'
                        ],
                        [
                            "eid7",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [0,0],
                            [-18,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid13",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-18,0],
                            [-36,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-36,0],
                            [0,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [0,-32],
                            [-18,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid22",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-18,-32],
                            [-36,-32],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid25",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-36,-32],
                            [0,-46],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid28",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [0,-46],
                            [-18,-46],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid31",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-18,-46],
                            [-36,-46],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid34",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-36,-46],
                            [0,-67],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid37",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [0,-67],
                            [-18,-67],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid40",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${sprite-ave}",
                            [-18,-67],
                            [-36,-67],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "sprite-ave-2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '128px', '256px', 'auto', 'auto'],
                            id: 'sprite-ave-2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sprite-ave-2.png', '0px', '0px', '128px', '256px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '66px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 458.33333333333,
                    autoPlay: true,
                    data: [
                        [
                            "eid44",
                            "width",
                            0,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '0px',
                            '66px'
                        ],
                        [
                            "eid48",
                            "width",
                            41,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '66px',
                            '62px'
                        ],
                        [
                            "eid52",
                            "width",
                            83,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '62px',
                            '57px'
                        ],
                        [
                            "eid56",
                            "width",
                            125,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '57px',
                            '53px'
                        ],
                        [
                            "eid58",
                            "width",
                            166,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '53px',
                            '52px'
                        ],
                        [
                            "eid61",
                            "width",
                            250,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '52px',
                            '54px'
                        ],
                        [
                            "eid65",
                            "width",
                            291,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '54px',
                            '56px'
                        ],
                        [
                            "eid69",
                            "width",
                            333,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '56px',
                            '59px'
                        ],
                        [
                            "eid73",
                            "width",
                            375,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '59px',
                            '61px'
                        ],
                        [
                            "eid77",
                            "width",
                            416,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '61px',
                            '64px'
                        ],
                        [
                            "eid81",
                            "width",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '64px',
                            '66px'
                        ],
                        [
                            "eid43",
                            "height",
                            0,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid47",
                            "height",
                            41,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '40px',
                            '36px'
                        ],
                        [
                            "eid51",
                            "height",
                            83,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '36px',
                            '32px'
                        ],
                        [
                            "eid55",
                            "height",
                            125,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '32px',
                            '30px'
                        ],
                        [
                            "eid64",
                            "height",
                            291,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '30px',
                            '31px'
                        ],
                        [
                            "eid68",
                            "height",
                            333,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '31px',
                            '33px'
                        ],
                        [
                            "eid72",
                            "height",
                            375,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '33px',
                            '35px'
                        ],
                        [
                            "eid76",
                            "height",
                            416,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '35px',
                            '38px'
                        ],
                        [
                            "eid80",
                            "height",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '38px',
                            '40px'
                        ],
                        [
                            "eid45",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid49",
                            "background-position",
                            41,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,0],
                            [-66,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid53",
                            "background-position",
                            83,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [-66,0],
                            [0,-40],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid57",
                            "background-position",
                            125,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,-40],
                            [-57,-40],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid59",
                            "background-position",
                            166,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [-57,-40],
                            [0,-72],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid60",
                            "background-position",
                            208,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,-72],
                            [-52,-72],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid62",
                            "background-position",
                            250,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [-52,-72],
                            [0,-102],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid66",
                            "background-position",
                            291,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,-102],
                            [-54,-102],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid70",
                            "background-position",
                            333,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [-54,-102],
                            [0,-133],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid74",
                            "background-position",
                            375,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,-133],
                            [-59,-133],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid78",
                            "background-position",
                            416,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [-59,-133],
                            [0,-168],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid82",
                            "background-position",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            [0,-168],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid46",
                            "top",
                            41,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '0px',
                            '4px'
                        ],
                        [
                            "eid50",
                            "top",
                            83,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '4px',
                            '8px'
                        ],
                        [
                            "eid54",
                            "top",
                            125,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '8px',
                            '10px'
                        ],
                        [
                            "eid63",
                            "top",
                            291,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '10px',
                            '9px'
                        ],
                        [
                            "eid67",
                            "top",
                            333,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '9px',
                            '7px'
                        ],
                        [
                            "eid71",
                            "top",
                            375,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '7px',
                            '5px'
                        ],
                        [
                            "eid75",
                            "top",
                            416,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '5px',
                            '2px'
                        ],
                        [
                            "eid79",
                            "top",
                            458,
                            0,
                            "linear",
                            "${sprite-ave-2}",
                            '2px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-87349064");
