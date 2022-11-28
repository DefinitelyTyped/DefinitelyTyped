import Vector2 = require('vector2js');

const o = new Vector2(0, 0);
const p = new Vector2(1, 1);
const v = new Vector2(1, 2);

const res1 = p.add(o).clone().mul(v).flipXY().sub(o).div(2).rotateDegrees(90).rotateRadians(3.14).cross(p);

const res2 = v.addSelf(p).mulSelf(p).flipXYSelf().subSelf(o).divSelf(2).rotateDegreesSelf(90).rotateRadiansSelf(3.14);

const d = p.dot(v);
const s = p.toString();
const s2 = p.format('{ %x; %y }');
