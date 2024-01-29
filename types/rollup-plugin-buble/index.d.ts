/// <reference types="node" />

import { TransformOptions } from "buble";
import { Plugin } from "rollup";

declare namespace buble {
    interface Options extends TransformOptions {
        // Every files will be parsed by default, but you can specify which files to include or exclude
        include?: Array<string | RegExp> | string | RegExp | null | undefined;
        exclude?: Array<string | RegExp> | string | RegExp | null | undefined;
    }
}

export = buble;
declare function buble(options?: buble.Options): Plugin;
