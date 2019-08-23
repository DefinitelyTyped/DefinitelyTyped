// Type definitions for stellar-base 0.10
// Project: https://github.com/stellar/js-stellar-base
// Definitions by: Carl Foster <https://github.com/carl-foster>
//                 Triston Jones <https://github.com/tristonj>
//                 Paul Selden <https://github.com/pselden>
//                 Max Bause <https://github.com/maxbause>
//                 Timur Ramazanov <https://github.com/charlie-wasp>
//                 Kalvis Kalniņš <https://github.com/Akuukis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />
export {};

export class Account {
    constructor(accountId: string, sequence: string | number)
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
}

export namespace AssetType {
    type native = 'native';
    type credit4 = 'credit_alphanum4';
    type credit12 = 'credit_alphanum12';
}
export type AssetType =
    | AssetType.native
    | AssetType.credit4
    | AssetType.credit12
;

export class Asset {
    static native(): Asset;
    static fromOperation(xdr: xdr.Asset): Asset;

    constructor(code: string, issuer: string);

    getCode(): string;
    getIssuer(): string;
    getAssetType(): AssetType;
    isNative(): boolean;
    equals(other: Asset): boolean;
    toXDRObject(): xdr.Asset;

    code: string;
    issuer: string;
}

export const FastSigning: boolean;

export type KeypairType = 'ed25519';

export class Keypair {
    static fromRawEd25519Seed(secretSeed: Buffer): Keypair;
    static fromBase58Seed(secretSeed: string): Keypair;
    static fromSecret(secretKey: string): Keypair;
    static master(): Keypair;
    static fromPublicKey(publicKey: string): Keypair;
    static random(): Keypair;

    constructor(keys: { type: KeypairType, secretKey: string, publicKey?: string } | { type: KeypairType, publicKey: string })

    readonly type: KeypairType;
    publicKey(): string;
    secret(): string;
    rawPublicKey(): Buffer;
    rawSecretKey(): Buffer;
    canSign(): boolean;
    sign(data: Buffer): xdr.Signature;
    signDecorated(data: Buffer): xdr.DecoratedSignature;
    signatureHint(): xdr.SignatureHint;
    verify(data: Buffer, signature: xdr.Signature): boolean;
}

export const MemoNone = 'none';
export const MemoID = 'id';
export const MemoText = 'text';
export const MemoHash = 'hash';
export const MemoReturn = 'return';
export namespace MemoType {
    type None = typeof MemoNone;
    type ID = typeof MemoID;
    type Text = typeof MemoText;
    type Hash = typeof MemoHash;
    type Return = typeof MemoReturn;
}
export type MemoType =
    | MemoType.None
    | MemoType.ID
    | MemoType.Text
    | MemoType.Hash
    | MemoType.Return
;
export type MemoValue = null | string | Buffer;

export class Memo<T extends MemoType = MemoType> {
    static fromXDRObject(memo: xdr.Memo): Memo;
    static hash(hash: string): Memo<MemoType.Hash>;
    static id(id: string): Memo<MemoType.ID>;
    static none(): Memo<MemoType.None>;
    static return(hash: string): Memo<MemoType.Return>;
    static text(text: string): Memo<MemoType.Text>;

    constructor(type: MemoType.None, value?: null);
    constructor(type: MemoType.Hash | MemoType.Return, value: Buffer)
    constructor(type: MemoType.Hash | MemoType.Return | MemoType.ID | MemoType.Text, value: string)
    constructor(type: T, value: MemoValue)

    type: T;
    value:
        T extends MemoType.None ? null :
        T extends MemoType.ID ? string :
        T extends MemoType.Text ? string | Buffer :  // github.com/stellar/js-stellar-base/issues/152
        T extends MemoType.Hash ? Buffer :
        T extends MemoType.Return ? Buffer :
        MemoValue;

