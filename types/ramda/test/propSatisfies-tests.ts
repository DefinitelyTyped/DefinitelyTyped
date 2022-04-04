import * as R from 'ramda';

() => {
    const obj = { x: 1, y: 2 };
    // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0, 'x', obj); // => true
    // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0, 'x')(obj); // => true
    // $ExpectType boolean
    R.propSatisfies((x: number) => x > 0)('x')(obj); // => true
};

() => {
    const obj: { x: unknown } = { x: 'x' };

    if (R.propSatisfies(R.is(Number), 'x', obj)) {
        // $ExpectType number
        obj.x;
    }

    if (R.propSatisfies(R.is(Number), 'x')(obj)) {
        // $ExpectType number
        obj.x;
    }

    if (R.propSatisfies(R.is(Number))('x', obj)) {
        // $ExpectType number
        obj.x;
    }

    if (R.propSatisfies(R.is(Number))('x')(obj)) {
        // $ExpectType number
        obj.x;
    }

    const unk: unknown = 'unk';
    // $ExpectError
    R.propSatisfies(R.is(Number), 'x', unk);
    // $ExpectError
    R.propSatisfies(R.is(Number), 'x')(unk);
    // $ExpectError
    R.propSatisfies(R.is(Number))('x', unk);
    // $ExpectError
    R.propSatisfies(R.is(Number))('x')(unk);
};
