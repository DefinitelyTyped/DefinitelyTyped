import * as R from 'ramda';

() => {
    const isOdd = (acc: number, x: number) => x % 2 === 1;

    const xs: number[] = [1, 3, 5, 60, 777, 800];
    R.reduceWhile(isOdd, R.add, 0, xs); // => 9
    R.reduceWhile(isOdd)(R.add, 0, xs); // => 9
    R.reduceWhile(isOdd)(R.add, 0)(xs); // => 9
    R.reduceWhile(isOdd)(R.add)(0, xs); // => 9
    R.reduceWhile(isOdd)(R.add)(0)(xs); // => 9
    R.reduceWhile(isOdd, R.add)(0, xs); // => 9
    R.reduceWhile(isOdd, R.add)(0)(xs); // => 9
    R.reduceWhile(isOdd, R.add, 0)(xs); // => 9

    const ys: number[] = [];
    R.reduceWhile(isOdd, R.add, 111, ys); // => 111
    R.reduceWhile(isOdd)(R.add, 111, ys); // => 111
    R.reduceWhile(isOdd)(R.add, 111)(ys); // => 111
    R.reduceWhile(isOdd)(R.add)(111, ys); // => 111
    R.reduceWhile(isOdd)(R.add)(111)(ys); // => 111
    R.reduceWhile(isOdd, R.add)(111, ys); // => 111
    R.reduceWhile(isOdd, R.add)(111)(ys); // => 111
    R.reduceWhile(isOdd, R.add, 111)(ys); // => 111
};
