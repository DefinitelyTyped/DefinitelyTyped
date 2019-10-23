function test() {

    var bezierjs: typeof BezierJs;

    var bezier = new bezierjs.Bezier([1, 2, 3, 4]);
    var cap = new bezierjs.BezierCap([]);
    var point: BezierJs.Point = { x: 0, y: 0 };
    var utils = bezier.getUtils();
    var line: BezierJs.Line = { p1: { x: 0, y: 0 }, p2: { x: 1, y: 1 } };
    var abc: BezierJs.ABC = { A: null, B: null, C: null };
    var arc: BezierJs.Arc = { e: 0, s: 0, x: 0, y: 0, r: 1, interval:{ start: 0, end: 1 } };
    var bbox: BezierJs.BBox = bezier.bbox();
    var closest: BezierJs.Closest = { mdist: 1, mpos: 0 };
    var inflection: BezierJs.Inflection = { values: null, x: [0], y: [0], z: [0] };
    var minmax: BezierJs.MinMax = { min: 0, max: 0 };
    var offset: BezierJs.Offset = { x: 0, y: 0, c: point, n: point };
    var pair: BezierJs.Pair = { left: bezier, right: bezier };
    var poly: BezierJs.PolyBezier = bezier.outline(1);
    var projection: BezierJs.Projection = { x: 0, y: 0, t: 9, d: 4 };
    var shape: BezierJs.Shape = {
        startcap: cap, endcap: cap, forward: bezier, back: bezier, bbox: bbox, intersections: function (shape) { return [[0]]; }
    };
    var split: BezierJs.Split = { left: bezier, right: bezier, span: [point] };
    var quadratic: BezierJs.Bezier = BezierJs.Bezier.quadraticFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, 0.5);
    var quadratic: BezierJs.Bezier = BezierJs.Bezier.quadraticFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 });
    var cubic: BezierJs.Bezier = BezierJs.Bezier.cubicFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, 0.5, 2);
    var cubic: BezierJs.Bezier = BezierJs.Bezier.cubicFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, 0.5);
    var cubic: BezierJs.Bezier = BezierJs.Bezier.cubicFromPoints({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 });

    bezier.arcs();
    bezier.clockwise;
    bezier.compute(.5);
    bezier.computedirection();
    bezier.curveintersects([bezier], [bezier]);
    bezier.derivative(0);
    bezier.get(1);
    bezier.getLUT()[0].x;
    bezier.hull(0);
    bezier.extrema();
    bezier.intersects(bezier);
    bezier.length();
    bezier.lineIntersects(line);
    bezier.normal(0);
    bezier.offset(1, 2);
    bezier.on(point, 0);
    bezier.order = 5;
    bezier.outlineshapes(1, 3);
    bezier.overlaps(bezier);
    bezier.point(9);
    bezier.project(point);
    bezier.raise();
    bezier.reduce();
    bezier.scale(4);
    bezier.selfintersects();
    bezier.simple();
    bezier.split(0, 1).clockwise;
    bezier.split(0.5).left;
    bezier.toSVG();
    bezier.update();

    cap.virtual = true;

    poly.addCurve(bezier);
    poly.bbox();
    poly.curve(7);
    poly.curves[0]._3d;
    poly.length();
    poly.offset(9).points[0].y;
    poly.points[0];

    utils.abcratio(0, 1);
    utils.align([point], line);
    utils.angle(point, point, point);
    utils.approximately(5, 7, .001);
    utils.arcfn(1, function () { });
    utils.bboxoverlap(bbox, bbox);
    utils.between(0, 0, 1);
    utils.closest([point], point);
    utils.copy({});
    utils.dist(point, point);
    utils.droots([9]);
    utils.expandbox(bbox, bbox);
    utils.findbbox([bezier]);
    utils.getccenter(point, point, point);
    utils.getminmax(bezier, 'x', [0]);
    utils.length(function () { });
    utils.lerp(1, point, point);
    utils.lli(offset, offset);
    utils.lli4(point, point, point, point);
    utils.lli8(0, 0, 0, 0, 0, 0, 0, 0);
    utils.makeline(point, point);
    utils.makeshape(bezier, bezier);
    utils.map(0, 0, 0, 0, 0);
    utils.pairiteration(bezier, bezier);
    utils.pointsToString([point]);
    utils.projectionratio(0, 0);
    utils.roots([point], line);
    utils.round(.999, .001);
    utils.shapeintersections(shape, bbox, shape, bbox);

}
