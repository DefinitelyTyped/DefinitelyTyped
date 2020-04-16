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

export type message = string | Buffer | NodeJS.TypedArray | DataView;

export class Signer {
    /**
     * Constructs a new Signer
     *
     * @param context - a cryptographic context
     * @param privateKey - private key
     */
    constructor(content: Context, privateKey: PrivateKey);

    _context: Context;

    _privateKey: PrivateKey;

    _publicKey?: PublicKey;

    /**
     * Signs the given message.
     *
     * @param message - the message bytes
     * @throws {SigningError} - if any error occurs during the signing process
     */
    sign(message: Buffer): string;

    /**
     * Return the public key for this Signer instance.
     *
     */
    getPublicKey(): PublicKey;
}

export class CryptoFactory {
    /**
     * Constructs a CryptoFactory.
     *
     * @param context - a cryptographic context
     */
    constructor(context: Context);

    /** A cryptographic context */
    _context: Context;

    /**
     * Returns the context associated with this factory
     *
     */ getContext(): Context;

    /**
     * Create a new signer for the given private key.
     *
     * @param privateKey - a private key
     */
    newSigner(privateKey: PrivateKey): Signer;
}

/**
 * Returns an Context instance by algorithm name.
 *
 * @param algorithmName - the algorithm name
 * @throws {NoSuchAlgorithmError} if the algorithm is unknown
 */ export function createContext(algorithmName: string): Context;
