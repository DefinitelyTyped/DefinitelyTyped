import proj4 = require('proj4');

///////////////////////////////////////////
// Tests data initialisation
///////////////////////////////////////////
const epsg = {
    4269: '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees',
    4326: '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees',
};
const firstProjection = epsg[4269];
const secondProjection = epsg[4326];

const pointArr = [-71, 41];
const pointObj = { x: 2, y: 5 };

///////////////////////////////////////////
// Tests Measurement
///////////////////////////////////////////
proj4(firstProjection, secondProjection, pointArr);
proj4(firstProjection, pointArr);

// $ExpectType number[]
proj4(firstProjection, secondProjection, pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, secondProjection, pointObj);

// $ExpectType number[]
proj4(firstProjection, pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, pointObj);

// $ExpectType Converter
proj4(firstProjection, secondProjection);
// $ExpectType Converter
proj4(firstProjection);

// $ExpectType number[]
proj4(firstProjection, secondProjection).forward(pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, secondProjection).forward(pointObj);
// $ExpectType number[]
proj4(firstProjection, secondProjection).inverse(pointArr);
// $ExpectType { x: number; y: number; }
proj4(firstProjection, secondProjection).inverse(pointObj);

///////////////////////////////////
// Named Projections
///////////////////////////////////

// $ExpectType ProjectionDefinition
proj4.defs('WGS84');
proj4.defs('WGS84', secondProjection);
// $ExpectType undefined[]
proj4.defs([['EPSG:4326', secondProjection], ['EPSG:4269', firstProjection]]);
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
