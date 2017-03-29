import WeakMap = require('es6-weak-map');

new WeakMap<{}, string>();

var tuples: Array<[number, string]> = [ [0, 'foo'], [1, 'bar'] ];
new WeakMap<number, string>(tuples);

var map = new WeakMap<{}, string>();
var obj = {};

map.set(obj, 'foo');
map.get(obj);
map.has(obj);
map.delete(obj);
map.get(obj);
map.has(obj);
map.set(obj, 'bar');
map.has(obj);
