
/// <reference types="node" />

import denodeify = require("denodeify");
import fs = require('fs');
import cp = require('child_process');

const readFile = denodeify<string,string,string>(fs.readFile);
const exec = denodeify<string,string>(cp.exec, (err, stdout, stderr) => [err, stdout]);
