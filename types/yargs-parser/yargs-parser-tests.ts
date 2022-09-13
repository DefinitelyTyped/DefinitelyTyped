import parse, { Arguments } from 'yargs-parser';

parse('--foo -bar');

parse(['--foo', '-bar']);

// prettier-ignore
// @ts-expect-error
parse(['--foo', '-bar'], { string: 123, });

parse(['--foo', '-bar'], {
    // @ts-expect-error
    unknown: ['b', 'a', 'r'],
});

// alias

parse(['--foo', '-bar'], {
    alias: { foo: 'foo', bar: ['bar'] },
});

// array

parse(['--foo', '-bar'], {
    array: ['foo', 'bar'],
});

parse(['--foo', '-bar'], {
    array: [
        { key: 'foo', boolean: true },
        { key: 'bar', number: true },
    ],
});

// boolean

parse(['--foo', '-bar'], {
    boolean: ['b', 'a', 'r'],
});

//  config

parse(['--foo', '-bar'], {
    config: 'path to config',
});

parse(['--foo', '-bar'], {
    config: ['path to config #1', 'path to config #2'],
});

parse(['--foo', '-bar'], {
    config: { foo: true },
});

// configuration

parse(['--foo', '-bar'], {
    configuration: {
        'short-option-groups': false,
        'camel-case-expansion': false,
        'dot-notation': false,
        'parse-numbers': false,
        'parse-positional-numbers': false,
        'boolean-negation': false,
        'combine-arrays': true,
        'duplicate-arguments-array': false,
        'flatten-duplicate-arrays': false,
        'greedy-arrays': false,
        'nargs-eats-options': true,
        'negation-prefix': 'nope-',
        'populate--': true,
        'set-placeholder-key': true,
        'halt-at-non-option': true,
    },
});

// coerce

parse(['--foo', '-bar'], {
    coerce: { foo: arg => arg },
});

// count

parse(['--foo', '-bar'], {
    count: ['foo', 'bar'],
});

// default

parse(['--foo', '-bar'], {
    default: { x: 33, y: 'hello world!' },
});

// envPrefix

parse(['--foo', '-bar'], {
    envPrefix: 'YARG_',
    configuration: {
        // @ts-expect-error
        'fake-key': true,
    },
});

// narg

parse(['--foo', '-bar'], {
    narg: { x: 2 },
});

// normalize

parse(['--foo', '-bar'], {
    normalize: ['foo', 'bar'],
});

// string

parse(['--foo', '-bar'], {
    string: ['foo', 'bar'],
});

// number

parse(['--foo', '-bar'], {
    number: ['foo', 'bar'],
});

parse.detailed('--foo -bar');

parse.detailed(['--foo', '-bar']);

parse.detailed(['--foo'], {});

// $ExpectType string
parse.camelCase('value');

// $ExpectType string
parse.decamelize('value');

// $ExpectType boolean
parse.looksLikeNumber(1);

function test(args: Arguments) {}
