// Type definitions for ed25519 0.0
// Project: https://github.com/dazoe/ed25519
// Definitions by: Erik Mavrinac <https://github.com/erikma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Main site: https://ed25519.cr.yp.to/
// Manually generated and maintained because the package is a
// veneer on an underlying C library; auto-generation won't work.
// The JavaScript-C interface is well described at
// https://github.com/dazoe/ed25519/blob/master/src/ed25519.cc

/// <reference types="node" />

/** The key material returned from a call to MakeKeypair(). */
export interface CurveKeyPair {
    /**
     * A Buffer containing the public portion of the Curve25519 key.
     */
    publicKey: Buffer;

    /**
     * A Buffer containing the private, secret portion of the Curve25519 key.
     */
    privateKey: Buffer;
}

/**
 * Uses the crytpographically strong random seed to generate a
 * Curve25519 key pair.
 * @return The public and private key pair.
 */
export function MakeKeypair(seed: Buffer): CurveKeyPair;

/**
 * Signs a plaintext message buffer using the private key generated using
 * MakeKeypair().
 * @return The signature calculated on the plaintext.
 */
export function Sign(message: Buffer, privateKeyOrKeyPair: Buffer | CurveKeyPair): Buffer;

/**
 * Verifies a signature for a message buffer using a
 * public key generated using MakeKeypair().
 * @return True if the signature validates correctly, false otherwise.
 */
export function Verify(message: Buffer, signature: Buffer, publicKey: Buffer): boolean;
