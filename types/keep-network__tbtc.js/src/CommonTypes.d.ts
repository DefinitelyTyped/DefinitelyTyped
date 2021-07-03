/// <reference types="node" />
import type { Config as ElectrumConfig } from "./lib/ElectrumClient";
import type { FoundTransaction, BitcoinNetworkType } from './BitcoinHelpers';
import BN = require("bn.js");
import * as net from 'net';
export class Web3 {
    constructor(provider: any, net?: net.Socket);

    static modules: any;
    readonly givenProvider: any;
    defaultAccount: string | null;
    defaultBlock: string | number;
    readonly currentProvider: any;
    setProvider(provider: any): boolean;
    BatchRequest: new () => any;
    static readonly providers: any;

    utils: any;
    eth: any;
    shh: any;
    bzz: any;
    version: string;
    static readonly version: string;
    static readonly utils: any;
    extend(extension: any): any;
}
export type AbiType = 'function' | 'constructor' | 'event' | 'fallback';
export type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable';
export interface AbiInput {
    name: string;
    type: string;
    indexed?: boolean;
    components?: AbiInput[];
    internalType?: string;
}
export interface AbiOutput {
    name: string;
    type: string;
    components?: AbiOutput[];
    internalType?: string;
}
export interface AbiItem {
    anonymous?: boolean;
    constant?: boolean;
    inputs?: AbiInput[];
    name?: string;
    outputs?: AbiOutput[];
    payable?: boolean;
    stateMutability?: StateMutabilityType;
    type: AbiType;
    gas?: number;
}

export class Contract {
    constructor(
        provider: any,
        abi: AbiItem[],
        address?: string,
        options?: any
    );

    private _address: string;
    private _jsonInterface: AbiItem[];
    defaultAccount: string | null;
    defaultBlock: string | number;
    defaultCommon: any;
    defaultHardfork: any;
    defaultChain: any;
    transactionPollingTimeout: number;
    transactionConfirmationBlocks: number;
    transactionBlockTimeout: number;

    options: any;

    clone(): Contract;

    methods: any;

    once(
        event: string,
        callback: (error: Error, event: any) => void
    ): void;
    once(
        event: string,
        options: any,
        callback: (error: Error, event: any) => void
    ): void;

    events: any;

    getPastEvents(event: string): Promise<any[]>;
}
export interface TBTCConfig {
    web3: Web3;
    bitcoinNetwork: BitcoinNetworkType;
    electrum: { [configType: string]: ElectrumConfig };
}
export interface RedemptionDetails {
    utxoValue: BN;
    redeemerOutputScript: string;
    requestedFee: BN;
    outpoint: string;
    digest: string;
}
export interface KeyPoint {
    x: string;
    y: string;
}
export interface DepositBaseClass {
    address: string;
    keepContract: Contract;
    publicKeyPoint: Promise<KeyPoint>;
    getCurrentState(): Promise<number>;
    factory: any;
    contract: Contract;
    constructFundingProof(bitcoinTransaction: Omit<FoundTransaction, 'value'>, confirmations: number): Promise<[Buffer, Buffer, Buffer, Buffer, number, Buffer, string, Buffer]>;
    getLatestRedemptionDetails(): Promise<null | RedemptionDetails>;
}
