// Type definitions for ed2curve 0.2
// Project: https://github.com/dchest/ed2curve-js
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { BoxKeyPair, SignKeyPair } from "tweetnacl";

export as namespace ed2curve;

/**
 * Converts Ed25519 public key to Curve25519 public key.
 * montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
 */
export function convertPublicKey(publicKey: SignKeyPair["publicKey"]): BoxKeyPair["publicKey"] | null;

/** Converts Ed25519 secret key to Curve25519 secret key. */
export function convertSecretKey(secretKey: SignKeyPair["secretKey"]): BoxKeyPair["secretKey"];

/** Converts Ed25519 key pair to Curve25519 key pair. */
export function convertKeyPair(keyPair: SignKeyPair): BoxKeyPair | null;
