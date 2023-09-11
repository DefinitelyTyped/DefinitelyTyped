// Type definitions for circomlibjs 0.1
// Project: https://github.com/iden3/circomlibjs
// Definitions by: cedoor <https://github.com/cedoor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Poseidon = (arr: any[], state?: any, nOut?: any) => any;

export class SMT {
    constructor(
        db: SMTMemDb,
        root: any,
        hash0: (left: any, right: any) => any,
        hash1: (key: any, value: any) => any,
        F: any,
    );

    delete(key: any): any;

    find(key: any): any;

    insert(key: any, value: any): any;

    update(key: any, newValue: any): any;
}

export class SMTMemDb {
    constructor(F: any);

    get(key: any): any;

    getRoot(): any;

    multiDel(dels: any[]): void;

    multiGet(keys: any[]): any;

    multiIns(inserts: any[]): void;

    setRoot(root: any): void;
}

export interface BabyJub {
    addPoint(a: any, b: any): any;

    mulPointEscalar(base: any, e: any): any;

    inSubgroup(P: any): boolean;

    inCurve(P: any): boolean;

    packPoint(P: any): any;

    unpackPoint(buff: any): any;
}

export interface Mimc7 {
    getIV(seed?: any): any;

    getConstants(seed?: any, nRounds?: any): any;

    hash(_x_in: any, _k: any): any;

    multiHash(arr: any[], key?: any): any;
}

export interface MimcSponge {
    getIV(seed?: any): any;

    getConstants(seed?: any, nRounds?: any): any;

    hash(_xL_in: any, _xR_in: any, _k: any): any;

    multiHash(arr: any[], key?: any, numOutputs?: any): any;
}

export interface PedersenHash {
    baseHash(type: any, S: any): any;

    hash(msg: any, options?: any): any;

    getBasePoint(baseHashType: any, pointIdx: any): any;

    padLeftZeros(idx: any, n: any): any;

    buffer2bits(buff: any): any;
}

export interface Eddsa {
    pruneBuffer(buff: any): any;

    prv2pub(prv: any): any;

    signPedersen(prv: any, msg: any): any;

    signMiMC(prv: any, msg: any): any;

    signMiMCSponge(prv: any, msg: any): any;

    signPoseidon(prv: any, msg: any): any;

    verifyPedersen(msg: any, sig: any, A: any): boolean;

    verifyMiMC(msg: any, sig: any, A: any): boolean;

    verifyMiMCSponge(msg: any, sig: any, A: any): boolean;

    verifyPoseidon(msg: any, sig: any, A: any): boolean;

    packSignature(sig: any): any;

    unpackSignature(sigBuff: any): any;
}

export class evmasm {
    constructor(...args: any[]);

    add(...args: any[]): void;

    addmod(...args: any[]): void;

    address(...args: any[]): void;

    and(...args: any[]): void;

    balance(...args: any[]): void;

    blockhash(...args: any[]): void;

    byte(...args: any[]): void;

    call(...args: any[]): void;

    callcode(...args: any[]): void;

    calldatacopy(...args: any[]): void;

    calldataload(...args: any[]): void;

    calldatasize(...args: any[]): void;

    caller(...args: any[]): void;

    callvalue(...args: any[]): void;

    codecopy(...args: any[]): void;

    codesize(...args: any[]): void;

    coinbase(...args: any[]): void;

    create(...args: any[]): void;

    createTxData(...args: any[]): void;

    delegatecall(...args: any[]): void;

    difficulty(...args: any[]): void;

    div(...args: any[]): void;

    dup(...args: any[]): void;

    eq(...args: any[]): void;

    exp(...args: any[]): void;

    extcodecopy(...args: any[]): void;

    extcodesize(...args: any[]): void;

    gas(...args: any[]): void;

    gaslimit(...args: any[]): void;

    gasprice(...args: any[]): void;

    gt(...args: any[]): void;

    invalid(...args: any[]): void;

    iszero(...args: any[]): void;

    jmp(...args: any[]): void;

    jmpi(...args: any[]): void;

    keccak(...args: any[]): void;

    label(...args: any[]): void;

    log0(...args: any[]): void;

    log1(...args: any[]): void;

    log2(...args: any[]): void;

    log3(...args: any[]): void;

    log4(...args: any[]): void;

    lt(...args: any[]): void;

    mload(...args: any[]): void;

    mod(...args: any[]): void;

    msize(...args: any[]): void;

    mstore(...args: any[]): void;

    mstore8(...args: any[]): void;

    mul(...args: any[]): void;

    mulmod(...args: any[]): void;

    not(...args: any[]): void;

    number(...args: any[]): void;

    or(...args: any[]): void;

    origin(...args: any[]): void;

    pc(...args: any[]): void;

    pop(...args: any[]): void;

    push(...args: any[]): void;

    return(...args: any[]): void;

    returndatacopy(...args: any[]): void;

    returndatasize(...args: any[]): void;

    revert(...args: any[]): void;

    sdiv(...args: any[]): void;

    selfdestruct(...args: any[]): void;

    sgt(...args: any[]): void;

    sha3(...args: any[]): void;

    shor(...args: any[]): void;

    signextend(...args: any[]): void;

    sload(...args: any[]): void;

    slt(...args: any[]): void;

    smod(...args: any[]): void;

    sstore(...args: any[]): void;

    staticcall(...args: any[]): void;

    stop(...args: any[]): void;

    sub(...args: any[]): void;

    swap(...args: any[]): void;

    timestamp(...args: any[]): void;
}

export function buildBabyjub(): Promise<BabyJub>;

export function buildEddsa(): Promise<Eddsa>;

export function buildMimc7(): Promise<Mimc7>;

export function buildMimcSponge(): Promise<MimcSponge>;

export function buildPedersenHash(): Promise<PedersenHash>;

export function buildPoseidon(): Promise<Poseidon>;

export function buildPoseidonOpt(): Promise<Poseidon>;

export function buildPoseidonReference(): Promise<Poseidon>;

export function buildPoseidonWasm(module: any): void;

export function buildSMT(db: SMTMemDb, root: any): Promise<SMT>;

export function newMemEmptyTrie(): any;

export namespace mimc7Contract {
    const abi: Array<{
        constant: boolean;
        inputs: Array<{
            name: string;
            type: string;
        }>;
        name: string;
        outputs: Array<{
            name: string;
            type: string;
        }>;
        payable: boolean;
        stateMutability: string;
        type: string;
    }>;

    function createCode(seed: any, n: any): any;
}

export namespace mimcSpongecontract {
    const abi: Array<{
        constant: boolean;
        inputs: Array<{
            name: string;
            type: string;
        }>;
        name: string;
        outputs: Array<{
            name: string;
            type: string;
        }>;
        payable: boolean;
        stateMutability: string;
        type: string;
    }>;

    function createCode(seed: any, n: any): any;
}

export namespace poseidonContract {
    function createCode(nInputs: any): any;

    function generateABI(nInputs: any): any;
}
