/// <reference path="index.d.ts"/>
declare namespace anychart.maps {
  const slovakia: Object;
}
anychart.onDocumentReady(function () {
    var dataSet = anychart.data.set([
        {'id': 'SK.BL', 'value': 80},
        {'id': 'SK.BC', 'value': 175},
        {'id': 'SK.ZI', 'value': 255},
        {'id': 'SK.NI', 'value': 245},
        {'id': 'SK.TC', 'value': 505},
        {'id': 'SK.TA', 'value': 155},
        {'id': 'SK.KI', 'value': 575},
        {'id': 'SK.PV', 'value': 357}
    ]);

    var map = anychart.map();

    // this map required in 'index.html' file that placed in parent directory
    map.geoData(anychart.maps.slovakia);

    var title = map.title();
    title.enabled(true);
    title.padding([35, 0, 55, 0]);
    title.text("Map Chart Sample");

    var scale = anychart.scales.ordinalColor([
        {less: 80},
        {from: 80, to: 200},
        {from: 200, to: 500},
        {greater: 500}
    ]);
    scale.colors(['#99c9f7', '#76a7d6', '#5584B1', '#254E7B']);

    var series = map.choropleth(dataSet);
    series.tooltip({padding: [8, 13, 10, 13]});
    series.selectionMode("none");
    series.colorScale(scale);
    series.hoverFill('#b8b5d9');
    series.stroke('#B9B9B9');

    var tooltip = series.tooltip();
    tooltip.title({enabled: false});
    tooltip.separator({enabled: false});

    series.overlapMode('allowOverlap');
    series.labels(true);
    var hoverLabels = series.hoverLabels();
    hoverLabels.enabled(true);
    hoverLabels.fontSize(20);

    var seriesMarkers = series.markers();
    seriesMarkers.enabled(true);
    seriesMarkers.fill('yellow');

    map.container('container');
    map.draw();
});
