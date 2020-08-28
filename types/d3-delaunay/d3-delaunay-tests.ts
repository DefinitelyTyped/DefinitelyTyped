/**
 * TypeScript definition tests for d3-delaunay module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3 from 'd3-delaunay';

// Test Delaunay class

const constructedDelaunay = new d3.Delaunay([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const defaultDelaunayFromArray: d3.Delaunay<[number, number]> = d3.Delaunay.from([
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
]);
const defaultDelaunayFromIterator = d3.Delaunay.from(
    (function*() {
        yield [0, 0];
        yield [1, 0];
        yield [0, 1];
        yield [1, 1];
    })(),
);
const customDelaunayFromArray = d3.Delaunay.from(
    { length: 4 },
    (d, i) => i & 1,
    (d, i) => (i >> 1) & 1,
);
const customDelaunayFromIterator = d3.Delaunay.from(
    (function*() {
        yield { x: 0, y: 0 };
        yield { x: 1, y: 0 };
        yield { x: 0, y: 1 };
        yield { x: 1, y: 1 };
    })(),
    p => p.x,
    p => p.y,
);
const validContext = {
    moveTo: (x: number, y: number) => {}, // Delaunay.MoveContext
    lineTo: (x: number, y: number) => {}, // Delaunay.LineContext
    closePath: () => {}, // Delaunay.ClosableContext
    arc: (x: number, y: number, radius: number, startAngle: number, endAngle: number, counterClockwise?: boolean) => {}, // Delaunay.ArcContext
    rect: (x: number, y: number, width: number, height: number) => {}, // Delaunay.RectContext
};
const invalidContext = {
    moveTo: (x: number, y: number) => {},
};

const { points, halfedges, hull, triangles } = defaultDelaunayFromArray;
for (let i = 0, l = points.length; i < l; i++) {
    typeof points[i];
}
for (let i = 0, l = halfedges.length; i < l; i++) {
    const j = halfedges[i];
    const ti = triangles[i];
    const tj = triangles[j];
    const pix = points[ti * 2];
    const piy = points[ti * 2 + 1];
    const pjx = points[tj * 2];
    const pjy = points[tj * 2 + 1];
}
for (let i = 0, l = hull.length; i < l; i++) {
    const j = hull[i];
    const ti = hull[i];
    const tj = hull[j];
    const pix = points[ti * 2];
    const piy = points[ti * 2 + 1];
    const pjx = points[tj * 2];
    const pjy = points[tj * 2 + 1];
}
for (let i = 0, l = triangles.length; i < l; i++) {
    const t0 = triangles[i * 3 + 0];
    const t1 = triangles[i * 3 + 1];
    const t2 = triangles[i * 3 + 2];
    const p0x = points[t0 * 2];
    const p0y = points[t0 * 2 + 1];
    const p1x = points[t1 * 2];
    const p1y = points[t1 * 2 + 1];
    const p2x = points[t2 * 2];
    const p2y = points[t2 * 2 + 1];
}
const findClosest = defaultDelaunayFromArray.find(0.5, 0.5);
for (const neighbor of defaultDelaunayFromArray.neighbors(0)) {
    typeof neighbor;
}
const render: string = defaultDelaunayFromArray.render();
defaultDelaunayFromArray.render(validContext);
// $ExpectError
defaultDelaunayFromArray.render(invalidContext);

const renderHull: string = defaultDelaunayFromArray.renderHull();
defaultDelaunayFromArray.renderHull(validContext);
// $ExpectError
defaultDelaunayFromArray.renderHull(invalidContext);

const renderTriangle: string = defaultDelaunayFromArray.renderTriangle(0);
defaultDelaunayFromArray.renderTriangle(0, validContext);
// $ExpectError
defaultDelaunayFromArray.renderTriangle(0, invalidContext);

const renderPoints: string = defaultDelaunayFromArray.renderPoints();
const renderPointsRadius: string = defaultDelaunayFromArray.renderPoints(void 0, 3);
defaultDelaunayFromArray.renderPoints(validContext);
defaultDelaunayFromArray.renderPoints(validContext, 3);
// $ExpectError
defaultDelaunayFromArray.renderPoints(invalidContext);
// $ExpectError
defaultDelaunayFromArray.renderPoints(invalidContext, 3);

for (const p of defaultDelaunayFromArray.hullPolygon()) {
    const x = p[0];
    const y = p[1];
}
for (const poly of defaultDelaunayFromArray.trianglePolygons()) {
    for (const p of poly) {
        const x = p[0];
        const y = p[1];
    }
}
for (const p of defaultDelaunayFromArray.trianglePolygon(0)) {
    const x = p[0];
    const y = p[1];
}
const returnedDelaunayObject = defaultDelaunayFromArray.update();
returnedDelaunayObject.render();

const returnedVoronoiObjectNoArgs = defaultDelaunayFromArray.voronoi();
returnedVoronoiObjectNoArgs.render();
const returnedVoronoiObjectWithArgs = defaultDelaunayFromArray.voronoi([1, 2, 3, 4]);
returnedVoronoiObjectWithArgs.render();

// Test Voronoi class

const v = defaultDelaunayFromArray.voronoi();
const { circumcenters, vectors } = v;
const d: d3.Delaunay<[number, number]> = v.delaunay;
for (let i = 0, l = circumcenters.length; i < l; i++) {
    const x: number = circumcenters[i * 2];
    const y: number = circumcenters[i * 2 + 1];
}
for (let i = 0, l = vectors.length; i < l; i++) {
    const vx: number = vectors[i * 4];
    const vy: number = vectors[i * 4 + 1];
    const wx: number = vectors[i * 4 + 2];
    const wy: number = vectors[i * 4 + 3];
}
const xmin: number = v.xmin;
const ymin: number = v.ymin;
const xmax: number = v.xmax;
const ymax: number = v.ymax;
const contains: boolean = v.contains(0, 0.5, 0.5);

const vrender: string = v.render();
v.render(validContext);
// $ExpectError
v.render(invalidContext);

const vrenderBounds: string = v.renderBounds();
v.renderBounds(validContext);
// $ExpectError
v.renderBounds(invalidContext);

const renderCell: string = v.renderCell(0);
v.renderCell(0, validContext);
// $ExpectError
v.renderCell(0, invalidContext);

for (const poly of v.cellPolygons()) {
    for (const p of poly) {
        const x = p[0];
        const y = p[1];
    }
}
for (const p of v.cellPolygon(0)) {
    const x = p[0];
    const y = p[1];
}
for (const neighbor of v.neighbors(0)) {
    typeof neighbor;
}
const returnedVoronoiObject = v.update();
returnedVoronoiObject.render();
