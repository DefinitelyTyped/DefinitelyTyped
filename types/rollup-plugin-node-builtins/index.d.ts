// Type definitions for rollup-plugin-node-builtins 2.1
// Project: https://github.com/calvinmetcalf/rollup-plugin-node-builtins#readme
// Definitions by: Hugo Alliaume <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Plugin } from 'rollup';

declare namespace builtins {
    interface Options {
        crypto?: boolean;
        fs?: boolean;
    }
}

export = builtins;
declare function builtins(options?: builtins.Options): Plugin;
