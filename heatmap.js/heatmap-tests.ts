/// <reference path="heatmap.d.ts" />

var baseLayer = L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
     });

var testData: HeatmapData = {
    max: 8,
    data: [
        {
            lat: 24.6408,
            lng:46.7728,
            count: 3
        }, {
            lat: 50.75,
            lng: -1.55,
            count: 1
        }
    ]
};

var config : HeatmapConfiguration = {
    radius: 2,
    maxOpacity: .8,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: 'lat',
    lngField: 'lng',
    valueField: 'count'
};

var heatmapLayer = new HeatmapOverlay(config);

var map = new L.Map('map-canvas', {
    center: new L.LatLng(25.6586, -80.3568),
    zoom: 4,
    layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);
