declare class IotaClass {
    constructor(
        settings: {
            provider: string;
            sandbox?: boolean | undefined;
            token?: boolean | undefined;
        } | {
            host: string;
            port: number;
            sandbox?: boolean | undefined;
            token?: boolean | undefined;
        },
    );

    api: IotaApi;
    utils: IotaUtils;
    multisig: IotaMultisig;
    valid: IotaValid;

    version: string;
}

export = IotaClass;

//
// Types
//

type Security = 1 | 2 | 3;
type IOTAUnit = "i" | "Ki" | "Mi" | "Gi" | "Ti" | "Pi";

//
// Objects
//

interface TransactionObject {
    hash: string;
    signatureMessageFragment: string;
    address: string;
    value: number;
    tag: string;
    timestamp: number;
    currentIndex: number;
    lastIndex: number;
    bundle: number;
    trunkTransaction: string;
    branchTransaction: string;
    attachmentTimestamp: number;
    attachmentTimestampLowerBound: number;
    attachmentTimestampUpperBound: number;
    nonce: string;
}

interface InputObject {
    address: string;
    balance: number;
    keyIndex: number;
    security: Security;
}

interface TransferObject {
    address: string;
    value: number;
    message: string;
    tag: string;
}

interface NodeInfo {
    appName: string;
    appVersion: string;
    duration: number;
    jreAvailableProcessors: number;
    jreFreeMemory: number;
    jreVersion: string;
    jreMaxMemory: number;
    jreTotalMemory: number;
    latestMilestone: string;
    latestMilestoneIndex: number;
    latestSolidSubtangleMilestone: string;
    latestSolidSubtangleMilestoneIndex: number;
    neighbors: number;
    packetsQueueSize: number;
    time: number;
    tips: number;
    transactionsToRequest: number;
}

interface Neighbor {
    address: string;
    numberOfAllTransactions: number;
    numberOfRandomTransactionRequests: number;
    numberOfInvalidTransactions: number;
    numberOfSentTransactions: number;
    numberOfNewTransactions: number;
    connectionType: "udp" | "tcp";
}

//
// iota.api
//

interface IriApi {
    getNodeInfo(
        callback: (error: Error, info: NodeInfo) => void,
    ): void;

    getNeighbors(
        callback: (error: Error, neighbors: Neighbor[]) => void,
    ): void;

    addNeighbors(
        uris: string[],
        callback: (error: Error, addedNeighbors: number) => void,
    ): void;

    removeNeighbors(
        uris: string[],
        callback: (error: Error, removedNeighbors: number[]) => void,
    ): void;

    getTips(
        callback: (error: Error, hashes: string[]) => void,
    ): void;

    findTransactions(
        searchValues: {
            addresses?: string[] | undefined;
            bundles?: string[] | undefined;
            tags?: string[] | undefined;
            approvees?: string[] | undefined;
        },
        callback: (error: Error, hashes: string[]) => void,
    ): void;

    getTrytes(
        hashes: string[],
        callback: (error: Error, trytes: string[]) => void,
    ): void;

    getInclusionStates(
        transactions: string[],
        tips: string[],
        callback: (error: Error, states: boolean[]) => void,
    ): void;

    getBalances(
        addresses: string[],
        treshold: number,
        callback: (error: Error, response: {
            balances: number[];
            milestone: string;
            milestoneIndex: number;
            duration: number;
        }) => void,
    ): void;

    getTransactionsToApprove(
        depth: number,
        callback: (error: Error, response: {
            trunkTransaction: string;
            branchTransaction: string;
            duration: number;
        }) => void,
    ): void;

    attachToTangle(
        trunkTransaction: string,
        branchTransaction: string,
        minWeightMagnitude: number,
        trytes: string[],
        callback: (error: Error, trytes: string[]) => void,
    ): void;

    interruptAttachingToTangle(
        callback: (error: Error, response: {}) => void,
    ): void;

    broadcastTransactions(
        trytes: string[],
        callback: (error: Error, response: {}) => void,
    ): void;

    storeTransactions(
        trytes: string[],
        callback: (error: Error, response: {}) => void,
    ): void;
}

//
// iota.api
//

interface IotaApi extends IriApi {
    getTransactionsObjects(
        hashes: string[],
        callback?: (error: Error, transactions: TransactionObject[]) => void,
    ): void;

    findTransactionObjects(
        searchValues: {
            addresses?: string[] | undefined;
            bundles?: string[] | undefined;
            tags?: string[] | undefined;
            approvees?: string[] | undefined;
        },
        callback?: (error: Error, transactions: TransactionObject[]) => void,
    ): void;

    getLatestInclusion(
        hashes: string[],
        callback?: (error: Error, states: boolean[]) => void,
    ): void;

    broadcastAndStore(
        trytes: string[],
        callback?: (error: Error, response: {}) => void,
    ): void;

    getNewAddress(
        seed: string,
        options?: {
            index?: number | undefined;
            checksum?: boolean | undefined;
            total?: number | undefined;
            security?: Security | undefined;
            returnAll?: boolean | undefined;
        },
        callback?: (error: Error, response: string | string[]) => void,
    ): void;

