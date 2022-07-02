import defaults = require('defaults-deep');

defaults();
defaults({a: 'foo'});
defaults({a: 'foo'}, {a: 'bar'});
defaults({a: 'foo'}, {a: 'bar'}, {a: 'foobar'});
defaults({a: {b: 'foo'}}, {a: {b: 'bar'}});
