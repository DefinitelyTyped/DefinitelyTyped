import isIterable = require('is-iterable');

declare const it: unknown;

isIterable(it); // $ExpectType boolean
isIterable([]); // $ExpectType boolean
isIterable({}); // $ExpectType boolean

if (isIterable(it)) {
    for (const x of it) {
        x; // $ExpectType unknown
    }
}
