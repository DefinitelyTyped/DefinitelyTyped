import * as R from 'ramda';

() => {
    // $ExpectType string
    R.invoker<(start: number, s: string) => string>(1, 'slice')(6, 'abcdefghijklm');
    // $ExpectType string
    R.invoker<(start: number, end: number, s: string) => string>(2, 'slice')(6)(8, 'abcdefghijklm');
};
