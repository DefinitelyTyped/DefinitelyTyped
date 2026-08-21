import find = require("array.prototype.find");

import "array.prototype.find/auto";

const arr = [{ a: 1 }, { b: 2 }, { c: 3 }] as const;

// $ExpectType { readonly a: 1; } | { readonly b: 2; } | { readonly c: 3; } | undefined
find(
    arr,
    (value, index, array) => {
        value; // $ExpectType { readonly a: 1; } | { readonly b: 2; } | { readonly c: 3; }
        index; // $ExpectType number
        array; // $ExpectType readonly ({ readonly a: 1; } | { readonly b: 2; } | { readonly c: 3; })[]

        return "b" in value;
    },
);
