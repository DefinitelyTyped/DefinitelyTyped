/// <reference path="./query-string.d.ts" />

import qs = require('query-string');

qs.stringify({ foo: 'bar' });
qs.stringify({ foo: 'bar', bar: 'baz' });
qs.stringify({ foo: 'bar' }, {strict: false})

qs.parse('?foo=bar');
qs.parse('#foo=bar');
qs.parse('&foo=bar&foo=baz');

qs.extract('http://foo.bar/?abc=def&hij=klm');
qs.extract('http://foo.bar/?foo=bar');
