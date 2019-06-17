import Chartist = require("chartist");

Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;',
};

Chartist.precision = 8;

new Chartist.Line('.ct-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 40
    }
});

var lineChart = new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    series: [
        [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
        [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
        [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    ]
}, {
    fullWidth: true,
    chartPadding: {
        right: 10
    },
    low: 0
});

new Chartist.Line('.ct-chart', {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [
        {
            name: 'Fibonacci sequence',
            data: [1, 2, 3, 5, 8, 13]
        },
        {
            name: 'Golden section',
            data: [1, 1.618, 2.618, 4.236, 6.854, 11.09]
        }
    ]
});


// This example was taken here: https://gionkunz.github.io/chartist-js/examples.html#example-line-series-override
new Chartist.Line('.ct-chart', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    // Naming the series with the series object array notation
    series: [{
        name: 'series-1',
        data: [5, 2, -4, 2, 0, -2, 5, -3]
    }, {
        name: 'series-2',
        data: [4, 3, 5, 3, 1, 3, 6, 4]
    }, {
        name: 'series-3',
        data: [2, 4, 3, 1, 4, 5, 3, 2]
    }]
}, {
    fullWidth: true,
    // Within the series options you can use the series names
    // to specify configuration that will only be used for the
    // specific series.
    series: {
        'series-1': {
            lineSmooth: Chartist.Interpolation.step()
        },
        'series-2': {
            lineSmooth: Chartist.Interpolation.simple(),
            showArea: true
        },
        'series-3': {
            showPoint: false
        }
    }
}, [
    // You can even use responsive configuration overrides to
    // customize your series configuration even further!
    ['screen and (max-width: 320px)', {
        series: {
            'series-1': {
                lineSmooth: Chartist.Interpolation.none()
            },
            'series-2': {
                lineSmooth: Chartist.Interpolation.none(),
                showArea: false
            },
            'series-3': {
                lineSmooth: Chartist.Interpolation.none(),
                showPoint: true
            }
        }
    }]
]);


var data = {
    series: [5, 3, 4]
};

var sum = (a: number, b: number) => {
    return a + b
};

new Chartist.Pie('.ct-chart', data, {
    labelInterpolationFnc: (value: number) => {
        return Math.round(value / data.series.reduce(sum) * 100) + '%';
    }
});

new Chartist.Pie('.ct-chart', {
    series: [20, 10, 30, 40]
}, {
    donut: true,
    donutWidth: 60,
    startAngle: 270,
    total: 200,
    showLabel: false
});

// Animation Donut example
var chart = new Chartist.Pie('.ct-chart', {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
}, {
    donut: true,
    showLabel: false
});

// Pie charts don't take an array of series
var chart = new Chartist.Pie('.ct-chart', {
    // $ExpectError
    series: [[10, 20, 50, 20, 5, 50, 15]],
    labels: [1, 2, 3, 4, 5, 6, 7],
});

chart.on('draw', event => {
    if (event.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        var pathLength = event.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        event.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition: Chartist.IChartistAnimations = {
            'stroke-dashoffset': {
                id: 'anim' + event.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
            }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (event.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (event.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        event.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        event.element.animate(animationDefinition, false);
    }
});

new Chartist.Bar('.ct-chart', {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    series: [20, 60, 120, 200, 180, 20, 10]
}, {
    distributeSeries: true
});

new Chartist.Bar('.ct-chart', {
    labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
    series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
    ]
}, {
    // Default mobile configuration
    stackBars: true,
    stackMode: 'accumulate',
    axisX: {
        labelInterpolationFnc: (value: string) => {
            return value.split(/\s+/).map((word: string) => {
                return word[0];
            }).join('');
        }
    },
    axisY: {
        offset: 20
    }
}, [
    // Options override for media > 400px
    ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
            labelInterpolationFnc: Chartist.noop
        },
        axisY: {
            offset: 60
        }
    }],
    // Options override for media > 800px
    ['screen and (min-width: 800px)', {
        stackBars: false,
        seriesBarDistance: 10
    }],
    // Options override for media > 1000px
    ['screen and (min-width: 1000px)', {
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
    }]
]);

new Chartist.Pie('.ct-chart', {
    series: [{
        value: 20,
        name: 'Series 1',
        className: 'my-custom-class-one',
        meta: 'Meta One'
    }, {
        value: 10,
        name: 'Series 2',
        className: 'my-custom-class-two',
        meta: 'Meta Two'
    }, {
        value: 70,
        name: 'Series 3',
        className: 'my-custom-class-three',
        meta: {  description: 'Meta Three' }
    }]
});

