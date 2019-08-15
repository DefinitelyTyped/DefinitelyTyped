import parse = require('parse-json');

parse(null);
parse('{}');
parse('{}', 'filepath');
parse('{}', () => null);
parse('{}', () => null, 'filepath');

// $ExpectError
parse(1);
