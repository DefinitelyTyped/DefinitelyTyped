/// <reference path="../leaflet/leaflet-0.7.d.ts" />
/// <reference path="leaflet-draw.d.ts" />


var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
    map = new L.Map('map', {layers: [osm], center: new L.LatLng(-37.7772, 175.2756), zoom: 15 });

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    position: 'topleft' ,
    draw: {
        polygon: {
            allowIntersection: false,
            drawError: {
                color: '#b00b00',
                timeout: 1000
            },
            shapeOptions: {
                color: '#bada55'
            },
            showArea: true
        },
        polyline: {
            metric: false
        },
        circle: {
            shapeOptions: {
                color: '#662d91'
            }
        }
    },
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

map.on('draw:created', function (e: L.DrawEvents.Created) {
    var type = e.layerType,
        layer = e.layer;

    drawnItems.addLayer(layer);
});
