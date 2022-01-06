// Type definitions for postcss-calc 8.1
// Project: https://github.com/postcss/postcss-calc
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { PluginCreator } from 'postcss';

export interface Options {
    precision?: number | undefined;
    preserve?: boolean | undefined;
    warnWhenCannotResolve?: boolean | undefined;
    mediaQueries?: boolean | undefined;
    selectors?: boolean | undefined;
}

declare const Calc: PluginCreator<Options>;

export default Calc;
