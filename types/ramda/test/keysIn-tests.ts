import * as R from 'ramda';

class F {
    [k: string]: string;
    x = 'X';
    y = 'Y';
}

() => {
    const f = new F();
    // $ExpectType (keyof F)[] || (string | number)[]
    R.keysIn(f); // => ['x', 'y']
    // $ExpectType `${number}`
    R.keysIn('a'); // => []
    // $ExpectType []
    R.keysIn(1); // => []
    // $ExpectType []
    R.keysIn(Symbol()); // => []
    // $ExpectType []
    R.keysIn(true); // => []
    // $ExpectType []
    R.keysIn(null); // => []
    // $ExpectType []
    R.keysIn(undefined); // => []
    // $ExpectType []
    R.keysIn(/a/); // => []
    // $ExpectType []
    R.keysIn(new Date()); // => []
};
