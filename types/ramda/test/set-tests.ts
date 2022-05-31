import * as R from 'ramda';

interface Point {
    x: number;
    y: number;
}

() => {
    const headLens = R.lensIndex<string>(0);
    // $ExpectType string[]
    R.set(headLens, 'x', ['a', 'b', 'c']); // => ['x', 'b', 'c']
};

() => {
    const xLens = R.lens<Point, number>(R.prop('x'), R.assoc('x'));
    // $ExpectType { x: number; y: number; }
    R.set(xLens, 4, { x: 1, y: 2 }); // => {x: 4, y: 2}
    // $ExpectType (a: number, obj: Point) => Point
    const fn1 = R.set(xLens);
    fn1(4, { x: 1, y: 2 }); // => {x: 4, y: 2}
    // $ExpectType (obj: Point) => Point
    const fn2 = R.set(xLens, 4);
    fn2({ x: 1, y: 2 }); // => {x: 4, y: 2}
};

() => {
    const headLens = R.lensIndex<string>(0);
    // $ExpectType string[]
    R.set(headLens, 'x', ['a', 'b', 'c']); // => ['x', 'b', 'c']
};

() => {
    const xLens = R.lensProp<Point>('x');
    // $ExpectType { x: number; y: number; }
    R.set(xLens, 4, { x: 1, y: 2 }); // => {x: 4, y: 2}
};

() => {
    const testObj = {
        x: [
            { y: 2, z: 3 },
            { y: 4, z: 5 },
        ],
    };

    const xyLens = R.lensPath<typeof testObj>(['x', 0, 'y']);

    // $ExpectType { x: { y: number; z: number; }[]; }
    R.set(xyLens, 4, testObj); // => {x: [{y: 4, z: 3}, {y: 4, z: 5}]}
};
