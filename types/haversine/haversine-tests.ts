import haversine = require('haversine');

const start = {
  longitude: 48.1548256,
  latitude: 11.4017529
};

const end = {
  longitude: 52.5065133,
  latitude: 13.1445551
};

const options: haversine.Options = {
  unit: 'km',
  threshold: 1
};

haversine(start, end, options);

const startShort = {
  lon: 48.1548256,
  lat: 11.4017529
};

const endShort = {
  lon: 52.5065133,
  lat: 13.1445551
};

const optionsShort: haversine.Options = {
  format: '{lon,lat}'
};

haversine(startShort, endShort, optionsShort);

const startLatLon: haversine.LatLonTuple = [11.4017529, 48.1548256];

const endLatLon: haversine.LatLonTuple = [13.1445551, 52.5065133];

const optionsLatLon: haversine.Options = {
  format: '[lat,lon]'
};

haversine(startLatLon, endLatLon, optionsLatLon);

const startGeoJSON = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: startLatLon
  }
};

const endGeoJSON = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: endLatLon
  }
};

const optionsGeoJSON: haversine.Options = {
  format: 'geojson'
};

haversine(startGeoJSON, endGeoJSON, optionsGeoJSON);
