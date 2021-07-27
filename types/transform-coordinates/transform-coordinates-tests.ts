import transformation = require('transform-coordinates');

const transform = transformation('EPSG:4326', '3068');

const c1 = transform.forward({x: 13.4105, y: 52.5034});
c1.x;
c1.y;

const c2 = transform.inverse({x: 25405, y: 19607});
c2.x;
c2.y;
