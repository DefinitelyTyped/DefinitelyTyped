import * as R from 'ramda';

() => {
    const orValue = 11;
    const orValueStr = 'str';
    const testPath = ['x', 0, 'y'];
    const testObj = {
        x: [
            { y: 2, z: 3 },
            { y: 4, z: 5 },
        ],
    };
    const testObjMiss = { c: { b: 2 } };

    R.pathOr<number>(orValue, testPath, testObj); // => 2
    R.pathOr<number>(orValue, testPath)(testObj); // => 2
    R.pathOr<number>(orValue)(testPath)(testObj); // => 2
    R.pathOr<number>(orValue)(testPath, testObj); // => 2
    R.pathOr<number>(orValue, testPath, testObjMiss); // => 11
    R.pathOr<number | string>(orValueStr, testPath, testObjMiss); // => "str"
};
