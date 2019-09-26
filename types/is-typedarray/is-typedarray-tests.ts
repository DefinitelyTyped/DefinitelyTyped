import isTypedArray = require('is-typedarray');

const buf: any = new Buffer(1);

// $ExpectType any
buf;

if (isTypedArray(buf)) {
    // $ExpectType TypedArray
    buf;
}
if (isTypedArray.strict(buf)) {
    // $ExpectType TypedArray
    buf;
}
if (isTypedArray.loose(buf)) {
    // $ExpectType TypedArray
    buf;
}
