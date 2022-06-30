import streamify = require('stream-array');

// @ts-expect-error
streamify();
// @ts-expect-error
streamify('abc');
streamify([]); // $ExpectType Readable<any>
streamify([1, '2', { 3: 4 }]); // $ExpectType Readable<any>
