/// <reference path="buffer-equal.d.ts" />

import bufferEqual = require('buffer-equal');

var bool: boolean;
var buf: Buffer;

bool = bufferEqual(buf, buf);
