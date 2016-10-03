/// <reference path="./stream-to-array.d.ts" />
/// <reference path="../node/node.d.ts" />

import toArray = require('stream-to-array');

var rs: NodeJS.ReadableStream;

toArray(rs, (err, arr) => {

});
