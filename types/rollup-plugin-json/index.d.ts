/// <reference types="node" />
import { Plugin } from "rollup";

declare namespace json {
    interface Options {
        /**
         *  All JSON files will be parsed by default, but you can also specifically include/exclude files
         */
        include?: string | string[] | undefined;
        exclude?: string | string[] | undefined;
        /**
         *  for tree-shaking, properties will be declared as variables, using either `var` or `const`
         *  @default false
         */
        preferConst?: boolean | undefined;
        /**
         * specify indentation for the generated default export — defaults to '\t'
         * @default '\t'
         */
        indent?: string | undefined;
    }
}

declare function json(options?: json.Options): Plugin;
export = json;
