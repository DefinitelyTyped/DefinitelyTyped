// Type definitions for cookie-signature 1.1
// Project: https://github.com/tj/node-cookie-signature, https://github.com/visionmedia/node-cookie-signature
// Definitions by: Junyoung Choi <https://github.com/Rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import type { CipherKey } from "node:crypto";

/** Sign the given `val` with `secret`. */
export function sign(value: string, secret: CipherKey): string;

/**
 * Unsign and decode the given `val` with `secret`,
 * returning `false` if the signature is invalid.
 */
export function unsign(value: string, secret: CipherKey): string | false;
