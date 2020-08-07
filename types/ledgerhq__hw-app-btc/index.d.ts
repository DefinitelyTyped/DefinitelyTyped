// Type definitions for @ledgerhq/hw-app-btc 5.19
// Project: https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-app-btc, https://github.com/ledgerhq/ledgerjs
// Definitions by: Gregory Hill <https://github.com/gregdhill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import Transport from '@ledgerhq/hw-transport';

type AddressFormat = 'legacy' | 'p2sh' | 'bech32';

interface CreateTransactionArg {
    inputs: Array<[Transaction, number, string | null, number | null]>;
    associatedKeysets: string[];
    changePath?: string;
    outputScriptHex: string;
    lockTime?: number;
    sigHashType?: number;
    segwit?: boolean;
    initialTimestamp?: number;
    additionals?: string[];
    expiryHeight?: Buffer;
    useTrustedInputForSegwit?: boolean;
    onDeviceStreaming?: ({ progress, total, index }: { progress: number; total: number; index: number }) => void;
    onDeviceSignatureRequested?: () => void;
    onDeviceSignatureGranted?: () => void;
}

interface SignP2SHTransactionArg {
    // [transaction, output_index, redeem script, optional sequence]
    inputs: Array<[Transaction, number, string | null, number | null]>;
    associatedKeysets: string[];
    outputScriptHex: string;
    lockTime?: number;
    sigHashType?: number;
    segwit?: boolean;
    transactionVersion?: number;
}

interface TransactionInput {
    prevout: Buffer;
    script: Buffer;
    sequence: Buffer;
    tree?: Buffer;
}

interface TransactionOutput {
    amount: Buffer;
    script: Buffer;
}

interface Transaction {
    version: Buffer;
    inputs: TransactionInput[];
    outputs?: TransactionOutput[];
    locktime?: Buffer;
    witness?: Buffer;
    timestamp?: Buffer;
    nVersionGroupId?: Buffer;
    nExpiryHeight?: Buffer;
    extraData?: Buffer;
}

declare class AppBtc {
    constructor(transport: Transport);

    getWalletPublicKey(
        path: string,
        opts?: boolean | { verify?: boolean; format?: AddressFormat },
    ): Promise<{
        publicKey: string;
        bitcoinAddress: string;
        chainCode: string;
    }>;

    signMessageNew(path: string, messageHex: string): Promise<{ v: number; r: string; s: string }>;

    createPaymentTransactionNew(arg: CreateTransactionArg): Promise<string>;

    signP2SHTransaction(arg: SignP2SHTransactionArg): Promise<string[]>;

    splitTransaction(
        transactionHex: string,
        isSegwitSupported?: boolean,
        hasTimestamp?: boolean,
        hasExtraData?: boolean,
        additionals?: string[],
    ): Transaction;

    serializeTransactionOutputs(t: Transaction): Buffer;

    getTrustedInput(indexLookup: number, transaction: Transaction, additionals?: string[]): Promise<string>;

    getTrustedInputBIP143(indexLookup: number, transaction: Transaction, additionals?: string[]): string;

    startUntrustedHashTransactionInputRaw(
        newTransaction: boolean,
        firstRound: boolean,
        transactionData: Buffer,
        additionals: string[],
        bip143?: boolean,
        overwinter?: boolean,
    ): Promise<Buffer>;

    startUntrustedHashTransactionInput(
        newTransaction: boolean,
        transaction: Transaction,
        inputs: Array<{ trustedInput: boolean; value: Buffer }>,
        additionals: string[],
        bip143?: boolean,
        overwinter?: boolean,
        useTrustedInputForSegwit?: boolean,
    ): Promise<void>;
}

export default AppBtc;
