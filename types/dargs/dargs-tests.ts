import dargs = require('dargs');

const input = {
    _: ['some', 'option'],
    foo: 'bar',
    hello: true,
    cake: false,
    camelCase: 5,
    multiple: ['value', 'value2'],
    pieKind: 'cherry',
    sad: ':('
};

const excludes = ['sad', /.*Kind$/];
const includes = ['camelCase', 'multiple', 'sad', /^pie.*/];
const aliases = {file: 'f'};

// $ExpectType string[]
dargs(input, {excludes});
dargs(input, {excludes, includes});
dargs(input, {includes});
dargs({
    foo: 'bar',
    hello: true,
    file: 'baz'
}, {aliases});
dargs({foo: 'bar'}, {useEquals: false});
dargs({foo: 'bar'}, {ignoreFalse: true});
dargs({fooBar: 'baz'}, {allowCamelCase: true});
