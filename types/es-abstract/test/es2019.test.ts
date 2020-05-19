import ES2019 = require('es-abstract/es2019');

const map = new Map<object, unknown>();

const array1 = [1, 2, 3];
const array2 = [1, [2, 3]];

ES2019.AddEntriesFromIterable(map, map, map.set);

ES2019.FlattenIntoArray(array1, array2, array2.length, 0, 5);
ES2019.FlattenIntoArray(array1, array2, array2.length, 0, 5, el => el, null);
ES2019.FlattenIntoArray(array1, array2, array2.length, 0, 5, (el: number | number[]) => el, null);
ES2019.FlattenIntoArray(array1, array2, array2.length, 0, 5, (el: number | Iterable<number>) => el, null);

ES2019.TrimString('foo', 'start'); // $ExpectType string
ES2019.TrimString('foo', 'end'); // $ExpectType string
ES2019.TrimString('foo', 'start+end'); // $ExpectType string
