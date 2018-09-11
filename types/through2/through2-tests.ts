import stream = require('stream');
import through2 = require('through2');

var rws: stream.Transform;
var Rws: through2.Through2Constructor;

rws = through2();

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

rws = through2(function (entry, enc, callback) {
    var str: string = enc;
    this.push(entry, str);
    callback(null, 'continue');
}, () => {

});

rws = through2(function (entry: any, enc: string, callback: (error: any, data?: any) => void) {
	callback(null, 'foo');
}, (flushCallback: () => void) => {
	flushCallback();
});

rws = through2(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
}, (flushCallback) => {
    flushCallback();
});

// obj
rws = through2.obj(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
}, () => {

});

rws = through2.obj(function (entry, enc, callback) {
    var str: string = enc;
	this.push('foo', enc);
	callback(null, entry);
});

rws = through2.obj(function (entry: any, enc: string, callback: (err: any) => void) {
	callback('Oups!');
}, (flashCallback) => {
	flashCallback();
});

// ctor
Rws = through2.ctor({
	objectMode: true,
	allowHalfOpen: true
}, function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
}, () => {

});

rws = Rws();
rws = new Rws();
rws = new Rws({ objectMode: true, allowHalfOpen: true });

Rws = through2.ctor(function (entry, enc, callback) {
	this.push('foo');
	callback();
}, () => {

});

rws = Rws();
rws = new Rws();
rws = new Rws({ objectMode: true, allowHalfOpen: true });

Rws = through2.ctor(function (entry: any, enc: string, callback: (error: any, data?: any) => void) {
    this.emit("data", "more data");
	callback(null, 'foo');
}, (flushCallback) => {
	flushCallback();
});

rws = Rws();
rws = new Rws();
rws = new Rws({ objectMode: true, allowHalfOpen: true });

Rws = through2.ctor(function (entry: any, enc: string, callback: () => void) {
	this.push('foo');
	callback();
});
