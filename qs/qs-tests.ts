/// <reference path="./qs.d.ts" />

import qs = require('qs');

qs.stringify({ a: 'b' });
qs.stringify({ a: 'b', c: 'd' }, { delimiter: '&' });

qs.parse('a=b');
qs.parse('a=b&c=d', { delimiter: '&' });