    getInputs(
        seed: string,
        options?: {
            start?: number | undefined;
            end?: number | undefined;
            security?: Security | undefined;
            threshold?: boolean | undefined;
        },
        callback?: (error: Error, response: {
            inputs: InputObject[];
        }) => void,
    ): void;

    prepareTransfers(
        seed: string,
        transfers: TransferObject[],
        options?: {
            inputs?: string[] | undefined;
            address?: string | undefined;
            security?: Security | undefined;
        },
        callback?: (error: Error, response: {
            trytes: string[];
        }) => void,
    ): void;

    sendTrytes(
        trytes: string[],
        depth: number,
        minWeightMagnitude: number,
        callback?: (error: Error, response: {
            inputs: TransactionObject[];
        }) => void,
    ): void;

    sendTransfer(
        seed: string,
        depth: number,
        minWeightMagnitude: number,
        transfers: TransferObject[],
        options?: {
            inputs: string[];
            address: string;
        },
        callback?: (error: Error, response: {
            inputs: TransactionObject[];
        }) => void,
    ): void;

    replayBundle(
        transactionHash: string,
        depth: number,
        minWeightMagnitude: number,
        callback?: (error: Error, response: {}) => void,
    ): void;

    broadcastBundle(
        transactionHash: string,
        callback?: (error: Error, response: {}) => void,
    ): void;

    getBundle(
        transactionHash: string,
        callback?: (error: Error, bundle: TransactionObject[]) => void,
    ): void;

    getTransfers(
        seed: string,
        options?: {
            start?: number | undefined;
            end?: number | undefined;
            security?: Security | undefined;
            inclusionStates?: boolean | undefined;
        },
        callback?: (error: Error, transfers: TransactionObject[][]) => void,
    ): void;

    getAccountData(
        seed: string,
        options?: {
            start: number;
            end: number;
            security?: Security | undefined;
        },
        callback?: (error: Error, response: {
            latestAddress: string;
            addresses: string[];
            transfers: string[];
            inputs: InputObject[];
            balance: number;
        }) => void,
    ): void;

    isReattachable(
        address: string | string[],
        callback?: (error: Error, response: boolean | boolean[]) => void,
    ): void;
}

//
// iota.utils
//

interface IotaUtils {
    convertUnits(
        value: number,
        fromUnit: IOTAUnit,
        toUnit: IOTAUnit,
    ): number;

    addChecksum(
        inputValue: string,
        checksumLength?: number,
        isAddress?: boolean,
    ): string;

    addChecksum(
        inputValue: string[],
        checksumLength?: number,
        isAddress?: boolean,
    ): string[];

    noChecksum(
        address: string,
    ): string;

    isValidChecksum(
        addressWithChecksum: string,
    ): boolean;

    transactionObject(
        trytes: string,
    ): TransactionObject;

    transactionTrytes(
        transaction: TransactionObject,
    ): string;

    categorizeTransfers(
        transfers: TransactionObject[],
        addresses: string[],
    ): {
        sent: TransactionObject[];
        received: TransactionObject[];
    };

    toTrytes(
        input: string,
    ): string;

    fromTrytes(
        trytes: string,
    ): string;

    extractJson(
        bundle: TransactionObject[],
    ): string;

    validateSignatures(
        signedBundle: string[],
        inputAddress: string,
    ): boolean;

    isBundle(
        bundle: TransactionObject[],
    ): boolean;
}

//
// iota.multisig
//

interface IotaMultisig {
    getKey(
        seed: string,
        index: number,
        security: Security,
    ): string;

    getDigest(
        seed: string,
        index: number,
        security: Security,
    ): string;

    address(
        digestTrytes: string | string[],
    ): MultisigAddress;

    validateAddress(
        multisigAddress: string,
        digests: string[],
    ): boolean;

    initiateTransfer(
        securitySum: number,
        inputAddress: string,
        remainderAddress: string,
        transfers: TransferObject[],
        callback?: (error: Error, bundle: TransactionObject[]) => void,
    ): void;

    addSignature(
        bundleToSign: TransactionObject[],
        inputAddress: string,
        key: string,
        callback?: (error: Error, bundle: TransactionObject[]) => void,
    ): void;
}

interface MultisigAddress {
    absorb(
        digest: string | string[],
    ): MultisigAddress;

    finalize(): string;
}

//
// iota.valid
//

interface IotaValid {
    isAddress(address: string): boolean;

    isTrytes(trytes: string, length?: number): boolean;

    isValue(value: any): boolean;

    isNum(value: any): boolean;

    isHash(hash: any): boolean;

    isTransfersArray(transfers: any): boolean;

    isArrayOfHashes(hashes: any): boolean;

    isArrayOfTrytes(trytes: any): boolean;

    isArrayOfAttachedTrytes(trytes: any): boolean;

    isArrayOfTxObjects(transactions: any): boolean;

    isInputs(inputs: any): boolean;

    isString(string: any): boolean;

    isArray(array: any): boolean;

    isObject(object: any): boolean;

    isUri(uri: any): boolean;
}
