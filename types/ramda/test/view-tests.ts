import * as R from 'ramda';

interface Point {
    x: number;
    y: number;
}

() => {
    const headLens = R.lensIndex<string>(0);
    // $ExpectType string
    R.view(headLens, ['a', 'b', 'c']); // => 'a'
};

() => {
    const xLens = R.lens<Point, number>(R.prop('x'), R.assoc('x'));
    // $ExpectType number
    R.view(xLens, { x: 1, y: 2 }); // => 1
    // $ExpectType (obj: Point) => number
    const fn = R.view(xLens);
    fn({ x: 1, y: 2 }); // => 1
};

() => {
    const headLens = R.lensIndex<string>(0);
    // $ExpectType string
    R.view(headLens, ['a', 'b', 'c']); // => 'a'
};

() => {
    const xLens = R.lensProp<Point>('x');
    // $ExpectType number
    R.view(xLens, { x: 1, y: 2 }); // => 1
};

() => {
    const testObj = {
        x: [
            { y: 2, z: 3 },
            { y: 4, z: 5 },
        ],
    };

    const xyLens = R.lensPath<typeof testObj>(['x', 0, 'y']);

    // Array seems to be an issue
    R.view(xyLens, testObj); // => 2

    const testObj2 = {
        root: {
            x: { y: 2, z: 3 },
        },
    };

    const xyLens2 = R.lensPath<typeof testObj2>(['root', 'x', 'y']);

    // $ExpectType number
    R.view(xyLens2, testObj2); // => 2
};
