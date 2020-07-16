// Type definitions for create-xpub 2.1
// Project: https://github.com/lukechilds/create-xpub#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = createXpub;

/**
 * Creates a Base58 encoded extended public key (xpub) for use in a
 * [BIP32 hierarchical deterministic wallet](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).
 *
 * Tip: If you're working with ledgerjs you can pass the output of
 * [`getWalletPublicKey()`](http://ledgerhq.github.io/ledgerjs/docs/#btcgetwalletpublickey) almost directly in.
 *
 * @returns A Base58 encoded extended public key.
 */
declare function createXpub(options: createXpub.Options): string;

declare namespace createXpub {
    /**
     * Mainnet (xpub) version bytes.
     */
    const mainnet: 0x0488B21E;
    /**
     * Testnet (tpub) version bytes.
     */
    const testnet: 0x043587CF;

    interface Options {
        /**
         * Network version bytes.
         * @default 0x0488B21E
         */
        networkVersion?: number;
        /**
         * The depth of the derived key.
         */
        depth: number;
        /**
         * The child number.
         */
        childNumber: number;
        /**
         * The chain code.
         */
        chainCode: string;
        /**
         * The public key in compressed or uncompressed form.
         */
        publicKey: string;
    }
}
