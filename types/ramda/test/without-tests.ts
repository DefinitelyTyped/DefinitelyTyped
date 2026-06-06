import * as R from "ramda";

(() => {
    const a: number[] = R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4]
});

(() => {
    const a: number[] = R.without([1, 2, 3])([3, 4, 4, 5]); // => [4, 4, 5]
});

(() => {
    const a: number[] = R.without([1, undefined, 2], [1, 2, 1, 3, 4]); // => [3, 4]
});

(() => {
    const a: number[] = R.without<number>([1, undefined, 3])([3, 4, 4, 5]); // => [4, 4, 5]
});
