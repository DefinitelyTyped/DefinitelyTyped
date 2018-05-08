/// <reference types="node/v0" />

import * as util from 'util';
import * as fs from "fs";
import promisify = require('util.promisify');

// tslint:disable-next-line ban-types
let readFile: Function = promisify(fs.readFile);

promisify.shim();
readFile = util.promisify(fs.readFile);
