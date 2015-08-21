/// <reference path="../browserify/browserify.d.ts" />
/// <reference path="watchify.d.ts" />

import watchify = require('watchify');
import browserify = require('browserify');
//import fromArgs = require('watchify/bin/args');

var b = browserify({ cache: {}, packageCache: {} });
var w = watchify(b);


var b = browserify(watchify.args);
var w = watchify(b);

w.bundle().on('data', function() {});

w.close();

w.on('update', function (ids: any) {});
w.on('bytes', function (bytes: any) {});
w.on('time', function (time: any) {});
w.on('log', function (msg: any) {});
