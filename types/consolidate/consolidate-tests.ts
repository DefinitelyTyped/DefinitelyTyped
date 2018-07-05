
import cons = require('consolidate');

var path: string = 'test/path';
var options = {user: 'tobi'};
var fn = function(err: Error, html: string) {};
(async () => {
  let res: string;

  res = await cons.atpl(path);
  res = await cons.atpl(path, options);
  cons.atpl(path, options, fn);

  res = await cons.dot(path);
  res = await cons.dot(path, options);
  cons.dot(path, options, fn);

  res = await cons.dust(path);
  res = await cons.dust(path, options);
  cons.dust(path, options, fn);

  res = await cons.eco(path);
  res = await cons.eco(path, options);
  cons.eco(path, options, fn);

  res = await cons.ect(path);
  res = await cons.ect(path, options);
  cons.ect(path, options, fn);

  res = await cons.ejs(path);
  res = await cons.ejs(path, options);
  cons.ejs(path, options, fn);

  res = await cons.haml(path);
  res = await cons.haml(path, options);
  cons.haml(path, options, fn);

  // TODO figure out how to type haml-coffee
  // cons['haml-coffee'](path, options, fn);

  res = await cons.hamlet(path);
  res = await cons.hamlet(path, options);
  cons.hamlet(path, options, fn);

  res = await cons.handlebars(path);
  res = await cons.handlebars(path, options);
  cons.handlebars(path, options, fn);

  res = await cons.hogan(path);
  res = await cons.hogan(path, options);
  cons.hogan(path, options, fn);

  res = await cons.htmling(path);
  res = await cons.htmling(path, options);
  cons.htmling(path, options, fn);

  res = await cons.jade(path);
  res = await cons.jade(path, options);
  cons.jade(path, options, fn);

  res = await cons.jazz(path);
  res = await cons.jazz(path, options);
  cons.jazz(path, options, fn);

  res = await cons.jqtpl(path);
  res = await cons.jqtpl(path, options);
  cons.jqtpl(path, options, fn);

  res = await cons.just(path);
  res = await cons.just(path, options);
  cons.just(path, options, fn);

  res = await cons.liquid(path);
  res = await cons.liquid(path, options);
  cons.liquid(path, options, fn);

  res = await cons.liquor(path);
  res = await cons.liquor(path, options);
  cons.liquor(path, options, fn);

  res = await cons.lodash(path);
  res = await cons.lodash(path, options);
  cons.lodash(path, options, fn);

  res = await cons.mote(path);
  res = await cons.mote(path, options);
  cons.mote(path, options, fn);

  res = await cons.mustache(path);
  res = await cons.mustache(path, options);
  cons.mustache(path, options, fn);

  res = await cons.nunjucks(path);
  res = await cons.nunjucks(path, options);
  cons.nunjucks(path, options, fn);

  res = await cons.pug(path);
  res = await cons.pug(path, options);
  cons.pug(path, options, fn);

  res = await cons.qejs(path);
  res = await cons.qejs(path, options);
  cons.qejs(path, options, fn);

  res = await cons.ractive(path);
  res = await cons.ractive(path, options);
  cons.ractive(path, options, fn);

  res = await cons.react(path);
  res = await cons.react(path, options);
  cons.react(path, options, fn);

  res = await cons.swig(path);
  res = await cons.swig(path, options);
  cons.swig(path, options, fn);

  res = await cons.templayed(path);
  res = await cons.templayed(path, options);
  cons.templayed(path, options, fn);

  res = await cons.toffee(path);
  res = await cons.toffee(path, options);
  cons.toffee(path, options, fn);

  res = await cons.underscore(path);
  res = await cons.underscore(path, options);
  cons.underscore(path, options, fn);

  res = await cons.walrus(path);
  res = await cons.walrus(path, options);
  cons.walrus(path, options, fn);

  res = await cons.whiskers(path);
  res = await cons.whiskers(path, options);
  cons.whiskers(path, options, fn);
})();

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


