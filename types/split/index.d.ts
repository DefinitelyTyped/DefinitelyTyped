// Type definitions for split v0.3.3
// Project: https://github.com/dominictarr/split
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />



interface SplitOptions {
    maxLength: number
}

declare function split(matcher?: any, mapper?: any, options?: SplitOptions): any;

export = split;
