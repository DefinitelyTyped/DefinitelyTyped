import hasOwnProperty = require('has');

// $ExpectType boolean
hasOwnProperty(Object.prototype, 'hasOwnProperty');
hasOwnProperty({ prop: null }, 'hasOwnProperty');
hasOwnProperty('foo', 'bar');
hasOwnProperty(123, '456');
hasOwnProperty(Symbol.iterator, Symbol.toStringTag);

declare const arrayLikeOrIterable: ArrayLike<any> | Iterable<any>;
if (hasOwnProperty(arrayLikeOrIterable, 'length')) {
    arrayLikeOrIterable; // $ExpectType ArrayLike<any>
}

// @ts-expect-error
hasOwnProperty(undefined, '');

// @ts-expect-error
hasOwnProperty(null, '');
