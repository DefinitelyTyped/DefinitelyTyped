/// <reference path="./unique-random.d.ts" />

import uniqueRandom = require("unique-random");
const rand = uniqueRandom(1, 10);
const num: number = rand();
