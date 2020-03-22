import * as R from 'ramda';

() => {
    R.mergeLeft({ foo: { bar: 1 } }, { foo: { bar: 2 } }); // => {foo: {bar: 1}}
    const curry1 = R.mergeLeft({ foo: { bar: 1 } });
    curry1({ foo: { bar: 2 } }); // => {foo: {bar: 1}}
};
