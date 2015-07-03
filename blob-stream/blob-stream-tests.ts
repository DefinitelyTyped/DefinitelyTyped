/// <reference path="./blob-stream.d.ts" />
/// <reference path="../node/node.d.ts" />

var bl = require('blob-stream');

var blob = bl.toBlob("aplication/PDF");
var brl = bl.toBlobURL("app/JSON");
