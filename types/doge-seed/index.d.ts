// Type definitions for doge-seed 1.0
// Project: https://github.com/lukechilds/doge-seed#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = dogeSeed;

/**
 * Generates a cryptographically secure mnemonic seed phrase with added dankness.
 * The first four words will be a randomly generated Doge-like sentence.
 *
 * The seed phrases are fully valid checksummed BIP39 seeds. They can be used with any cryptocurrency
 * and can be imported into any BIP39 compliant wallet.
 *
 * @param bits The number of bits to derive a BIP39 mnemonic from. Default: `128`.
 * @returns A BIP39 mnemonic seed phrase.
 */
declare function dogeSeed(bits?: 128 | 160 | 192 | 224 | 256): string;
