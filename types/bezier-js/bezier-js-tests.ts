import * as BezierJs from 'bezier-js';

const { Bezier } = BezierJs;

// $ExpectType Bezier
const bezier = new Bezier([1, 2, 3, 4]);
const point: BezierJs.Point = { x: 0, y: 0 };
// $ExpectType utils
const utils = bezier.getUtils();
const line: BezierJs.Line = { p1: { x: 0, y: 0 }, p2: { x: 1, y: 1 } };
// $ExpectType BBox
const bbox = bezier.bbox();
const offset: BezierJs.Offset = { x: 0, y: 0, c: point, n: point };
// $ExpectType PolyBezier
const poly = bezier.outline(1);
// $ExpectType Shape
const shape = utils.makeshape(bezier, bezier);
// $ExpectType Bezier
Bezier.quadraticFromPoints(
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    0.5,
);
// $ExpectType Bezier
Bezier.quadraticFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 });
// $ExpectType Bezier
Bezier.cubicFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, 0.5, 2);
// $ExpectType Bezier
Bezier.cubicFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, 0.5);
// $ExpectType Bezier
Bezier.cubicFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 });

// $ExpectType Arc[]
bezier.arcs();
// $ExpectType boolean
bezier.clockwise;
// $ExpectType Point
bezier.compute(0.5);
// $ExpectType void
bezier.computedirection();
// $ExpectType string[]
bezier.curveintersects([bezier], [bezier]);
// $ExpectType Point
bezier.derivative(0);
// $ExpectType Point
bezier.get(1);
// $ExpectType number
bezier.getLUT()[0].x;
// $ExpectType Point[]
bezier.hull(0);
// $ExpectType Inflection
bezier.extrema();
// $ExpectType number[] | string[] || string[] | number[]
bezier.intersects(bezier);
// $ExpectType number
bezier.length();
// $ExpectType number[]
bezier.lineIntersects(line);
// $ExpectType Point
bezier.normal(0);
// $ExpectType Offset | Bezier[]
bezier.offset(1, 2);
// $ExpectType number
bezier.on(point, 0);
bezier.order = 5;
// $ExpectType Shape[]
bezier.outlineshapes(1, 3);
// $ExpectType boolean
bezier.overlaps(bezier);
// $ExpectType Point
bezier.point(9);
// $ExpectType Projection
bezier.project(point);
// $ExpectType Bezier
bezier.raise();
// $ExpectType Bezier[]
bezier.reduce();
// $ExpectType Bezier
bezier.scale(4);
// $ExpectType string[]
bezier.selfintersects();
// $ExpectType boolean
bezier.simple();
// $ExpectType boolean
bezier.split(0, 1).clockwise;
// $ExpectType Bezier
bezier.split(0.5).left;
// $ExpectType string
bezier.toSVG();
// $ExpectType void
bezier.update();

// $ExpectType void
poly.addCurve(bezier);
// $ExpectType BBox
poly.bbox();
// $ExpectType Bezier
poly.curve(7);
// $ExpectType boolean
poly.curves[0]._3d;
// $ExpectType number
poly.length();
// $ExpectType number
poly.offset(9).points[0].y;
// $ExpectType Point
poly.points[0];

// $ExpectType number
utils.abcratio(0, 1);
// $ExpectType Point[]
utils.align([point], line);
// $ExpectType number
utils.angle(point, point, point);
// $ExpectType boolean
utils.approximately(5, 7, 0.001);
// $ExpectType number
utils.arcfn(1, function () {});
// $ExpectType boolean
utils.bboxoverlap(bbox, bbox);
// $ExpectType boolean
utils.between(0, 0, 1);
// $ExpectType Closest
utils.closest([point], point);
// $ExpectType any
utils.copy({});
// $ExpectType number
utils.dist(point, point);
// $ExpectType number[]
utils.droots([9]);
// $ExpectType void
utils.expandbox(bbox, bbox);
// $ExpectType BBox
utils.findbbox([bezier]);
// $ExpectType Arc
utils.getccenter(point, point, point);
// $ExpectType MinMax
utils.getminmax(bezier, 'x', [0]);
// $ExpectType number
utils.length(function () {});
// $ExpectType Point
utils.lerp(1, point, point);
// $ExpectType Point
utils.lli(offset, offset);
// $ExpectType Point
utils.lli4(point, point, point, point);
// $ExpectType Point
utils.lli8(0, 0, 0, 0, 0, 0, 0, 0);
// $ExpectType Bezier
utils.makeline(point, point);
// $ExpectType number
utils.map(0, 0, 0, 0, 0);
// $ExpectType string[]
utils.pairiteration(bezier, bezier);
// $ExpectType string
utils.pointsToString([point]);
// $ExpectType number
utils.projectionratio(0, 0);
// $ExpectType number[]
utils.roots([point], line);
// $ExpectType number
utils.round(0.999, 0.001);
// $ExpectType string[][] | number[][]
utils.shapeintersections(shape, bbox, shape, bbox);
