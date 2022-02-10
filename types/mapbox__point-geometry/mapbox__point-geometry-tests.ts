import Point = require('@mapbox/point-geometry');

const point = new Point(9, 25);

// $ExpectType number
point.x;

// $ExpectType number
point.y;

// $ExpectType Point
point.clone();

// $ExpectType Point
point.add(new Point(59, 6));

// $ExpectType Point
point.sub(new Point(59, 6));

// $ExpectType Point
point.multiByPoint(new Point(59, 6));

// $ExpectType Point
point.divByPoint(new Point(59, 6));

// $ExpectType Point
point.mult(2);

// $ExpectType Point
point.div(2);

// $ExpectType Point
point.rotate(45);

// $ExpectType Point
point.rotateAround(45, new Point(2, 3));

// $ExpectType Point
point.matMult([2, 4, 8]);

// $ExpectType Point
point.unit();

// $ExpectType Point
point.perp();

// $ExpectType Point
point.round();

// $ExpectType number
point.mag();

// $ExpectType boolean
point.equals(new Point(-1, 2));

// $ExpectType number
point.dist(new Point(-1, 2));

// $ExpectType number
point.distSqr(new Point(-1, 2));

// $ExpectType number
point.angle();

// $ExpectType number
point.angleTo(new Point(1, 2));

// $ExpectType number
point.angleWith(new Point(1, 2));

// $ExpectType number
point.angleWithSep(5, 45);

// $ExpectType Point
Point.convert([1, 2]);

// $ExpectType Point
Point.convert(new Point(-1, 2));
