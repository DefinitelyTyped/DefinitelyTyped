import * as R from 'ramda';

() => {
    const f = R.cond<[number], string>([
        [x => x === 0, () => 'a'],
        [() => true, () => 'b'],
    ]);

    // $ExpectType string
    f(0);

    // $ExpectError
    f('');

    // $ExpectError
    f(1, 2);

    const g = R.cond([
        [(a: any, b: any): boolean => a === b, () => 'a'],
        [() => true, () => 'b'],
    ]);
    // $ExpectError
    g(0);

    // $ExpectError
    g('');

    // $ExpectType string
    g(1, '');

    R.cond([
        [(a: string | number | boolean): a is number => true, a => a * 2],
        [(a: string | boolean): a is string => true, a => a.length],
        [(a: boolean): a is boolean => true, a => (a ? 1 : 0)],
    ]);

    R.cond([
        [(a: string | number | boolean): a is number => true, a => a * 2],
        [(a: string | boolean): a is string => true, a => a.length],
        // Make sure overloads match, even when function argument is broader then expected
        [(a: boolean | number | number[]): a is boolean => true, a => (a ? 1 : 0)],
    ]);
};
