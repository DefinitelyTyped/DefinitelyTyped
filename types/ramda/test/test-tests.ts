import * as R from 'ramda';

() => {
    const a: boolean = R.test(/^x/, 'xyz'); // => true
    const b: boolean = R.test(/^y/)('xyz'); // => false
};
