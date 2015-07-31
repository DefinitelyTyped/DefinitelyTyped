/// <reference path="../node/node.d.ts" />
/// <reference path="./sax.d.ts" />
import sax = require("sax");

var opts: sax.SAXOptions = {
  lowercase: true,
  normalize: true,
  xmlns: true,
  position: true
};

var parser = sax.parser(/*strict=*/true, opts);

parser.onerror = function(e: Error) {
};

parser.ontext = function(text: string) {
};

parser.onopentag = function(tag: sax.Tag) {
};

parser.onattribute = function(attr: { name: string; value: string; }) {
};

parser.onend = function() {
};

parser.write("<xml>Hello, <who name=\"world\">world</who>!</xml>").close();


var saxStream = sax.createStream(/*strict=*/true, opts);

saxStream.on("error", function(e: Error) {
  this._parser.error = null;
  this._parser.resume();
});

import fs = require("fs");
fs.createReadStream("file.xml")
  .pipe(saxStream)
  .pipe(fs.createWriteStream("file-copy.xml"));

