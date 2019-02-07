// Type definitions for rollup-plugin-delete 0.2
// Project: https://github.com/vladshcherbin/rollup-plugin-delete#readme
// Definitions by: Vlad Shcherbin <https://github.com/vladshcherbin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import del = require('del');
import { Plugin } from 'rollup';

export interface Options extends del.Options {
    /**
     * Patterns of files and folders to be deleted.
     * @default []
     */
    readonly targets: ReadonlyArray<string> | string;

    /**
     * Outputs removed files and folders to console.
     * @default false
     */
    readonly verbose?: boolean;
}

export default function(options?: Options): Plugin;
