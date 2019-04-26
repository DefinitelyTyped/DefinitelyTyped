import Vec2 = require('vec2');

// some constructor tests
const instance = new Vec2([0, 1]);
const instanceFromArray = new Vec2(instance.toArray());
const json = instanceFromArray.toJSON();
const instanceFromJson = new Vec2(json.x, json.y);
const shouldBeTrue = instanceFromJson.equal(instance);
