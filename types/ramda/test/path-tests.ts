import * as R from 'ramda';

() => {
    // $ExpectType number
    R.path(['a'], { a: 1 });
    // $ExpectType number
    R.path(['a', 'b'], { a: { b: 1 } });
    // $ExpectType number
    R.path(['a', 'b', 'c'], { a: { b: { c: 1 } } });
    // $ExpectType number
    R.path(['a', 'b', 'c', 'd'], { a: { b: { c: { d: 1 } } } });
    // $ExpectType number
    R.path(['a', 'b', 'c', 'd', 'e'], { a: { b: { c: { d: { e: 1 } } } } });
    // $ExpectType number
    R.path(['a', 'b', 'c', 'd', 'e', 'f'], { a: { b: { c: { d: { e: { f: 1 } } } } } });

    // $ExpectType unknown
    R.path(['a', 'b', 'c', 'd', 'e', 'f', 'g'], { a: { b: { c: { d: { e: { f: { g: 1 } } } } } } });
};

() => {
    const testPath = ['x', 0, 'y'];
    const testObj = {
        x: [
            { y: 2, z: 3 },
            { y: 4, z: 5 },
        ],
    };

    R.path(testPath, testObj); // => 2
    R.path(testPath)(testObj); // => 2

    R.path(['a', 'b'])({ c: { b: 2 } }); // => undefined
    R.path(['a', 'b'], { c: { b: 2 } }); // => undefined
};
