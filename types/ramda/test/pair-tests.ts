import * as R from 'ramda';

() => {
    R.pair('foo', 'bar'); // => ['foo', 'bar']
    // $ExpectType [string, number]
    R.pair('foo', 1); // => ['foo', 1]
    // $ExpectType [string, number]
    R.pair<string, number>('foo', 1); // => ['foo', 1]
    // $ExpectType [string, number]
    R.pair<string>('foo')<number>(1); // => ['foo', 1]
    // $ExpectType [string, number]
    R.pair<string, number>('foo')(1); // => ['foo', 1]
};

() => {
    const pairFoo: <S>(snd: S) => [string, S] = R.pair('foo');
    // $ExpectType [string, string]
    pairFoo('bar');
};
