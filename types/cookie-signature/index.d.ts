/// <reference types="node" />

import type { CipherKey } from "node:crypto";

/** Sign the given `val` with `secret`. */
export function sign(value: string, secret: CipherKey): string;

/**
 * Unsign and decode the given `val` with `secret`,
 * returning `false` if the signature is invalid.
 */
export function unsign(value: string, secret: CipherKey): string | false;
