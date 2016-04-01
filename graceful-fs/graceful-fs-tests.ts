/// <reference path="graceful-fs.d.ts" />

import fs = require('graceful-fs');

var str: string;
var buf: Buffer;

fs.renameSync(str, str);