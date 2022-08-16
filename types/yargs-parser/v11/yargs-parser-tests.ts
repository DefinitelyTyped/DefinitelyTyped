import parse, { Arguments } from 'yargs-parser';

parse('--foo -bar');

parse(['--foo', '-bar']);

parse(['--foo', '-bar'], {
    boolean: ['b', 'a', 'r'],
});

// prettier-ignore
// @ts-expect-error
parse(['--foo', '-bar'], { string: 123, });

parse(['--foo', '-bar'], {
    // @ts-expect-error
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
        // @ts-expect-error
        'fake-key': true,
    },
});

parse.detailed('--foo -bar');

parse.detailed(['--foo', '-bar']);

parse.detailed(['--foo'], {});

function test(args: Arguments) {}
