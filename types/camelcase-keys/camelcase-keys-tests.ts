import camelcaseKeys = require('camelcase-keys');

camelcaseKeys({'foo-bar': true});
// => {fooBar: true}

camelcaseKeys({'foo-bar': true, nested: {unicorn_rainbow: true}}, {deep: true});
// => {fooBar: true, nested: {unicornRainbow: true}}

camelcaseKeys({_: [], 'foo-bar': true});
// => {_: [], fooBar: true}
