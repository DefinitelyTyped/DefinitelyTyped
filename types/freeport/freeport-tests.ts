import freeport = require('freeport');

let num: number;
let error: Error;

freeport((err, made) => {
	error = err;
	num = made;
});
