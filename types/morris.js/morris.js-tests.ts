let data = [{
    label: "2010-5-1",
    value: 15
}];

let donutChart = Morris.Donut({
    element: "donutChartId",
    data: data,
    colors: ["chartreuse"],
    resize: false
});

let barChart = Morris.Bar({
    element: "barChartId",
    data: data,
    xkey: "label",
    ykeys: ["value"],
    labels: ["labels"],
    hideHover: "auto",
    axes: false,
    grid: true,
    gridTextColor: "bisque",
    gridTextSize: 42,
    gridTextFamily: "comic sans",
    gridTextWeight: "bold",
    barColors: ["aquamarine"],
    stacked: false,
    hoverCallback: (index, options, content, row) => index + " " + content
});

let lineChart = Morris.Line({
    element: "lineChartId",
    data: data,
    xkey: "label",
    ykeys: ["value"],
    labels: ["labels"],
    lineColors: ["bisque"],
    lineWidth: 42,
    pointSize: 42,
    pointFillColors: ["bisque"],
    pointStrokeColors: ["bisque"],
    ymax: "auto 15",
    ymin: "auto 10",
    smooth: false,
    hoverCallback: (index, options, content, row) => index + " " + content,
    parseTime: false,
    postUnits: "%",
    preUnits: "£",
    dateFormat: (timestamp) => timestamp.toString(),
    xLabels: "30min",
    xLabelFormat: (date) => date.toString(),
    xLabelAngle: 42,
    yLabelFormat: (val) => val.toString(),
    goals: [42],
    goalStrokeWidth: 42,
    goalLineColors: ["bisque"],
    events: ["bisque"],
    eventStrokeWidth: 42,
    eventLineColors: ["bisque"],
    continuousLine: false,
    axes: false,
    grid: false,
    gridTextColor: "bisque",
    gridTextSize: 42,
    gridTextFamily: "comic sans",
    gridTextWeight: "bold",
    fillOpacity: 42
});

let areaChart = Morris.Area({
    element: "areaChartId",
    data: data,
    xkey: "label",
    ykeys: ["value"],
    labels: ["labels"],
    behaveLikeLine: false
});
