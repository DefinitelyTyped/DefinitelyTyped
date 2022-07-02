import PowerRadix = require('power-radix');

const base = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

new PowerRadix([1, 0], 10).toArray(base); // $ExpectType string[]
new PowerRadix('10', 10).toArray(base); // $ExpectType string[]
new PowerRadix(10, 10).toArray(base); // $ExpectType string[]
new PowerRadix(10, 10).toArray(10); // $ExpectType string[]

new PowerRadix([1, 0], 10).toString(base); // $ExpectType string
new PowerRadix('10', 10).toString(base); // $ExpectType string
new PowerRadix(10, 10).toString(base); // $ExpectType string
new PowerRadix(10, 10).toString(10); // $ExpectType string
