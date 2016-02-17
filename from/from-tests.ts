/// <reference path="./from.d.ts" />
/// <reference path="../node/node.d.ts" />

import from = require('from');

var rs: NodeJS.ReadableStream;

rs = from([]);
rs = from(function (count: number, next: () => any) {
	this.emit('end');
});

