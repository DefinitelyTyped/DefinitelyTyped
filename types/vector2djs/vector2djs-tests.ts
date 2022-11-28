import Vector2 from "vector2djs";

const origin = new Vector2(0,0)
const pt1 = new Vector2(1,1)
const pt2 = new Vector2(1,2);

const res1 = pt1
  .clone()
  .mul(pt2)
  .add(origin)
  .sub(origin)
  .div(2)
  .rotateDegrees(90)
  .rotateRadians(3.14)
  .cross(pt1);

const res2 = pt2
  .addSelf(pt1)
  .subSelf(origin)
  .mulSelf(pt1)
  .divSelf(2)
  .rotateDegreesSelf(90)
  .rotateRadiansSelf(3.14);

const d = pt1.dot(pt2);
const s = pt1.toString();
const s2 = pt1.format('{ %x; %y }');
