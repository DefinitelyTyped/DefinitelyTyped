/// <reference path="./mess.d.ts" />

import mess = require('mess');

var numbers: number[] = [1, 2, 3];
mess(numbers);
numbers = mess([2, 4, 6]);