    toXDRObject(): xdr.Memo;
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
export namespace AuthFlag {
    type required = typeof AuthRequiredFlag;
    type revocable = typeof AuthRevocableFlag;
    type rmmutable = typeof AuthImmutableFlag;
}
export type AuthFlag =
    | AuthFlag.required
    | AuthFlag.revocable
    | AuthFlag.rmmutable
;

export namespace Signer {
    interface Ed25519PublicKey {
        ed25519PublicKey: string;
        weight: number | undefined;
    }
    interface Sha256Hash {
        sha256Hash: Buffer;
        weight: number | undefined;
    }
    interface PreAuthTx {
        preAuthTx: Buffer;
        weight: number | undefined;
    }
}
export type Signer =
    | Signer.Ed25519PublicKey
    | Signer.Sha256Hash
    | Signer.PreAuthTx
;

export namespace SignerOptions {
    interface Ed25519PublicKey {
        ed25519PublicKey: string;
        weight?: number | string;
    }
    interface Sha256Hash {
        sha256Hash: Buffer | string;
        weight?: number | string;
    }
    interface PreAuthTx {
        preAuthTx: Buffer | string;
        weight?: number | string;
    }
}
export type SignerOptions =
    | SignerOptions.Ed25519PublicKey
    | SignerOptions.Sha256Hash
    | SignerOptions.PreAuthTx
;

export namespace OperationType {
    type CreateAccount = 'createAccount';
    type Payment = 'payment';
    type PathPayment = 'pathPayment';
    type CreatePassiveOffer = 'createPassiveOffer';
    type ManageOffer = 'manageOffer';
    type SetOptions = 'setOptions';
    type ChangeTrust = 'changeTrust';
    type AllowTrust = 'allowTrust';
    type AccountMerge = 'accountMerge';
    type Inflation = 'inflation';
    type ManageData = 'manageData';
    type BumpSequence = 'bumpSequence';
}
export type OperationType =
    | OperationType.CreateAccount
    | OperationType.Payment
    | OperationType.PathPayment
    | OperationType.CreatePassiveOffer
    | OperationType.ManageOffer
    | OperationType.SetOptions
    | OperationType.ChangeTrust
    | OperationType.AllowTrust
    | OperationType.AccountMerge
    | OperationType.Inflation
    | OperationType.ManageData
    | OperationType.BumpSequence
;

export namespace OperationOptions {
    interface BaseOptions {
        source?: string;
    }
    interface AccountMerge extends BaseOptions {
        destination: string;
    }
    interface AllowTrust extends BaseOptions {
        trustor: string;
        assetCode: string;
        authorize?: boolean;
    }
    interface ChangeTrust extends BaseOptions {
        asset: Asset;
        limit?: string;
    }
    interface CreateAccount extends BaseOptions {
        destination: string;
        startingBalance: string;
    }
    interface CreatePassiveOffer extends BaseOptions {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: number | string | object /* bignumber.js */;
    }
    interface ManageOffer extends CreatePassiveOffer {
        offerId?: number | string;
    }
    interface Inflation extends BaseOptions {  // tslint:disable-line
    }
    interface ManageData extends BaseOptions {
        name: string;
        value: string | Buffer;
    }
    interface PathPayment extends BaseOptions {
        sendAsset: Asset;
        sendMax: string;
        destination: string;
        destAsset: Asset;
        destAmount: string;
        path?: Asset[];
    }
    interface Payment extends BaseOptions {
        amount: string;
        asset: Asset;
        destination: string;
    }
    interface SetOptions<T extends SignerOptions = never> extends BaseOptions {
        inflationDest?: string;
        clearFlags?: AuthFlag;
        setFlags?: AuthFlag;
        masterWeight?: number | string;
        lowThreshold?: number | string;
        medThreshold?: number | string;
        highThreshold?: number | string;
        homeDomain?: string;
        signer?: T;
    }
    interface BumpSequence extends BaseOptions {
        bumpTo: string;
    }
}
export type OperationOptions =
    | OperationOptions.CreateAccount
    | OperationOptions.Payment
    | OperationOptions.PathPayment
    | OperationOptions.CreatePassiveOffer
    | OperationOptions.ManageOffer
    | OperationOptions.SetOptions
    | OperationOptions.ChangeTrust
    | OperationOptions.AllowTrust
    | OperationOptions.AccountMerge
    | OperationOptions.Inflation
    | OperationOptions.ManageData
    | OperationOptions.BumpSequence
;

export namespace Operation {
    interface BaseOperation<T extends OperationType = OperationType> {
        type: T;
        source?: string;
    }

    interface AccountMerge extends BaseOperation<OperationType.AccountMerge> {
        destination: string;
    }
    function accountMerge(options: OperationOptions.AccountMerge): xdr.Operation<AccountMerge>;

