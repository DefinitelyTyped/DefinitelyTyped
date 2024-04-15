import * as R from "ramda";

(() => {
    // $ExpectType { a: number; b: number; c: number; }
    R.fromPairs([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ]); // => {a: 1, b: 2, c: 3}

    // why is the order not consistent?
    // $ExpectType { 2: string; 1: string; }
    R.fromPairs([
        [1, "a"],
        [2, "b"],
    ]); // => { "1": "a", "2": "b" }

    // $ExpectType { [x: string]: number; }
    R.fromPairs([
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ] as Array<[string, number]>); // => {a: 1, b: 2, c: 3}
});
