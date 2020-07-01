import jsontoxml = require('jsontoxml');

// $ExpectType string
jsontoxml({foo: 'bar'}, {escape: true, xmlHeader: true});

// $ExpectType string
jsontoxml.escape('&test');

// $ExpectType string
jsontoxml.cdata('test');
