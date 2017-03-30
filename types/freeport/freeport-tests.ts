import freeport = require('freeport');

let num: number,
	error: Error;

freeport((err, made) => {
	error = err;
	num = made;
});
