import jsonminify = require('jsonminify');

jsonminify('{ "foo": "bar" }'); // $ExpectType string
JSON.minify('{ "foo": "bar" }'); // $ExpectType string
