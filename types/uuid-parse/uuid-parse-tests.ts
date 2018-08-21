import * as uuidParse from 'uuid-parse';

uuidParse.parse('797ff043-11eb-11e1-80d6-510998755d10');
uuidParse.parse('797ff043-11eb-11e1-80d6-510998755d10', []);
uuidParse.parse('797ff043-11eb-11e1-80d6-510998755d10', new Buffer(''));
uuidParse.parse('797ff043-11eb-11e1-80d6-510998755d10', new Buffer(''), 123);

uuidParse.unparse(new Buffer(''));
uuidParse.unparse(new Buffer(''), 123);
