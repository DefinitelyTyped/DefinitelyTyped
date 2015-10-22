/// <reference path="denodeify.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />
/// <reference path="../node/node.d.ts" />

import denodeify = require("denodeify");
import fs = require('fs');
import cp = require('child_process');

const readFile = denodeify<string,string,string>(fs.readFile);
const exec = denodeify<string,string>(cp.exec, (err, stdout, stderr) => [err, stdout]);