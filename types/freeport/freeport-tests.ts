import freeport = require('freeport');

let num: number;
let error: Error | null;

freeport((err, made) => {
    error = err;
    num = made;
});
