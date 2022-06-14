import Quaternion = require('quaternion');

// Constructor
new Quaternion(); // $ExpectType Quaternion
new Quaternion(1, 0, 0, 0); // $ExpectType Quaternion
new Quaternion({ re: 0, im: 1 }); // $ExpectType Quaternion
new Quaternion({ x: 0 }); // $ExpectType Quaternion
new Quaternion({ w: 0, x: 0, y: 0, z: 0 }); // $ExpectType Quaternion
new Quaternion('99'); // $ExpectType Quaternion

new Quaternion('99', 0); // $ExpectError
new Quaternion({ x: 0, im: 1 }); // $ExpectError
new Quaternion({}); // $ExpectError
new Quaternion({ re: 0 }); // $ExpectError

//// Instance Methods
const quaternion = new Quaternion();

// add
quaternion.add(0); // $ExpectType Quaternion
quaternion.add('0'); // $ExpectType Quaternion
quaternion.add({ x: 0 }); // $ExpectType Quaternion
quaternion.add({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.add([0, 0, 1]); // $ExpectType Quaternion
quaternion.add([0, 0, 1, 1]); // $ExpectType Quaternion

quaternion.add(); // $ExpectError
quaternion.add('0', 1); // $ExpectError
quaternion.add({}); // $ExpectError
quaternion.add({ x: 0, im: 1 }); // $ExpectError
quaternion.add([0, 1]); // $ExpectError

// sub
quaternion.sub(0); // $ExpectType Quaternion
quaternion.sub('0'); // $ExpectType Quaternion
quaternion.sub({ x: 0 }); // $ExpectType Quaternion
quaternion.sub({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.sub([0, 0, 1]); // $ExpectType Quaternion
quaternion.sub([0, 0, 1, 1]); // $ExpectType Quaternion

quaternion.sub(); // $ExpectError
quaternion.sub('0', 1); // $ExpectError
quaternion.sub({}); // $ExpectError
quaternion.sub({ x: 0, im: 1 }); // $ExpectError
quaternion.sub([0, 1]); // $ExpectError

// neg
quaternion.neg(); // $ExpectType Quaternion

quaternion.neg(''); // $ExpectError

// norm
quaternion.norm(); // $ExpectType number

quaternion.norm(''); // $ExpectError

// normSq
quaternion.normSq(); // $ExpectType number

quaternion.normSq(''); // $ExpectError

// normalize
quaternion.normalize(); // $ExpectType Quaternion

quaternion.normalize(''); // $ExpectError

// mul
quaternion.mul(0); // $ExpectType Quaternion
quaternion.mul('0'); // $ExpectType Quaternion
quaternion.mul({ x: 0 }); // $ExpectType Quaternion
quaternion.mul({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.mul([0, 0, 1]); // $ExpectType Quaternion
quaternion.mul([0, 0, 1, 1]); // $ExpectType Quaternion

quaternion.mul(); // $ExpectError
quaternion.mul('0', 1); // $ExpectError
quaternion.mul({}); // $ExpectError
quaternion.mul({ x: 0, im: 1 }); // $ExpectError
quaternion.mul([0, 1]); // $ExpectError

// scale
quaternion.scale(1); // $ExpectType Quaternion

quaternion.scale(); // $ExpectError

// dot
quaternion.dot(0); // $ExpectType number
quaternion.dot('0'); // $ExpectType number
quaternion.dot({ x: 0 }); // $ExpectType number
quaternion.dot({ re: 0, im: 0 }); // $ExpectType number
quaternion.dot([0, 0, 1]); // $ExpectType number
quaternion.dot([0, 0, 1, 1]); // $ExpectType number

quaternion.dot(); // $ExpectError
quaternion.dot('0', 1); // $ExpectError
quaternion.dot({}); // $ExpectError
quaternion.dot({ x: 0, im: 1 }); // $ExpectError
quaternion.dot([0, 1]); // $ExpectError

// inverse
quaternion.inverse(); // $ExpectType Quaternion

quaternion.inverse(''); // $ExpectError

// div
quaternion.div(0); // $ExpectType Quaternion
quaternion.div('0'); // $ExpectType Quaternion
quaternion.div({ x: 0 }); // $ExpectType Quaternion
quaternion.div({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.div([0, 0, 1]); // $ExpectType Quaternion
quaternion.div([0, 0, 1, 1]); // $ExpectType Quaternion

quaternion.div(); // $ExpectError
quaternion.div('0', 1); // $ExpectError
quaternion.div({}); // $ExpectError
quaternion.div({ x: 0, im: 1 }); // $ExpectError
quaternion.div([0, 1]); // $ExpectError

// inverse
quaternion.inverse(); // $ExpectType Quaternion

quaternion.inverse(''); // $ExpectError

// inverse
quaternion.inverse(); // $ExpectType Quaternion

quaternion.inverse(''); // $ExpectError

// inverse
quaternion.inverse(); // $ExpectType Quaternion

quaternion.inverse(''); // $ExpectError

// pow
quaternion.pow(0); // $ExpectType Quaternion
quaternion.pow('0'); // $ExpectType Quaternion
quaternion.pow({ x: 0 }); // $ExpectType Quaternion
quaternion.pow({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.pow([0, 0, 1]); // $ExpectType Quaternion
quaternion.pow([0, 0, 1, 1]); // $ExpectType Quaternion

quaternion.pow(); // $ExpectError
quaternion.pow('0', 1); // $ExpectError
quaternion.pow({}); // $ExpectError
quaternion.pow({ x: 0, im: 1 }); // $ExpectError
quaternion.pow([0, 1]); // $ExpectError

// equals
quaternion.equals(0); // $ExpectType boolean
quaternion.equals('0'); // $ExpectType boolean
quaternion.equals({ x: 0 }); // $ExpectType boolean
quaternion.equals({ re: 0, im: 0 }); // $ExpectType boolean
quaternion.equals([0, 0, 1]); // $ExpectType boolean
quaternion.equals([0, 0, 1, 1]); // $ExpectType boolean

quaternion.equals(); // $ExpectError
quaternion.equals('0', 1); // $ExpectError
quaternion.equals({}); // $ExpectError
quaternion.equals({ x: 0, im: 1 }); // $ExpectError
quaternion.equals([0, 1]); // $ExpectError

// isFinite
quaternion.isFinite(); // $ExpectType boolean

quaternion.isFinite(''); // $ExpectError

// isNaN
quaternion.isNaN(); // $ExpectType boolean

quaternion.isNaN(''); // $ExpectError

// toString
quaternion.toString(); // $ExpectType string

quaternion.toString(''); // $ExpectError

// real
quaternion.real(); // $ExpectType number

quaternion.real(''); // $ExpectError

// imag
quaternion.imag(); // $ExpectType [number, number, number]

quaternion.imag(''); // $ExpectError

// toVector
quaternion.toVector(); // $ExpectType [number, number, number, number]

quaternion.toVector(''); // $ExpectError

// toMatrix
quaternion.toMatrix(true); // $ExpectType Matrix3_2D
quaternion.toMatrix(false); // $ExpectType Matrix3

quaternion.toMatrix(); // $ExpectError

// toMatrix4
quaternion.toMatrix4(true); // $ExpectType Matrix4_2D
quaternion.toMatrix4(false); // $ExpectType Matrix4

quaternion.toMatrix4(); // $ExpectError

// toEuler
quaternion.toEuler(); // $ExpectType { roll: number; pitch: number; yaw: number; }

quaternion.toEuler(''); // $ExpectError

// clone
quaternion.clone(); // $ExpectType Quaternion

quaternion.clone(''); // $ExpectError

// rotateVector
quaternion.rotateVector([1, 2, 0]); // $ExpectType [number, number, number]

quaternion.rotateVector(); // $ExpectError
quaternion.rotateVector([1, 2]); // $ExpectError

// slerp
quaternion.slerp(0); // $ExpectType (pct: number) => Quaternion
quaternion.slerp('0'); // $ExpectType (pct: number) => Quaternion
quaternion.slerp({ x: 0 }); // $ExpectType (pct: number) => Quaternion
quaternion.slerp({ re: 0, im: 0 }); // $ExpectType (pct: number) => Quaternion
quaternion.slerp([0, 0, 1]); // $ExpectType (pct: number) => Quaternion
quaternion.slerp([0, 0, 1, 1]); // $ExpectType (pct: number) => Quaternion

quaternion.slerp(); // $ExpectError
quaternion.slerp('0', 1); // $ExpectError
quaternion.slerp({}); // $ExpectError
quaternion.slerp({ x: 0, im: 1 }); // $ExpectError
quaternion.slerp([0, 1]); // $ExpectError

//// Static Methods

// fromAxisAngle
Quaternion.fromAxisAngle([1, 2, 3], 3); // $ExpectType Quaternion

Quaternion.fromAxisAngle([1, 2, 3]); // $ExpectError
Quaternion.fromAxisAngle(); // $ExpectError

// fromBetweenVectors
Quaternion.fromBetweenVectors([1, 2, 3], [0, 2, 3]); // $ExpectType Quaternion

Quaternion.fromBetweenVectors([1, 2, 3]); // $ExpectError
Quaternion.fromBetweenVectors(); // $ExpectError

// random
Quaternion.random(); // $ExpectType Quaternion

Quaternion.random(1); // $ExpectError

// fromEuler
Quaternion.fromEuler(1, 2, 3); // $ExpectType Quaternion
Quaternion.fromEuler(1, 2, 3, 'XYZ'); // $ExpectType Quaternion

Quaternion.fromEuler(1, 2, 3, 3); // $ExpectError
Quaternion.fromEuler(1, 2); // $ExpectError
Quaternion.fromEuler(1); // $ExpectError
Quaternion.fromEuler(); // $ExpectError
