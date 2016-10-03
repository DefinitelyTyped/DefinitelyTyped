/// <reference path="freeport.d.ts" />

import freeport = require('freeport');

var num: number;

freeport((err, made) => {
	num = made;
});
