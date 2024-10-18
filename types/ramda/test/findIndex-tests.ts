import * as R from "ramda";

(() => {
    const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
    R.findIndex(R.propEq(2, "a"))(xs); // => 1
    R.findIndex(R.propEq(4, "a"))(xs); // => -1

    R.findIndex((x: number) => x === 1, [1, 2, 3]);
});
