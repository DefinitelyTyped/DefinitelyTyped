import * as R from 'ramda';

() => {
    function f(n: number): false | [number, number] {
        return n > 50 ? false : [-n, n + 10];
    }

    const a = R.unfold(f, 10); // => [-10, -20, -30, -40, -50]
    const b = R.unfold(f); // => [-10, -20, -30, -40, -50]
    const c = b(10);
};
