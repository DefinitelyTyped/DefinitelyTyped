import stringify = require('fast-json-stable-stringify');

const obj = { c: 8, b: [{ z: 6, y: 5, x: 4 }, 7], a: 3 };

stringify(obj); // $ExpectType string
// $ExpectType string
stringify(obj, (a, b) => {
    a; // $ExpectType CompareDescriptor
    b; // $ExpectType CompareDescriptor
    return a.key < b.key ? 1 : -1;
});
// $ExpectType string
stringify(obj, {
    cmp(a, b) {
        a; // $ExpectType CompareDescriptor
        b; // $ExpectType CompareDescriptor
        return a.key < b.key ? 1 : -1;
    },
});
stringify(obj, { cycles: true }); // $ExpectType string
