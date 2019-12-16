import qs = require('simple-query-string');

// Omit optional parameters
qs.parse('http://example.org/test/?key=val&param=1');

// Omit last optional parameter
qs.parse('http://example.org/test/?key=val&param=1', '&');

// Specify all parameters
qs.parse('http://example.org/test/?key=val&param=1', '&', '=');

// Omit optional parameters
qs.stringify({});
qs.stringify({
    param1: 'string',
    param2: 123,
    param3: true,
    param4: ['element1', 'element2'],
    param5: { key1: 'value1', key2: 'value2' },
    param6: new RegExp('regex'),
    param7: null,
});

// Omit last optional parameter
qs.stringify({}, '&');

// Specify all parameters
qs.stringify({}, '&', '=');
