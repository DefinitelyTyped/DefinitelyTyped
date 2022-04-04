import * as R from 'ramda';

class F {
    [k: string]: string;
    x = 'X';
    y = 'Y';
}

() => {
    const f = new F();
    // $ExpectType string[]
    R.valuesIn(f); // => ['X', 'Y']
    // TODO: more tests
};
