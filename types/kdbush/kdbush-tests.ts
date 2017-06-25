import * as kdbush from 'kdbush';
import {KDBush} from 'kdbush';

// API
const points = [[110, 60], [130, 40]];
const index = kdbush(points);

// properties
index.nodeSize;
index.points;
index.ids;
index.coords;

// range
index.range(10, 10, 20, 20);
index.range(10, 10, 20, 20).map(id => points[id]);

// within
index.within(10, 10, 5);
index.within(10, 10, 5).map(id => points[id]);

// custom points (object)
const xy = [{x: 110, y: 60}, {x: 130, y: 40}];
const index2: KDBush<{x: number, y: number}> = kdbush(xy, p => p.x, p => p.y);
index2.points[0].x;
index2.points[0].y;
index2.points.map(p => [p.x, p.y]);

// custom points (latlng)
const latlng = [[60, 110], [40, 130]];
kdbush(latlng, p => p[1], p => p[0]);
kdbush(latlng, p => p[1], p => p[0], 64, Int32Array);

// z coordinate (does not require Get callbacks)
const pointsZ = [[110, 60, 4000], [130, 40, 3000]];
kdbush(pointsZ);
