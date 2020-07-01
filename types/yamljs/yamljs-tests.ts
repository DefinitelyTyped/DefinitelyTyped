import yamljs = require('yamljs');

yamljs.load('yaml-testfile.yml');

yamljs.parse('this_is_no_ymlstring');

yamljs.stringify({ a: 'val', b: { ba: 123, bb: 'nothing' } });

yamljs.stringify({ a: 'val', b: { ba: 123, bb: 'nothing' } }, 1);

yamljs.stringify({ a: 'val', b: { ba: 123, bb: 'nothing' } }, 1, 2);
