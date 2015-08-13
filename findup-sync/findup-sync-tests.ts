/// <reference path="./findup-sync.d.ts" />
/// <reference path="../node/node.d.ts" />

import findup = require('findup-sync');

var str: string;

str = findup('foo');
str = findup(['foo', 'bar']);

str = findup('foo', {
	debug: true
});
