import * as R from 'ramda';

class F {
    [k: string]: string;
    x = 'X';
    y = 'Y';
}

() => {
    const f = new F();
    const a1 = R.toPairsIn(f); // => [['x','X'], ['y','Y']]
    const a2 = R.toPairsIn<string>(f); // => [['x','X'], ['y','Y']]
};

class C {
    x: 'X' = 'X';
    y: 'Y' = 'Y';
}

() => {
    const c = new C();
    const a: Array<['x', 'X'] | ['y', 'Y']> = R.toPairsIn(c); // => [['x','X'], ['y','Y']]
};
