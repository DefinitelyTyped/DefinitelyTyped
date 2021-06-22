// Type definitions for cookie-signature 1.0
// Project: https://github.com/tj/node-cookie-signature, https://github.com/visionmedia/node-cookie-signature
// Definitions by: François Nguyen <https://github.com/lith-light-g>
//                 Junyoung Choi <https://github.com/Rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** Sign the given `val` with `secret`. */
export function sign(value: string, secret: string): string;

/**
 * Unsign and decode the given `val` with `secret`,
 * returning `false` if the signature is invalid.
 */
export function unsign(value: string, secret: string): string | false;
