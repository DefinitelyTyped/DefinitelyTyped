import * as R from 'ramda';

() => {
    function isPositive(n: number) {
        return n > 0;
    }

    // $ExpectType Partial<{ a: number; b: number; c: number; d: number; e: number; }>
    R.pickBy(isPositive, { a: 1, b: 2, c: -1, d: 0, e: 5 }); // => {a: 1, b: 2, e: 5}

    function containsBackground(val: any) {
        return val.bgcolor;
    }

    const colors = {
        1: { color: 'read' },
        2: { color: 'black', bgcolor: 'yellow' },
    };
    // $ExpectType Partial<{ 1: { color: string; }; 2: { color: string; bgcolor: string; }; }>
    R.pickBy(containsBackground, colors); // => {2: {color: 'black', bgcolor: 'yellow'}}

    interface Style {
        color?: string;
        bgcolor?: string;
    }

    const colors2: Record<number, Style> = colors;
    // $ExpectType Partial<Record<number, Style>>
    R.pickBy(containsBackground, colors2); // => {2: {color: 'black', bgcolor: 'yellow'}}

    function isUpperCase(_val: number, key: string) {
        return key.toUpperCase() === key;
    }

    // $ExpectType Partial<{ a: number; b: number; A: number; B: number; }>
    R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); // => {A: 3, B: 4}
};

() => {
    function isUpperCase(_val: number, key: string) {
        return key.toUpperCase() === key;
    }

    // $ExpectType Partial<{ a: number; b: number; A: number; B: number; }>
    R.pickBy(isUpperCase, { a: 1, b: 2, A: 3, B: 4 }); // => {A: 3, B: 4}
};

() => {
    const obj = { a: 1, b: 2, c: 3, d: 4 };
    R.pickBy((_, key) => key !== 'c', obj); // => { a: 1, b: 2, d: 4 }

    const excludePropertyD = R.pickBy<typeof obj>((_val, key) => key !== 'd');
    // $ExpectType Partial<{ a: number; b: number; c: number; d: number; }>
    excludePropertyD({ a: 1, b: 2, c: 3, d: 4 }); // => { a: 1, b: 2, c: 3 }
};
