import * as R from 'ramda';

() => {
    // $ExpectType string[]
    R.append('tests', ['write', 'more']); // => ['write', 'more', 'tests']
    // $ExpectType string[]
    R.append('tests')(['write', 'more']); // => ['write', 'more', 'tests']
    // $ExpectType "tests"[]
    R.append('tests', []); // => ['tests']
    // @ts-expect-error
    R.append('tests')([1, 2]); // => ['write', 'more', 'tests']
    // $ExpectType (list: readonly string[]) => string[]
    R.append('tests');
    // $ExpectType (list: readonly (string | number)[]) => (string | number)[]
    R.append<string | number>('tests');
    // $ExpectType (string | number)[]
    R.append<string | number>('tests')([1, 2]); // => [1, 2, 'tests']
};
