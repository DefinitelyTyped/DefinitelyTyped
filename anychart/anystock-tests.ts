/// <reference path="index.d.ts"/>
interface Window {
  get_ixic_daily_short_data(): Array<any>
}
anychart.onDocumentReady(function () {
    // The data that has been used for this sample is taken from the CDN
    // http://cdn.anychart.com/csv-data/ixic-daily-short.js
    // and required in 'index.html' file.
    var dataTable = anychart.data.table();

    dataTable.addData(window.get_ixic_daily_short_data());

    var mapping = dataTable.mapAs();
    mapping.addField('open', 1, anychart.enums.AggregationType.FIRST);
    mapping.addField('high', 2, anychart.enums.AggregationType.MAX);
    mapping.addField('low', 3, anychart.enums.AggregationType.MIN);
    mapping.addField('close', 4, anychart.enums.AggregationType.LAST);

    var scrollerMapping = dataTable.mapAs();
    scrollerMapping.addField('value', 5);

// create stock chart
    var chart = anychart.stock();
    chart.title('My First Stock Chart');
    chart.padding().left(15).right(60);

    var plot = chart.plot(0);

    plot.grid()
        .enabled(true);
    var grid1 = plot.grid(1);
    grid1.enabled(true);
    grid1.layout(anychart.enums.Layout.VERTICAL);

    plot.yAxis(0)
        .orientation('right');

    var series = plot.candlestick(mapping);
    series.risingFill('green');
    series.fallingFill('red');
    series.legendItem().iconType('risingfalling');

    var seriesMarkers = series.markers();
    seriesMarkers.enabled(true);
    seriesMarkers.type('diamond');
    seriesMarkers.offsetY(-10);
    seriesMarkers.size(3);

    var scroller = chart.scroller();
    scroller.line(scrollerMapping);

    var plot1 = chart.plot(1);
    plot1.xAxis(false);
    plot1.yAxis(0, false);
    plot1.legend(false);
    var plotBackground = plot1.background();
    plotBackground.enabled(true);
    plotBackground.fill(['cyan', 'lightgreen 0.3']);

    chart.selectRange('2007-01-01', '2007-05-01');
    chart.container('container');
    chart.draw();
});
