/// <reference types="node" />

import { Plugin } from "rollup";

declare namespace builtins {
    interface Options {
        crypto?: boolean | undefined;
        fs?: boolean | undefined;
    }
}

export = builtins;
declare function builtins(options?: builtins.Options): Plugin;
