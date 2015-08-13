/// <reference path="consolidate.d.ts" />

import consolidate = require('consolidate');

var path: string = null;
var options: any = null;
var fn: any = null;

consolidate.clearCache();
consolidate.jade(path, options, fn);
consolidate.dust(path, options, fn);
consolidate.swig(path, options, fn);
consolidate.liquor(path, options, fn);
consolidate.ejs(path, options, fn);
consolidate.eco(path, options, fn);
consolidate.jazz(path, options, fn);
consolidate.jqtpl(path, options, fn);
consolidate.haml(path, options, fn);
consolidate.whiskers(path, options, fn);
//consolidate.'haml-coffee':Function;
consolidate.hogan(path, options, fn);
consolidate.handlebars(path, options, fn);
consolidate.underscore(path, options, fn);
consolidate.qejs(path, options, fn);
consolidate.walrus(path, options, fn);
consolidate.mustache(path, options, fn);
consolidate.dot(path, options, fn);
