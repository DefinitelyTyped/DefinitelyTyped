///<reference path='classnames.d.ts' />

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

// other falsy values are just ignored
// NOTE: We don't really want to allow this kind of thing with Typescript (otherwise what's the point!)
//classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'