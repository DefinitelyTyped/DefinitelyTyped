import streamify = require('stream-array');

streamify(); // $ExpectError
streamify('abc'); // $ExpectError
streamify([]); // $ExpectType Readable
streamify([1, '2', { 3: 4 }]); // $ExpectType Readable
