/// <reference path="browserify.d.ts"/>

var stream = require('stream');
var browserify = require('browserify');

var b: BrowserifyObject = browserify('./browser/main.js', {
  noParse: ['jquery'],
  debug: true,
  foo: 'bar'
});
b.add('./browser/other.js');
b.transform(function(file: string): NodeJS.ReadWriteStream {
  return new stream.PassThrough();
});

var record_pipeline = b.pipeline.get('record');

b.bundle().pipe(process.stdout);
