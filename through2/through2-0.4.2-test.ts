/// <reference path="./through2-0.4.2.d.ts" />
/// <reference path="../node/node.d.ts" />

import through2 = require('through2');

var rws: NodeJS.ReadWriteStream;

rws = through2({
	objectMode: true,
	allowHalfOpen: true
}, function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
}, () => {

});

rws = through2(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
}, () => {

});

rws = through2(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
});

rws = through2();

// obj
rws = through2.obj(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
}, () => {

});

rws = through2.obj(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
});

