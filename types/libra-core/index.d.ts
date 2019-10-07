// Type definitions for libra-core 1.0
// Project: https://github.com/perfectmak/libra-core#readme
// Definitions by: mavis.tan <https://github.com/mmsqe>, morgansliman <https://github.com/morgansliman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import BigNumber from 'bignumber.js';

export type Signature = Uint8Array;

export class KeyPair {
    static fromSecretKey(secretKey: Uint8Array): KeyPair;

    constructor(eddsaPair: any);

    sign(message: Uint8Array): Signature;

    verify(message: Uint8Array, signature: Signature): boolean;

    getSecretKey(): Uint8Array;

    getPublicKey(): Uint8Array;
}

export type AccountStates = AccountState[];

export class AccountState {
    readonly authenticationKey: Uint8Array;
    readonly balance: BigNumber;
    readonly receivedEventsCount: BigNumber;
    readonly sentEventsCount: BigNumber;
    readonly sequenceNumber: BigNumber;

    static default(address: string): AccountState;

    static fromBytes(bytes: Uint8Array): AccountState;
}

export class Account {
    readonly keyPair: KeyPair;

    static fromSecretKeyBytes(secretKeyBytes: Uint8Array): Account;

    static fromSecretKey(secretKeyHex: string): Account;

    constructor(keyPair: KeyPair);

    getAddress(): AccountAddress;
}

export type AccountAddressLike = AccountAddress | string | Uint8Array;

export class InvalidAccountAddressError extends Error {
    constructor(invalidLength: number | string);
}

export class AccountAddress {
    static isValidString(addressHex: string): boolean;

    static isValidBytes(addressBytes: Uint8Array): boolean;

    static default(): AccountAddress;

    constructor(addressOrHash: AccountAddressLike);

    isDefault(): boolean;

    toBytes(): Uint8Array;

    toHex(): string;

    toString(): string;
}

export interface Seed {
    data: Uint8Array;
}

export function Seed(data: Uint8Array): void;

export namespace Seed {
    function fromMnemonic(words: string[] | Mnemonic, salt?: string): void;
}

export class KeyFactory {
    constructor(seed: Seed);

    generateKey(childDepth: number): KeyPair;
}

export class Mnemonic {
    constructor(words?: string[]);

    toString(): string;

    toBytes(): Uint8Array;
}

export enum LibraNetwork {
    Testnet = 'testnet'
}

export interface LibraLibConfig {
    port?: string;
    host?: string;
    network?: LibraNetwork;
    faucetServerHost?: string;
    validatorSetFile?: string;
}

export class LibraClient {
    constructor(config: LibraLibConfig);

    getAccountState(address: AccountAddressLike): Promise<AccountState>;

    getAccountStates(addresses: AccountAddressLike[]): Promise<AccountStates>;

    getAccountTransaction(
        address: AccountAddressLike,
        sequenceNumber: BigNumber | string | number,
        fetchEvents?: boolean
    ): Promise<LibraSignedTransactionWithProof | null>;

    mintWithFaucetService(
        receiver: AccountAddress | string,
        numCoins: BigNumber | string | number,
        waitForConfirmation?: boolean
    ): Promise<string>;

    waitForConfirmation(
        accountAddress: AccountAddress | string,
        transactionSequenceNumber: number | string | BigNumber
    ): Promise<void>;

    signTransaction(transaction: LibraTransaction, keyPair: KeyPair): Promise<LibraSignedTransaction>;

    transferCoins(
        sender: Account,
        recipientAddress: string,
        numCoins: number | string | BigNumber
    ): Promise<LibraTransactionResponse>;

    execute(transaction: LibraTransaction, sender: Account): Promise<LibraTransactionResponse>;
}

export interface LibraVMStatusError {
    errorType: LibraErrorType | number;
    validationStatus?: LibraValidationStatusError;
    verificationStatusList?: LibraVerificationStatusError[];
    invariantViolation?: LibraInvariantViolationError;
    deserializationError?: LibraDeserializationError;
    executionError?: LibraExecutionError;
}

export function LibraVMStatusError(
    errorType: LibraErrorType | number,
    validationStatus?: LibraValidationStatusError,
    verificationStatusList?: LibraVerificationStatusError[],
    invariantViolation?: LibraInvariantViolationError,
    deserializationError?: LibraDeserializationError,
    executionError?: LibraExecutionError,
): void;

export enum LibraErrorType {
    ERRORTYPE_NOT_SET = 0,
    VALIDATION = 1,
    VERIFICATION = 2,
    INVARIANT_VIOLATION = 3,
    DESERIALIZATION = 4,
    EXECUTION = 5,
}

export interface LibraValidationStatusError {
    code: LibraValidationStatusCode;
    message: string;
}

