import freeport = require('freeport');

let num: number;
let aNull: null;
let error: Error;

freeport((err, made) => {
    if (err) {
        error = err;
    } else {
        aNull = err;
    }
    if (typeof made === 'number') {
        num = made;
    } else {
        aNull = made;
    }
});
