/// <reference path="electron.d.ts" />
/// <reference path="../node/node.d.ts" />

import electron = require('electron');
import child_process = require('child_process');

child_process.spawn(electron);
