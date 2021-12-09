import jsonpBody = require('jsonp-body');

// $ExpectType string
jsonpBody({ foo: 'bar' });

// $ExpectType string
jsonpBody({ foo: 'bar' }, 'callback', { limit: 50 });
