import * as R from 'ramda';

() => {
    const fn: (...args: string[]) => string = R.unapply(JSON.stringify);
    const res: string = R.unapply(JSON.stringify)(1, 2, 3); // => '[1,2,3]'
};
