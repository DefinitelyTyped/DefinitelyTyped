/// <reference path="shortid.d.ts" />

import shortid = require('shortid');

var my_short_id: string = shortid.generate();
console.log(my_short_id);

console.log('Is valid short id? => %s', shortid.isValid(my_short_id)); // => true
console.log('Is valid short id? => %s', shortid.isValid(5)); // => false
console.log('Is valid short id? => %s', shortid.isValid('i have spaces')); // => false
