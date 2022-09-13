import * as R from 'ramda';

() => {
    const f = R.cond<[number], string>([
        [x => x === 0, () => 'a'],
        [() => true, () => 'b'],
    ]);

    // $ExpectType string
    f(0);

    // @ts-expect-error
    f('');

    // @ts-expect-error
    f(1, 2);

    const g = R.cond([
        [(a: any, b: any): boolean => a === b, () => 'a'],
        [() => true, () => 'b'],
    ]);
    // @ts-expect-error
    g(0);

    // @ts-expect-error
    g('');

    // $ExpectType string
    g(1, '');

    R.cond([
        [(a: string | number): a is number => true, a => a * 2],
        [(a: string | number): a is string => true, a => a.length],
    ]);
};
