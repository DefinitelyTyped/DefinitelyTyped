/// <reference path="browserify.d.ts"/>

import browserify = require("browserify");
import fs = require("fs");

var b: BrowserifyObject = browserify();
b.add('./browser/main.js');
b.transform('deamdify');
b.bundle().pipe(fs.createWriteStream('bundle.js'));

var customBrowsify: Browserify = require("browserify");
customBrowsify({entries: []});
