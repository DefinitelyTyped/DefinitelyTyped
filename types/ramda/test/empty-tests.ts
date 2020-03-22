import * as R from 'ramda';

() => {
    const a1 = R.empty([1, 2, 3, 4, 5]); // => []
    const a2 = R.empty([1, 2, 3]); // => []
    const a3 = R.empty('unicorns'); // => ''
    const a4 = R.empty({ x: 1, y: 2 }); // => {}
};
