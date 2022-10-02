import parse from 'colorjs.io/src/parse';

// @ts-expect-error
parse();

parse('foo'); // $ExpectType ColorObject
