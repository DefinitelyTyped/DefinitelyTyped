import Polygon = require("polygon");
import Vec2 = require("vec2");

// $ExpectType Polygon
const p = new Polygon([
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
    [0, 0],
]);

const p2 = new Polygon([
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
    [0, 0],
]);

// $ExpectType boolean
p.contains({ x: 3, y: 3, w: 4, h: 3 });

// $ExpectType Vec2[]
p.points;

// $ExpectType number
p.length;

// $ExpectType Polygon
p.each((prev, current, next, idx) => {});

// $ExpectType void
p.insert(new Vec2(1, 2), 1);

// $ExpectType number
p.area();

// $ExpectType boolean
p.winding();

// $ExpectType Polygon
p.rewind(true);

// $ExpectType Vec2
p.closestPointTo(new Vec2(300, 300));

// $ExpectType Polygon
p.dedupe();

// $ExpectType boolean
p.containsPoint(new Vec2(5, 5));

// $ExpectType Polygon
p.remove(new Vec2(5, 5));

// $ExpectType Polygon
p.remove(0);

// $ExpectType Polygon
p.clean();

// $ExpectType Polygon
p.clone();

// $ExpectType { x: number; y: number; w: number; h: number; }
p.aabb();

// $ExpectType boolean
p.containsPolygon(p2);

// $ExpectType Polygon
p.offset(-10);

// $ExpectType Vec2
p.point(0);

// $ExpectType Vec2
p.center();

// $ExpectType Polygon
p.scale(10);

// $ExpectType Polygon
p.scale(10, new Vec2(10, 1));

// $ExpectType Polygon
p.scale(10, new Vec2(10, 1), true);

// $ExpectType Polygon
p.scale(10, null, true);

// $ExpectType Polygon
p.lines((start, end, idx) => {});

// $ExpectType [Vec2, Vec2]
p.line(0);

// $ExpectType Polygon
p.rotate(Math.PI);

// $ExpectType Polygon
p.rotate(Math.PI, new Vec2(0, 0));

// $ExpectType Polygon
p.rotate(Math.PI, new Vec2(0, 0), true);

// $ExpectType Polygon
p.rotate(Math.PI, null, true);

// $ExpectType boolean
p.equal(p2);

// $ExpectType Polygon
p.translate(new Vec2(10, 10));

// $ExpectType Polygon
p.translate(new Vec2(10, 10), true);

// $ExpectType Polygon
p.selfIntersections();

// $ExpectType number[][]
p.toArray();

// $ExpectType Polygon
p.union(p2);

// $ExpectType Polygon
p.cut(p2);
