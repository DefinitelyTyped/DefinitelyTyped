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

    drawnItems.addLayer(layer);
});

let examplePolygon: L.LatLngLiteral[] = [{lng: 0, lat: 0}, {lng: 10, lat: 0}, {lng: 10, lat: 10}, {lng: 0, lat: 10}, {lng: 0, lat: 0}];
let examplePolygonArea: number = L.GeometryUtil.geodesicArea(examplePolygon);
L.GeometryUtil.readableArea(examplePolygonArea, true);
