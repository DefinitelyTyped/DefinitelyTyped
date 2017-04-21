/// <reference path="index.d.ts"/>
anychart.onDocumentReady(function () {
    var chart = anychart.column();
    var series = chart.column([3, 1, 2]);

    chart.xAxis(0).labels()
        .textFormatter('#{%Value}');
    chart.yAxis(0).labels()
        .textFormatter('{%Value}{numDecimals:2,zeroFillDecimals:true}');

    chart.grid(0).stroke('3 lightgreen');
    chart.minorGrid(0).stroke('lightgreen');

    var labels = series.labels();
    labels.enabled(true);
    labels.fontColor('red');
    labels.fontSize('12px');
    labels.textFormatter(function () {
        return 'Volume: ' + this.value;
    });

    var selectLabels = series.selectLabels();
    selectLabels.enabled(true);
    selectLabels.fontColor('green');
    selectLabels.fontSize('18px');

    var seriesMarkers = series.markers();
    seriesMarkers.enabled(true);
    seriesMarkers.type('star5');
    seriesMarkers.position('left');
    seriesMarkers.fill('cyan');
    seriesMarkers.size(12);

    var seriesHoverMarkers = series.hoverMarkers();
    seriesHoverMarkers.enabled(true);
    seriesHoverMarkers.type('triangleright');
    seriesHoverMarkers.position('left');
    seriesHoverMarkers.offsetX(-13);
    seriesHoverMarkers.fill(['magenta', 'cyan']);
    seriesHoverMarkers.size(12);

    chart.container('container');
    chart.draw();
});
