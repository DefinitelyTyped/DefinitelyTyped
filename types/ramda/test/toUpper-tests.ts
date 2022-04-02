import * as R from 'ramda';

() => {
    // $ExpectType "TEST"
    R.toUpper('TesT');
    const s: string = 'TesT';
    // $ExpectType string
    R.toUpper(s);
    // $ExpectError
    R.toUpper(['a']);
    // $ExpectError
    R.toUpper(1);
    // $ExpectType "TEST"
    R.toUpper('TesT' as 'TesT' | 'test');
    // $ExpectType string
    R.toUpper('TesT' as 'TesT' | string);
    // $ExpectError
    R.toUpper('TesT' as 'TesT' | 1);
};
