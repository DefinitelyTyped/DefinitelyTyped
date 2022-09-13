import * as R from 'ramda';

() => {
    const a = R.mergeDeepRight({ foo: { bar: 1 } }, { foo: { bar: 2 } }); // => {foo: bar: 2}}
};
