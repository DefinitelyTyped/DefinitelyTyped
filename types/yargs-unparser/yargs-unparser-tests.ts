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

// $ExpectError
unparse({ _: null });

// $ExpectError
unparse({ foo: 'bar' });

// $ExpectError
unparse({ _: [] }, { alias: { foo: 'baz' }});

// $ExpectError
unparse({ _: [] }, { default: null });

// $ExpectError
unparse({ _: [] }, { command: 1 });
