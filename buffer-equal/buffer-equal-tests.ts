/// <reference path="buffer-equal.d.ts" />

import bufferEqual = require('buffer-equal');

var bool: boolean;
var buf: NodeBuffer;

bool = bufferEqual(buf, buf);
