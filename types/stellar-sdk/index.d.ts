// Type definitions for stellar-sdk 0.10
// Project: https://github.com/stellar/js-stellar-sdk
// Definitions by: Carl Foster <https://github.com/carl-foster>
//                 Triston Jones <https://github.com/tristonj>
//                 Paul Selden <https://github.com/pselden>
//                 Max Bause <https://github.com/maxbause>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

export class Account {
    constructor(accountId: string, sequence: string)
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
}

export class CallBuilder<T extends Record> {
    constructor(serverUrl: string)
    call(): Promise<CollectionPage<T>>;
    cursor(cursor: string): this;
    limit(limit: number): this;
    order(direction: 'asc' | 'desc'): this;
    stream(options?: { onmessage?: (record: T) => void, onerror?: (error: Error) => void }): () => void;
}

export interface CollectionPage<T extends Record> {
    records: T[];
    next: () => Promise<CollectionPage<T>>;
    prev: () => Promise<CollectionPage<T>>;
}

export interface Record {
    _links: {
        [key: string]: RecordLink
    };
}

export interface RecordLink {
    href: string;
    templated?: boolean;
}

/* Due to a bug with the recursive function requests */
export interface CollectionRecord<T extends Record> {
    _links: {
        next: RecordLink
        prev: RecordLink
        self: RecordLink
    };
    _embedded: {
        records: T[]
    };
}

export interface CallFunctionTemplateOptions {
    cursor?: string | number;
    limit?: number;
    order?: 'asc' | 'desc';
}

export type CallFunction<T extends Record> = () => Promise<T>;
export type CallCollectionFunction<T extends Record> =
    (options?: CallFunctionTemplateOptions) => Promise<CollectionRecord<T>>;

export interface AccountRecord extends Record {
    id: string;
    paging_token: string;
    account_id: string;
    sequence: number;
    subentry_count: number;
    thresholds: {
        low_threshold: number
        med_threshold: number
        high_threshold: number
    };
    flags: {
        auth_required: boolean
        auth_revocable: boolean
    };
    balances: Array<
    {
        balance: string
        asset_type: 'native'
    } |
    {
        balance: string
        limit: string
        asset_type: 'credit_alphanum4' | 'credit_alphanum12'
        asset_code: string
        asset_issuer: string
    }
    >;
    signers: Array<
    {
        public_key: string
        weight: number
    }
    >;
    data: (options: {value: string}) => Promise<{value: string}>;
    data_attr: {
        [key: string]: string
    };
    effects: CallCollectionFunction<EffectRecord>;
    offers: CallCollectionFunction<OfferRecord>;
    operations: CallCollectionFunction<OperationRecord>;
    payments: CallCollectionFunction<PaymentOperationRecord>;
    trades: CallCollectionFunction<TradeRecord>;
}

export interface AssetRecord extends Record {
    asset_type: 'credit_alphanum4' | 'credit_alphanum12';
    asset_code: string;
    asset_issuer: string;
    paging_token: string;
    amount: string;
    num_accounts: number;
    flags: {
        auth_required: boolean
        auth_revocable: boolean
    };
}

export interface EffectRecord extends Record {
    account: string;
    paging_token: string;
    starting_balance: string;
    type_i: string;
    type: string;

    operation?: CallFunction<OperationRecord>;
    precedes?: CallFunction<EffectRecord>;
    succeeds?: CallFunction<EffectRecord>;
}

export interface LedgerRecord extends Record {
    id: string;
    paging_token: string;
    hash: string;
    prev_hash: string;
    sequence: number;
    transaction_count: number;
    operation_count: number;
    closed_at: string;
    total_coins: string;
    fee_pool: string;
    base_fee: number;
    base_reserve: string;
    max_tx_set_size: number;
    protocol_version: number;
    header_xdr: string;
    base_fee_in_stroops: number;
    base_reserve_in_stroops: number;

    effects: CallCollectionFunction<EffectRecord>;
    operations: CallCollectionFunction<OperationRecord>;
    self: CallFunction<LedgerRecord>;
    transactions: CallCollectionFunction<TransactionRecord>;
}

export interface OfferRecord extends Record {
    id: string;
    paging_token: string;
    seller_attr: string;
    selling: Asset;
    buying: Asset;
    amount: string;
    price_r: { numerator: number, denominator: number };
    price: string;

    seller?: CallFunction<AccountRecord>;
}

export interface BaseOperationRecord extends Record {
    id: string;
    paging_token: string;
    type: string;
    type_i: number;

