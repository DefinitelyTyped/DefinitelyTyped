/// <reference types="node" />

import convertHrtime = require('convert-hrtime');

const time = convertHrtime(process.hrtime(process.hrtime()));
let num: number;
num = time.seconds;
num = time.milliseconds;
num = time.nanoseconds;
