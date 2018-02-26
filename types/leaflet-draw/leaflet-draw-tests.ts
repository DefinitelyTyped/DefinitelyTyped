import * as L from 'leaflet';
import 'leaflet-draw';

const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
const map = L.map('map', {layers: [osm], center: L.latLng(-37.7772, 175.2756), zoom: 15 });

const drawnItems = L.featureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
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

map.on(L.Draw.Event.CREATED, (e: L.DrawEvents.Created) => {
    const type = e.layerType;
    const layer = e.layer;
    const geojson = e.layer.toGeoJSON();

    drawnItems.addLayer(layer);
});

const examplePolygon: L.LatLngLiteral[] = [{lng: 0, lat: 0}, {lng: 10, lat: 0}, {lng: 10, lat: 10}, {lng: 0, lat: 10}, {lng: 0, lat: 0}];
const examplePolygonArea: number = L.GeometryUtil.geodesicArea(examplePolygon);
L.GeometryUtil.readableArea(examplePolygonArea, true);

function testBooleanControlOptions() {
    const drawControl = new L.Control.Draw({
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
            polyline: {},
            circle: false
        },
        edit: {
            featureGroup: drawnItems
        }
    });
}

function testExampleControlOptions() {
    const editableLayers = new L.FeatureGroup([]);
    map.addLayer(editableLayers);

    const MyCustomMarker = L.Icon.extend({
        options: {
            shadowUrl: null,
            iconAnchor: new L.Point(12, 12),
            iconSize: new L.Point(24, 24),
            iconUrl: 'link/to/image.png'
        }
    });
    const drawControl = new L.Control.Draw({
        position: 'topright',
        draw: {
            polyline: {
                shapeOptions: {
                    color: '#f357a1',
                    weight: 10
                }
            },
            polygon: {
                allowIntersection: false, // Restricts shapes to simple polygons
                drawError: {
                    color: '#e1e100', // Color the shape will turn when intersects
                    message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
                },
                shapeOptions: {
                    color: '#bada55'
                }
            },
            circle: false, // Turns off this drawing tool
            rectangle: {
                shapeOptions: {
                    // clickable: false // clickabkle is not a polyline option according to leaflet docs
                }
            },
            marker: {
                icon: new MyCustomMarker()
            }
        },
        edit: {
            featureGroup: editableLayers, // REQUIRED!!
            remove: false
        }
    });
}