new Chartist.Bar('.bar-chart', {
    labels: ['foo', 'bar', 'foobar'],
    series: [
        {
            data: [1],
            className: 'graph-foo',
        },
        {
            data: [10],
            className: 'graph-foo',
        },
        {
            data: [12],
            className: 'graph-foo',
        }]
}, {
    seriesBarDistance: 30,
    reverseData: true,
    horizontalBars: true,
    height: '115px',
    axisY: {
        offset: 70,
        showGrid: false,
    },
    axisX: {
        scaleMinSpace: 200
    }
});

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}, {
    ticks: [0, 4],
    low: 0,
    showArea: true,
    axisY: {
        showLabel: true,
        showGrid: false,
        ticks: [1, 4],
        type: Chartist.FixedScaleAxis
    }
});

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [
        [5, 9, 7, 8, 5, 3, 5, 4]
    ]
}, {
    ticks: [0, 4],
    low: 0,
    showArea: true,
    axisX: {
        showGrid: false
    },
    axisY: {
        showLabel: true,
        showGrid: false,
        ticks: [1, 4],
        type: Chartist.FixedScaleAxis
    }
});

var chart2 = new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5],
    series: [
        [12, 9, 7, 8, 5]
    ]
});

// Listening for draw events that get emitted by the Chartist chart
chart2.on('draw', event => {
    // If the draw event was triggered from drawing a point on the line chart
    if (event.type === 'point') {
        // We are creating a new path SVG element that draws a triangle around the point coordinates
        var triangle = new Chartist.Svg('path', {
            d: ['M',
                event.x,
                event.y - 15,
                'L',
                event.x - 15,
                event.y + 8,
                'L',
                event.x + 15,
                event.y + 8,
                'z'].join(' '),
            style: 'fill-opacity: 1'
        }, 'ct-area');

        triangle.attr({ style: 'fill-opacity: .5' });
        // With event.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
        event.element.replace(triangle);
    }
});

// Create a simple bi-polar bar chart
var biPolarChart = new Chartist.Bar('.ct-chart', {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
}, {
    high: 10,
    low: -10,
    axisX: {
        labelInterpolationFnc: (value: any, index: number) => {
            return index % 2 === 0 ? value : null;
        }
    }
});

// Listen for draw events on the bar chart
biPolarChart.on('draw', event => {
    // If this draw event is of type bar we can use the data to create additional content
    if (event.type === 'bar') {
        // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
        event.group.append(new Chartist.Svg('circle', {
            cx: event.x2,
            cy: event.y2,
            r: Math.abs(Chartist.getMultiValue(event.value)) * 2 + 5
        }, 'ct-slice-pie'));
    }
});

new Chartist.Bar('.ct-chart', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
        [5, 4, 3, 7, 5, 10, 3],
        [3, 2, 9, 5, 4, 6, 4]
    ]
}, {
    axisX: {
        // On the x-axis start means top and end means bottom
        position: 'start'
    },
    axisY: {
        // On the y-axis start means left and end means right
        position: 'end'
    }
});

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5],
    series: [[1, 2, 8, 1, 7]]
}, {
    lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
    })
});

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5],
    series: [[1, 2, 8, 1, 7]]
}, {
    lineSmooth: Chartist.Interpolation.simple({
        divisor: 2,
        fillHoles: false
    })
});

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5],
    series: [[1, 2, 8, 1, 7]]
}, {
    lineSmooth: Chartist.Interpolation.cardinal({
        tension: 1,
        fillHoles: false
    })
});

new Chartist.Line('.ct-chart', {
    labels: [1, 2, 3, 4, 5],
    series: [[1, 2, 8, 1, 7]]
}, {
    lineSmooth: Chartist.Interpolation.step({
        postpone: true,
        fillHoles: false
    })
});

var overlappingBarsData: Chartist.IChartistData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
};

var overlappingBarsOptions: Chartist.IBarChartOptions = {
    seriesBarDistance: 10
};

var overlappingBarsResponsiveOptions: Array<Chartist.IResponsiveOptionTuple<Chartist.IBarChartOptions>> = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: (value: any) => {
                return value[0];
            }
        }
    }]
];

new Chartist.Bar('.ct-chart', overlappingBarsData, overlappingBarsOptions, overlappingBarsResponsiveOptions);

// Create a simple bar chart and line chart with two dimensional arrays
new Chartist.Bar('.ct-chart', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
        [
            {value: 1},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: 6},
            {value: 7}
        ],
        [
            {value: 7},
            {value: 6},
            {value: 5},
            {value: 4},
            {value: 3},
            {value: 2},
            {value: 1}
        ]
    ]
}, {});

