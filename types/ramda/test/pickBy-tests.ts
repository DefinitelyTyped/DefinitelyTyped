import * as R from 'ramda';

() => {
    function isPositive(n: number) {
        return n > 0;
    }

    const a1 = R.pickBy(isPositive, { a: 1, b: 2, c: -1, d: 0, e: 5 }); // => {a: 1, b: 2, e: 5}
    function containsBackground(val: any) {
        return val.bgcolor;
    }

    const colors = {
        1: { color: 'read' },
        2: { color: 'black', bgcolor: 'yellow' },
    };
    R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

    function isUpperCase(val: number, key: string) {
        return key.toUpperCase() === key;
    }

    R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); // => {A: 3, B: 4}
};

() => {
    function isUpperCase(val: number, key: string) {
        return key.toUpperCase() === key;
    }

    R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); // => {A: 3, B: 4}
};

() => {
    R.pickBy((_, key) => key !== 'c', { a: 1, b: 2, c: 3, d: 4 }); // => { a: 1, b: 2, d: 4 }

    interface T1 {
        a: number;
        b: number;
        c: number;
        d: number;
    }
    const excludePropertyD = R.pickBy<T1>((val, key) => key !== 'd');
    interface T2 {
        a: number;
        b: number;
        c: number;
    }
    const result = excludePropertyD<T2, T1>({ a: 1, b: 2, c: 3, d: 4 }); // => { a: 1, b: 2, c: 3 }
};
