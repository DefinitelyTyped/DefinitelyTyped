import ES2017 = require('es-abstract/es2017');

declare const any: unknown;
declare const object: object;

const OWN_PROPERTY_TYPES = String() as 'key' | 'value' | 'key+value';

// $ExpectType number
ES2017.ToIndex(any);

ES2017.EnumerableOwnProperties({ Object, String }, 'key'); // $ExpectType string[]
ES2017.EnumerableOwnProperties({ Object, String }, 'value'); // $ExpectType (ObjectConstructor | StringConstructor)[]
ES2017.EnumerableOwnProperties({ Object, String }, 'key+value'); // $ExpectType [string, ObjectConstructor | StringConstructor][]

ES2017.EnumerableOwnProperties(object, 'key'); // $ExpectType string[]
ES2017.EnumerableOwnProperties(object, 'value'); // $ExpectType any[]
ES2017.EnumerableOwnProperties(object, 'key+value'); // $ExpectType [string, any][]
ES2017.EnumerableOwnProperties(object, OWN_PROPERTY_TYPES); // $ExpectType any[]

// $ExpectType number[]
ES2017.IterableToList([1, 2, 3]);

// $ExpectType number[]
ES2017.IterableToList(undefined, () => [1, 2, 3][Symbol.iterator]());

// $ExpectType number[]
ES2017.IterableToList([1, 2, 3] as ArrayLike<number>, function*() {
    let i = 0;
    while (i < this.length) {
        yield this[i++];
    }
});

// Removed in ES2017:
ES2017.EnumerableOwnNames; // $ExpectError
ES2017.IterableToArrayLike; // $ExpectError
