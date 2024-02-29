import isSet = require("is-set");

// $ExpectType boolean
isSet(new Set());

// $ExpectType boolean
isSet(new WeakSet());

// $ExpectType boolean
isSet(new Map());

// $ExpectType boolean
isSet(Symbol());

// $ExpectType boolean
isSet(1);

const x: unknown = new Set();

if (isSet(x)) {
    // $ExpectType Set<any>
    x;

    x.add(1);
} else {
    // $ExpectType unknown
    x;
}

const y = new Set<number>();

if (isSet(y)) {
    // $ExpectType Set<number>
    y;

    y.delete(1);
} else {
    // $ExpectType never
    y;

    // @ts-expect-error
    y.delete(1);
}
