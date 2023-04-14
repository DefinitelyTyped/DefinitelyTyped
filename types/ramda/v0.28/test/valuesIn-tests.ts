import * as R from 'ramda';

class F {
    [k: string]: string;
    x = 'X';
    y = 'Y';
}

() => {
    const f = new F();
    const a = R.valuesIn(f); // => ['X', 'Y']
};
