import SphericalMercator = require('@mapbox/sphericalmercator');

const sm = new SphericalMercator({ size: 100 });

const xy: [number, number] = sm.px([10, 10], 10);
const ll: [number, number] = sm.ll([20, 20], 10);
const bbox1: [number, number, number, number] = sm.bbox(10, 10, 10, true, '900913');
const xybounds: {
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
} = sm.xyz(bbox1, 10, true, 'WGS84');

const bbox2: [number, number, number, number] = sm.convert(bbox1, 'WGS84');
const fwd: [number, number] = sm.forward(ll);
const inv: [number, number] = sm.inverse(xy);
