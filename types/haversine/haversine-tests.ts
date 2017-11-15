import haversine = require('haversine');

const start: haversine.CoordinateLongNames = {
  longitude: 48.1548256,
  latitude: 11.4017529
};

const end: haversine.CoordinateLongNames = {
  longitude: 52.5065133,
  latitude: 13.1445551
};

const options: haversine.Options = {
  unit: 'km',
  threshold: 1
};

haversine(start, end, options);

const startShort: haversine.CoordinateShortNames = {
  lon: 48.1548256,
  lat: 11.4017529
};

const endShort: haversine.CoordinateShortNames = {
  lon: 52.5065133,
  lat: 13.1445551
};

const optionsShort: haversine.Options = {
  unit: 'km',
  threshold: 1,
  format: '{lon,lat}'
};

haversine(startShort, endShort, optionsShort);

const startLatLon: haversine.LatLonTuple = [11.4017529, 48.1548256];

const endLatLon: haversine.LatLonTuple = [13.1445551, 52.5065133];

const optionsLatLon: haversine.Options = {
  unit: 'km',
  threshold: 1,
  format: '[lat,lon]'
};

haversine(startLatLon, endLatLon, optionsLatLon);
