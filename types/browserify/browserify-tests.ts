import browserify = require("browserify");
import fs = require("fs");
import stream = require('stream');
import insertGlobals = require("insert-module-globals");

var bNoArg = browserify();

var b = browserify({
  baseDir: 'somewhere'
});
b.add('./browser/main.js');
b.transform('deamdify')
  .transform(function (file) {
    return new stream.Transform();
  }).plugin((b, opts) => { return opts.l; }, {l: 3})
  .require('foo', { expose: 'bar' })
  .exclude('baz')
  .ignore('bat')
  .reset({ basedir: 'elsewhere' });

b.on('file', (file) => {
  file += "";
});

b.external(bNoArg);

var b2 = new browserify(['/some/File', {file: '/some/file' }, fs.createReadStream('/somewhere')], { builtins: ['buffer']})
  .reset({
    builtins: {
      'buffer': './customBuffer'
    }
  });

var customBrowsify = require("browserify");
customBrowsify({entries: []});

var b = browserify('./browser/main.js', {
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

var argv = { igv: "__filename,__dirname" };
var insertGlobalVars: insertGlobals.VarsOption = {};
var wantedGlobalVars = argv.igv.split(',');
Object.keys(insertGlobals.vars).forEach((x) => {
  if (wantedGlobalVars.indexOf(x) === -1) {
    insertGlobalVars[x] = undefined;
  }
});

var b = browserify('./browser/main.js', {
  insertGlobalVars: insertGlobalVars
});
