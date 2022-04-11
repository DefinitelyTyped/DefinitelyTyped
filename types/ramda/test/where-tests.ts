import * as R from 'ramda';

() => {
    const spec = { x: 2 };
    const x1: boolean = R.where(spec, { w: 10, x: 2, y: 300 }); // => true
    const x2: boolean = R.where(spec, { x: 1, y: 'moo', z: true }); // => false
    const x3: boolean = R.where(spec)({ w: 10, x: 2, y: 300 }); // => true
    const x4: boolean = R.where(spec)({ x: 1, y: 'moo', z: true }); // => false

    // There's no way to represent the below functionality in typescript
    // per https://stackoverflow.com/a/29803848/632495
    // will need a work around.

    const spec2 = {
        x: (val: number, obj: any) => val + obj.y > 10,
    };
    R.where(spec2, { x: 2, y: 7 }); // => false
    R.where(spec2, { x: 3, y: 8 }); // => true
};