new Chartist.Line('.ct-chart', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
        [
            {value: 1},
            {value: 2},
            {value: 3},
            {value: 4},
            {value: 5},
            {value: 6},
            {value: 7}
        ],
        [
            {value: 7},
            {value: 6},
            {value: 5},
            {value: 4},
            {value: 3},
            {value: 2},
            {value: 1}
        ]
    ]
}, {});

new Chartist.Line('.ct-chart', {
    labels: [new Date(143134652600), new Date(143384652600)],
    series: [
        {
          name: 'remaining',
          data: [
            { x: new Date(143134652600), y: 53 },
            { x: new Date(143334652600), y: 40 },
            { x: new Date(143354652600), y: 45 },
            { x: new Date(143356652600), y: 41 },
            { x: new Date(143366652600), y: 40 },
            { x: new Date(143368652600), y: 38 },
            { x: new Date(143378652600), y: 34 },
            { x: new Date(143568652600), y: 32 },
            { x: new Date(143569652600), y: 18 },
            { x: new Date(143579652600), y: 11 }
          ]
        }, {
          name: 'stories',
          data: [
            { x: new Date(143134652600), y: 53 },
            { x: new Date(143334652600), y: 30 },
            { x: new Date(143384652600), y: 30 },
            { x: new Date(143568652600), y: 10 }
          ]
        }
      ]
}, {});

var path: string = Chartist.Svg.Path.join(
    [
        new Chartist.Svg.Path()
            .move(5, 5)
            .line(10, 10)
            .curve(10, 10, 0, 0, -5, 5, false, { curvy: 'indeed' })
            .scale(10, 10)
            .transform(function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
                if (pathElement.command === 'm') {
                    pathElement.x += 1;
                    pathElement.y -= 2;
                } else if (pathElement.command === 'a') {
                    pathElement.lAf = pathElement.rx = pathElement.xAr = 500;
                }
            }),
        new Chartist.Svg.Path(),
    ],
    true,
    {
        accuracy: 3,
    }
).stringify();

// --- Chartist.extend()

var extend1: string = Chartist.extend({ a: 1 }, { a: 'one' }).a;

// Expect:
//     Type 'string' is not assignable to type 'number'
// $ExpectError
var extend2: number = Chartist.extend({ a: 1 }, { a: 'one' }).a;

var extend3: string = Chartist.extend({ a: 1 }, { a: 0 as any }).a;

var extend4: number = Chartist.extend({ a: 1 }, {}).a;

// Note: This behavior of Chartist.extend() differs from Object.assign()
var extend5: undefined = Chartist.extend({ a: 1 }, { a: undefined }).a;

// Expect:
//     Type 'number' is not assignable to type 'string'
// $ExpectError
var extend6: string = Chartist.extend({ a: 1 }, { a: {} }).a;

// Expect:
//     Argument of type '"hi"' is not assignable to parameter of type 'object'
// $ExpectError
Chartist.extend({ a: 1, b: 2 }, "hi").toLowerCase(); // extend7

// Pass
var extend8: number = Chartist.extend({ a: 1, b: 2 }, [1, 2, 3])[0];

// Expect:
//     Type 'number' is not assignable to type 'string'
// $ExpectError
var extend9: string = Chartist.extend({ a: 1, b: 2 }, [1, 2, 3])[0];

var extend10: { a: { b: { c: string; d: number } }; e: number } = Chartist.extend(
    { a: { b: { c: 'hi' } } },
    { a: { b: { d: 1 } }, e: 2 }
);

// --- Plugin API

Chartist.plugins = Chartist.plugins || {};

Chartist.plugins.fakePlugin = function(options) {
    return function(chart: Chartist.IChartistBase<any, any>) {};
};

Chartist.plugins.someOtherPlugin(123)(
    new Chartist.Bar(
        '.bar',
        {
            series: [],
            labels: [],
        },
        {
            plugins: [Chartist.plugins.superCharts()],
        }
    )
);

// -- SVG API

var svgNode: SVGGElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
var chartistSvgGroup: Chartist.IChartistSvg<SVGGElement> = new Chartist.Svg(svgNode);
var charistSvgLine: Chartist.IChartistSvg<SVGLineElement> | null = chartistSvgGroup.querySelector('line');

// --- Axis API

