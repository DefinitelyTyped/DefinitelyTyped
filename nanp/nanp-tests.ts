// Type definitions for nanp v0.3.0
// Project: https://github.com/weisjohn/nanp
// Definitions by: Karn Saheb <https://github.com/karn/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Tests taken from project readme.


import nanp = require('nanp');

// NANP Check
console.log(nanp("(937) 252 1234"));         // returns true
console.log(nanp("1 (937) 252 1234"));       // returns true
console.log(nanp("937.252.1234"));           // returns true
console.log(nanp("1.937.252.1234"));         // returns true
console.log(nanp("9372521234"));             // returns true
console.log(nanp("19372521234"));            // returns true

console.log(nanp("234-911-5678"));           // returns false
console.log(nanp("123-234-5678"));           // returns false
console.log(nanp("911"));                    // returns false

// Strip
console.log(nanp.strip("1 (937) 252 1234")); // -> 9372521234
