import parse from 'yargs-parser';

parse('--foo -bar');

parse(['--foo', '-bar']);

parse(['--foo', '-bar'], {
    boolean: ['b', 'a', 'r'],
});

// prettier-ignore
parse(['--foo', '-bar'], { // $ExpectError
    string: 123,
});

parse(['--foo', '-bar'], {
    // $ExpectError
    unknown: ['b', 'a', 'r'],
});

parse(['--foo', '-bar'], {
    alias: { foo: 'foo', bar: ['bar'] },
    '--': true,
});

parse(['--foo', '-bar'], {
    configuration: {
        'dot-notation': false,
    },
});

parse(['--foo', '-bar'], {
    envPrefix: 'YARG_',
    configuration: {
        // $ExpectError
        'fake-key': true,
    },
});

parse.detailed('--foo -bar');

parse.detailed(['--foo', '-bar']);

parse.detailed(['--foo'], {});
