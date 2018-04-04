import sparkly = require('sparkly');

let str: string;
str = sparkly([0, 3, 5, 8, 4, 3, 4, 10]);
str = sparkly([0, 3, 5, '', 4, 3, 4, 10]);
str = sparkly([1, 2, 3, 4, 5], {min: 0, max: 10});
str = sparkly([1, 2, 3, 4, 5, 6, 7, 8], {style: 'fire'});
