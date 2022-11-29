import Vector = require('vector2js');

const o = new Vector(0, 0);
const p = new Vector(1, 1);
const v = new Vector(1, 2);

const res1 = p.add(o).clone().mul(v).flipXY().sub(o).div(2).rotateDegrees(90).rotateRadians(3.14).cross(p);

const res2 = v.addSelf(p).mulSelf(p).flipXYSelf().subSelf(o).divSelf(2).rotateDegreesSelf(90).rotateRadiansSelf(3.14);

const res3 = p.add({ x: 1, y: 1 });
const f1 = Vector.fromArray([1, 1]);
const f2 = Vector.fromDegrees(45);
const f3 = Vector.fromRadians(0);
const f4 = Vector.fromString('1,1');

const d = p.dot(v);
const s = p.toString();
const s2 = p.format('{ %x; %y }');

Vector.zero; // $ExpectType Vector
Vector.one; // $ExpectType Vector
Vector.up; // $ExpectType Vector
Vector.down; // $ExpectType Vector
Vector.left; // $ExpectType Vector
Vector.right; // $ExpectType Vector
Vector.upLeft; // $ExpectType Vector
Vector.downLeft; // $ExpectType Vector
Vector.upRight; // $ExpectType Vector
Vector.downRight; // $ExpectType Vector
const s2 = p.format('{ %x; %y }');
