/// <reference path="docopt.d.ts" />
/// <reference path="../node/node.d.ts" />

var doc = `
Usage:
  quick_example.coffee tcp <host> <port> [--timeout=<seconds>]
  quick_example.coffee serial <port> [--baud=9600] [--timeout=<seconds>]
  quick_example.coffee -h | --help | --version
`;
var {docopt} = require('docopt');
console.log(docopt(doc, { version: '0.1.1rc' }));
