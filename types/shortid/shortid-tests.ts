
import shortid = require('shortid');

var my_short_id: string = shortid.generate();
var my_short_id2: string = shortid();
console.log(my_short_id);

console.log('Is valid short id? => %s', shortid.isValid(my_short_id)); // => true
console.log('Is valid short id? => %s', shortid.isValid(my_short_id2)); // => true
console.log('Is valid short id? => %s', shortid.isValid(5)); // => false
console.log('Is valid short id? => %s', shortid.isValid('i have spaces')); // => false