export enum LibraValidationStatusCode {
    UNKNOWNVALIDATIONSTATUS = 0,
    INVALIDSIGNATURE = 1,
    INVALIDAUTHKEY = 2,
    SEQUENCENUMBERTOOOLD = 3,
    SEQUENCENUMBERTOONEW = 4,
    INSUFFICIENTBALANCEFORTRANSACTIONFEE = 5,
    TRANSACTIONEXPIRED = 6,
    SENDINGACCOUNTDOESNOTEXIST = 7,
    REJECTEDWRITESET = 8,
    INVALIDWRITESET = 9,
    EXCEEDEDMAXTRANSACTIONSIZE = 10,
    UNKNOWNSCRIPT = 11,
    UNKNOWNMODULE = 12,
    MAXGASUNITSEXCEEDSMAXGASUNITSBOUND = 13,
    MAXGASUNITSBELOWMINTRANSACTIONGASUNITS = 14,
    GASUNITPRICEBELOWMINBOUND = 15,
    GASUNITPRICEABOVEMAXBOUND = 16,
}

export interface LibraVerificationStatusError {
    status: LibraVerificationStatusKind;
    moduleIndex: number;
    error: LibraVerificationError;
    message: string;
}

export function LibraVerificationStatusError(
    status: LibraVerificationStatusKind,
    moduleIndex: number,
    error: LibraVerificationError,
    message: string,
): void;

export enum LibraVerificationStatusKind {
    SCRIPT = 0,
    MODULE = 1,
}

export enum LibraVerificationError {
    UNKNOWNVERIFICATIONERROR = 0,
    INDEXOUTOFBOUNDS = 1,
    RANGEOUTOFBOUNDS = 2,
    INVALIDSIGNATURETOKEN = 3,
    INVALIDFIELDDEFREFERENCE = 4,
    RECURSIVESTRUCTDEFINITION = 5,
    INVALIDRESOURCEFIELD = 6,
    INVALIDFALLTHROUGH = 7,
    JOINFAILURE = 8,
    NEGATIVESTACKSIZEWITHINBLOCK = 9,
    UNBALANCEDSTACK = 10,
    INVALIDMAINFUNCTIONSIGNATURE = 11,
    DUPLICATEELEMENT = 12,
    INVALIDMODULEHANDLE = 13,
    UNIMPLEMENTEDHANDLE = 14,
    INCONSISTENTFIELDS = 15,
    UNUSEDFIELDS = 16,
    LOOKUPFAILED = 17,
    VISIBILITYMISMATCH = 18,
    TYPERESOLUTIONFAILURE = 19,
    TYPEMISMATCH = 20,
    MISSINGDEPENDENCY = 21,
    POPREFERENCEERROR = 22,
    POPRESOURCEERROR = 23,
    RELEASEREFTYPEMISMATCHERROR = 24,
    BRTYPEMISMATCHERROR = 25,
    ASSERTTYPEMISMATCHERROR = 26,
    STLOCTYPEMISMATCHERROR = 27,
    STLOCUNSAFETODESTROYERROR = 28,
    RETUNSAFETODESTROYERROR = 29,
    RETTYPEMISMATCHERROR = 30,
    FREEZEREFTYPEMISMATCHERROR = 31,
    FREEZEREFEXISTSMUTABLEBORROWERROR = 32,
    BORROWFIELDTYPEMISMATCHERROR = 33,
    BORROWFIELDBADFIELDERROR = 34,
    BORROWFIELDEXISTSMUTABLEBORROWERROR = 35,
    COPYLOCUNAVAILABLEERROR = 36,
    COPYLOCRESOURCEERROR = 37,
    COPYLOCEXISTSBORROWERROR = 38,
    MOVELOCUNAVAILABLEERROR = 39,
    MOVELOCEXISTSBORROWERROR = 40,
    BORROWLOCREFERENCEERROR = 41,
    BORROWLOCUNAVAILABLEERROR = 42,
    BORROWLOCEXISTSBORROWERROR = 43,
    CALLTYPEMISMATCHERROR = 44,
    CALLBORROWEDMUTABLEREFERENCEERROR = 45,
    PACKTYPEMISMATCHERROR = 46,
    UNPACKTYPEMISMATCHERROR = 47,
    READREFTYPEMISMATCHERROR = 48,
    READREFRESOURCEERROR = 49,
    READREFEXISTSMUTABLEBORROWERROR = 50,
    WRITEREFTYPEMISMATCHERROR = 51,
    WRITEREFRESOURCEERROR = 52,
    WRITEREFEXISTSBORROWERROR = 53,
    WRITEREFNOMUTABLEREFERENCEERROR = 54,
    INTEGEROPTYPEMISMATCHERROR = 55,
    BOOLEANOPTYPEMISMATCHERROR = 56,
    EQUALITYOPTYPEMISMATCHERROR = 57,
    EXISTSRESOURCETYPEMISMATCHERROR = 58,
    BORROWGLOBALTYPEMISMATCHERROR = 59,
    BORROWGLOBALNORESOURCEERROR = 60,
    MOVEFROMTYPEMISMATCHERROR = 61,
    MOVEFROMNORESOURCEERROR = 62,
    MOVETOSENDERTYPEMISMATCHERROR = 63,
    MOVETOSENDERNORESOURCEERROR = 64,
    CREATEACCOUNTTYPEMISMATCHERROR = 65,
    MODULEADDRESSDOESNOTMATCHSENDER = 66,
    NOMODULEHANDLES = 67,
}

