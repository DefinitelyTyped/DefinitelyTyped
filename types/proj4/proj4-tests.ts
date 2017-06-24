import * as proj4 from 'proj4';

///////////////////////////////////////////
// Tests data initialisation
///////////////////////////////////////////
const name = 'WGS84';
const epsg = {
    4269: '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees',
    4326: '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees',
};
const point1 = [-71, 41];
const point2 = {x: 2, y: 5};
const mgrs = "24XWT783908";

///////////////////////////////////////////
// Tests Measurement
///////////////////////////////////////////
proj4(epsg['4269'], epsg['4326'], point1);
proj4(epsg['4269'], point1);
proj4(epsg['4269'], epsg['4326']).forward(point2);
proj4(epsg['4269'], epsg['4326']).inverse(point2);

///////////////////////////////////
// Named Projections
///////////////////////////////////
proj4.defs('WGS84', epsg['4326']);
proj4.defs([
  ['EPSG:4326', epsg['4326']],
  ['EPSG:4269', epsg['4269']]
]);
proj4.defs('urn:x-ogc:def:crs:EPSG:4326', proj4.defs('EPSG:4326'));

///////////////////////////////////
// Utils
///////////////////////////////////
// WGS84
proj4.WGS84;

// Proj
proj4.Proj('WGS84');

// toPoint
proj4.toPoint([1, 2]);
proj4.toPoint([1, 2, 3]);
proj4.toPoint([1, 2, 3, 4]);

// Point
// WARNING: Deprecated in v3
proj4.Point([1, 2, 3, 4]);
