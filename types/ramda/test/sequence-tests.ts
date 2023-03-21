import * as R from 'ramda';

class Maybe<T> {
    value: T;
    static of: <S>(v: S) => Maybe<S>;
    ap: <B>(f: (a: T) => B) => Maybe<B>;
}

() => {
    const list = R.map(Maybe.of, [1, 2, 3]);
    const res: Maybe<number[]> = R.sequence(Maybe.of, list);
    expect(res).toBeInsanceOf(Maybe);
    expect(res.value).toStrictEqual([1, 2, 3]);
};
