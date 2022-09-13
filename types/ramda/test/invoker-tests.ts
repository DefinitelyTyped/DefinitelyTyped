import * as R from 'ramda';

() => {
    R.invoker(1, 'slice')(6, 'abcdefghijklm');
    R.invoker(2, 'slice')(6)(8, 'abcdefghijklm');
};