    self: CallFunction<OperationRecord>;
    succeeds: CallFunction<OperationRecord>;
    precedes: CallFunction<OperationRecord>;
    effects: CallCollectionFunction<EffectRecord>;
    transaction: CallFunction<TransactionRecord>;
}

export interface CreateAccountOperationRecord extends BaseOperationRecord {
    type: 'create_account';
    account: string;
    funder: string;
    starting_balance: string;
}

export interface PaymentOperationRecord extends BaseOperationRecord {
    type: 'payment';
    from: string;
    to: string;
    asset_type: string;
    asset_code?: string;
    asset_issuer?: string;
    amount: string;

    sender: CallFunction<AccountRecord>;
    receiver: CallFunction<AccountRecord>;
}

export interface PathPaymentOperationRecord extends BaseOperationRecord {
    type: 'path_payment';
    from: string;
    to: string;
    asset_code?: string;
    asset_issuer?: string;
    asset_type: string;
    amount: string;
    source_asset_code?: string;
    source_asset_issuer?: string;
    source_asset_type: string;
    source_max: string;
    source_amount: string;
}

export interface ManageOfferOperationRecord extends BaseOperationRecord {
    type: 'manage_offer';
    offer_id: number;
    amount: string;
    buying_asset_code?: string;
    buying_asset_issuer?: string;
    buying_asset_type: string;
    price: string;
    price_r: { numerator: number, denominator: number };
    selling_asset_code?: string;
    selling_asset_issuer?: string;
    selling_asset_type: string;
}

export interface PassiveOfferOperationRecord extends BaseOperationRecord {
    type: 'create_passive_offer';
    offer_id: number;
    amount: string;
    buying_asset_code?: string;
    buying_asset_issuer?: string;
    buying_asset_type: string;
    price: string;
    price_r: { numerator: number, denominator: number };
    selling_asset_code?: string;
    selling_asset_issuer?: string;
    selling_asset_type: string;
}

export interface SetOptionsOperationRecord extends BaseOperationRecord {
    type: 'set_options';
    signer_key?: string;
    signer_weight?: number;
    master_key_weight?: number;
    low_threshold?: number;
    med_threshold?: number;
    high_threshold?: number;
    home_domain?: string;
    set_flags: Array<(1 | 2)>;
    set_flags_s: Array<('auth_required_flag' | 'auth_revocable_flag')>;
    clear_flags: Array<(1 | 2)>;
    clear_flags_s: Array<('auth_required_flag' | 'auth_revocable_flag')>;
}

export interface ChangeTrustOperationRecord extends BaseOperationRecord {
    type: 'change_trust';
    asset_code: string;
    asset_issuer: string;
    asset_type: string;
    trustee: string;
    trustor: string;
    limit: string;
}

export interface AllowTrustOperationRecord extends BaseOperationRecord {
    type: 'allow_trust';
    asset_code: string;
    asset_issuer: string;
    asset_type: string;
    authorize: boolean;
    trustee: string;
    trustor: string;
}

export interface AccountMergeOperationRecord extends BaseOperationRecord {
    type: 'account_merge';
    into: string;
}

export interface InflationOperationRecord extends BaseOperationRecord {
    type: 'inflation';
}

export interface ManageDataOperationRecord extends BaseOperationRecord {
    type: 'manage_data';
    name: string;
    value: string;
}

export interface BumpSequenceOperationRecord extends BaseOperationRecord {
    type: 'bump_sequence';
    bump_to: string;
}

export type OperationRecord = CreateAccountOperationRecord
    | PaymentOperationRecord
    | PathPaymentOperationRecord
    | ManageOfferOperationRecord
    | PassiveOfferOperationRecord
    | SetOptionsOperationRecord
    | ChangeTrustOperationRecord
    | AllowTrustOperationRecord
    | AccountMergeOperationRecord
    | InflationOperationRecord
    | ManageDataOperationRecord
    | BumpSequenceOperationRecord;

export interface OrderbookRecord extends Record {
    bids: Array<{ price_r: {}, price: number, amount: string }>;
    asks: Array<{ price_r: {}, price: number, amount: string }>;
    selling: Asset;
    buying: Asset;
}

export interface PaymentPathRecord extends Record {
    path: Array<{
        asset_code: string
        asset_issuer: string
        asset_type: string
    }>;
    source_amount: string;
    source_asset_type: string;
    source_asset_code: string;
    source_asset_issuer: string;
    destination_amount: string;
    destination_asset_type: string;
    destination_asset_code: string;
    destination_asset_issuer: string;
}

