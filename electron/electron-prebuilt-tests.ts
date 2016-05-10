/// <reference path="electron-prebuilt.d.ts" />
/// <reference types="node" />

import electron = require('electron-prebuilt');
import child_process = require('child_process');

child_process.spawn(electron);
