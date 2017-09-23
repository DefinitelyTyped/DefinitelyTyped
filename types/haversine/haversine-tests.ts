import haversine = require('haversine');

const start: haversine.Coordinate = {
  longitude: 48.1548256,
  latitude: 11.4017529
};

const end: haversine.Coordinate = {
  longitude: 52.5065133,
  latitude: 13.1445551
};

const options: haversine.Options = {
  unit: 'km',
  threshold: 1
};

haversine(start, end, options);
