// Type definitions for readline-transform 0.9
// Project: https://github.com/tilfin/readline-transform
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform, TransformOptions } from 'stream';

declare namespace ReadlineTransform {
  interface Options extends TransformOptions {
    /** line break matcher for str.split() (default: /\r?\n/) */
    breakMatcher?: RegExp;
    /** if content ends with line break, ignore last empty line (default: true) */
    ignoreEndOfBreak?: boolean;
    /** if line is empty string, skip it (default: false) */
    skipEmpty?: boolean;
  }
}

declare class ReadlineTransform extends Transform {
  constructor(options?: ReadlineTransform.Options);
}

export = ReadlineTransform;
