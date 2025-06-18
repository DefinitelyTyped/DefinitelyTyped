import Vector = require("vector-object");

// $ExpectType Vector
const v = new Vector({ x: 0, y: 0 });
const v2 = new Vector({ x: 1, y: 1 });
// $ExpectType Vector
v.clone();
// $ExpectType object
v.toObject();
// $ExpectType string[]
v.getComponents();
// $ExpectType boolean
v.isEqual(v2);
// $ExpectType number
v.getDistance(v2);
// $ExpectType number
v.getLength();
// $ExpectType number
v.getDotProduct(v2);
// $ExpectType number
v.getCosineSimilarity(v2);
// $ExpectType Vector
v.normalize();
// $ExpectType Vector
v.add(v2);
// $ExpectType Vector
v.subtract(v2);
// $ExpectType Vector
v.multiply(2);
// $ExpectType Vector
v.divide(2);
