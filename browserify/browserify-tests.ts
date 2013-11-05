import browserify = require("browserify");
import fs = require("fs");

var b = browserify();
b.add('./browser/main.js');
b.transform('deamdify');
b.bundle().pipe(fs.createWriteStream('bundle.js'));