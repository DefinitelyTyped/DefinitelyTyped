import * as R from 'ramda';

() => {
    // $ExpectType "test"
    R.toLower('TesT');
    const s: string = 'TesT';
    // $ExpectType string
    R.toLower(s);
    // $ExpectError
    R.toLower(['a']);
    // $ExpectError
    R.toLower(1);
    // $ExpectType "test"
    R.toLower('TesT' as 'TesT' | 'test');
    // $ExpectType string
    R.toLower('TesT' as 'TesT' | string);
    // $ExpectError
    R.toLower('TesT' as 'TesT' | 1);
};
