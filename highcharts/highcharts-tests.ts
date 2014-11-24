/// <reference path="highcharts.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />


var animate: HighchartsBoolOrAnimation;
animate = true;
animate = { duration: 200, easing: "linear" };


var gradient: HighchartsColorOrGradient;
gradient = {
    linearGradient: { x0: 0, y0: 0, x1: 500, y1: 500 },
    stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(200, 200, 255)']
    ]
}

var color = "#fcfcff";

var backgound: HighchartsColorOrGradient;

backgound = gradient;
backgound = color;

var chart1 = new Highcharts.Chart({
    chart: {
        renderTo: "container"
    },
    xAxis: [{
    }],
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
});

var chart2 = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        width: 400,
        height: 400,
        spacingRight: 20
    },
    xAxis: [{
        type: 'logarithmic',
        min: 1,
        max: 1000,
        endOnTick: true,
        tickInterval: 1,
        minorTickInterval: 0.1,
        gridLineWidth: 1
    }],
    yAxis: [{
        type: 'logarithmic',
        min: 1,
        max: 1000,
        tickInterval: 1,
        minorTickInterval: 0.1,
        title: {
            text: null
        }
    }],
    legend: {
        enabled: false
    },
    series: [{
        data: [
            [550, 870], [738, 362], [719, 711], [547, 665], [595, 197], [332, 144],
            [581, 555], [196, 862], [6, 837], [400, 924], [888, 148], [785, 730],
            [374, 358], [440, 69], [704, 318], [646, 506], [238, 662], [233, 56],
            [622, 572], [563, 903], [744, 672], [904, 646], [390, 325], [536, 491],
            [676, 186], [467, 145], [790, 114], [437, 793], [853, 243], [947, 196],
            [395, 728], [527, 148], [516, 675], [632, 562], [52, 552], [605, 580],
            [790, 865], [156, 87], [584, 290], [339, 921], [383, 633], [106, 373],
            [762, 863], [424, 149], [608, 959], [574, 711], [468, 664], [268, 77],
            [894, 850], [171, 102], [203, 565], [592, 549], [86, 486], [526, 244],
            [323, 575], [488, 842], [401, 618], [148, 43], [828, 314], [554, 711],
            [685, 868], [387, 435], [469, 828], [623, 506], [436, 184], [450, 156],
            [805, 517], [465, 997], [728, 802], [231, 438], [935, 438], [519, 856],
            [378, 579], [73, 765], [223, 219], [359, 317], [686, 742], [17, 790],
            [20, 35], [410, 644], [984, 325], [503, 882], [900, 187], [578, 968],
            [27, 718], [355, 704], [395, 332], [641, 548], [964, 374], [215, 472],
            [323, 66], [882, 542], [671, 327], [650, 193], [828, 632], [760, 929],
            [607, 335], [928, 826], [462, 598], [631, 411]
        ],
        type: 'scatter'
    }]
});

chart1.exportChart(null, {
    chart: {
        backgroundColor: '#FFFFFF'
    }
});


var div: HTMLDivElement;
var r = new Highcharts.Renderer(div, 20, 30);
var box = r.text("Hello", 10, 10).getBBox();

var highChartSettings: HighchartsOptions = {
    chart: {
        width: 400,
        height: 400
    },
    xAxis: [{
    }],
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
};

var container = $("#container").highcharts(highChartSettings, function (chart) {
    chart.series[0].setVisible(true, true);
});

var options = Highcharts.getOptions();

var options2 = Highcharts.setOptions(options);
