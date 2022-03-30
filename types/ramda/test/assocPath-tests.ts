import * as R from 'ramda';

() => {
    const testPath = ['x', 0, 'y'];
    const testObj = {
        x: [
            { y: 2, z: 3 },
            { y: 4, z: 5 },
        ],
    };

    R.assocPath(testPath, 42, testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
    R.assocPath(testPath, 42)(testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
    R.assocPath(testPath)(42)(testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
    R.assocPath(testPath)(42, testObj); // => {x: [{y: 42, z: 3}, {y: 4, z: 5}]}
};
