import * as R from 'ramda';

() => {
    function cmp<T extends R.Ord>(obj: { x: T; }) {
        return obj.x;
    }

    const a = { x: 1 };
    const b = { x: 2 };
    const c = { x: 3 };
    const d = { x: 'a' };
    const e = { x: 'z' };
    const f = { x: new Date(0) };
    const g = { x: new Date(60 * 1000) };
    // $ExpectType { x: number; }
    R.minBy(cmp, a, b); // => {x: 1}
    // $ExpectType { x: number; }
    R.minBy(cmp, a, b); // => {x: 1}
    R.minBy<{ x: number; }>(cmp)(a, c);
    // $ExpectType { x: string; }
    R.minBy(cmp, d, e);
    // $ExpectType { x: Date; }
    R.minBy<{ x: Date; }>(cmp)(f)(g);
    // $ExpectError
    R.minBy(cmp, a, g);
};
