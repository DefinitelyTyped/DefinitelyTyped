/// <reference path="graceful-fs.d.ts" />

import fs = require('graceful-fs');

var str: string;
var buf: NodeBuffer;

fs.renameSync(str, str);