import * as R from 'ramda';

class F {
    [k: string]: string;
    x = 'X';
    y = 'Y';
}

() => {
    const f = new F();
    R.keysIn(f); // => ['x', 'y']
};
