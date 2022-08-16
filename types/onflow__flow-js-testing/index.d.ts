/// <reference types="node" />

export class Emulator {
    start(options?: {
        logging?: boolean;
        flags?: string;
        adminPort?: number;
        restPort?: number;
        grpcPort?: number;
    }): Promise<boolean>;

    stop(): Promise<boolean>;

    setLogging(logging: boolean): void;
}

export type ValueOf<T> = T[keyof T];

export interface HashAlgorithm {
    SHA2_256: 1;
    SHA3_256: 3;
}

export interface SignatureAlgorithm {
    ECDSA_P256: 2;
    ECDSA_secp256k1: 3;
}

export type Address = string;

export interface AddressMap {
    [index: string]: Address;
}

export type PublicKey = Buffer;

export type CadenceTransformer = (code: string) => string;

export interface SignerInfo {
    addr: Address;
    hashAlgorithm?: ValueOf<HashAlgorithm>;
    keyId?: number;
    privateKey?: string;
    signatureAlgorithm?: ValueOf<SignatureAlgorithm>;
}

export type ScriptProps =
    | {
          name: string;
          code?: string;
          args?: any[];
          transformers?: CadenceTransformer[];
      }
    | {
          name?: string;
          code: string;
          args?: any[];
          transformers?: CadenceTransformer[];
      };

export type TransactionProps =
    | {
          name: string;
          code?: string;
          args?: any[];
          signers: Address[] | SignerInfo[];
          addressMap?: AddressMap;
      }
    | {
          name?: string;
          code: string;
          args?: any[];
          signers: Address[] | SignerInfo[];
          addressMap?: AddressMap;
      };

export interface TransactionEvent {
    type: string;
    transactionId: string;
    transactionIndex: number;
    eventIndex: number;
    data: any;
}

export interface TransactionStatus {
    blockId: string;
    status: number;
    statusString: string;
    statusCode: number;
    errorMessage: string;
    events: TransactionEvent[];
}

export interface KeyObject {
    privateKey: string;
    hashAlgorithm?: ValueOf<HashAlgorithm>;
    signatureAlgorithm?: ValueOf<SignatureAlgorithm>;
    weight?: number;
}

export type Interaction = Promise<any> | (() => Promise<any>);

export type TransactionResponse = [TransactionStatus | null, Error | null];

export type ScriptResponse = [any, Error | null];

/** Accounts */

export function getAccountAddress(alias: string): Promise<string>;

export function createAccount(props: { name?: string; keys?: KeyObject[] | PublicKey[] }): Promise<string>;

/** Contracts */
export function deployContractByName(props: {
    name: string;
    to?: Address;
    addressMap?: AddressMap;
    args?: any[];
    update?: boolean;
}): Promise<TransactionResponse>;

export function deployContract(props: {
    name: string;
    code: string;
    to?: Address;
    addressMap?: AddressMap;
    args?: any[];
    update?: boolean;
}): Promise<TransactionResponse>;

export function getContractAddress(name: string): Promise<Address>;

/** Cryptography */

export const HashAlgorithm: HashAlgorithm;

export const SignatureAlgorithm: SignatureAlgorithm;

export function pubFlowKey(keyObject: KeyObject): Promise<Buffer>;

/** Emulator */

export const emulator: Emulator;

/** FLOW Management */

export function getFlowBalance(address: Address): Promise<string>;

export function mintFlow(recipient: Address, amount: string): Promise<TransactionResponse>;

/** Init */

export function init(bastPath: string, options?: { pkey?: string }): Promise<boolean>;

/** Environment */

export function getBlockOffset(): Promise<string>;

export function setBlockOffset(offset: string): Promise<string>;

export function getTimestampOffset(): Promise<string>;

export function setTimestampOffset(offset: string): Promise<string>;

/** Jest Helpers */

export function shallPass(ix: Interaction): Promise<TransactionResponse>;

export function shallRevert(ix: Interaction, message?: string | RegExp): Promise<TransactionResponse>;

export function shallResolve(ix: Interaction): Promise<ScriptResponse>;

/** Scripts */

export function executeScript(props: ScriptProps): Promise<ScriptResponse>;

export function executeScript(name: string, args?: any[]): Promise<ScriptResponse>;

/** Transactions */

export function sendTransaction(props: TransactionProps): Promise<TransactionResponse>;

export function sendTransaction(
    name: string,
    signers: Address[] | SignerInfo[],
    args?: any[],
): Promise<TransactionResponse>;

/** Templates */

export function getTemplate(file: string, addressMap?: AddressMap, byAddress?: boolean): Promise<string>;

export function getContractCode(props: { name: string; addressMap?: AddressMap }): Promise<string>;

export function getTransactionCode(props: { name: string; addressMap?: AddressMap }): Promise<string>;

export function getScriptCode(props: { name: string; addressMap?: AddressMap }): Promise<string>;

/** Utilities */

export function isAddress(address: string): boolean;
