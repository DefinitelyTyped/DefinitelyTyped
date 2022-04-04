import * as R from 'ramda';

() => {
    // $ExpectType string
    R.toUpper('TesT');
    const s = (() => {}).toString();
    // $ExpectType string
    R.toUpper(s);
    // $ExpectError
    R.toUpper(['a']);
    // $ExpectError
    R.toUpper(1);
    // $ExpectType string
    R.toUpper('TesT' as 'TesT' | 'test');
    // $ExpectType string
    R.toUpper('TesT' as 'TesT' | string);
    // $ExpectError
    R.toUpper('TesT' as 'TesT' | 1);
};
