// Type definitions for strip-final-newline 3.0
// Project: https://github.com/sindresorhus/strip-final-newline#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Strip the final newline character from a string/buffer
 */
declare function stripFinalNewline(input: string): string;
declare function stripFinalNewline(input: Buffer): Buffer;

export default stripFinalNewline;
