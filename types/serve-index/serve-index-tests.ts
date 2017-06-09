
import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as fs from 'fs';

const app = express();

// Serve URLs like /ftp/thing as public/ftp/thing
app.use('/ftp', serveIndex('public/ftp', {'icons': true}));
app.listen(8080);


// Taken from https://github.com/expressjs/serve-index/blob/v1.7.2/test/test.js

import * as path from 'path';
var fixtures = path.join(__dirname, '/fixtures');
const createServer = serveIndex;

var server = createServer('test/fixtures', {'hidden': false});

var server = createServer('test/fixtures', {'hidden': true});

var server = createServer(fixtures, {'filter': filter});
function filter(name: string): boolean {
  if (name.indexOf('foo') === -1) return true
  return false
}

var server = createServer(fixtures, {'filter': filter, 'hidden': false});

var server = createServer(fixtures, {'icons': true});

var server = createServer(fixtures, {'template': __dirname + '/shared/template.html'});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, 'This is a template.');
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(new Error('boom!'));
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, JSON.stringify(locals.directory));
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, JSON.stringify(locals.displayIcons));
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, JSON.stringify(locals.fileList.map(function (file) {
    //file.stat = file.stat instanceof fs.Stats;
    return file;
  })));
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, JSON.stringify(locals.path));
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, JSON.stringify(locals.style));
}});

var server = createServer(fixtures, {'template': function (locals, callback) {
  callback(null, JSON.stringify(locals.viewName));
}});

var server = createServer(fixtures, {'stylesheet': __dirname + '/shared/styles.css'});
