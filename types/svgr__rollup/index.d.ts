/// <reference types='node' />

import { Plugin } from "rollup";

declare namespace svgrRollup {
    interface Options {
        include?: string | undefined;
        exclude: string;
        babel: boolean;
    }
}

declare function svgrRollup(options?: svgrRollup.Options): Plugin;

export = svgrRollup;
