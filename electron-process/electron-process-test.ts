/// <reference path="./electron-process.d.ts" />

import * as electronProcess from 'electron-process';

const backgroundURL:string  = 'path/to/background.html';
const debug:boolean = false;

const backgroundProcessHandler = electronProcess.main.createBackgroundProcess(backgroundURL, debug);


const someModule = electronProcess.foreground.getModule(require('./someModule'));

electronProcess.background.registerModule(require('./someModule'));