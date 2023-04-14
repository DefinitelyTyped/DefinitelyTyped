import * as R from 'ramda';

() => {
    // We shouldn't handle this case
    // since if the first argument is guaranteed to be a literal
    // you should not be using `R.or` in the first place.
    // $ExpectType boolean
    R.or(false, true); // => true
    // $ExpectType boolean
    R.or(false, Boolean(true)); // => true
    // $ExpectType false
    R.or(false, false); // => false
    // $ExpectType 0 | never[]
    R.or(0, []); // => []
    // $ExpectType 0 | never[]
    R.or(0)([]); // => []
    // $ExpectType "" | null
    R.or(null, ''); // => ''
    const a = '' as string | null | 0;
    const b = false as boolean | undefined | '';
    const c = 0 as number | false;
    // $ExpectType string | number
    R.or(a, Number(0));
    // $ExpectType string | true
    R.or(b, String(''));
    // $ExpectType number
    R.or(c, 3);
    // $ExpectType number | "a"
    R.or(c, 'a');
    // $ExpectType string | number
    R.or(Number(0), String(''));
    // $ExpectType number | string[]
    R.or(Number(0), Array(''));
};
