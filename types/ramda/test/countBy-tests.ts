import * as R from 'ramda';

() => {
    const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
    const letters = R.split('', 'abcABCaaaBBc');
    R.countBy(Math.floor)(numbers); // => {'1': 3, '2': 2, '3': 1}
    R.countBy(R.toLower)(letters); // => {'a': 5, 'b': 4, 'c': 3}
};
