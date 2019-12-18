import * as util from 'util';
import * as fs from 'fs';
import promisify = require('util.promisify');

import 'util.promisify/auto';

let readFile = promisify(fs.readFile);
readFile = util.promisify(fs.readFile);

let implementation = promisify.getPolyfill();
implementation = promisify.shim();
implementation = promisify.implementation;

import promisifyShim = require('util.promisify/shim');
promisifyShim();
