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

import { createContext, Signer, CryptoFactory } from 'sawtooth-sdk/signing';
import { Secp256k1PrivateKey, Secp256k1PublicKey, Secp256k1Context } from 'sawtooth-sdk/signing/secp256k1';
import { SigningError, NoSuchAlgorithmError, ParseError } from 'sawtooth-sdk/signing/core';

/*
 * Test setup
 */

// $ExpectType Secp256k1Context
const cryptoContext = createContext('secp256k1') as Secp256k1Context;

// $ExpectType CryptoFactory
const cryptoFactory = new CryptoFactory(cryptoContext);

const msg = new Buffer('test');

// $ExpectType Secp256k1PrivateKey
const privateKey = cryptoContext.newRandomPrivateKey();

// $ExpectType Signer
const signer: Signer = cryptoFactory.newSigner(privateKey);

// $ExpectType Secp256k1PublicKey
const publicKey = cryptoContext.getPublicKey(privateKey);

/**
 *  signing/index.d.ts tests
 */

// $ExpectType string
const signedMsg = signer.sign(msg);

// $ExpectType PublicKey
const signerPubKey = signer.getPublicKey();

// $ExpectType Context
const context = cryptoFactory.getContext();

// $ExpectType Signer
const newSigner = cryptoFactory.newSigner(privateKey);

/**
 *  signing/secp256k1.d.ts
 */

// $ExpectType Buffer
const privKeyBytes = privateKey.privateKeyBytes;

// $ExpectType string
const privAlgoName = privateKey.getAlgorithmName();

// $ExpectType Buffer
const privAsBytes = privateKey.asBytes();

// $ExpectType Secp256k1PrivateKey
const privFromHex = Secp256k1PrivateKey.fromHex('test');

// $ExpectType Secp256k1PrivateKey
const privNewRandom = Secp256k1PrivateKey.newRandom();

// $ExpectType Buffer
const pubKeyBytes = publicKey.publicKeyBytes;

// $ExpectType string
const pubAlgoName = publicKey.getAlgorithmName();

// $ExpectType Buffer
const pubAsBytes = publicKey.asBytes();

// $ExpectType Secp256k1PublicKey
const pubFromHex = Secp256k1PublicKey.fromHex('test');

// $ExpectType string
const contextAlgoName = cryptoContext.getAlgorithmName();

// $ExpectType Secp256k1PublicKey
const publicKey2 = cryptoContext.getPublicKey(privateKey);

// $ExpectType string
const signedMsg2 = cryptoContext.sign(msg, privateKey);

// $ExpectType boolean
const verify = cryptoContext.verify('test', signedMsg2, publicKey2);

// $ExpectType Secp256k1PrivateKey
const privateKey2 = cryptoContext.newRandomPrivateKey();

/**
 * signing/core.d.ts
 */
const noSuchAlgoErr = new NoSuchAlgorithmError('test');

// $ExpectType string
const noSuchAlgoErrName = noSuchAlgoErr.name;

const signingErr = new SigningError('test');

// $ExpectType string
const signingErrName = signingErr.name;

const parseErr = new ParseError('test');

// $ExpectType string
const parseErrName = parseErr.name;
