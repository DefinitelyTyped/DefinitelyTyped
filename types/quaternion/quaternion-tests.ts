import Quaternion = require('quaternion');

// Constructor
new Quaternion(); // $ExpectType Quaternion
new Quaternion(1, 0, 0, 0); // $ExpectType Quaternion
new Quaternion({ re: 0, im: 1 }); // $ExpectType Quaternion
new Quaternion({ x: 0 }); // $ExpectType Quaternion
new Quaternion({ w: 0, x: 0, y: 0, z: 0 }); // $ExpectType Quaternion
new Quaternion('99'); // $ExpectType Quaternion

// @ts-expect-error
new Quaternion('99', 0);
// @ts-expect-error
new Quaternion({ x: 0, im: 1 });
// @ts-expect-error
new Quaternion({});
// @ts-expect-error
new Quaternion({ re: 0 });

//// Instance Methods
const quaternion = new Quaternion();

// add
quaternion.add(0); // $ExpectType Quaternion
quaternion.add('0'); // $ExpectType Quaternion
quaternion.add({ x: 0 }); // $ExpectType Quaternion
quaternion.add({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.add([0, 0, 1]); // $ExpectType Quaternion
quaternion.add([0, 0, 1, 1]); // $ExpectType Quaternion

// @ts-expect-error
quaternion.add();
// @ts-expect-error
quaternion.add('0', 1);
// @ts-expect-error
quaternion.add({});
// @ts-expect-error
quaternion.add({ x: 0, im: 1 });
// @ts-expect-error
quaternion.add([0, 1]);

// sub
quaternion.sub(0); // $ExpectType Quaternion
quaternion.sub('0'); // $ExpectType Quaternion
quaternion.sub({ x: 0 }); // $ExpectType Quaternion
quaternion.sub({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.sub([0, 0, 1]); // $ExpectType Quaternion
quaternion.sub([0, 0, 1, 1]); // $ExpectType Quaternion

// @ts-expect-error
quaternion.sub();
// @ts-expect-error
quaternion.sub('0', 1);
// @ts-expect-error
quaternion.sub({});
// @ts-expect-error
quaternion.sub({ x: 0, im: 1 });
// @ts-expect-error
quaternion.sub([0, 1]);

// neg
quaternion.neg(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.neg('');

// norm
quaternion.norm(); // $ExpectType number

// @ts-expect-error
quaternion.norm('');

// normSq
quaternion.normSq(); // $ExpectType number

// @ts-expect-error
quaternion.normSq('');

// normalize
quaternion.normalize(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.normalize('');

// mul
quaternion.mul(0); // $ExpectType Quaternion
quaternion.mul('0'); // $ExpectType Quaternion
quaternion.mul({ x: 0 }); // $ExpectType Quaternion
quaternion.mul({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.mul([0, 0, 1]); // $ExpectType Quaternion
quaternion.mul([0, 0, 1, 1]); // $ExpectType Quaternion

// @ts-expect-error
quaternion.mul();
// @ts-expect-error
quaternion.mul('0', 1);
// @ts-expect-error
quaternion.mul({});
// @ts-expect-error
quaternion.mul({ x: 0, im: 1 });
// @ts-expect-error
quaternion.mul([0, 1]);

// scale
quaternion.scale(1); // $ExpectType Quaternion

// @ts-expect-error
quaternion.scale();

// dot
quaternion.dot(0); // $ExpectType number
quaternion.dot('0'); // $ExpectType number
quaternion.dot({ x: 0 }); // $ExpectType number
quaternion.dot({ re: 0, im: 0 }); // $ExpectType number
quaternion.dot([0, 0, 1]); // $ExpectType number
quaternion.dot([0, 0, 1, 1]); // $ExpectType number

// @ts-expect-error
quaternion.dot();
// @ts-expect-error
quaternion.dot('0', 1);
// @ts-expect-error
quaternion.dot({});
// @ts-expect-error
quaternion.dot({ x: 0, im: 1 });
// @ts-expect-error
quaternion.dot([0, 1]);

// inverse
quaternion.inverse(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.inverse('');

// div
quaternion.div(0); // $ExpectType Quaternion
quaternion.div('0'); // $ExpectType Quaternion
quaternion.div({ x: 0 }); // $ExpectType Quaternion
quaternion.div({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.div([0, 0, 1]); // $ExpectType Quaternion
quaternion.div([0, 0, 1, 1]); // $ExpectType Quaternion

// @ts-expect-error
quaternion.div();
// @ts-expect-error
quaternion.div('0', 1);
// @ts-expect-error
quaternion.div({});
// @ts-expect-error
quaternion.div({ x: 0, im: 1 });
// @ts-expect-error
quaternion.div([0, 1]);

// inverse
quaternion.inverse(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.inverse('');

// inverse
quaternion.inverse(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.inverse('');

// inverse
quaternion.inverse(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.inverse('');

// pow
quaternion.pow(0); // $ExpectType Quaternion
quaternion.pow('0'); // $ExpectType Quaternion
quaternion.pow({ x: 0 }); // $ExpectType Quaternion
quaternion.pow({ re: 0, im: 0 }); // $ExpectType Quaternion
quaternion.pow([0, 0, 1]); // $ExpectType Quaternion
quaternion.pow([0, 0, 1, 1]); // $ExpectType Quaternion

// @ts-expect-error
quaternion.pow();
// @ts-expect-error
quaternion.pow('0', 1);
// @ts-expect-error
quaternion.pow({});
// @ts-expect-error
quaternion.pow({ x: 0, im: 1 });
// @ts-expect-error
quaternion.pow([0, 1]);

// equals
quaternion.equals(0); // $ExpectType boolean
quaternion.equals('0'); // $ExpectType boolean
quaternion.equals({ x: 0 }); // $ExpectType boolean
quaternion.equals({ re: 0, im: 0 }); // $ExpectType boolean
quaternion.equals([0, 0, 1]); // $ExpectType boolean
quaternion.equals([0, 0, 1, 1]); // $ExpectType boolean

// @ts-expect-error
quaternion.equals();
// @ts-expect-error
quaternion.equals('0', 1);
// @ts-expect-error
quaternion.equals({});
// @ts-expect-error
quaternion.equals({ x: 0, im: 1 });
// @ts-expect-error
quaternion.equals([0, 1]);

// isFinite
quaternion.isFinite(); // $ExpectType boolean

// @ts-expect-error
quaternion.isFinite('');

// isNaN
quaternion.isNaN(); // $ExpectType boolean

// @ts-expect-error
quaternion.isNaN('');

// toString
quaternion.toString(); // $ExpectType string

// @ts-expect-error
quaternion.toString('');

// real
quaternion.real(); // $ExpectType number

// @ts-expect-error
quaternion.real('');

// imag
quaternion.imag(); // $ExpectType [number, number, number]

// @ts-expect-error
quaternion.imag('');

// toVector
quaternion.toVector(); // $ExpectType [number, number, number, number]

// @ts-expect-error
quaternion.toVector('');

// toMatrix
quaternion.toMatrix(true); // $ExpectType Matrix3_2D
quaternion.toMatrix(false); // $ExpectType Matrix3

// @ts-expect-error
quaternion.toMatrix();

// toMatrix4
quaternion.toMatrix4(true); // $ExpectType Matrix4_2D
quaternion.toMatrix4(false); // $ExpectType Matrix4

// @ts-expect-error
quaternion.toMatrix4();

// toEuler
quaternion.toEuler(); // $ExpectType { roll: number; pitch: number; yaw: number; }

// @ts-expect-error
quaternion.toEuler('');

// clone
quaternion.clone(); // $ExpectType Quaternion

// @ts-expect-error
quaternion.clone('');

// rotateVector
quaternion.rotateVector([1, 2, 0]); // $ExpectType [number, number, number]

// @ts-expect-error
quaternion.rotateVector();
// @ts-expect-error
quaternion.rotateVector([1, 2]);

// slerp
quaternion.slerp(0); // $ExpectType (pct: number) => Quaternion
quaternion.slerp('0'); // $ExpectType (pct: number) => Quaternion
quaternion.slerp({ x: 0 }); // $ExpectType (pct: number) => Quaternion
quaternion.slerp({ re: 0, im: 0 }); // $ExpectType (pct: number) => Quaternion
quaternion.slerp([0, 0, 1]); // $ExpectType (pct: number) => Quaternion
quaternion.slerp([0, 0, 1, 1]); // $ExpectType (pct: number) => Quaternion

// @ts-expect-error
quaternion.slerp();
// @ts-expect-error
quaternion.slerp('0', 1);
// @ts-expect-error
quaternion.slerp({});
// @ts-expect-error
quaternion.slerp({ x: 0, im: 1 });
// @ts-expect-error
quaternion.slerp([0, 1]);

//// Static Methods

// fromAxisAngle
Quaternion.fromAxisAngle([1, 2, 3], 3); // $ExpectType Quaternion

// @ts-expect-error
Quaternion.fromAxisAngle([1, 2, 3]);
// @ts-expect-error
Quaternion.fromAxisAngle();

// fromBetweenVectors
Quaternion.fromBetweenVectors([1, 2, 3], [0, 2, 3]); // $ExpectType Quaternion

// @ts-expect-error
Quaternion.fromBetweenVectors([1, 2, 3]);
// @ts-expect-error
Quaternion.fromBetweenVectors();

// random
Quaternion.random(); // $ExpectType Quaternion

// @ts-expect-error
Quaternion.random(1);

// fromEuler
Quaternion.fromEuler(1, 2, 3); // $ExpectType Quaternion
Quaternion.fromEuler(1, 2, 3, 'XYZ'); // $ExpectType Quaternion

// @ts-expect-error
Quaternion.fromEuler(1, 2, 3, 3);
// @ts-expect-error
Quaternion.fromEuler(1, 2);
// @ts-expect-error
Quaternion.fromEuler(1);
// @ts-expect-error
Quaternion.fromEuler();
