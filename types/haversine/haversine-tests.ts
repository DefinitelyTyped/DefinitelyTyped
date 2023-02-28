import haversine = require('haversine');
import { Feature, Point } from 'geojson';

const start: haversine.CoordinateLongitudeLatitude = {
  longitude: 48.1548256,
  latitude: 11.4017529
};

const end = {
    longitude: 52.5065133,
    latitude: 13.1445551,
};

const options: haversine.Options = {
  unit: 'km',
  threshold: 1
};

haversine(start, end, options);  // $ExpectType number
haversine(start, end, { unit: 'km', threshold: 1 });  // $ExpectType boolean

// @ts-expect-error
haversine(start, end, {format: '[lat,lon]'});
// @ts-expect-error
haversine(start, end, {format: '[lon,lat]'});
// @ts-expect-error
haversine(start, end, {format: '{lat,lng}'});

const startShort: haversine.CoordinateLonLat = {
  lon: 48.1548256,
  lat: 11.4017529
};

const endShort: haversine.CoordinateLonLat = {
  lon: 52.5065133,
  lat: 13.1445551
};

// @ts-expect-error
haversine(startShort, endShort);

haversine(startShort, endShort, { format: '{lon,lat}' });  // $ExpectType number
haversine(startShort, endShort, { format: '{lon,lat}', threshold: 1 });  // $ExpectType boolean

const startLatLng = {
    lat: 11.4017529,
    lng: 48.1548256,
};

const endLatLng = {
    lat: 13.1445551,
    lng: 52.5065133,
};

const optionsLatLng: haversine.Options = {
    format: '{lat,lng}',
};

haversine(startLatLng, endLatLng, optionsLatLng);  // $ExpectType number

// not actually valid, but the type of optionsLatLng.format is widened to string
haversine(start, end, optionsLatLng);  // $ExpectType number
// @ts-expect-error
haversine(start, end, { format: '{lat,lng}' });

const startLatLon: haversine.LatLonTuple = [11.4017529, 48.1548256];

const endLatLon: haversine.LatLonTuple = [13.1445551, 52.5065133];

const optionsLatLon: haversine.Options = {
    format: '[lat,lon]',
};

haversine(startLatLon, endLatLon, optionsLatLon);

const startGeoJSON = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: startLatLon,
    },
};

// Ensure that types/haversine is compatible with types/geojson.
const endGeoJSON: Feature<Point> = {
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: endLatLon,
    },
    properties: {},
};

const optionsGeoJSON: haversine.Options = {
    format: 'geojson',
};

haversine(startGeoJSON, endGeoJSON, optionsGeoJSON);  // $ExpectType number
haversine(startGeoJSON, endGeoJSON, { format: 'geojson', unit: 'nmi'});  // $ExpectType number
haversine(startGeoJSON, endGeoJSON, { format: 'geojson', unit: 'nmi', threshold: 2});  // $ExpectType boolean

// @ts-expect-error
haversine(start, end, { format: 'geojson' });
