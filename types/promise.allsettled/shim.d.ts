import implementation = require('./implementation');

declare function shimAllSettled(): typeof implementation;

export = shimAllSettled;
