// Copyright (c) 2020 Target Brands, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Constructs a new NoSuchAlgorithmError
 *
 * @param [message] - an optional message, defaults to the empty
 * string
 */
export class NoSuchAlgorithmError {
    constructor(message?: string);

    /**
     * Name of the rror
     */
    name: string;
}

/**
 * Constructs a new SigningError
 *
 * @param [message] - an optional message, defaults to the empty
 * string
 */
export class SigningError {
    constructor(message?: string);

    /**
     * Name of the error
     */
    name: string;
}

/**
 * Constructs a new ParseError
 *
 * @param [message] - an optional message, defaults to the empty
 * string
 */
export class ParseError {
    constructor(message?: string);

    /**
     * Name of the error
     */
    name: string;
}

/**
 * A private key instance. The underlying content is dependent on implementation.
 */
export abstract class PrivateKey {
    constructor();

    /**
     * Returns the algorithm name used for this public key.
     */
    abstract getAlgorithmName(): string;

    /**
     * Return the public key encoded as a hex string
     */
    asHex(): string;

    /**
     * Returns the public key bytes in a Buffer.
     */
    abstract asBytes(): Buffer;
}

/**
 * A public key instance. The underlying content is dependent on implementation.
 */
export abstract class PublicKey {
    constructor();

    /**
     * Returns the algorithm name used for this public key.
     */
    abstract getAlgorithmName(): string;

    /**
     * Return the public key encoded as a hex string
     */
    asHex(): string;

    /**
     * Returns the public key bytes in a Buffer.
     */
    abstract asBytes(): Buffer;
}

/**
 * A context for a cryptographic signing algorithm.
 */
export abstract class Context {
    constructor();

    /**
     * Returns the algorithm name used for this context.
     */
    abstract getAlgorithmName(): string;

    /**
     * Sign a message.
     *
     * Given a private key for this algorithm, sign the given message bytes
     * and return a hex-encoded string of the resulting signature.
     *
     * @param message - the message bytes
     * @param privateKey - the private key
     * @returns - The signature in a hex-encoded string
     * @throws {SigningError} - if any error occurs during the signing process
     */
    abstract sign(message: Buffer, privateKey: PrivateKey): string;

    /**
     * Verifies that a signature of a message was produced with the associated
     * public key.
     *
     * @param signature - the hex-encoded signature
     * @param message - the message bytes
     * @param publicKey - the public key to use for verification
     * @returns - true if the public key is associated with the
     * signature for that method, false otherwise
     */
    abstract verify(signature: string, message: Buffer, publicKey: PublicKey): boolean;

    /**
     * Produce a public key for the given private key.
     *
     * @param privateKey - a private key
     */
    abstract getPublicKey(privateKey: PrivateKey): PublicKey;

    /**
     * Generate a new random private key, based on the underlying algorithm.
     *
     */
    abstract newRandomPrivateKey(): PrivateKey;
}
