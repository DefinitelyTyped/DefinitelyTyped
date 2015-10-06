/// <reference path="chart.d.ts" />

var canvas = <HTMLCanvasElement>document.getElementById('example-chart');
var ctx = canvas.getContext('2d');

Chart.defaults.global = {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutQuart",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "rgba(0,0,0,.1)",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#666",
    responsive: false,
    maintainAspectRatio: true,
    showTooltips: true,
    customTooltips: false,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipFillColor: "rgba(0,0,0,0.8)",
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipTitleFontSize: 14,
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#fff",
    tooltipYPadding: 6,
    tooltipXPadding: 6,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 10,
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    multiTooltipTemplate: "<%= value %>",
    onAnimationProgress: function(){},
    onAnimationComplete: function(){}
};

var lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var lineOptions = {
    scaleShowGridLines : true,
    scaleGridLineColor : "rgba(0,0,0,.05)",
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve : true,
    bezierCurveTension : 0.4,
    pointDot : true,
    pointDotRadius : 4,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

var myLineChart = new Chart(ctx).Line(lineData, lineOptions);

canvas.onclick = function(evt){
    var activePoints = myLineChart.getPointsAtEvent(evt);
};
myLineChart.datasets[0].points[2].value = 50;
myLineChart.update();
myLineChart.addData([40, 60], "August");
myLineChart.removeData();

myLineChart.clear();
myLineChart.stop();
myLineChart.resize();
myLineChart.destroy();
var myLineChartImage: string = myLineChart.toBase64Image();
var myLineChartLegend: string = myLineChart.generateLegend();

var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var barOptions = {
    scaleBeginAtZero : true,
    scaleShowGridLines : true,
    scaleGridLineColor : "rgba(0,0,0,.05)",
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke : true,
    barStrokeWidth : 2,
    barValueSpacing : 5,
    barDatasetSpacing : 1,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

var myBarChart = new Chart(ctx).Bar(barData, barOptions);

canvas.onclick = function(evt){
    var activeBars = myBarChart.getBarsAtEvent(evt);
};
myBarChart.datasets[0].bars[2].value = 50;
myBarChart.update();
myBarChart.addData([40, 60], "August");
myBarChart.removeData();

myBarChart.clear();
myBarChart.stop();
myBarChart.resize();
myBarChart.destroy();
var myBarChartImage: string = myBarChart.toBase64Image();
var myBarChartLegend: string = myBarChart.generateLegend();

var radarData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

var radarOptions = {
    scaleShowLine : true,
    angleShowLineOut : true,
    scaleShowLabels : false,
    scaleBeginAtZero : true,
    angleLineColor : "rgba(0,0,0,.1)",
    angleLineWidth : 1,
    pointLabelFontFamily : "'Arial'",
    pointLabelFontStyle : "normal",
    pointLabelFontSize : 10,
    pointLabelFontColor : "#666",
    pointDot : true,
    pointDotRadius : 3,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    datasetFill : true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

var myRadarChart = new Chart(ctx).Radar(radarData, radarOptions);

canvas.onclick = function(evt){
    var activePoints = myRadarChart.getPointsAtEvent(evt);
};
myRadarChart.datasets[0].points[2].value = 50;
myRadarChart.update();
myRadarChart.addData([40, 60], "Dancing");
myRadarChart.removeData();

myRadarChart.clear();
myRadarChart.stop();
myRadarChart.resize();
myRadarChart.destroy();
var myRadarChartImage: string = myRadarChart.toBase64Image();
var myRadarChartLegend: string = myRadarChart.generateLegend();

var polarAreaData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }
];

var polarAreaOptions = {
    scaleShowLabelBackdrop : true,
    scaleBackdropColor : "rgba(255,255,255,0.75)",
    scaleBeginAtZero : true,
    scaleBackdropPaddingY : 2,
    scaleBackdropPaddingX : 2,
    scaleShowLine : true,
    segmentShowStroke : true,
    segmentStrokeColor : "#fff",
    segmentStrokeWidth : 2,
    animationSteps : 100,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    animateScale : false,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

var myPolarAreaChart = new Chart(ctx).PolarArea(polarAreaData, polarAreaOptions);

canvas.onclick = function(evt){
    var activePoints = myPolarAreaChart.getSegmentsAtEvent(evt);
};
myPolarAreaChart.segments[1].value = 10;
myPolarAreaChart.update();
myPolarAreaChart.addData({
    value: 130,
    color: "#B48EAD",
    highlight: "#C69CBE",
    label: "Purple"
});
myPolarAreaChart.addData({
    value: 130,
    color: "#B48EAD",
    highlight: "#C69CBE",
    label: "Purple"
}, 0);
myPolarAreaChart.removeData();
myPolarAreaChart.removeData(0);

myRadarChart.clear();
myRadarChart.stop();
myRadarChart.resize();
myRadarChart.destroy();
var myRadarChartImage: string = myRadarChart.toBase64Image();
var myRadarChartLegend: string = myRadarChart.generateLegend();

var pieAndDoughnutData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

var pieAndDoughnutOptions = {
    segmentShowStroke : true,
    segmentStrokeColor : "#fff",
    segmentStrokeWidth : 2,
    percentageInnerCutout : 50, // This is 0 for Pie charts
    animationSteps : 100,
    animationEasing : "easeOutBounce",
    animateRotate : true,
    animateScale : false,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
};

var myPieChart = new Chart(ctx).Pie(pieAndDoughnutData, pieAndDoughnutOptions);

canvas.onclick = function(evt){
    var activePoints = myPieChart.getSegmentsAtEvent(evt);
};
myPieChart.segments[1].value = 10;
myPieChart.update();
myPieChart.addData({
    value: 130,
    color: "#B48EAD",
    highlight: "#C69CBE",
    label: "Purple"
});
myPieChart.addData({
    value: 130,
    color: "#B48EAD",
    highlight: "#C69CBE",
    label: "Purple"
}, 0);
myPieChart.removeData();
myPieChart.removeData(0);

myPieChart.clear();
myPieChart.stop();
myPieChart.resize();
myPieChart.destroy();
var myPieChartImage: string = myPieChart.toBase64Image();
var myPieChartLegend: string = myPieChart.generateLegend();

var myDoughnutChart = new Chart(ctx).Doughnut(pieAndDoughnutData, pieAndDoughnutOptions);

canvas.onclick = function(evt){
    var activePoints = myDoughnutChart.getSegmentsAtEvent(evt);
};
myDoughnutChart.segments[1].value = 10;
myDoughnutChart.update();
myDoughnutChart.addData({
    value: 130,
    color: "#B48EAD",
    highlight: "#C69CBE",
    label: "Purple"
});
myDoughnutChart.addData({
    value: 130,
    color: "#B48EAD",
    highlight: "#C69CBE",
    label: "Purple"
}, 0);
myDoughnutChart.removeData();
myDoughnutChart.removeData(0);

myDoughnutChart.clear();
myDoughnutChart.stop();
myDoughnutChart.resize();
myDoughnutChart.destroy();
var myDoughnutChartImage: string = myDoughnutChart.toBase64Image();
var myDoughnutChartLegend: string = myDoughnutChart.generateLegend();