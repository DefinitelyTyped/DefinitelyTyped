import * as R from 'ramda';

() => {
    const get =
        (prop: string) =>
        (obj: any): any[] => {
            const propVal = obj[prop];
            if (propVal) {
                return [propVal];
            } else {
                return [];
            }
        };

    // $ExpectType (obj: any) => string[]
    const getStateCode = R.composeWith(R.chain, [
        R.compose(val => [val], R.toUpper),
        get('state'),
        get('address'),
        get('user'),
    ]);
    getStateCode({ user: { address: { state: 'ny' } } }); // => []
    getStateCode({}); // => []

    const nextThree = (num: number): number[] => [num, num + 1, num + 2];
    const onlyOverNine = (num: number): number[] => (num > 9 ? [num] : []);
    const toString = (input: any): string[] => [`${input}`];
    const split = (input: string): string[] => input.split('');

    // $ExpectType (num: number) => string[]
    R.composeWith(R.chain, [split, toString, onlyOverNine, nextThree]);

    // $ExpectType (num: number) => string[]
    R.composeWith(R.chain)([split, toString, onlyOverNine, nextThree]);
};

() => {
    const composeWhileNotNil = R.composeWith((f, res) => (R.isNil(res) ? res : f(res)));

    // $ExpectType (args_0: { age: number; }) => number
    const incAgeIfNotNil = composeWhileNotNil([({ age }: { age: number }) => age]);

    incAgeIfNotNil({ age: 1 }); // => 2

    // Should pipe at least on function.
    // @ts-expect-error
    composeWhileNotNil([]);
};
