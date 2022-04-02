import * as R from 'ramda';

() => {
    // $ExpectType string[]
    R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests']
    // $ExpectType string[]
    R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests']
    // $ExpectType "tests"[]
    R.append('tests', []); // => ['tests']
    // $ExpectError
    R.append('tests')([1, 1]); // => ['write', 'more', 'tests']
};
