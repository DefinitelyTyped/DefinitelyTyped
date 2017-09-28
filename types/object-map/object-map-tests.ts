import objectMap = require('object-map');

const obj = {foo: 7, bar: 3, baz: -1};

let total = 0;
const keys: string[] = [];
objectMap(obj, (val, key) => {
	total += val;
	keys.push(key);
});
