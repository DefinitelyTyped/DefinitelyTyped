/// <reference path="JSONStream.d.ts" />

import json = require('JSONStream');

var read: NodeJS.ReadableStream;
var write: NodeJS.WritableStream;

read = read.pipe(json.parse('*'));
read = read.pipe(json.parse(['foo/*', 'bar/*']));

read = json.stringify();
read = json.stringify('{', ',', '}');

read = json.stringifyObject();
read = json.stringifyObject('{', ',', '}');
