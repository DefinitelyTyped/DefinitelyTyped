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
    onAnimationProgress: function () { },
    onAnimationComplete: function () { }
}

var lineData: LinearChartData = {
    labels: ['03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'],
    datasets: [
        {
            label: 'Accepted',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Quarantined',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var myLineChart = new Chart(ctx).Line(lineData, {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
});

var myLineChartLegend: string = myLineChart.generateLegend();
var myLineChartImage: string = myLineChart.toBase64Image();
myLineChart.addData([1, 2, 3, 4, 5, 6, 7], 'new');
myLineChart.clear();
myLineChart.removeData();
myLineChart.resize();
myLineChart.update();
myLineChart.stop();
myLineChart.destroy();

var barData: LinearChartData = {
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

var myBarChart = new Chart(ctx).Bar(barData, {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    barShowStroke: true,
    barStrokeWidth: 2,
    barValueSpacing: 5,
    barDatasetSpacing: 1,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
});

var myBarChartLegend: string = myBarChart.generateLegend();
var myBarChartImage: string = myBarChart.toBase64Image();
myBarChart.addData([1, 2, 3, 4, 5, 6, 7], 'new');
myBarChart.clear();
myBarChart.removeData();
myBarChart.resize();
myBarChart.update();
myBarChart.stop();
myBarChart.destroy();

var radarData: LinearChartData = {
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

var myRadarChart = new Chart(ctx).Radar(radarData, {
    scaleShowLine: true,
    angleShowLineOut: true,
    scaleShowLabels: false,
    scaleBeginAtZero: true,
    angleLineColor: "rgba(0,0,0,.1)",
    angleLineWidth: 1,
    pointLabelFontFamily: "'Arial'",
    pointLabelFontStyle: "normal",
    pointLabelFontSize: 10,
    pointLabelFontColor: "#666",
    pointDot: true,
    pointDotRadius: 3,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
});

var myRadarChartLegend: string = myRadarChart.generateLegend();
var myRadarChartImage: string = myRadarChart.toBase64Image();
myRadarChart.addData([1, 2, 3, 4, 5, 6, 7], 'new');
myRadarChart.clear();
myRadarChart.removeData();
myRadarChart.resize();
myRadarChart.update();
myRadarChart.stop();
myRadarChart.destroy();

var polarAreaData: CircularChartData[] = [
    {
        value: 300,
        color: "#F7464A",
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

var myPolarAreaChart = new Chart(ctx).PolarArea(polarAreaData, {
    scaleShowLabelBackdrop: true,
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    scaleBeginAtZero: true,
    scaleBackdropPaddingY: 2,
    scaleBackdropPaddingX: 2,
    scaleShowLine: true,
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
});

var myPolarAreaChartLegend: string = myPolarAreaChart.generateLegend();
var myPolarAreaChartImage: string = myPolarAreaChart.toBase64Image();
myPolarAreaChart.addData([{
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}], 0);
myPolarAreaChart.clear();
myPolarAreaChart.removeData(0);
myPolarAreaChart.resize();
myPolarAreaChart.update();
myPolarAreaChart.stop();
myPolarAreaChart.destroy();

var pieData: CircularChartData[] = [
    {
        value: 300,
        color: "#F7464A",
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

// For a pie chart
var myPieChart = new Chart(ctx).Pie(pieData, {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 0,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
});

var myPieChartLegend: string = myPieChart.generateLegend();
var myPieChartImage: string = myPieChart.toBase64Image();
myPieChart.addData([{
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}], 0);
myPieChart.clear();
myPieChart.removeData(0);
myPieChart.resize();
myPieChart.update();
myPieChart.stop();
myPieChart.destroy();

// And for a doughnut chart
var myDoughnutChart = new Chart(ctx).Doughnut(pieData, {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 50,
    animationSteps: 100,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
}); 

var myDoughnutChartLegend: string = myDoughnutChart.generateLegend();
var myDoughnutChartImage: string = myDoughnutChart.toBase64Image();
myPieChart.addData([{
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dark Grey"
}], 0);
myDoughnutChart.clear();
myDoughnutChart.removeData(0);
myDoughnutChart.resize();
myDoughnutChart.update();
myDoughnutChart.stop();
myDoughnutChart.destroy();
