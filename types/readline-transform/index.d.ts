// Type definitions for readline-transform 1.0
// Project: https://github.com/tilfin/readline-transform
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
