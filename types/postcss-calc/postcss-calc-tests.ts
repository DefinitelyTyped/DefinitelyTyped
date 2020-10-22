import calc = require("postcss-calc");
import { Transformer } from 'postcss';

const ap1: Transformer = calc();

const ap2: Transformer = calc({
    precision: 5,
    preserve: false,
    warnWhenCannotResolve: false,
    mediaQueries: false,
    selectors: false
});
