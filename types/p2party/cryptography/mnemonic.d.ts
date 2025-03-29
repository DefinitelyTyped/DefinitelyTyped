import type { LibCrypto } from "./libcrypto";
export declare const argon2: (mnemonic: string, salt?: Uint8Array, module?: LibCrypto) => Promise<Uint8Array>;
/**
 * Generates a sequence of words chosen from a prespecified wordlist
 * that represents a random seed that
 * can be translated later into a cryptographic keypair.
 * With a strength of 128 bits of entropy you get 12 words.
 * In every additional step you get 3 more words. The maximum is
 * set to 512 bits of entropy, or 48 words!
 *
 * @param strength - Entropy bits
 * @returns The mnemonic from the wordlist.
 *
 */
export declare const generateMnemonic: (strength?: 128 | 160 | 192 | 224 | 256 | 288 | 320 | 352 | 384 | 416 | 448 | 480 | 512) => Promise<string>;
export declare const mnemonicToEntropy: (mnemonic: string) => Promise<boolean>;
export declare const validateMnemonic: (mnemonic: string) => Promise<boolean>;
/**
 * Generates an Ed25519 key pair from the provided mnemonic.
 * Optionally, you can strenthen the generation with a password.
 * The mnemonic is converted into a seed through the use of argon2id.
 * The password is used as a salt for argon2id.
 * From the generated seed we extract the key pair.
 *
 * @param mnemonic - Sequence of words from the predefined wordlist
 * @param password - Optional salt for the seed derivation
 * @returns An Ed25519 key pair
 */
export declare const keyPairFromMnemonic: (mnemonic: string, password?: string) => Promise<import("./interfaces").SignKeyPair>;
//# sourceMappingURL=mnemonic.d.ts.map