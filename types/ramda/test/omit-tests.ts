import * as R from "ramda";

(() => {
    R.omit(["a", "d"] as const, { a: 1, b: 2, c: 3, d: 4 }); // => {b: 2, c: 3}
    R.omit(["a", "d"] as const)({ a: 1, b: 2, c: 3, d: 4 }); // => {b: 2, c: 3}
});