export interface TradeRecord extends Record {
    id: string;
    paging_token: string;
    ledger_close_time: string;
    base_account: string;
    base_amount: string;
    base_asset_type: string;
    base_asset_code: string;
    base_asset_issuer: string;
    counter_account: string;
    counter_amount: string;
    counter_asset_type: string;
    counter_asset_code: string;
    counter_asset_issuer: string;
    base_is_seller: boolean;

    base: CallFunction<AccountRecord>;
    counter: CallFunction<AccountRecord>;
    operation: CallFunction<OperationRecord>;
}

export interface TradeAggregationRecord extends Record {
    timestamp: string;
    trade_count: number;
    base_volume: string;
    counter_volume: string;
    avg: string;
    high: string;
    low: string;
    open: string;
    close: string;
}

export interface TransactionRecord extends Record {
    id: string;
    paging_token: string;
    hash: string;
    ledger_attr: number;
    created_at: string;
    max_fee: number;
    fee_paid: number;
    operation_count: number;
    result_code: number;
    result_code_s: string;
    source_account: string;
    source_account_sequence: string;
    envelope_xdr: string;
    result_xdr: string;
    result_meta_xdr: string;
    memo: string;

    account: CallFunction<AccountRecord>;
    effects: CallCollectionFunction<EffectRecord>;
    ledger: CallFunction<LedgerRecord>;
    operations: CallCollectionFunction<OperationRecord>;
    precedes: CallFunction<TransactionRecord>;
    self: CallFunction<TransactionRecord>;
    succeeds: CallFunction<TransactionRecord>;
}

export class AccountCallBuilder extends CallBuilder<AccountRecord> {
    accountId(id: string): this;
}
export class AccountResponse implements AccountRecord {
    _links: { [key: string]: { href: string } };
    id: string;
    paging_token: string;
    account_id: string;
    sequence: number;
    subentry_count: number;
    thresholds: {
        low_threshold: number
        med_threshold: number
        high_threshold: number
    };
    flags: {
        auth_required: boolean
        auth_revocable: boolean
    };
    balances: Array<
        {
            balance: string
            asset_type: 'native'
        } |
        {
            balance: string
            limit: string
            asset_type: 'credit_alphanum4' | 'credit_alphanum12'
            asset_code: string
            asset_issuer: string
        }
        >;
    signers: Array<
        {
            public_key: string
            weight: number
        }
        >;
    data: (options: {value: string}) => Promise<{value: string}>;
    data_attr: {
        [key: string]: string
    };

    effects: CallCollectionFunction<EffectRecord>;
    offers: CallCollectionFunction<OfferRecord>;
    operations: CallCollectionFunction<OperationRecord>;
    payments: CallCollectionFunction<PaymentOperationRecord>;
    trades: CallCollectionFunction<TradeRecord>;
    constructor(response: AccountRecord)
    accountId(): string;
    sequenceNumber(): string;
    incrementSequenceNumber(): void;
}

export class Asset {
    static native(): Asset;
    constructor(code: string, issuer: string)

    getCode(): string;
    getIssuer(): string;
    getAssetType(): 'native' | 'credit_alphanum4' | 'credit_alphanum12';
    isNative(): boolean;
    equals(other: Asset): boolean;

    code: string;
    issuer: string;
}

export class AssetsCallBuilder extends CallBuilder<AssetRecord> {
    forCode(value: string): this;
    forIssuer(value: string): this;
}

export namespace Config {
    function setAllowHttp(allow: boolean): void;
    function isAllowHttp(): boolean;
    function setDefault(): void;
}

export class EffectCallBuilder extends CallBuilder<EffectRecord> {
    forAccount(accountId: string): this;
    forLedger(sequence: string): this;
    forOperation(operationId: number): this;
    forTransaction(transactionId: string): this;
}

export interface FederationRecord {
    account_id: string;
    memo_type?: string;
    memo?: string;
}

export interface FederationOptions {
    allowHttp: boolean;
}
export class FederationServer {
    static createForDomain(domain: string, options?: FederationOptions): Promise<FederationServer>;
    static resolve(value: string, options?: FederationOptions): Promise<FederationRecord>;

    constructor(serverURL: string, domain: string, options?: FederationOptions)
    resolveAccountId(account: string): Promise<FederationRecord>;
    resolveAddress(address: string): Promise<FederationRecord>;
    resolveTransactionId(transactionId: string): Promise<FederationRecord>;
}

export class LedgerCallBuilder extends CallBuilder<LedgerRecord> { }

export class Memo {
    static fromXDRObject(memo: xdr.Memo): Memo;
    static hash(hash: string): Memo;
    static id(id: string): Memo;
    static none(): Memo;
    static return(hash: string): Memo;
    static text(text: string): Memo;

