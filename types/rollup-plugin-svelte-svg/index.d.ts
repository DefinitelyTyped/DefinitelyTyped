/// <reference types="./svg" />

import type { Plugin } from "rollup";
import type { OptimizeOptions } from "svgo";

export interface Options {
    enforce?: "pre" | "post" | undefined;
    svgo?: OptimizeOptions | undefined;
}

export function svelteSVG(options?: Options): Plugin;
