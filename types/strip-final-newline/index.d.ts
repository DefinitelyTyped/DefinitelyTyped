/// <reference types="node" />

/**
 * Strip the final newline character from a string/buffer
 */
declare function stripFinalNewline(input: string): string;
declare function stripFinalNewline(input: Buffer): Buffer;

export default stripFinalNewline;
