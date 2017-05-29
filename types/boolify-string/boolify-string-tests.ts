
import boolifyString = require('boolify-string');

console.log(boolifyString('true')); // #=> true
console.log(boolifyString('TRUE')); // #=> true
console.log(boolifyString('True')); // #=> true
console.log(boolifyString('false')); // #=> false

console.log(boolifyString('{}')); // #=> true
console.log(boolifyString('foo')); // #=> true
console.log(boolifyString('')); // #=> false
console.log(boolifyString('1')); // #=> true
console.log(boolifyString('-1')); // #=> true
console.log(boolifyString('0')); // #=> false
console.log(boolifyString('[]')); // #=> true
console.log(boolifyString('undefined')); // #=> false
console.log(boolifyString('null')); // #=> false

// primitive values as is
console.log(boolifyString(true)); // #=> true
console.log(boolifyString(false)); // #=> false
console.log(boolifyString({})); // #=> true
console.log(boolifyString(1)); // #=> true
console.log(boolifyString(-1)); // #=> true
console.log(boolifyString(0)); // #=> false
console.log(boolifyString([])); // #=> true
console.log(boolifyString(undefined)); // #=> false
console.log(boolifyString(null)); // #=> false

// string constructor
console.log(boolifyString(new String('true'))); // #=> true
console.log(boolifyString(new String('false'))); // #=> false

// YAML's specification
// http://yaml.org/type/bool.html
// y|Y|yes|Yes|YES|n|N|no|No|NO
// |true|True|TRUE|false|False|FALSE
// |on|On|ON|off|Off|OFF
console.log(boolifyString('y')); // #=> true
console.log(boolifyString('Y')); // #=> true
console.log(boolifyString('yes')); // #=> true
console.log(boolifyString('Yes')); // #=> true
console.log(boolifyString('YES')); // #=> true
console.log(boolifyString('n')); // #=> false
console.log(boolifyString('N')); // #=> false
console.log(boolifyString('no')); // #=> false
console.log(boolifyString('No')); // #=> false
console.log(boolifyString('NO')); // #=> false
console.log(boolifyString('true')); // #=> true
console.log(boolifyString('True')); // #=> true
console.log(boolifyString('TRUE')); // #=> true
console.log(boolifyString('false')); // #=> false
console.log(boolifyString('False')); // #=> false
console.log(boolifyString('FALSE')); // #=> false
console.log(boolifyString('on')); // #=> true
console.log(boolifyString('On')); // #=> true
console.log(boolifyString('ON')); // #=> true
console.log(boolifyString('off')); // #=> false
console.log(boolifyString('Off')); // #=> false
console.log(boolifyString('OFF')); // #=> false
