// Type definitions for postcss-calc 7.0
// Project: https://github.com/postcss/postcss-calc
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/postcss-plugins-typings
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace calc {
    interface Options {
        precision?: number;
        preserve?: boolean;
        warnWhenCannotResolve?: boolean;
        mediaQueries?: boolean;
        selectors?: boolean;
    }

    type Calc = Plugin<Options>;
}

declare const calc: calc.Calc;
export = calc;
