import shallowEqual = require('shallowequal');

const a = {};
const b = {};

shallowEqual(a, b); // $ExpectType boolean
// $ExpectType boolean
shallowEqual(a, b, (a, b, indexOrKey) => {
    a; // $ExpectType any
    b; // $ExpectType any
    indexOrKey; // $ExpectType string | number | undefined

    return false;
});
shallowEqual(a, b, () => {}); // $ExpectType boolean
// $ExpectType boolean
shallowEqual(
    a,
    b,
    function() {
        this; // $ExpectType { foo: string; }
    },
    { foo: 'bar' }
);
