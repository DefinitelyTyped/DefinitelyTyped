import calc from 'postcss-calc';

calc();

calc({
    precision: 5,
    preserve: false,
    warnWhenCannotResolve: false,
    mediaQueries: false,
    selectors: false,
});
