import parse = require('parse-json');

parse(null);
parse('{}');
parse('{}', 'filepath');
parse('{}', () => null);
parse('{}', () => null, 'filepath');

// @ts-expect-error
parse(1);
