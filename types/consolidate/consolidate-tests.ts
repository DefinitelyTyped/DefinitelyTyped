
import cons = require('consolidate');

var path: string = 'test/path';
var options = {user: 'tobi'};
var fn = function(err: Error, html: string) {};

cons.atpl(path);
cons.atpl(path, options);
cons.atpl(path, options, fn);

cons.dot(path);
cons.dot(path, options);
cons.dot(path, options, fn);

cons.dust(path);
cons.dust(path, options);
cons.dust(path, options, fn);

cons.eco(path);
cons.eco(path, options);
cons.eco(path, options, fn);

cons.ect(path);
cons.ect(path, options);
cons.ect(path, options, fn);

cons.ejs(path);
cons.ejs(path, options);
cons.ejs(path, options, fn);

cons.haml(path);
cons.haml(path, options);
cons.haml(path, options, fn);

// TODO figure out how to type haml-coffee
// cons['haml-coffee'](path, options, fn);

cons.hamlet(path);
cons.hamlet(path, options);
cons.hamlet(path, options, fn);

cons.handlebars(path);
cons.handlebars(path, options);
cons.handlebars(path, options, fn);

cons.hogan(path);
cons.hogan(path, options);
cons.hogan(path, options, fn);

cons.htmling(path);
cons.htmling(path, options);
cons.htmling(path, options, fn);

cons.jade(path);
cons.jade(path, options);
cons.jade(path, options, fn);

cons.jazz(path);
cons.jazz(path, options);
cons.jazz(path, options, fn);

cons.jqtpl(path);
cons.jqtpl(path, options);
cons.jqtpl(path, options, fn);

cons.just(path);
cons.just(path, options);
cons.just(path, options, fn);

cons.liquid(path);
cons.liquid(path, options);
cons.liquid(path, options, fn);

cons.liquor(path);
cons.liquor(path, options);
cons.liquor(path, options, fn);

cons.lodash(path);
cons.lodash(path, options);
cons.lodash(path, options, fn);

cons.mote(path);
cons.mote(path, options);
cons.mote(path, options, fn);

cons.mustache(path);
cons.mustache(path, options);
cons.mustache(path, options, fn);

cons.nunjucks(path);
cons.nunjucks(path, options);
cons.nunjucks(path, options, fn);

cons.pug(path);
cons.pug(path, options);
cons.pug(path, options, fn);

cons.qejs(path);
cons.qejs(path, options);
cons.qejs(path, options, fn);

cons.ractive(path);
cons.ractive(path, options);
cons.ractive(path, options, fn);

cons.react(path);
cons.react(path, options);
cons.react(path, options, fn);

cons.swig(path);
cons.swig(path, options);
cons.swig(path, options, fn);

cons.templayed(path);
cons.templayed(path, options);
cons.templayed(path, options, fn);

cons.toffee(path);
cons.toffee(path, options);
cons.toffee(path, options, fn);

cons.underscore(path);
cons.underscore(path, options);
cons.underscore(path, options, fn);

cons.walrus(path);
cons.walrus(path, options);
cons.walrus(path, options, fn);

cons.whiskers(path);
cons.whiskers(path, options);
cons.whiskers(path, options, fn);

/**
 * Examples from documentation
 * https://github.com/tj/consolidate.js/
 */
// Common use
cons.swig('views/page.html', { user: 'tobi' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});

// Options object is optional
cons.swig('views/page.html', function(err, html) {
  if (err) throw err;
  console.log(html);
});

// To dynamically pass the engine, simply use the subscript operator and a variable:
cons['swig']('views/page.html', { user: 'tobi' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});

// Returns a promise if no is callback passed in:
cons.swig('views/page.html', { user: 'tobi' })
  .then(function(html) {
    console.log(html);
  })
  .catch(function(err) {
    throw err;
  });

// Caching
cons.swig('views/page.html', { cache: false, user: 'tobi' }, function(err, html) {
  if (err) throw err;
  console.log(html);
});


