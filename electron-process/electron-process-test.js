/// <reference path="./electron-process.d.ts" />
"use strict";
const electronProcess = require('electron-process');
const backgroundURL = 'path/to/background.html';
const debug = false;
const backgroundProcessHandler = electronProcess.main.createBackgroundProcess(backgroundURL, debug);
const someModule = electronProcess.foreground.getModule(require('./someModule'));
electronProcess.background.registerModule(require('./someModule'));