    interface AllowTrust extends BaseOperation<OperationType.AllowTrust> {
        trustor: string;
        assetCode: string;
        authorize: boolean | undefined;
    }
    function allowTrust(options: OperationOptions.AllowTrust): xdr.Operation<AllowTrust>;

    interface ChangeTrust extends BaseOperation<OperationType.ChangeTrust> {
        line: Asset;
        limit: string;
    }
    function changeTrust(options: OperationOptions.ChangeTrust): xdr.Operation<ChangeTrust>;

    interface CreateAccount extends BaseOperation<OperationType.CreateAccount> {
        destination: string;
        startingBalance: string;
    }
    function createAccount(options: OperationOptions.CreateAccount): xdr.Operation<CreateAccount>;

    interface CreatePassiveOffer extends BaseOperation<OperationType.CreatePassiveOffer> {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: string;
    }
    function createPassiveOffer(options: OperationOptions.CreatePassiveOffer): xdr.Operation<CreatePassiveOffer>;

    interface Inflation extends BaseOperation<OperationType.Inflation> {
    }
    function inflation(options: OperationOptions.Inflation): xdr.Operation<Inflation>;

    interface ManageData extends BaseOperation<OperationType.ManageData> {
        name: string;
        value: Buffer;
    }
    function manageData(options: OperationOptions.ManageData): xdr.Operation<ManageData>;

    interface ManageOffer extends BaseOperation<OperationType.ManageOffer> {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: string;
        offerId: string;
    }
    function manageOffer(options: OperationOptions.ManageOffer): xdr.Operation<ManageOffer>;

    interface PathPayment extends BaseOperation<OperationType.PathPayment> {
        sendAsset: Asset;
        sendMax: string;
        destination: string;
        destAsset: Asset;
        destAmount: string;
        path: Asset[];
    }
    function pathPayment(options: OperationOptions.PathPayment): xdr.Operation<PathPayment>;

    interface Payment extends BaseOperation<OperationType.Payment> {
        amount: string;
        asset: Asset;
        destination: string;
    }
    function payment(options: OperationOptions.Payment): xdr.Operation<Payment>;

    interface SetOptions<T extends SignerOptions = SignerOptions> extends BaseOperation<OperationType.SetOptions> {
        inflationDest?: string;
        clearFlags?: AuthFlag;
        setFlags?: AuthFlag;
        masterWeight?: number;
        lowThreshold?: number;
        medThreshold?: number;
        highThreshold?: number;
        homeDomain?: string;
        signer:
            T extends {ed25519PublicKey: any} ? Signer.Ed25519PublicKey :
            T extends {sha256Hash: any} ? Signer.Sha256Hash :
            T extends {preAuthTx: any} ? Signer.PreAuthTx :
            never;
    }
    function setOptions<T extends SignerOptions = never>(options: OperationOptions.SetOptions<T>): xdr.Operation<SetOptions<T>>;

    interface BumpSequence extends BaseOperation<OperationType.BumpSequence> {
        bumpTo: string;
    }
    function bumpSequence(options: OperationOptions.BumpSequence): xdr.Operation<BumpSequence>;

    function fromXDRObject<T extends Operation = Operation>(xdrOperation: xdr.Operation<T>): T;
}
export type Operation =
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
    | Operation.BumpSequence
;

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

export class Transaction<TMemo extends Memo = Memo, TOps extends Operation[] = Operation[]> {
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

export const TimeoutInfinite = 0;

export class TransactionBuilder {
    constructor(sourceAccount: Account, options?: TransactionBuilder.TransactionBuilderOptions)
    addOperation(operation: xdr.Operation): this;
    addMemo(memo: Memo): this;
    setTimeout(timeoutInSeconds: number): this;
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

// Hidden namespace as hack to work around name collision.
declare namespace xdrHidden {  // tslint:disable-line:strict-export-declare-modifiers
    class Operation2<T extends Operation = Operation> extends xdr.XDRStruct {
        static fromXDR(xdr: Buffer): xdr.Operation;
    }
}

export namespace xdr {
    class XDRStruct {
        static fromXDR(xdr: Buffer): XDRStruct;

        toXDR(base?: string): Buffer;
        toXDR(encoding: string): string;
    }
    export import Operation = xdrHidden.Operation2;  // tslint:disable-line:strict-export-declare-modifiers
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
export function sign(data: Buffer, rawSecret: Buffer): xdr.Signature;
export function verify(data: Buffer, signature: xdr.Signature, rawPublicKey: Buffer): boolean;
