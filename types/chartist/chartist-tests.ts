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

chart.on('draw', (data: any) => {
    if (data.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition: Chartist.IChartistAnimations = {
            'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to: '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
            }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
            animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
            'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
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
chart2.on('draw', (data: any) => {
    // If the draw event was triggered from drawing a point on the line chart
    if (data.type === 'point') {
        // We are creating a new path SVG element that draws a triangle around the point coordinates
        var triangle = new Chartist.Svg('path', {
            d: ['M',
                data.x,
                data.y - 15,
                'L',
                data.x - 15,
                data.y + 8,
                'L',
                data.x + 15,
                data.y + 8,
                'z'].join(' '),
            style: 'fill-opacity: 1'
        }, 'ct-area');

        triangle.attr({ style: 'fill-opacity: .5' });
        // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
        data.element.replace(triangle);
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
biPolarChart.on('draw', (data: any) => {
    // If this draw event is of type bar we can use the data to create additional content
    if (data.type === 'bar') {
        // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
        data.group.append(new Chartist.Svg('circle', {
            cx: data.x2,
            cy: data.y2,
            r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
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

new Chartist.Candle('.ct-chart', {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [3, 2, 9, 5]
    ]
}, {
    axisX: {
        labelOffset: {
            x: -10,
            y: 0
        }
    },
    axisY: {
        showGrid: false,
        labelInterpolationFnc: function (value: any) {
            return value + 12000;
        }
    }
});


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
}, {})

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
}, {})

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
}, {})