export enum LibraInvariantViolationError {
    UNKNOWNINVARIANTVIOLATIONERROR = 0,
    OUTOFBOUNDSINDEX = 1,
    OUTOFBOUNDSRANGE = 2,
    EMPTYVALUESTACK = 3,
    EMPTYCALLSTACK = 4,
    PCOVERFLOW = 5,
    LINKERERROR = 6,
    LOCALREFERENCEERROR = 7,
    STORAGEERROR = 8,
}

export enum LibraDeserializationError {
    UNKNOWNBINARYERROR = 0,
    MALFORMED = 1,
    BADMAGIC = 2,
    UNKNOWNVERSION = 3,
    UNKNOWNTABLETYPE = 4,
    UNKNOWNSIGNATURETYPE = 5,
    UNKNOWNSERIALIZEDTYPE = 6,
    UNKNOWNOPCODE = 7,
    BADHEADERTABLE = 8,
    UNEXPECTEDSIGNATURETYPE = 9,
    DUPLICATETABLE = 10,
}

export interface LibraExecutionError {
    errorType: LibraExecutionErrorType;
}

export enum LibraExecutionErrorType {
    EXECUTIONSTATUS_NOT_SET = 0,
    RUNTIME_STATUS = 1,
    ASSERTION_FAILURE = 2,
    ARITHMETIC_ERROR = 3,
    REFERENCE_ERROR = 4,
}

export interface LibraProgramArgument {
    type: LibraProgramArgumentType;
    value: Uint8Array;
}

export interface LibraProgram {
    code: Uint8Array;
    arguments: LibraProgramArgument[];
    modules: Uint8Array[];
}

export enum LibraProgramArgumentType {
    U64 = 0,
    ADDRESS = 1,
    STRING = 2,
    BYTEARRAY = 3,
}

export interface LibraGasConstraint {
    maxGasAmount: BigNumber;
    gasUnitPrice: BigNumber;
}

export interface LibraTransaction {
    program: LibraProgram;
    gasConstraint: LibraGasConstraint;
    expirationTime: BigNumber;
    sendersAddress: Uint8Array;
    sequenceNumber: BigNumber;
}

export function LibraTransaction(
    program: LibraProgram,
    gasConstraint: LibraGasConstraint,
    expirationTime: BigNumber,
    sendersAddress: Uint8Array,
    sequenceNumber: BigNumber,
): void;

export namespace LibraTransaction {
    function createTransfer(recipientAddress: string, numAccount: BigNumber): LibraTransaction;
}

export interface LibraTransactionResponse {
  signedTransaction: LibraSignedTransaction;
  validatorId: Uint8Array;
  acStatus?: LibraAdmissionControlStatus | number;
  mempoolStatus?: LibraMempoolTransactionStatus | number;
  vmStatus?: LibraVMStatusError;
  awaitConfirmation(client: LibraClient): Promise<void>;
}

export function LibraTransactionResponse(
    signedTransaction: LibraSignedTransaction,
    validatorId: Uint8Array,
    acStatus?: LibraAdmissionControlStatus | number,
    mempoolStatus?: LibraMempoolTransactionStatus | number,
    vmStatus?: LibraVMStatusError,
): void;

export namespace LibraTransactionResponse {
    function awaitConfirmation(client: LibraClient): Promise<void>;
}

export enum LibraAdmissionControlStatus {
    UNKNOWN = -1,
    ACCEPTED = 0,
    BLACKLISTED = 1,
    REJECTED = 2
}

export enum LibraMempoolTransactionStatus {
    UNKNOWN = -1,
    VALID = 0,
    INSUFFICIENTBALANCE = 1,
    INVALIDSEQNUMBER = 2,
    MEMPOOLISFULL = 3,
    TOOMANYTRANSACTIONS = 4,
    INVALIDUPDATE = 5
}

export interface LibraSignedTransaction {
    transaction: LibraTransaction;
    publicKey: Uint8Array;
    signature: Uint8Array;
}

export function LibraSignedTransaction(transaction: LibraTransaction, publicKey: Uint8Array, signature: Uint8Array): void;

export interface LibraTransactionEvent {
    data: Uint8Array;
    sequenceNumber: BigNumber;
    address?: AccountAddress;
    path?: Uint8Array;
}

export interface LibraSignedTransactionWithProof {
    signedTransaction: LibraSignedTransaction;
    proof?: object;
    events?: LibraTransactionEvent[];
}

export function LibraSignedTransactionWithProof(signedTransaction: LibraSignedTransaction, proof?: object, events?: LibraTransactionEvent[]): void;

export function LibraTransactionEvent(data: Uint8Array, sequenceNumber: BigNumber, address?: AccountAddress, path?: Uint8Array): void;

export interface WalletConfig {
    mnemonic?: string;
    salt?: string;
}

export class LibraWallet {
    constructor(config?: WalletConfig);

    newAccount(): Account;

    generateAccount(depth: number): Account;

    addAccount(account: Account): void;

    getConfig(): WalletConfig;
}
