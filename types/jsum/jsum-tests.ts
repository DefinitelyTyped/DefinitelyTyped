import * as jsum from 'jsum';

const testObject = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: {
        prop1: 'prop1',
        prop2: 'prop2'
    },
    prop4: [
        'prop1', 'prop2'
    ]
};
jsum.digest(testObject, 'sha256', 'base64'); // $ExpectType string
jsum.digest(testObject, 2, 'base64'); // $ExpectError
jsum.digest(testObject, 'sha256', 3); // $ExpectError
jsum.digest(testObject, testObject, 'base64'); // $ExpectError
jsum.digest(testObject, 'sha256', testObject); // $ExpectError
jsum.stringify(testObject); // $ExpectType string
