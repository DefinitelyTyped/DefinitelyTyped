// Type definitions for rollup-plugin-json 3.0
// Project: https://github.com/rollup/rollup-plugin-json#readme
// Definitions by: Andy Mockler <https://github.com/asmockler>
//                 Martin Hochel <https://github.com/hotell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Plugin } from 'rollup';

export interface Options {
    /**
     *  All JSON files will be parsed by default, but you can also specifically include/exclude files
     */
    include?: string | string[];
    exclude?: string | string[];
    /**
     *  for tree-shaking, properties will be declared as variables, using either `var` or `const`
     *  @default false
     */
    preferConst?: boolean;
    /**
     * specify indentation for the generated default export — defaults to '\t'
     * @default '\t'
     */
    indent?: string;
}

export default function json(options?: Options): Plugin;
