import * as R from 'ramda';

() => {
    const spec = { x: 2 };
    const a = { w: 10, x: 2, y: 300 };
    // $ExpectType boolean
    R.where(spec, a); // => true
    const b = { x: 1, y: 'moo', z: true };
    // $ExpectType boolean
    R.where(spec, b); // => false
    const c = { w: 10, x: 2, y: 300 };
    // $ExpectType boolean
    R.where(spec)(c); // => true
    const d = { x: 1, y: 'moo', z: true };
    // $ExpectType boolean
    R.where(spec)(d); // => false

    // There's no way to represent the below functionality in typescript
    // per https://stackoverflow.com/a/29803848/632495
    // will need a work around.

    interface Point {
        x: number;
        y: number;
    }
    const spec2 = {
        x: (val: number, obj: { y: number }) => val + obj.y > 10,
    };
    const e = { x: 2, y: 7 };
    // $ExpectType boolean
    R.where(spec2, e); // => false
    // $ExpectType boolean
    R.where<Point>(spec2, e); // => false
    const f = { x: 3, y: 8 };
    // $ExpectType boolean
    R.where(spec2, f); // => true
    // $ExpectType boolean
    R.where<Point>(spec2, f); // => true

    const spec3 = {
        x: (val: string | number, obj: { x: number }) => Number(val) + obj.x > 10,
        y: '7',
    };
    const g = { x: 3, y: '9' };
    // $ExpectType boolean
    R.where(spec3, g); // => false
    // $ExpectType boolean
    R.where<{ x: number; y: string; }>(spec3, g); // => false

    const spec4 = {
        x: (val: string | number, obj: { x: number }) => Number(val) + obj.x > 10,
        y: 7,
    };
    // should error
    R.where(spec4, g); // => false
    // $ExpectError
    R.where<{ x: number; y: string; }>(spec4, g);
    // should also error
    // but i don't think there's anything that can be done about this one
    R.where(spec4)(g);
    // $ExpectError
    R.where<{ x: number; y: string; }>(spec4)(g);
};
