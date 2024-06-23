/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

declare namespace ReadlineTransform {
    interface Options extends TransformOptions {
        /** line break matcher for str.split() (default: /\r?\n/) */
        breakMatcher?: RegExp | undefined;
        /** if content ends with line break, ignore last empty line (default: true) */
        ignoreEndOfBreak?: boolean | undefined;
        /** if line is empty string, skip it (default: false) */
        skipEmpty?: boolean | undefined;
    }
}

declare class ReadlineTransform extends Transform {
    constructor(options?: ReadlineTransform.Options);
}

export = ReadlineTransform;
