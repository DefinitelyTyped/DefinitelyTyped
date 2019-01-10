// Type definitions for stellar-base 0.10
// Project: https://github.com/stellar/js-stellar-sdk
// Definitions by: Carl Foster <https://github.com/carl-foster>
//                 Triston Jones <https://github.com/tristonj>
//                 Paul Selden <https://github.com/pselden>
//                 Max Bause <https://github.com/maxbause>
//                 Timur Ramazanov <https://github.com/charlie-wasp>
//                 Kalvis Kalniņš <https://github.com/Akuukis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

export class Account {
    constructor(accountId: string, sequence: string | number)
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
}

export enum ASSET_TYPE {
    native = 'native',
    credit4 = 'credit_alphanum4',
    credit12 = 'credit_alphanum12',
}
export class Asset {
    static native(): Asset;
    static fromOperation(xdr: xdr.Asset): Asset;

    constructor(code: string, issuer: string);

    getCode(): string;
    getIssuer(): string;
    getAssetType(): ASSET_TYPE;
    isNative(): boolean;
    equals(other: Asset): boolean;
    toXDRObject(): xdr.Asset;

    code: string;
    issuer: string;
}

export const FastSigning: boolean;

export class Keypair {
    static fromRawEd25519Seed(secretSeed: Buffer): Keypair;
    static fromBase58Seed(secretSeed: string): Keypair;
    static fromSecret(secretKey: string): Keypair;
    static master(): Keypair;
    static fromPublicKey(publicKey: string): Keypair;
    static random(): Keypair;

    constructor(keys: { type: 'ed25519', secretKey: string } | { type: 'ed25519', Key: string })

    publicKey(): string;
    secret(): string;
    rawPublicKey(): Buffer;
    rawSecretKey(): Buffer;
    canSign(): boolean;
    sign(data: Buffer): Buffer;
    signDecorated(data: Buffer): xdr.DecoratedSignature;
    signatureHint(): xdr.SignatureHint;
    verify(data: Buffer, signature: Buffer): boolean;
}

export const MemoNone = 'none';
export const MemoID = 'id';
export const MemoText = 'text';
export const MemoHash = 'hash';
export const MemoReturn = 'return';
export type MemoNone = 'none';
export type MemoID = 'id';
export type MemoText = 'text';
export type MemoHash = 'hash';
export type MemoReturn = 'return';
export class Memo<T extends Memo.AnyType = Memo.AnyType> {
    static fromXDRObject(memo: xdr.Memo): Memo;
    static hash(hash: string): Memo<MemoHash>;
    static id(id: string): Memo<MemoID>;
    static none(): Memo<MemoNone>;
    static return(hash: string): Memo<MemoReturn>;
    static text(text: string): Memo<MemoText>;

    constructor(type: MemoNone, value?: null);
    constructor(type: MemoHash | MemoReturn, value: Buffer)
    constructor(type: MemoHash | MemoReturn | MemoID | MemoText, value: string)
    constructor(type: T, value: Memo.AnyValue)

    type: T;
    value:
        T extends MemoNone ? null :
        T extends MemoID ? string :
        T extends MemoText ? string :
        T extends MemoHash ? Buffer :
        T extends MemoReturn ? Buffer :
        Memo.AnyValue;

    toXDRObject(): xdr.Memo;
}
export namespace Memo {
    type AnyType = MemoNone | MemoID | MemoText | MemoHash | MemoReturn;
    type AnyValue = null | string | Buffer;
}

export enum Networks {
    PUBLIC = 'Public Global Stellar Network ; September 2015',
    TESTNET = 'Test SDF Network ; September 2015',
}

export class Network {
    static use(network: Network): void;
    static usePublicNetwork(): void;
    static useTestNetwork(): void;
    static current(): Network;

    constructor(passphrase: string)

    networkPassphrase(): string;
    networkId(): string;
}

export const AuthRequiredFlag: 1;
export const AuthRevocableFlag: 2;
export const AuthImmutableFlag: 4;

export type TransactionOperation =
    Operation.CreateAccount
    | Operation.Payment
    | Operation.PathPayment
    | Operation.CreatePassiveOffer
    | Operation.ManageOffer
    | Operation.SetOptions
    | Operation.ChangeTrust
    | Operation.AllowTrust
    | Operation.AccountMerge
    | Operation.Inflation
    | Operation.ManageData
    | Operation.BumpSequence;

export enum OperationType {
    createAccount = 'createAccount',
    payment = 'payment',
    pathPayment = 'pathPayment',
    createPassiveOffer = 'createPassiveOffer',
    manageOffer = 'manageOffer',
    setOptions = 'setOptions',
    changeTrust = 'changeTrust',
    allowTrust = 'allowTrust',
    accountMerge = 'accountMerge',
    inflation = 'inflation',
    manageData = 'manageData',
    bumpSequence = 'bumpSequence',
}

