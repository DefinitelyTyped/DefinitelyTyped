import postcss = require('postcss');
import header = require('postcss-header');

// $ExpectType LazyResult
const result = postcss(
    header({
        header: '/* A simple header */',
    }),
).process('.foo{}');

// $ExpectType Transformer
header({
    header: 'foo',
});
