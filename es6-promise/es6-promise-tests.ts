/// <reference path='es6-promise.d.ts' />

import rsvp = require('es6-promise'); // Node.js (commonjs)
var Promise = rsvp.Promise;

function makePromise(s: string): TPromise<string> {
	return new Promise(function (resolve: Function) {
		resolve(s);
	});
}

var pHelloWorld = makePromise('Hello').then(function (s: string) {
	return s + ', World!';
});

