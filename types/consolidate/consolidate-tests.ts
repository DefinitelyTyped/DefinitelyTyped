
import cons = require('consolidate');

var path: string = 'test/path';
var options = {user: 'tobi'};
var fn = function(err: Error, html: string) {};
(async () => {
  let res: string;

  cons.requires.extend = {};
  cons.requires.ReactDOM = {};
  cons.requires.babel = {};

  res = await cons['arc-templates'](path);
  res = await cons['arc-templates'](path, options);
  cons['arc-templates'](path, options, fn);
  cons.requires['arc-templates'] = {};

  res = await cons.atpl(path);
  res = await cons.atpl(path, options);
  cons.atpl(path, options, fn);
  cons.requires.atpl = {};

  res = await cons.bracket(path);
  res = await cons.bracket(path, options);
  cons.bracket(path, options, fn);
  cons.requires.bracket = {};

  res = await cons.dot(path);
  res = await cons.dot(path, options);
  cons.dot(path, options, fn);
  cons.requires.dot = {};

  res = await cons.dust(path);
  res = await cons.dust(path, options);
  cons.dust(path, options, fn);
  cons.requires.dust = {};

  res = await cons.eco(path);
  res = await cons.eco(path, options);
  cons.eco(path, options, fn);
  cons.requires.eco = {};

  res = await cons.ejs(path);
  res = await cons.ejs(path, options);
  cons.ejs(path, options, fn);
  cons.requires.ejs = {};

  res = await cons.ect(path);
  res = await cons.ect(path, options);
  cons.ect(path, options, fn);
  cons.requires.ect = {};

  res = await cons.haml(path);
  res = await cons.haml(path, options);
  cons.haml(path, options, fn);
  cons.requires.haml = {};

  res = await cons['haml-coffee'](path);
  res = await cons['haml-coffee'](path, options);
  cons['haml-coffee'](path, options, fn);
  cons.requires['haml-coffee'] = {};

  res = await cons.hamlet(path);
  res = await cons.hamlet(path, options);
  cons.hamlet(path, options, fn);
  cons.requires.hamlet = {};

  res = await cons.handlebars(path);
  res = await cons.handlebars(path, options);
  cons.handlebars(path, options, fn);
  cons.requires.handlebars = {};

  res = await cons.hogan(path);
  res = await cons.hogan(path, options);
  cons.hogan(path, options, fn);
  cons.requires.hogan = {};

  res = await cons.htmling(path);
  res = await cons.htmling(path, options);
  cons.htmling(path, options, fn);
  cons.requires.htmling = {};

  res = await cons.jade(path);
  res = await cons.jade(path, options);
  cons.jade(path, options, fn);
  cons.requires.jade = {};

  res = await cons.jazz(path);
  res = await cons.jazz(path, options);
  cons.jazz(path, options, fn);
  cons.requires.jazz = {};

  res = await cons.jqtpl(path);
  res = await cons.jqtpl(path, options);
  cons.jqtpl(path, options, fn);
  cons.requires.jqtpl = {};

  res = await cons.just(path);
  res = await cons.just(path, options);
  cons.just(path, options, fn);
  cons.requires.just = {};

  res = await cons.liquid(path);
  res = await cons.liquid(path, options);
  cons.liquid(path, options, fn);
  cons.requires.liquid = {};

  res = await cons.liquor(path);
  res = await cons.liquor(path, options);
  cons.liquor(path, options, fn);
  cons.requires.liquor = {};

  res = await cons.lodash(path);
  res = await cons.lodash(path, options);
  cons.lodash(path, options, fn);
  cons.requires.lodash = {};

  res = await cons.mote(path);
  res = await cons.mote(path, options);
  cons.mote(path, options, fn);
  cons.requires.mote = {};

  res = await cons.mustache(path);
  res = await cons.mustache(path, options);
  cons.mustache(path, options, fn);
  cons.requires.mustache = {};

  res = await cons.nunjucks(path);
  res = await cons.nunjucks(path, options);
  cons.nunjucks(path, options, fn);
  cons.requires.nunjucks = {};

  res = await cons.pug(path);
  res = await cons.pug(path, options);
  cons.pug(path, options, fn);
  cons.requires.pug = {};

  res = await cons.qejs(path);
  res = await cons.qejs(path, options);
  cons.qejs(path, options, fn);
  cons.requires.qejs = {};

  res = await cons.ractive(path);
  res = await cons.ractive(path, options);
  cons.ractive(path, options, fn);
  cons.requires.ractive = {};

  res = await cons.razor(path);
  res = await cons.razor(path, options);
  cons.razor(path, options, fn);
  cons.requires.razor = {};

  res = await cons.react(path);
  res = await cons.react(path, options);
  cons.react(path, options, fn);
  cons.requires.react = {};

  res = await cons.slm(path);
  res = await cons.slm(path, options);
  cons.slm(path, options, fn);
  cons.requires.slm = {};

  res = await cons.squirrelly(path);
  res = await cons.squirrelly(path, options);
  cons.squirrelly(path, options, fn);
  cons.requires.squirrelly = {};

  res = await cons.swig(path);
  res = await cons.swig(path, options);
  cons.swig(path, options, fn);
  cons.requires.swig = {};

  res = await cons.teacup(path);
  res = await cons.teacup(path, options);
  cons.teacup(path, options, fn);
  cons.requires.teacup = {};

  res = await cons.templayed(path);
  res = await cons.templayed(path, options);
  cons.templayed(path, options, fn);
  cons.requires.templayed = {};

  res = await cons.toffee(path);
  res = await cons.toffee(path, options);
  cons.toffee(path, options, fn);
  cons.requires.toffee = {};

  res = await cons.twig(path);
  res = await cons.twig(path, options);
  cons.twig(path, options, fn);
  cons.requires.twig = {};


  res = await cons.underscore(path);
  res = await cons.underscore(path, options);
  cons.underscore(path, options, fn);
  cons.requires.underscore = {};

  res = await cons.vash(path);
  res = await cons.vash(path, options);
  cons.vash(path, options, fn);
  cons.requires.vash = {};

  res = await cons.velocityjs(path);
  res = await cons.velocityjs(path, options);
  cons.velocityjs(path, options, fn);
  cons.requires.velocityjs = {};

  res = await cons.walrus(path);
  res = await cons.walrus(path, options);
  cons.walrus(path, options, fn);
  cons.requires.walrus = {};

  res = await cons.whiskers(path);
  res = await cons.whiskers(path, options);
  cons.whiskers(path, options, fn);
  cons.requires.whiskers = {};
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


