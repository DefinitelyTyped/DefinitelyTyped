import * as CSON from 'cson-parser';

CSON.parse('[ 1, 2, a: "str" ]');

CSON.stringify({ domain: 'typescript.org' }, null, 4);
