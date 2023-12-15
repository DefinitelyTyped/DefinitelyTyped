/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

export interface ReadlineTransformOptions extends TransformOptions {
    /** line break matcher for str.split() (default: /\r?\n/) */
    breakMatcher?: RegExp | undefined;
    /** if content ends with line break, ignore last empty line (default: true) */
    ignoreEndOfBreak?: boolean | undefined;
    /** if line is empty string, skip it (default: false) */
    skipEmpty?: boolean | undefined;
}

export default class ReadlineTransform extends Transform {
    constructor(options?: ReadlineTransformOptions);
}
