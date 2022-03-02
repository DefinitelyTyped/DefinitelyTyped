// Type definitions for human-crypto-keys 0.1
// Project: https://github.com/ipfs-shipyard/js-human-crypto-keys
// Definitions by: Jack Hedaya <https://github.com/jackHedaya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function generateKeyPair(
    /**
     * The algorithm identifier and the respective parameters to generate a key pair
     */
    algorithm: Algorithm,

    /**
     * Options to be used while composing keys
     */
    options?: Options,
): Promise<FullKeyPair>;

export function getKeyPairFromMnemonic(
    /**
     * The mnemonic provided as one of the recovery methods for a key pair
     */
    mnemonic: string,

    /**
     * The algorithm identifier and the respective parameters to generate a key pair
     */
    algorithm: Algorithm,

    /**
     * Options to be used while composing keys
     */
    options?: Options,
): Promise<SimpleKeyPair>;

export function getKeyPairFromSeed(
    /**
     * The seed provided as one of the recovery methods for a key pair
     */
    seed: string,

    /**
     * The algorithm identifier and the respective parameters to generate a key pair
     */
    algorithm: Algorithm,

    /**
     * Options to be used while composing keys
     */
    options?: Options,
): Promise<SimpleKeyPair>;

type Algorithm = ED25519Algorithm | RSAAlgorithm | ED25519Algorithm['id'] | RSAAlgorithm['id'];

interface ED25519Algorithm {
    id: 'ed25519';
}

interface RSAAlgorithm {
    id: 'rsa';

    /**
     * @default 2048
     */
    modulusLength?: number;
    /**
     * @default 65537
     */
    publicExponent?: number;

    /**
     * @default 'PRIMEINC'
     */
    method?: string;
}

interface FullKeyPair {
    /**
     * An object with the algorithm identifier and respective parameters that were used during generation
     */
    algorithm: Algorithm;

    /**
     * The mnemonic used to create a seed for generation
     */
    mnemonic: string;

    /**
     * The seed used for generation
     */
    seed: string;

    /**
     * The generated private key composed in a specific format
     */
    privateKey: string;

    /**
     * The generated public key composed in a specific format.
     */
    publicKey: string;
}

type SimpleKeyPair = Pick<FullKeyPair, 'privateKey' | 'publicKey'>;

interface Options {
    /**
     * The format in which the private key will be composed
     *
     * Keys can be composed in different formats and vary by algorithm. All formats available are described in the
     * [Formats Section](https://github.com/ipfs-shipyard/js-crypto-key-composer/tree/initial-impl#formats) of
     * [crypto-key-composer](https://github.com/ipfs-shipyard/js-crypto-key-composer) package.
     */
    privateKeyFormat?: string;

    /**
     * The format in which the public key will be composed
     *
     * Keys can be composed in different formats and vary by algorithm. All formats available are described in the
     * [Formats Section](https://github.com/ipfs-shipyard/js-crypto-key-composer/tree/initial-impl#formats) of
     * [crypto-key-composer](https://github.com/ipfs-shipyard/js-crypto-key-composer) package.
     */
    publicKeyFormat?: string;

    /**
     * The encryption algorithm that will be used to encrypt the private key
     *
     * For more information please read the
     * [Encryption Algorithms](https://github.com/ipfs-shipyard/js-crypto-key-composer/tree/initial-impl#encryption-algorithms)
     * Section of [crypto-key-composer](https://github.com/ipfs-shipyard/js-crypto-key-composer) package
     */
    encryptionAlgorithm?: object;

    /**
     * The password to be used on the encryption of the private key
     */
    password?: string;
}

export {};
