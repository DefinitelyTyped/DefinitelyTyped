import classNames = require('classnames')

classNames('foo', 'bar'); // => 'foo bar'

classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(10, 11); // => '10 11';

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

classNames(['foo', 'bar', 'baz']); // => 'foo bar baz'
classNames([1, 2, 3]); // => '1 2 3'
classNames([{ foo: true, bar: false }, { baz: true }]); // => 'foo baz'

classNames(["foo", ["bar", {baz: true}]]); // => 'foo bar baz'

// falsey values are just ignored
classNames(null, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// Supporting booleans is tricky since we should only support passing in false, which is ignored
//classNames(false, 'bar', 0, 1, { baz: null }, ''); // => 'bar 1'

// truthy and falsy values (not only booleans) are allowed for ClassDictionary parameters
classNames({
    // falsy:
    emptyString: "",
    noNumber: NaN,
    null: null,
    zero: 0,
    negativeZero: -0,
    false: false,
    undefined: undefined,

    // truthy (literally anything else):
    nonEmptyString: "foobar",
    whitespace: ' ',
    function: Object.prototype.toString,
    emptyObject: {},
    nonEmptyObject: {a: 1, b: 2},
    emptyList: [],
    nonEmptyList: [1, 2, 3]
}) // => 'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList'
