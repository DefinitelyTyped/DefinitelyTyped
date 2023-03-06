import unparse, { Argv } from 'yargs-unparser';

unparse({ _: []});

unparse({ _: [], foo: 'foo', bar: 1, baz: true });

unparse({ _: [], foo: 'foo', bar: 1, baz: true }, {});

unparse({ _: [], foo: 'foo', bar: 1, baz: true }, {
    alias: {foo: ['f']},
    default: {foo: 'bar'},
    command: 'qux'
});

const argv: Argv = unparse({ _: ['some/cmd'], foo: 'bar' });

// @ts-expect-error
unparse({ _: null });

// @ts-expect-error
unparse({ foo: 'bar' });

// @ts-expect-error
unparse({ _: [] }, { alias: { foo: 'baz' }});

// @ts-expect-error
unparse({ _: [] }, { default: null });

// @ts-expect-error
unparse({ _: [] }, { command: 1 });
