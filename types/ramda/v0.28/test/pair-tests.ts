import * as R from 'ramda';

() => {
    R.pair('foo', 'bar'); // => ['foo', 'bar']
    const p: [string, number] = R.pair('foo', 1); // => ['foo', 1]
    const x: string = p[0];
    const y: number = p[1];
};

() => {
    const pairFoo: <S>(snd: S) => [string, S] = R.pair('foo');
    const p: [string, string] = pairFoo('bar');
};
