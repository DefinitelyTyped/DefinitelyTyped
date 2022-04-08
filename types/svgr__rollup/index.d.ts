// Type definitions for @svgr/rollup 4.3
// Project: https://github.com/smooth-code/svgr/tree/master/packages/rollup
// Definitions by: Nick <https://github.com/fobdy>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types='node' />

import { Plugin } from 'rollup';

declare namespace svgrRollup {
    interface Options {
        include?: string;
        exclude: string;
        babel: boolean;
    }
}

declare function svgrRollup(options?: svgrRollup.Options): Plugin;

export = svgrRollup;
