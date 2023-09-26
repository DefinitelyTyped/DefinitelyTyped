import Vec2 = require("vec2");

const vec = new Vec2(0, 1); // $ExpectType Vec2

new Vec2([0, 1]); // $ExpectType Vec2

new Vec2({ x: 0, y: 1 }); // $ExpectType Vec2

Vec2.fromArray([1, 2]); // $ExpectType Vec2

vec.equal(vec); // $ExpectType boolean

vec.change(); // $ExpectType Vec2
vec.change((vec: Vec2, prev: Vec2) => {}); // $ExpectType Vec2

vec.ignore(); // $ExpectType Vec2
vec.ignore((vec: Vec2, prev: Vec2) => {}); // $ExpectType Vec2

vec.set(0, 1); // $ExpectType Vec2
vec.set(0, 1, false); // $ExpectType Vec2

vec.zero(); // $ExpectType Vec2

vec.clone(); // $ExpectType Vec2

vec.negate(); // $ExpectType Vec2
vec.negate(true); // $ExpectType Vec2

vec.add(1, 1); // $ExpectType Vec2
vec.add(1, 1, true); // $ExpectType Vec2
vec.add([1, 1]); // $ExpectType Vec2
vec.add([1, 1], true); // $ExpectType Vec2
vec.add(vec); // $ExpectType Vec2
vec.add(vec, true); // $ExpectType Vec2

vec.subtract(1, 1); // $ExpectType Vec2
vec.subtract(1, 1, true); // $ExpectType Vec2
vec.subtract([1, 1]); // $ExpectType Vec2
vec.subtract([1, 1], true); // $ExpectType Vec2
vec.subtract(vec); // $ExpectType Vec2
vec.subtract(vec, true); // $ExpectType Vec2

vec.multiply(1, 1); // $ExpectType Vec2
vec.multiply(1, 1, true); // $ExpectType Vec2
vec.multiply([1, 1]); // $ExpectType Vec2
vec.multiply([1, 1], true); // $ExpectType Vec2
vec.multiply(vec); // $ExpectType Vec2
vec.multiply(vec, true); // $ExpectType Vec2

vec.divide(1, 1); // $ExpectType Vec2
vec.divide(1, 1, true); // $ExpectType Vec2
vec.divide([1, 1]); // $ExpectType Vec2
vec.divide([1, 1], true); // $ExpectType Vec2
vec.divide(vec); // $ExpectType Vec2
vec.divide(vec, true); // $ExpectType Vec2

vec.rotate(Math.PI); // $ExpectType Vec2
vec.rotate(Math.PI, 1); // $ExpectType Vec2
vec.rotate(Math.PI, 1, true); // $ExpectType Vec2

vec.length(); // $ExpectType number

vec.lengthSquared(); // $ExpectType number

vec.distance(vec); // $ExpectType number

vec.nearest([vec]); // $ExpectType Vec2

vec.normalize(); // $ExpectType Vec2
vec.normalize(true); // $ExpectType Vec2

vec.equal(1, 1); // $ExpectType boolean
vec.equal([1, 1]); // $ExpectType boolean
vec.equal(vec); // $ExpectType boolean

vec.abs(); // $ExpectType Vec2
vec.abs(true); // $ExpectType Vec2

vec.min(vec); // $ExpectType Vec2
vec.min(vec, true); // $ExpectType Vec2

vec.max(vec); // $ExpectType Vec2
vec.max(vec, true); // $ExpectType Vec2

vec.clamp(vec, vec); // $ExpectType Vec2
vec.clamp(vec, vec, true); // $ExpectType Vec2

vec.lerp(vec, 2); // $ExpectType Vec2
vec.lerp(vec, 2, true); // $ExpectType Vec2

vec.skew(); // $ExpectType Vec2
vec.skew(true); // $ExpectType Vec2

vec.dot(vec); // $ExpectType number

vec.perpDot(vec); // $ExpectType number

vec.angleTo(vec); // $ExpectType number

vec.isPointOnLine(vec, vec); // $ExpectType boolean

vec.toArray(); // $ExpectType number[]

vec.fromArray([1, 2]); // $ExpectType Vec2

vec.toJSON(); // $ExpectType { x: number; y: number; }

vec.toString(); // $ExpectType string

Vec2.precision = 7;

Vec2.clean = (val) => 42;
