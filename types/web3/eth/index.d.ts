import BigNumber = require("bn.js");
import { Provider } from "../providers";
import Contract, { CustomOptions as CustomContractOptions } from "./contract";
import PromiEvent from "../promiEvent";
import ABI from "./abi";
import Accounts from "./accounts";
import {
    BatchRequest,
    Iban,
    BlockHeader,
    CompileResult,
    Block,
    Transaction,
    Tx,
    BlockType,
    Net,
    Personal
} from "./types";
import {
    Callback,
    TransactionReceipt,
    Logs,
    Log,
    Subscribe,
    EncodedTransaction
} from "../types";

export default interface Eth {
    defaultAccount: string;
    defaultBlock: BlockType;
    BatchRequest: new () => BatchRequest;
    Iban: Iban;
    Contract: new (
        jsonInterface: any[],
        address?: string,
        options?: CustomContractOptions
    ) => Contract;
    abi: ABI;
    setProvider: (provider: Provider) => void;
    accounts: Accounts;
    call(
        callObject: Tx,
        defaultBloc?: BlockType,
        callBack?: Callback<string>
    ): Promise<string>;
    clearSubscriptions(): boolean;
    subscribe(
        type: "logs",
        options?: Logs,
        callback?: Callback<Subscribe<Log>>
    ): Promise<Subscribe<Log>>;
    subscribe(
        type: "syncing",
        callback?: Callback<Subscribe<any>>
    ): Promise<Subscribe<any>>;
    subscribe(
        type: "newBlockHeaders",
        callback?: Callback<Subscribe<BlockHeader>>
    ): Promise<Subscribe<BlockHeader>>;
    subscribe(
        type: "pendingTransactions",
        callback?: Callback<Subscribe<Transaction>>
    ): Promise<Subscribe<Transaction>>;
    subscribe(
        type: "pendingTransactions" | "newBlockHeaders" | "syncing" | "logs",
        options?: Logs,
        callback?: Callback<Subscribe<any>>
    ): Promise<Subscribe<any>>;

    unsubscribe(callBack: Callback<boolean>): void | boolean;
    compile: {
        solidity(
            source: string,
            callback?: Callback<CompileResult>
        ): Promise<CompileResult>;
        lll(
            source: string,
            callback?: Callback<CompileResult>
        ): Promise<CompileResult>;
        serpent(
            source: string,
            callback?: Callback<CompileResult>
        ): Promise<CompileResult>;
    };
    currentProvider: Provider;
    estimateGas(tx: Tx, callback?: Callback<number>): Promise<number>;
    getAccounts(cb?: Callback<string[]>): Promise<string[]>;
    getBalance(
        address: string,
        defaultBlock?: BlockType
    ): Promise<string>;
    getBalance(
        address: string,
        defaultBlock: BlockType,
        cb: Callback<string>
    ): void;
    getBlock(
        number: BlockType,
        returnTransactionObjects?: boolean,
        cb?: Callback<Block>
    ): Promise<Block>;
    getBlockNumber(callback?: Callback<number>): Promise<number>;
    getBlockTransactionCount(
        number: BlockType | string,
        cb?: Callback<number>
    ): Promise<number>;
    getBlockUncleCount(
        number: BlockType | string,
        cb?: Callback<number>
    ): Promise<number>;
    getCode(
        address: string,
        defaultBlock?: BlockType,
        cb?: Callback<string>
    ): Promise<string>;
    getCoinbase(cb?: Callback<string>): Promise<string>;
    getCompilers(cb?: Callback<string[]>): Promise<string[]>;
    getGasPrice(cb?: Callback<number>): Promise<number>;
    getHashrate(cb?: Callback<number>): Promise<number>;
    getPastLogs(
        options: {
            fromBlock?: BlockType;
            toBlock?: BlockType;
            address?: string;
            topics?: Array<string | string[] | null>;
        },
        cb?: Callback<Log[]>
    ): Promise<Log[]>;
    getProtocolVersion(cb?: Callback<string>): Promise<string>;
    getStorageAt(
        address: string,
        position: number | BigNumber,
        defaultBlock?: BlockType,
        cb?: Callback<string>
    ): Promise<string>;
    getTransactionReceipt(
        hash: string,
        cb?: Callback<TransactionReceipt>
    ): Promise<TransactionReceipt>;
    getTransaction(
        hash: string,
        cb?: Callback<Transaction>
    ): Promise<Transaction>;
    getTransactionCount(
        address: string,
        defaultBlock?: BlockType,
        cb?: Callback<number>
    ): Promise<number>;
    getTransactionFromBlock(
        block: BlockType,
        index: number,
        cb?: Callback<Transaction>
    ): Promise<Transaction>;
    getUncle(
        blockHashOrBlockNumber: BlockType | string,
        uncleIndex: number,
        returnTransactionObjects?: boolean,
        cb?: Callback<Block>
    ): Promise<Block>;
    getWork(cb?: Callback<string[]>): Promise<string[]>;
    givenProvider: Provider;
    isMining(cb?: Callback<boolean>): Promise<boolean>;
    isSyncing(cb?: Callback<boolean>): Promise<boolean>;
    net: Net;
    personal: Personal;
    signTransaction(
        tx: Tx,
        address?: string,
        cb?: Callback<string>
    ): Promise<EncodedTransaction>;
    sendSignedTransaction(
        data: string,
        cb?: Callback<string>
    ): PromiEvent<TransactionReceipt>;
    sendTransaction(
        tx: Tx,
        cb?: Callback<string>
    ): PromiEvent<TransactionReceipt>;
    submitWork(
        nonce: string,
        powHash: string,
        digest: string,
        cb?: Callback<boolean>
    ): Promise<boolean>;
    sign(
        address: string,
        dataToSign: string,
        cb?: Callback<string>
    ): Promise<string>;
}
