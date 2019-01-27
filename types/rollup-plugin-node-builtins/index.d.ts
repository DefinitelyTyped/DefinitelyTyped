// Type definitions for rollup-plugin-node-builtins 2.1
// Project: https://github.com/calvinmetcalf/rollup-plugin-node-builtins#readme
// Definitions by: Hugo Alliaume <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Plugin } from 'rollup';

export interface Options {
    crypto?: boolean;
    fs?: boolean;
}

export default function builtins(options?: Options): Plugin;
