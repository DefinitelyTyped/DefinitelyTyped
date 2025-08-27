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

/// <reference types="node" />

import { PrivateKey, PublicKey, Context } from './core';
import { message } from './';

/**
 * @param privateKeyBytes - the bytes of the private key
 */
export class Secp256k1PrivateKey extends PrivateKey {
    constructor(privateKeyBytes: Buffer);

    /** The bytes of the public key */
    privateKeyBytes: Buffer;

    /**
     * @return name of the algorithm
     */
    getAlgorithmName(): string;

    /**
     * @return the key in bytes
     */
    asBytes(): Buffer;

    /**
     * Creates a private key from a hex encode set of bytes.
     *
     * @param privateKeyHex - the key in hex
     * @return a private key instance
     * @throws if the private key is not valid
     */
    static fromHex(privateKeyHex: string): Secp256k1PrivateKey;

    /**
     * @return generates a random PrivateKey
     *
     */
    static newRandom(): Secp256k1PrivateKey;
}

/**
 * @param publicKeyBytes - the bytes of the public key
 */
export class Secp256k1PublicKey extends PublicKey {
    constructor(publicKeyBytes: Buffer);

    /** The bytes of the public key */
    publicKeyBytes: Buffer;

    getAlgorithmName(): string;

    /**
     * @return the key in bytes
     */
    asBytes(): Buffer;

    /**
     * Creates a public key from a hex encode set of bytes.
     *
     * @param publicKeyHex - the key in hex
     * @return a public key instance
     * @throws if the public key is not valid
     */
    static fromHex(publicKeyHex: string): Secp256k1PublicKey;
}

export class Secp256k1Context extends Context {
    getAlgorithmName(): string;

    /**
     * Verify that the signature of a given messages was signed by the proved Secp256k1PublicKey
     *
     * @param signature
     * @param message
     * @param publicKey
     * @return result of verifying if the signature matches the Secp256k1PublicKey
     */
    verify(signature: string, message: message, publicKey: Secp256k1PublicKey): boolean;

    /**
     * Sign a given message with the provided PublicKey
     *
     * @param message
     * @param privateKey
     * @return string of the signed message
     */
    sign(message: message, privateKey: Secp256k1PrivateKey): string;

    /**
     * Return a computed Secp256k1PublicKey from a Secp256k1PrivateKey.
     * @param privateKey
     */
    getPublicKey(privateKey: Secp256k1PrivateKey): Secp256k1PublicKey;

    /**
     * Generate a new random private key, based on the Secp256k1 algorithm.
     */
    newRandomPrivateKey(): Secp256k1PrivateKey;
}
