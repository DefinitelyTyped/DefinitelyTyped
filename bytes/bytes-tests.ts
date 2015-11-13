/// <reference path="./bytes.d.ts"/>

import bytes = require('bytes');

// 1024*1024 = 1048576
console.log(bytes(104857));
console.log(bytes(104857, { thousandsSeparator: ' ' }));

console.log(bytes.format(104857));
console.log(bytes.format(104857, { thousandsSeparator: ' ' }));

console.log(bytes('1024kb'));
console.log(bytes(1024));

console.log(bytes.parse('1024kb'));
console.log(bytes.parse(1024));