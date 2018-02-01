// Type definitions for ed2curve 0.2
// Project: https://github.com/dchest/ed2curve-js
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export as namespace ed2curve;

export type Ed25519PublicKey = Uint8Array;
export type Ed25519SecretKey = Uint8Array;
export type Curve25519PublicKey = Uint8Array;
export type Curve25519SecretKey = Uint8Array;

export interface Ed25519KeyPair {
  publicKey: Ed25519PublicKey;
  secretKey: Ed25519SecretKey;
}

export interface Curve25519KeyPair {
  publicKey: Curve25519PublicKey;
  secretKey: Curve25519SecretKey;
}

/**
 * Converts Ed25519 public key to Curve25519 public key.
 * montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
 */
export function convertPublicKey(publicKey: Ed25519PublicKey): Curve25519PublicKey | null;

/** Converts Ed25519 secret key to Curve25519 secret key. */
export function convertSecretKey(secretKey: Ed25519SecretKey): Curve25519SecretKey | null;

/** Converts Ed25519 key pair to Curve25519 key pair. */
export function convertKeyPair(keyPair: Ed25519KeyPair): Curve25519KeyPair;
