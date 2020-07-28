import Delaunator from 'delaunator';

// Zipped points [x0, y0, x1, y1, ...]
const zippedPoints = [168, 180, 168, 178, 168, 179, 168, 181, 168, 183, 167, 183, 167, 184];
const zipped = new Delaunator(zippedPoints);

// Default [x, y]
const defaultPoints = [[168, 180], [168, 178], [168, 179], [168, 181], [168, 183], [167, 183], [167, 184]];
const d = Delaunator.from(defaultPoints);

// Custom getX & getY
interface CustomPoint {
    x: number;
    y: number;
}
const customPoints = [{ x: 168, y: 180 }, { x: 168, y: 178 }, { x: 168, y: 179 }, { x: 168, y: 181 }, { x: 168, y: 183 }, { x: 167, y: 183 }, { x: 167, y: 184 }];

const getX = (point: CustomPoint) => point.x;
const getY = (point: CustomPoint) => point.y;

Delaunator.from(customPoints, point => point.x, point => point.y);
Delaunator.from(customPoints, getX, getY);

// To get the coordinates of all triangles, use:
const triangles = d.triangles; // $ExpectType Uint32Array
const halfedges = d.halfedges; // $ExpectType Int32Array
const hull = d.hull; // $ExpectType Uint32Array
const coords = d.coords; // $ExpectType ArrayLike<number> | Float64Array
const coordinates: number[][][] = [];
for (let i = 0; i < triangles.length; i += 3) {
    coordinates.push([
        defaultPoints[triangles[i]],
        defaultPoints[triangles[i + 1]],
        defaultPoints[triangles[i + 2]]
    ]);
}

// Or use Delaunator.coords (but coords is a flat array in the form of [x0, y0, x1, y1, ...])
const coordinates2: number[][][] = [];
for (let i = 0; i < triangles.length; i += 3) {
    coordinates2.push([
        [coords[triangles[i] * 2], coords[triangles[i] * 2 + 1]],
        [coords[triangles[i + 1] * 2], coords[triangles[i + 1] * 2 + 1]],
        [coords[triangles[i + 2] * 2], coords[triangles[i + 2] * 2 + 1]]
    ]);
}

// both approaches should give the same result
JSON.stringify(coordinates) === JSON.stringify(coordinates2);