    constructor(type: 'none');
    constructor(type: 'id' | 'text' | 'hash' | 'return', value: string)
    constructor(type: 'hash' | 'return', value: Buffer)

    type: string;
    value: null | string | Buffer;

    toXDRObject(): xdr.Memo;
}

export const MemoNone = 'none';
export const MemoID = 'id';
export const MemoText = 'text';
export const MemoHash = 'hash';
export const MemoReturn = 'return';

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

export class OfferCallBuilder extends CallBuilder<OfferRecord> { }

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
    interface Operation {
        type: OperationType;
        source: string | null;
    }
    interface AccountMerge extends Operation {
        type: OperationType.accountMerge;
        destination: string;
    }
    interface AccountMergeOptions {
        destination: string;
        source?: string;
    }
    function accountMerge(options: AccountMergeOptions): xdr.Operation<AccountMerge>;

    interface AllowTrust extends Operation {
        type: OperationType.allowTrust;
        trustor: string;
        assetCode: string;
        authorize: boolean;
    }
    interface AllowTrustOptions {
        trustor: string;
        assetCode: string;
        authorize: boolean;
        source?: string;
    }
    function allowTrust(options: AllowTrustOptions): xdr.Operation<AllowTrust>;

    interface ChangeTrust extends Operation {
        type: OperationType.changeTrust;
        line: Asset;
        limit: string | number;
    }
    interface ChangeTrustOptions {
        asset: Asset;
        limit?: string;
        source?: string;
    }
    function changeTrust(options: ChangeTrustOptions): xdr.Operation<ChangeTrust>;

    interface CreateAccount extends Operation {
        type: OperationType.createAccount;
        source: string;
        destination: string;
        startingBalance: string | number;
    }
    interface CreateAccountOptions {
        destination: string;
        startingBalance: string;
        source?: string;
    }
    function createAccount(options: CreateAccountOptions): xdr.Operation<CreateAccount>;

    interface CreatePassiveOffer extends Operation {
        type: OperationType.createPassiveOffer;
        selling: Asset;
        buying: Asset;
        amount: string | number;
        price: string | number;
    }
    interface CreatePassiveOfferOptions {
        selling: Asset;
        buying: Asset;
        amount: string;
        price: number | string | object;
        source?: string;
    }
    function createPassiveOffer(options: CreatePassiveOfferOptions): xdr.Operation<CreatePassiveOffer>;

    interface Inflation extends Operation {
        type: OperationType.inflation;
    }
    function inflation(options: { source?: string }): xdr.Operation<Inflation>;

    interface ManageData extends Operation {
        type: OperationType.manageData;
        name: string;
        value: string;
    }
    interface ManageDataOptions {
        name: string;
        value: string | Buffer;
        source?: string;
    }
    function manageData(options: ManageDataOptions): xdr.Operation<ManageData>;

    interface ManageOffer extends Operation {
        type: OperationType.manageOffer;
        selling: Asset;
        buying: Asset;
        amount: string | number;
        price: string | number;
        offerId: string;
    }
    interface ManageOfferOptions extends CreatePassiveOfferOptions {
        offerId: number | string;
    }
    function manageOffer(options: ManageOfferOptions): xdr.Operation<ManageOffer>;

    interface PathPayment extends Operation {
        type: OperationType.pathPayment;
        sendAsset: Asset;
        sendMax: string | number;
        destination: string;
        destAsset: Asset;
        destAmount: string | number;
        path: Asset[];
    }
    interface PathPaymentOptions {
        sendAsset: Asset;
        sendMax: string;
        destination: string;
        destAsset: Asset;
        destAmount: string;
        path: Asset[];
        source?: string;
    }
    function pathPayment(options: PathPaymentOptions): xdr.Operation<PathPayment>;

    interface Payment extends Operation {
        type: OperationType.payment;
        destination: string;
        asset: Asset;
        amount: string | number;
    }
    interface PaymentOptions {
        destination: string;
        asset: Asset;
        amount: string;
        source?: string;
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
    interface Signer {
        ed25519PublicKey?: string;
        sha256Hash?: Buffer | string;
        preAuthTx?: Buffer | string;
        weight?: number | string;
    }
    interface SetOptions extends Operation {
        type: OperationType.setOptions;
        inflationDest?: string;
        clearFlags?: AuthFlags;
        setFlags?: AuthFlags;
        masterWeight?: number | string;
        lowThreshold?: number | string;
        medThreshold?: number | string;
        highThreshold?: number | string;
        homeDomain?: string;
        signer?: Signer;
    }
    interface SetOptionsOptions {
        inflationDest?: string;
        clearFlags?: AuthFlags;
        setFlags?: AuthFlags;
        masterWeight?: number | string;
        lowThreshold?: number | string;
        medThreshold?: number | string;
        highThreshold?: number | string;
        signer?: Signer;
        homeDomain?: string;
        source?: string;
    }
    function setOptions(options: SetOptionsOptions): xdr.Operation<SetOptions>;

    interface BumpSequence extends Operation {
        type: OperationType.bumpSequence;
        bumpTo: string;
    }
    interface BumpSequenceOptions {
        bumpTo: string;
        source?: string;
    }
    function bumpSequence(options: BumpSequenceOptions): xdr.Operation<BumpSequence>;

    function fromXDRObject<T extends Operation>(xdrOperation: xdr.Operation<T>): T;
}

