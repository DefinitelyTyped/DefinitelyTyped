// Type definitions for postcss-calc 7.0
// Project: https://github.com/postcss/postcss-calc
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Plugin } from "postcss";

declare namespace calc {
    interface Options {
        precision?: number | undefined;
        preserve?: boolean | undefined;
        warnWhenCannotResolve?: boolean | undefined;
        mediaQueries?: boolean | undefined;
        selectors?: boolean | undefined;
    }

    type Calc = Plugin<Options>;
}

declare const calc: calc.Calc;
export = calc;
