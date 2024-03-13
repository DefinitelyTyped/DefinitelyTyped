import isMap = require("is-map");

// $ExpectType boolean
isMap(new Map());

// $ExpectType boolean
isMap(new WeakMap());

// $ExpectType boolean
isMap(new Set());

const x: unknown = new Map();

if (isMap(x)) {
    // $ExpectType Map<any, any>
    x;

    x.set(1, 1);
}

const y = new Map();

if (isMap(y)) {
    // $ExpectType Map<any, any>
    y;

    y.delete(1);
} else {
    // $ExpectType never
    y;

    // @ts-expect-error
    y.delete(1);
}
