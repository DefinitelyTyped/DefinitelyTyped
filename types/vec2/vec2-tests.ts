import Vec2 = require('vec2');

// $ExpectType Vec2
const instance = new Vec2([0, 1]);

// $ExpectType Vec2
const instanceFromArray = new Vec2(instance.toArray());

// $ExpectType { x: number; y: number; }
const json = instanceFromArray.toJSON();

// $ExpectType Vec2
const instanceFromJson = new Vec2(json.x, json.y);

// $ExpectType boolean
const shouldBeTrue = instanceFromJson.equal(instance);

// $ExpectType number
instance.dot(instanceFromArray);

// $ExpectType number
instance.perpDot(instanceFromArray);
