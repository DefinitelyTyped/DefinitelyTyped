import * as Delaunator from 'delaunator';
import { Points, GetPoint } from 'delaunator';

// Default [x, y]
const points: Points = [[168, 180], [168, 178], [168, 179], [168, 181], [168, 183], [167, 183], [167, 184]];
const d = new Delaunator(points);

// Custom getX & getY
interface CustomPoint {
    x: number;
    y: number;
}
const customPoints = [{x: 168, y: 180}, {x: 168, y: 178}, {x: 168, y: 179}, {x: 168, y: 181}, {x: 168, y: 183}, {x: 167, y: 183}, {x: 167, y: 184}];

const getX = (point: CustomPoint) => point.x;
const getY = (point: CustomPoint) => point.y;

new Delaunator(customPoints, point => point.x, point => point.y);
new Delaunator(customPoints, getX, getY);

// To get the coordinates of all triangles, use:
const triangles = d.triangles;
const halfedges = d.halfedges;
const coordinates: number[][][] = [];
for (let i = 0; i < triangles.length; i += 3) {
    coordinates.push([
        points[triangles[i]],
        points[triangles[i + 1]],
        points[triangles[i + 2]]
    ]);
}
