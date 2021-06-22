import globrex = require('globrex');
import { Options, Results } from 'globrex';

const result = globrex('p*uck'); // $ExpectType Results
// => { regex: /^p.*uck$/, string: '^p.*uck$', segments: [ /^p.*uck$/ ] }

const options: Options = {
    extended: true,
    filepath: true,
    globstar: true,
    strict: true,
};
const resultWithOptions: Results = globrex('p*uck', options); // $ExpectType Results
result.regex.test('pluck'); // $ExpectType boolean
resultWithOptions.regex.test('pluck'); // $ExpectType boolean
