// Type definitions for is-gif 3.0
// Project: https://github.com/sindresorhus/is-gif#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

/**
 * Returns a boolean of whether input is a GIF image.
 */
declare function isGif(input: Buffer | Uint8Array): boolean;

export = isGif;
