import register1 = require('@babel/register');
import * as register2 from '@babel/register';
// tslint:disable-next-line:no-duplicate-imports
import register3, { RegisterOptions } from '@babel/register';

// $ExpectType typeof register
register1;

// $ExpectType typeof register
register2.default;

// $ExpectType typeof register
register3;
// $ExpectType RegisterOptions
type Opts = RegisterOptions;

// $ExpectType void
register3();
register3({});
register3({ cache: false });
// taken from https://babeljs.io/docs/en/babel-register/#specifying-options
register3({
    ignore: [
        /regex/,
        filepath => {
            return filepath !== '/path/to/es6-file.js';
        },
    ],
    only: [
        /my_es6_folder/,
        filepath => {
            return filepath === '/path/to/es6-file.js';
        },
    ],
    extensions: ['.es6', '.es', '.jsx', '.js', '.mjs'],
    cache: true,
    rootMode: 'upward',
});
// @ts-expect-error
register3({ blah: 'blah' });