export namespace Operation {
    interface Operation<T extends OperationType = OperationType> {
        type: T;
        source?: string;
    }
    interface OperationOptions {
        source?: string;
    }

    interface AccountMerge extends Operation<OperationType.accountMerge> {
        destination: string;
    }
    interface AccountMergeOptions extends OperationOptions {
        destination: string;
    }
    function accountMerge(options: AccountMergeOptions): xdr.Operation<AccountMerge>;

    interface AllowTrust extends Operation<OperationType.allowTrust> {
        trustor: string;
        assetCode: string;
        authorize: boolean | undefined;
    }
    interface AllowTrustOptions extends OperationOptions {
        trustor: string;
        assetCode: string;
        authorize?: boolean;
    }
    function allowTrust(options: AllowTrustOptions): xdr.Operation<AllowTrust>;

    interface ChangeTrust extends Operation<OperationType.changeTrust> {
        line: Asset;
        limit: string;
    }
    interface ChangeTrustOptions extends OperationOptions {
        asset: Asset;
        limit?: string;
    }
    function changeTrust(options: ChangeTrustOptions): xdr.Operation<ChangeTrust>;

    interface CreateAccount extends Operation<OperationType.createAccount> {
        destination: string;
        startingBalance: string;
    }
    interface CreateAccountOptions extends OperationOptions {
        destination: string;
        startingBalance: string;
    }
    function createAccount(options: CreateAccountOptions): xdr.Operation<CreateAccount>;

    interface CreatePassiveOffer extends Operation<OperationType.createPassiveOffer> {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: string;
    }
    interface CreatePassiveOfferOptions extends OperationOptions {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: number | string | object /* bignumber.js */;
    }
    function createPassiveOffer(options: CreatePassiveOfferOptions): xdr.Operation<CreatePassiveOffer>;

    interface Inflation extends Operation<OperationType.inflation> {
    }
    interface InflationOptions extends OperationOptions {  // tslint:disable-line
    }
    function inflation(options: InflationOptions): xdr.Operation<Inflation>;

    interface ManageData extends Operation<OperationType.manageData> {
        name: string;
        value: Buffer;
    }
    interface ManageDataOptions extends OperationOptions {
        name: string;
        value: string | Buffer;
    }
    function manageData(options: ManageDataOptions): xdr.Operation<ManageData>;

    interface ManageOffer extends Operation<OperationType.manageOffer> {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: string;
        offerId: string;
    }
    interface ManageOfferOptions extends CreatePassiveOfferOptions {
        offerId?: number | string;
    }
    function manageOffer(options: ManageOfferOptions): xdr.Operation<ManageOffer>;

    interface PathPayment extends Operation<OperationType.pathPayment> {
        sendAsset: Asset;
        sendMax: string;
        destination: string;
        destAsset: Asset;
        destAmount: string;
        path: Asset[];
    }
    interface PathPaymentOptions extends OperationOptions {
        sendAsset: Asset;
        sendMax: string;
        destination: string;
        destAsset: Asset;
        destAmount: string;
        path?: Asset[];
    }
    function pathPayment(options: PathPaymentOptions): xdr.Operation<PathPayment>;

    interface Payment extends Operation<OperationType.payment> {
        amount: string;
        asset: Asset;
        destination: string;
    }
    interface PaymentOptions extends OperationOptions {
        amount: string;
        asset: Asset;
        destination: string;
    }
    function payment(options: PaymentOptions): xdr.Operation<Payment>;

