/// <reference path="../requirejs/require.d.ts" />
/// <reference path="require-dir.d.ts" />

'use strict';

import requireDir = require('require-dir');
var dir = requireDir('./path/to/dir');

var dir2 = requireDir('./path/to/dir', { recurse: true });
requireDir('./path/to/dir', { recurse: true, camelcase: true, duplicates: false });

require('require-dir')();
