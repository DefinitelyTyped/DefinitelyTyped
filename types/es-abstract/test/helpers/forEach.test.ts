import forEach = require('es-abstract/helpers/forEach');

forEach([1, 2, '3'], function(v, i, a) {
    v; // $ExpectType string | number
    i; // $ExpectType number
    a; // $ExpectType (string | number)[]
    this; // $ExpectType undefined
});

forEach(
    {
        a: 1,
        2: '3',
        [Symbol.toStringTag]: 'foo',
    },
    function(v, k, o) {
        v; // $ExpectType string | number
        k; // $ExpectType string
        o; // $ExpectType { a: number; 2: string; [Symbol.toStringTag]: string; }
        this; // $ExpectType undefined
    },
);
