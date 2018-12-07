import globToRegExp = require('glob-to-regexp');
let re = globToRegExp("p*uck");
re.test("pot luck"); // true
re.test("pluck"); // true
re.test("puck"); // true

re = globToRegExp("*.min.js");
re.test("http://example.com/jquery.min.js"); // true
re.test("http://example.com/jquery.min.js.map"); // false

re = globToRegExp("*/www/*.js");
re.test("http://example.com/www/app.js"); // true
re.test("http://example.com/www/lib/factory-proxy-model-observer.js"); // true

// Extended globs
re = globToRegExp("*/www/{*.js,*.html}", { extended: true });
re.test("http://example.com/www/app.js"); // true
re.test("http://example.com/www/index.html"); // true

// globstar
re = globToRegExp("**/www/*", { globstar: true });
re.test("http://example.com/www/index.html"); // true
re.test("http://example.com/www/articles/index.html"); // false

re = globToRegExp("*/www/*", { globstar: true });
re.test("http://example.com/www/index.html"); // false
