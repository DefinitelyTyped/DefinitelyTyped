import { FeatureCollection } from 'geojson';
import * as L from 'leaflet';
import 'leaflet-textpath';

// Tests copied directly from demo code from https://github.com/makinacorpus/Leaflet.TextPath

const osm = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; 2013 OpenStreetMap contributors',
});

const map = L.map('map').fitWorld().addLayer(osm);

const wind = L.polyline(
    [
        [59.3556, -31.99219],
        [55.17887, -42.89062],
        [47.7541, -43.94531],
        [38.27269, -37.96875],
        [27.05913, -41.13281],
        [16.29905, -36.5625],
        [8.40717, -30.23437],
        [1.05463, -22.5],
        [-8.75479, -18.28125],
        [-21.61658, -20.03906],
        [-31.35364, -24.25781],
        [-39.90974, -30.9375],
        [-43.83453, -41.13281],
        [-47.7541, -49.92187],
        [-50.95843, -54.14062],
        [-55.9738, -56.60156],
    ],
    {
        weight: 15,
        color: '#8EE9FF',
    },
).addTo(map);
wind.setText(') ', {
    repeat: true,
    offset: 7,
    attributes: { fill: '#007DEF', 'font-weight': 'bold', 'font-size': '24' },
});

const danger = L.polyline(
    [
        [-40.311, -31.952],
        [-12.086, -18.727],
    ],
    {
        weight: 10,
        color: 'orange',
        opacity: 0.8,
    },
).addTo(map);
danger.setText('\u25BA', { repeat: true, offset: 6, attributes: { fill: 'red' } });

const plane = L.polyline(
    [
        [-49.38237, -37.26562],
        [-1.75754, -14.41406],
        [51.61802, -23.20312],
    ],
    {
        weight: 1,
        color: 'black',
        dashArray: '2, 2',
    },
).addTo(map);
plane.setText('\u2708     ', { repeat: true, offset: 8, attributes: { 'font-weight': 'bold', 'font-size': '24' } });

// We have to explicitly cast this value.
const flightsWE: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                flight: 'To New Delhi',
            },
            geometry: {
                type: 'LineString',
                coordinates: [
                    [3.33984375, 46.6795944656402],
                    [29.53125, 46.55886030311719],
                    [51.328125, 42.293564192170095],
                    [68.5546875, 35.746512259918504],
                    [76.81640625, 28.65203063036226],
                ],
            },
        },
        {
            type: 'Feature',
            properties: {
                flight: 'To Hanoi',
            },
            geometry: {
                type: 'LineString',
                coordinates: [
                    [77.607421875, 28.767659105691255],
                    [88.72558593749999, 27.839076094777816],
                    [97.3828125, 25.681137335685307],
                    [105.77636718749999, 21.248422235627014],
                ],
            },
        },
    ],
};

// We have to explicitly cast this value.
const flightsEW: FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {
                flight: 'To Bangkok',
            },
            geometry: {
                type: 'LineString',
                coordinates: [
                    [106.67724609375, 10.790140750321738],
                    [104.08447265624999, 11.523087506868514],
                    [102.1728515625, 12.254127737657381],
                    [100.45898437499999, 13.667338259654947],
                ],
            },
        },
    ],
};

L.geoJSON(flightsWE, {
    onEachFeature: (feature, layer) => {
        // We have to add a check here. This is why TypeScript is useful!
        if (layer instanceof L.Polyline) {
            layer.setText(feature.properties.flight, { offset: -5 });
        }
    },
    style: {
        weight: 3,
        color: 'purple',
        dashArray: '4, 4',
    },
}).addTo(map);

L.geoJSON(flightsEW, {
    onEachFeature: (feature, layer) => {
        // We have to add a check here. This is why TypeScript is useful!
        if (layer instanceof L.Polyline) {
            layer.setText(feature.properties.flight, { offset: -5, orientation: 'flip' });
        }
    },
    style: {
        weight: 3,
        color: 'purple',
        dashArray: '4, 4',
    },
}).addTo(map);

const pos1: L.LatLngTuple = [40.418075, -3.704643];
const pos2: L.LatLngTuple = [40.413119, -3.702369];
const line = L.polyline([pos1, pos2]);
line.setText('HOLA', { center: true, attributes: { fill: 'red' } });
line.addTo(map);