    /*
    * Required = 1 << 0
    * Revocable = 1 << 1
    * Immutable = 1 << 2
    */
    enum AuthFlags {
        Required = 1,
        Revocable = 2,
        Immutable = 4,
    }
    interface SignerEd25519PublicKey {
        ed25519PublicKey: string;
        weight: number | undefined;
    }
    interface SignerSha256Hash {
        sha256Hash: Buffer;
        weight: number | undefined;
    }
    interface SignerPreAuthTx {
        preAuthTx: Buffer;
        weight: number | undefined;
    }
    type Signer = SignerEd25519PublicKey | SignerSha256Hash | SignerPreAuthTx;
    interface SignerEd25519PublicKeyOptions {
        ed25519PublicKey: string;
        weight?: number | string;
    }
    interface SignerSha256HashOptions {
        sha256Hash: Buffer | string;
        weight?: number | string;
    }
    interface SignerPreAuthTxOptions {
        preAuthTx: Buffer | string;
        weight?: number | string;
    }
    type SignerOptions = SignerEd25519PublicKeyOptions | SignerSha256HashOptions | SignerPreAuthTxOptions;
    type SignerUnion = {ed25519PublicKey: any} | {sha256Hash: any} | {preAuthTx: any} | null;
    interface SetOptions<T extends SignerUnion = SignerUnion> extends Operation<OperationType.setOptions> {
        inflationDest?: string;
        clearFlags?: AuthFlags;
        setFlags?: AuthFlags;
        masterWeight?: number;
        lowThreshold?: number;
        medThreshold?: number;
        highThreshold?: number;
        homeDomain?: string;
        signer:
            T extends {ed25519PublicKey: any} ? SignerEd25519PublicKey :
            T extends {sha256Hash: any} ? SignerSha256Hash :
            T extends {preAuthTx: any} ? SignerPreAuthTx :
            never;
    }
    interface SetOptionsOptions<T extends SignerUnion = never> extends OperationOptions {
        inflationDest?: string;
        clearFlags?: AuthFlags;
        setFlags?: AuthFlags;
        masterWeight?: number | string;
        lowThreshold?: number | string;
        medThreshold?: number | string;
        highThreshold?: number | string;
        homeDomain?: string;
        signer?: T;
    }
    function setOptions<T extends SignerUnion = never>(options: SetOptionsOptions<T>): xdr.Operation<SetOptions<T>>;

    interface BumpSequence extends Operation<OperationType.bumpSequence> {
        bumpTo: string;
    }
    interface BumpSequenceOptions extends OperationOptions {
        bumpTo: string;
    }
    function bumpSequence(options: BumpSequenceOptions): xdr.Operation<BumpSequence>;

    function fromXDRObject<T extends TransactionOperation = TransactionOperation>(xdrOperation: xdr.Operation<T>): T;
}

export namespace StrKey {
    function encodeEd25519PublicKey(data: Buffer): string;
    function decodeEd25519PublicKey(data: string): Buffer;
    function isValidEd25519PublicKey(Key: string): boolean;

    function encodeEd25519SecretSeed(data: Buffer): string;
    function decodeEd25519SecretSeed(data: string): Buffer;
    function isValidEd25519SecretSeed(seed: string): boolean;

    function encodePreAuthTx(data: Buffer): string;
    function decodePreAuthTx(data: string): Buffer;

    function encodeSha256Hash(data: Buffer): string;
    function decodeSha256Hash(data: string): Buffer;
}

export class Transaction<TMemo extends Memo = Memo, TOps extends TransactionOperation[] = TransactionOperation[]> {
    constructor(envelope: string | xdr.TransactionEnvelope)
    hash(): Buffer;
    sign(...keypairs: Keypair[]): void;
    signatureBase(): Buffer;
    signHashX(preimage: Buffer | string): void;
    toEnvelope(): xdr.TransactionEnvelope;

    operations: TOps;
    sequence: number;
    fee: number;
    source: string;
    memo: TMemo;
    signatures: xdr.DecoratedSignature[];
}

export class TransactionBuilder {
    constructor(sourceAccount: Account, options?: TransactionBuilder.TransactionBuilderOptions)
    addOperation(operation: xdr.Operation): this;
    addMemo(memo: Memo): this;
    build(): Transaction;
}

export namespace TransactionBuilder {
    interface TransactionBuilderOptions {
        fee?: number;
        timebounds?: {
            minTime?: number | string
            maxTime?: number | string
        };
        memo?: Memo;
    }
}

export namespace xdr {
    class XDRStruct {
        static fromXDR(xdr: Buffer): XDRStruct;

        toXDR(base?: string): Buffer;
        toXDR(encoding: string): string;
    }
    class Operation<T extends TransactionOperation = TransactionOperation> extends XDRStruct {
        static fromXDR(xdr: Buffer): Operation;
    }
    class Asset extends XDRStruct {
        static fromXDR(xdr: Buffer): Asset;
    }
    class Memo extends XDRStruct {
        static fromXDR(xdr: Buffer): Memo;
    }
    class TransactionEnvelope extends XDRStruct {
        static fromXDR(xdr: Buffer): TransactionEnvelope;
    }
    class DecoratedSignature extends XDRStruct {
        static fromXDR(xdr: Buffer): DecoratedSignature;

        constructor(keys: { hint: SignatureHint, signature: Signature })

        hint(): SignatureHint;
        signature(): Buffer;
    }
    type SignatureHint = Buffer;
    type Signature = Buffer;

    class TransactionResult extends XDRStruct {
        static fromXDR(xdr: Buffer): TransactionResult;
    }
}

export function hash(data: Buffer): Buffer;
export function sign(data: Buffer, rawSecret: Buffer): Buffer;
export function verify(data: Buffer, signature: Buffer, rawPublicKey: Buffer): boolean;
