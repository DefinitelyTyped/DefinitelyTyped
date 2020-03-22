import * as R from 'ramda';
import { Ord } from 'ramda/tools';

() => {
    function cmp(obj: { x: Ord }) {
        return obj.x;
    }

    const a = { x: 1 };
    const b = { x: 2 };
    const c = { x: 3 };
    const d = { x: 'a' };
    const e = { x: 'z' };
    const f = { x: new Date(0) };
    const g = { x: new Date(60 * 1000) };
    R.minBy(cmp, a, b); // => {x: 1}
    R.minBy(cmp)(a, b); // => {x: 1}
    R.minBy(cmp)(a)(c);
    R.minBy(cmp, d, e);
    R.minBy(cmp)(f)(g);
};