export class OperationCallBuilder extends CallBuilder<OperationRecord> {
    forAccount(accountId: string): this;
    forLedger(sequence: string): this;
    forTransaction(transactionId: string): this;
}
export class OrderbookCallBuilder extends CallBuilder<OrderbookRecord> { }
export class PathCallBuilder extends CallBuilder<PaymentPathRecord> { }
export class PaymentCallBuilder extends CallBuilder<PaymentOperationRecord> {
    forAccount(accountId: string): this;
    forLedger(sequence: string): this;
    forTransaction(transactionId: string): this;
}

export class Server {
    constructor(serverURL: string, options?: { allowHttp: boolean })
    accounts(): AccountCallBuilder;
    assets(): AssetsCallBuilder;
    effects(): EffectCallBuilder;
    ledgers(): LedgerCallBuilder;
    loadAccount(accountId: string): Promise<AccountResponse>;
    offers(resource: string, ...parameters: string[]): OfferCallBuilder;
    operations(): OperationCallBuilder;
    orderbook(selling: Asset, buying: Asset): OrderbookCallBuilder;
    paths(
        source: string,
        destination: string,
        destinationAsset: Asset,
        destinationAmount: string,
    ): PathCallBuilder;
    payments(): PaymentCallBuilder;
    submitTransaction(transaction: Transaction): Promise<any>;
    tradeAggregation(
        base: Asset,
        counter: Asset,
        startTime: Date,
        endTime: Date,
        resolution: Date,
    ): TradeAggregationCallBuilder;
    trades(): TradesCallBuilder;
    transactions(): TransactionCallBuilder;
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

export class TradeAggregationCallBuilder extends CallBuilder<TradeAggregationRecord> { }
export class TradesCallBuilder extends CallBuilder<TradeRecord> {
    forAssetPair(base: Asset, counter: Asset): this;
    forOffer(offerId: string): this;
}

export class Transaction {
    constructor(envelope: string | xdr.TransactionEnvelope)
    hash(): Buffer;
    sign(...keypairs: Keypair[]): void;
    signatureBase(): Buffer;
    signHashX(preimage: Buffer | string): void;
    toEnvelope(): xdr.TransactionEnvelope;

    operations: TransactionOperation[];
    sequence: number;
    fee: number;
    source: string;
    memo: Memo;
    signatures: xdr.DecoratedSignature[];
}

export class TransactionBuilder {
    constructor(sourceAccount: Account, options?: TransactionBuilder.TransactionBuilderOptions)
    addOperation(operation: xdr.Operation<Operation.Operation>): this;
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

export class TransactionCallBuilder extends CallBuilder<TransactionRecord> {
    transaction(transactionId: string): this;
    forAccount(accountId: string): this;
    forLedger(sequence: string | number): this;
}

export class Keypair {
    static fromRawEd25519Seed(secretSeed: Buffer): Keypair;
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
    signatureHint(): xdr.SignatureHint;
    verify(data: Buffer, signature: Buffer): boolean;
}

export namespace xdr {
    class XDRStruct {
        static fromXDR(xdr: Buffer): XDRStruct;

        toXDR(): Buffer;
        toXDR(encoding: string): string;
    }
    class Operation<T extends Operation.Operation> extends XDRStruct { }
    class Asset extends XDRStruct { }
    class Memo extends XDRStruct { }
    class TransactionEnvelope extends XDRStruct { }
    class DecoratedSignature extends XDRStruct {
      constructor(keys: { hint: SignatureHint, signature: Signature })

      hint(): SignatureHint;
      signature(): Buffer;
    }
    type SignatureHint = Buffer;
    type Signature = Buffer;
}

export namespace StellarTomlResolver {
    interface StellarTomlResolveOptions {
        allowHttp?: boolean;
        timeout?: number;
    }

    function resolve(domain: string, options?: StellarTomlResolveOptions): Promise<{ [key: string]: any }>;
}
