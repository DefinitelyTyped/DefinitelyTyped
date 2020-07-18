import classNames = require('classnames');
import * as classNames2 from 'classnames';
import * as cn from 'classnames/bind';
import classNamesDedupe = require('classnames/dedupe');
import * as classNamesDedupe2 from 'classnames/dedupe';

classNames2('foo', 'bar'); // => 'foo bar'

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

classNames(['foo', ['bar', { baz: true }]]); // => 'foo bar baz'

// falsey values are just ignored
classNames(null, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// Supporting booleans is tricky since we should only support passing in false, which is ignored
// classNames(false, 'bar', 0, 1, { baz: null }, ''); // => 'bar 1'

// Support for CSS-Modules. Example from README:
// https://github.com/JedWatson/classnames/blob/master/README.md#alternate-bind-version-for-css-modules
const styles = {
    foo: 'abc',
    bar: 'def',
    baz: 'xyz',
};

const cx = cn.bind(styles);
const className = cx('foo', ['bar'], { baz: true }); // => "abc def xyz"

// falsey values are just ignored
cx(null, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// true is just ignored
cx(true || 'foo');

// export of classnames/bind can be used the same as normal classnames
cn(null, 'bar', undefined, 1, ['foo', 'bar', { baz: true }], '');

// classnames/dedupe has same usage as normal classnames
classNamesDedupe('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
classNamesDedupe2('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
