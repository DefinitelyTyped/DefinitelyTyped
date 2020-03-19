import * as R from 'ramda';

() => {
    const obj = {
        foo: 'bar',
        baz: 123,
        3: 'asdf',
    };

    const func1: (obj: Record<'foo', 'bar'>) => boolean = R.propEq('foo', 'bar');

    const func2: (obj: Record<'baz', number>) => boolean = R.propEq('baz', 5);

    const func3: (obj: Record<number, string>) => boolean = R.propEq(5, 'qwerty');

    const func4: {
        <V>(val: V, obj: Record<'foo', V>): boolean;
        <V>(val: V): (obj: Record<'foo', V>) => boolean;
    } = R.propEq('foo');
};
