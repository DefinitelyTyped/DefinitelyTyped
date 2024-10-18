/// <reference types="node" />
import Transport from "@ledgerhq/hw-transport";

type AddressFormat = "legacy" | "p2sh" | "bech32";

interface CreateTransactionArg {
    inputs: Array<[Transaction, number, string | null, number | null]>;
    associatedKeysets: string[];
    changePath?: string | undefined;
    outputScriptHex: string;
    lockTime?: number | undefined;
    sigHashType?: number | undefined;
    segwit?: boolean | undefined;
    initialTimestamp?: number | undefined;
    additionals?: string[] | undefined;
    expiryHeight?: Buffer | undefined;
    useTrustedInputForSegwit?: boolean | undefined;
    onDeviceStreaming?:
        | (({ progress, total, index }: { progress: number; total: number; index: number }) => void)
        | undefined;
    onDeviceSignatureRequested?: (() => void) | undefined;
    onDeviceSignatureGranted?: (() => void) | undefined;
}

interface SignP2SHTransactionArg {
    // [transaction, output_index, redeem script, optional sequence]
    inputs: Array<[Transaction, number, string | null, number | null]>;
    associatedKeysets: string[];
    outputScriptHex: string;
    lockTime?: number | undefined;
    sigHashType?: number | undefined;
    segwit?: boolean | undefined;
    transactionVersion?: number | undefined;
}

interface TransactionInput {
    prevout: Buffer;
    script: Buffer;
    sequence: Buffer;
    tree?: Buffer | undefined;
}

interface TransactionOutput {
    amount: Buffer;
    script: Buffer;
}

interface Transaction {
    version: Buffer;
    inputs: TransactionInput[];
    outputs?: TransactionOutput[] | undefined;
    locktime?: Buffer | undefined;
    witness?: Buffer | undefined;
    timestamp?: Buffer | undefined;
    nVersionGroupId?: Buffer | undefined;
    nExpiryHeight?: Buffer | undefined;
    extraData?: Buffer | undefined;
}

declare class AppBtc {
    constructor(transport: Transport);

    getWalletPublicKey(
        path: string,
        opts?: boolean | { verify?: boolean | undefined; format?: AddressFormat | undefined },
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
