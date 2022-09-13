import * as R from 'ramda';

() => {
    const a: string[] = R.takeLast(1, ['foo', 'bar', 'baz']); // => ['baz']
    const b: string[] = R.takeLast(2)(['foo', 'bar', 'baz']); // => ['bar', 'baz']
    const c: string = R.takeLast(3, 'ramda'); // => 'mda'
    const d: string = R.takeLast(3)('ramda'); // => 'mda'
};
