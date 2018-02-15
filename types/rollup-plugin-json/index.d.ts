// Type definitions for rollup-plugin-json 2.3
// Project: https://github.com/rollup/rollup-plugin-json#readme
// Definitions by: Andy Mockler <https://github.com/asmockler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'rollup';

export interface Options {
    include?: string | string[];
    exclude?: string | string[];
    preferConst?: boolean;
    indent?: string;
}

export default function json(options?: Options): Plugin;
