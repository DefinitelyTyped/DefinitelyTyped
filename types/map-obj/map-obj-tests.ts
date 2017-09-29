import mapObj = require('map-obj');

const newObject = mapObj({foo: 'bar'}, (key, value) => [value, key]);
newObject; // $ExpectType { [x: string]: "foo"; }
newObject.bar; // $ExpectType "foo"

const obj = mapObj({foo: 'bar'}, (key, value) => [value, key], {target: {baz: 'baz'}});
obj; // $ExpectType { baz: string; } & { [x: string]: "foo"; }
obj.bar; // $ExpectType "foo"
obj.baz; // $ExpectType string

const obj1 = mapObj({foo: 'bar'}, (key, value) => [value, key], {target: {baz: 'baz'}, deep: false});
obj1; // $ExpectType { baz: string; } & { [x: string]: "foo"; }
obj1.bar; // $ExpectType "foo"
obj1.baz; // $ExpectType string

const obj2 = mapObj({foo: 'bar'}, (key, value) => [value, key], {deep: true});
obj2; // $ExpectType object
const obj3 = mapObj({foo: 'bar'}, (key, value) => [value, key], {deep: true, target: {bar: 'baz'}});
obj3; // $ExpectType object
