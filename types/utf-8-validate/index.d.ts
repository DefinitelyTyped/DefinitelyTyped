// Type definitions for utf-8-validate 5.0
// Project: https://github.com/websockets/utf-8-validate
// Definitions by: OpportunityLiu <https://github.com/OpportunityLiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * Checks whether a buffer contains valid UTF-8.
 *
 * @param buffer - The buffer to check.
 *
 * @returns `true` if the buffer contains only correct UTF-8, else `false`.
 */
declare function isValidUTF8(buffer: Buffer): boolean;
export = isValidUTF8;
