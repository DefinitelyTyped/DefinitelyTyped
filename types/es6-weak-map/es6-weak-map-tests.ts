import WeakMap = require('es6-weak-map');

new WeakMap<{}, string>();

const tuples: Array<[number, string]> = [ [0, 'foo'], [1, 'bar'] ];
new WeakMap<number, string>(tuples);

const map = new WeakMap<{}, string>();
const obj = {};

map.set(obj, 'foo');
map.get(obj);
map.has(obj);
map.delete(obj);
map.get(obj);
map.has(obj);
map.set(obj, 'bar');
map.has(obj);
