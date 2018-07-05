import stringify = require('json-stringify-safe');

interface CircularObj {
    circularRef?: CircularObj;
    list?: CircularObj[];
}

const circularObj: CircularObj = {};
circularObj.circularRef = circularObj;
circularObj.list = [circularObj, circularObj];

stringify(circularObj);
stringify(circularObj, null);
stringify(circularObj, null, 2);
stringify(circularObj, null, null, () => {});
stringify(circularObj, (key, val) => {
    key; // $ExpectType string
    val; // $ExpectType any
}, null, (key, val) => {
    key; // $ExpectType string
    val; // $ExpectType any
});

// $ExpectType EntryProcessor
stringify.getSerialize(null, (key, val) => {
    key; // $ExpectType string
    val; // $ExpectType any
});
stringify.getSerialize((key, val) => {
    key; // $ExpectType string
    val; // $ExpectType any
});
stringify.getSerialize((key, val) => {
    key; // $ExpectType string
    val; // $ExpectType any
}, (key, val) => {
    key; // $ExpectType string
    val; // $ExpectType any
});