var customStepAxisX: Chartist.IChartistStepAxis<Chartist.ChartistAxisUnitX> = {
    units: {pos: "x", len: "width", dir: "horizontal", rectStart: "x1", rectEnd: "x2", rectOffset: "y2"},
    counterUnits: {pos: "y", len: "height", dir: "vertical", rectStart: "y2", rectEnd: "y1", rectOffset: "x1"},
    chartRect: {
        padding: {top: 12, right: 16, bottom: 0, left: 0},
        y2: 12,
        y1: 120,
        x1: 40,
        x2: 746,
        width: () => 0,
        height: () => 0,
    },
    axisLength: 706,
    gridOffset: 12,
    ticks: ["Jul '18", "Aug '18", "Sep '18", "Oct '18", "Nov '18", "Dec '18", "Jan '19", "Feb '19", "Mar '19", "Apr '19", "May '19"],
    options: {
        offset: 30,
        position: "end",
        labelOffset: {x: 0, y: 0},
        showLabel: true,
        showGrid: true,
        ticks: ["Jul '18", "Aug '18", "Sep '18", "Oct '18", "Nov '18", "Dec '18", "Jan '19", "Feb '19", "Mar '19", "Apr '19", "May '19"],
        stretch: false,
    },
    stepLength: 64.18181818181819,
    projectValue: (a: number) => a,
};

var axisX: Chartist.IChartistAxis<Chartist.ChartistAxisUnitX> = customStepAxisX;

// $ExpectError
var invalidAxisY: Chartist.IChartistAxis<Chartist.ChartistAxisUnitY> = axisX;

var customAutoScaleAxisY: Chartist.IChartistAutoScaleAxis<Chartist.ChartistAxisUnitY> = {
    bounds: {
        high: 1194,
        low: 0,
        valueRange: 1194,
        oom: 3,
        step: 500,
        min: 0,
        max: 1500,
        range: 1500,
        numberOfSteps: 2,
        values: [0, 500, 1000, 1500],
    },
    range: { min: 0, max: 1500 },
    units: { pos: 'y', len: 'height', dir: 'vertical', rectStart: 'y2', rectEnd: 'y1', rectOffset: 'x1' },
    counterUnits: { pos: 'x', len: 'width', dir: 'horizontal', rectStart: 'x1', rectEnd: 'x2', rectOffset: 'y2' },
    chartRect: {
        padding: { top: 12, right: 16, bottom: 0, left: 0 },
        y2: 12,
        y1: 120,
        x1: 40,
        x2: 746,
        width: () => 0,
        height: () => 0,
    },
    axisLength: 108,
    gridOffset: 40,
    ticks: [0, 500, 1000, 1500],
    options: {
        offset: 40,
        position: 'start',
        labelOffset: { x: 0, y: 0 },
        showLabel: true,
        showGrid: true,
        scaleMinSpace: 20,
        onlyInteger: true,
        low: 0,
    },
    projectValue: (a: number) => a,
};

// Draw

var gridDraw: Chartist.IChartistGridDrawEvent = {
    type: 'grid',
    axis: customStepAxisX,
    index: 0,
    group: chartistSvgGroup,
    element: charistSvgLine!,
    x1: 40,
    x2: 40,
    y1: 12,
    y2: 120,
};

var chartistSvgText: Chartist.IChartistSvg<SVGTextElement> = 0 as any;

var labelDraw: Chartist.IChartistLabelDrawEvent = {
    type: 'label',
    axis: customStepAxisX,
    index: 0,
    group: chartistSvgGroup,
    element: chartistSvgText,
    text: "Jul '18",
    x: 40,
    y: 125,
    width: 64.18181818181819,
    height: 20,
};

var pointDraw: Chartist.IChartistPointDrawEvent = {
    type: 'point',
    value: { y: 1194 },
    index: 0,
    series: {
        value: [1194, 365, 4, 2, 2, 1, 1, 1, 0, 0, 2],
        className: 'Chart-whiteSeries-781',
    },
    seriesIndex: 0,
    axisX: customStepAxisX,
    axisY: customAutoScaleAxisY,
    group: chartistSvgGroup,
    element: charistSvgLine!,
    x: 40,
    y: 34.032,
};

// --- Ensure our properties are available on instances, and not static scopes.

new Chartist.Bar(0 as any, 0 as any, 0 as any, 0 as any).container;
// $ExpectError
Chartist.Bar.container;

new Chartist.Line(0 as any, 0 as any, 0 as any, 0 as any).container;
// $ExpectError
Chartist.Line.container;

new Chartist.Pie(0 as any, 0 as any, 0 as any, 0 as any).container;
// $ExpectError
Chartist.Pie.container;

new Chartist.AutoScaleAxis(0 as any, 0 as any, 0 as any).chartRect;
// $ExpectError
Chartist.AutoScaleAxis.chartRect;

new Chartist.FixedScaleAxis(0 as any, 0 as any, 0 as any).chartRect;
// $ExpectError
Chartist.FixedScaleAxis.chartRect;

new Chartist.StepAxis(0 as any, 0 as any, 0 as any).chartRect;
// $ExpectError
Chartist.StepAxis.chartRect;

new Chartist.Svg('g')._node;
// $ExpectError
Chartist.Svg._node;
// $ExpectError
Chartist.Svg.querySelector('line');
