import * as R from 'ramda';

() => {
    const of = Array.of;
    const fn = (x: number) => Array.of(x + 1);
    const list = [1, 2, 3];
    // $ExpectType number[][]
    R.traverse(of, fn, list);
    // $ExpectType number[][]
    R.traverse(of, fn)(list);
    // $ExpectType number[][]
    R.traverse<number, number>(of)(fn, list);
    // $ExpectType string[][]
    R.traverse<number, string>(of, n => [String(n)], list);
};
