// Type definitions for stellar-sdk 0.11
// Project: https://github.com/stellar/js-stellar-sdk
// Definitions by: Carl Foster <https://github.com/carl-foster>
//                 Triston Jones <https://github.com/tristonj>
//                 Paul Selden <https://github.com/pselden>
//                 Max Bause <https://github.com/maxbause>
//                 Timur Ramazanov <https://github.com/charlie-wasp>
//                 Kalvis Kalniņš <https://github.com/Akuukis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

export namespace StellarBase {
    class Account {
        constructor(accountId: string, sequence: string | number)
        accountId(): string;
        sequenceNumber(): string;
        incrementSequenceNumber(): void;
    }

    enum ASSET_TYPE {
        native = 'native',
        credit4 = 'credit_alphanum4',
        credit12 = 'credit_alphanum12',
    }
    class Asset {
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

    const FastSigning: boolean;

    class Keypair {
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

    const MemoNone = 'none';
    const MemoID = 'id';
    const MemoText = 'text';
    const MemoHash = 'hash';
    const MemoReturn = 'return';
    type MemoNone = 'none';
    type MemoID = 'id';
    type MemoText = 'text';
    type MemoHash = 'hash';
    type MemoReturn = 'return';
    class Memo<T extends Memo.AnyType = Memo.AnyType> {
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
    namespace Memo {
        type AnyType = MemoNone | MemoID | MemoText | MemoHash | MemoReturn;
        type AnyValue = null | string | Buffer;
    }

    enum Networks {
        PUBLIC = 'Public Global Stellar Network ; September 2015',
        TESTNET = 'Test SDF Network ; September 2015',
    }

    class Network {
        static use(network: Network): void;
        static usePublicNetwork(): void;
        static useTestNetwork(): void;
        static current(): Network;

        constructor(passphrase: string)

        networkPassphrase(): string;
        networkId(): string;
    }

    const AuthRequiredFlag: 1;
    const AuthRevocableFlag: 2;
    const AuthImmutableFlag: 4;

    type TransactionOperation =
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

    enum OperationType {
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

    namespace Operation {
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
        interface SetOptions<T extends SignerUnion = never> extends Operation<OperationType.setOptions> {
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

        function fromXDRObject<T extends Operation>(xdrOperation: xdr.Operation<T>): T;
    }

    namespace StrKey {
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

    class Transaction {
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

    class TransactionBuilder {
        constructor(sourceAccount: Account, options?: TransactionBuilder.TransactionBuilderOptions)
        addOperation(operation: xdr.Operation<Operation.Operation>): this;
        addMemo(memo: Memo): this;
        build(): Transaction;
    }

    namespace TransactionBuilder {
        interface TransactionBuilderOptions {
            fee?: number;
            timebounds?: {
                minTime?: number | string
                maxTime?: number | string
            };
            memo?: Memo;
        }
    }

    namespace xdr {
        class XDRStruct {
            static fromXDR(xdr: Buffer): XDRStruct;

            toXDR(base?: string): Buffer;
            toXDR(encoding: string): string;
        }
        class Operation<T extends Operation.Operation> extends XDRStruct {
            static fromXDR(xdr: Buffer): Operation<Operation.Operation>;
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

    function hash(data: Buffer): Buffer;
    function sign(data: Buffer, rawSecret: Buffer): Buffer;
    function verify(data: Buffer, signature: Buffer, rawPublicKey: Buffer): boolean;
}

// Re-StellarBase
export import Account = StellarBase.Account;
export import ASSET_TYPE = StellarBase.ASSET_TYPE;
export import Asset = StellarBase.Asset;
export import FastSigning = StellarBase.FastSigning;
export import Keypair = StellarBase.Keypair;
export import Memo = StellarBase.Memo;
export import MemoHash = StellarBase.MemoHash;
export import MemoID = StellarBase.MemoID;
export import MemoNone = StellarBase.MemoNone;
export import MemoReturn = StellarBase.MemoReturn;
export import MemoText = StellarBase.MemoText;
export import Network = StellarBase.Network;
export import Networks = StellarBase.Networks;
export import Operation = StellarBase.Operation;
export import OperationType = StellarBase.OperationType;
export import StrKey = StellarBase.StrKey;
export import Transaction = StellarBase.Transaction;
export import TransactionBuilder = StellarBase.TransactionBuilder;
export import TransactionOperation = StellarBase.TransactionOperation;
export import hash = StellarBase.hash;
export import sign = StellarBase.sign;
export import verify = StellarBase.verify;
export import xdr = StellarBase.xdr;

export class NetworkError extends Error {
    private response: any;
    constructor(message: string, response: any)
    getResponse(): any;
}
export class NotFoundError extends NetworkError {}
export class BadRequestError extends NetworkError {}
export class BadResponseError extends NetworkError {}

export namespace Config {
    function setAllowHttp(allow: boolean): void;
    function isAllowHttp(): boolean;
    function setDefault(): void;
}

export class Server {
    constructor(serverURL: string, options?: Server.Options)
    accounts(): Server.AccountCallBuilder;
    assets(): Server.AssetsCallBuilder;
    effects(): Server.EffectCallBuilder;
    ledgers(): Server.LedgerCallBuilder;
    loadAccount(accountId: string): Promise<Server.AccountResponse>;
    offers(resource: string, ...parameters: string[]): Server.OfferCallBuilder;
    operations(): Server.OperationCallBuilder;
    orderbook(selling: Asset, buying: Asset): Server.OrderbookCallBuilder;
    paths(
        source: string,
        destination: string,
        destinationAsset: Asset,
        destinationAmount: string,
    ): Server.PathCallBuilder;
    payments(): Server.PaymentCallBuilder;
    submitTransaction(transaction: Transaction): Promise<Server.TransactionRecord>;
    tradeAggregation(
        base: Asset,
        counter: Asset,
        startTime: Date,
        endTime: Date,
        resolution: Date,
    ): Server.TradeAggregationCallBuilder;
    trades(): Server.TradesCallBuilder;
    transactions(): Server.TransactionCallBuilder;

    serverURL: any;  // TODO: require("urijs")
}

export namespace Server {
    abstract class CallBuilder<T extends Record> {
        constructor(serverUrl: string)
        call(): Promise<CollectionPage<T>>;
        cursor(cursor: string): this;
        limit(limit: number | string): this;
        order(direction: 'asc' | 'desc'): this;
        stream(options?: { onmessage?: (record: T) => void, onerror?: (error: Error) => void }): () => void;
    }

    interface CollectionPage<T extends Record> {
        records: T[];
        next: () => Promise<CollectionPage<T>>;
        prev: () => Promise<CollectionPage<T>>;
    }

    interface Record {
        _links: {
            [key: string]: RecordLink
        };
    }

    interface RecordLink {
        href: string;
        templated?: boolean;
    }

    /* Due to a bug with the recursive function requests */
    interface CollectionRecord<T extends Record> {
        _links: {
            next: RecordLink
            prev: RecordLink
            self: RecordLink
        };
        _embedded: {
            records: T[]
        };
    }

    interface CallFunctionTemplateOptions {
        cursor?: string | number;
        limit?: number;
        order?: 'asc' | 'desc';
    }

    type CallFunction<T extends Record> = () => Promise<T>;
    type CallCollectionFunction<T extends Record> =
        (options?: CallFunctionTemplateOptions) => Promise<CollectionRecord<T>>;

    interface BalanceLineNative {
        balance: string;
        asset_type: ASSET_TYPE.native;
    }
    interface BalanceLineAsset<T extends ASSET_TYPE.credit4 | ASSET_TYPE.credit12 = ASSET_TYPE.credit4 | ASSET_TYPE.credit12> {
        balance: string;
        limit: string;
        asset_type: T;
        asset_code: string;
        asset_issuer: string;
    }
    type BalanceLine<T extends ASSET_TYPE = ASSET_TYPE> =
        T extends ASSET_TYPE.native ? BalanceLineNative :
        T extends ASSET_TYPE.credit4 | ASSET_TYPE.credit12 ? BalanceLineAsset<T> :
        BalanceLineNative | BalanceLineAsset;

    interface AccountRecord extends Record {
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
        balances: BalanceLine[];
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

    interface AssetRecord extends Record {
        asset_type: ASSET_TYPE.credit4 | ASSET_TYPE.credit12;
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

    interface EffectRecord extends Record {
        account: string;
        paging_token: string;
        starting_balance: string;
        type_i: string;
        type: string;
        amount?: any;

        operation?: CallFunction<OperationRecord>;
        precedes?: CallFunction<EffectRecord>;
        succeeds?: CallFunction<EffectRecord>;
    }

    interface LedgerRecord extends Record {
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

    interface OfferRecord extends Record {
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

    interface BaseOperationRecord extends Record {
        id: string;
        paging_token: string;
        type: string;
        type_i: number;
        source_account: string;

        self: CallFunction<OperationRecord>;
        succeeds: CallFunction<OperationRecord>;
        precedes: CallFunction<OperationRecord>;
        effects: CallCollectionFunction<EffectRecord>;
        transaction: CallFunction<TransactionRecord>;
    }

    interface CreateAccountOperationRecord extends BaseOperationRecord {
        type: 'create_account';
        account: string;
        funder: string;
        starting_balance: string;
    }

    interface PaymentOperationRecord extends BaseOperationRecord {
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

    interface PathPaymentOperationRecord extends BaseOperationRecord {
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

    interface ManageOfferOperationRecord extends BaseOperationRecord {
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

    interface PassiveOfferOperationRecord extends BaseOperationRecord {
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

    interface SetOptionsOperationRecord extends BaseOperationRecord {
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

    interface ChangeTrustOperationRecord extends BaseOperationRecord {
        type: 'change_trust';
        asset_code: string;
        asset_issuer: string;
        asset_type: string;
        trustee: string;
        trustor: string;
        limit: string;
    }

    interface AllowTrustOperationRecord extends BaseOperationRecord {
        type: 'allow_trust';
        asset_code: string;
        asset_issuer: string;
        asset_type: string;
        authorize: boolean;
        trustee: string;
        trustor: string;
    }

    interface AccountMergeOperationRecord extends BaseOperationRecord {
        type: 'account_merge';
        into: string;
    }

    interface InflationOperationRecord extends BaseOperationRecord {
        type: 'inflation';
    }

    interface ManageDataOperationRecord extends BaseOperationRecord {
        type: 'manage_data';
        name: string;
        value: Buffer;
    }

    interface BumpSequenceOperationRecord extends BaseOperationRecord {
        type: 'bump_sequence';
        bump_to: string;
    }

    type OperationRecord = CreateAccountOperationRecord
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

    interface OrderbookRecord extends Record {
        bids: Array<{ price_r: {}, price: number, amount: string }>;
        asks: Array<{ price_r: {}, price: number, amount: string }>;
        selling: Asset;
        buying: Asset;
    }

    interface PaymentPathRecord extends Record {
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

    interface TradeRecord extends Record {
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

    interface TradeAggregationRecord extends Record {
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

    interface TransactionRecord extends Record {
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
        envelope: any;
        memo_type: any;

        account: CallFunction<AccountRecord>;
        effects: CallCollectionFunction<EffectRecord>;
        ledger: CallFunction<LedgerRecord>;
        operations: CallCollectionFunction<OperationRecord>;
        precedes: CallFunction<TransactionRecord>;
        self: CallFunction<TransactionRecord>;
        succeeds: CallFunction<TransactionRecord>;
    }

    abstract class AccountCallBuilder extends CallBuilder<AccountRecord> {
        accountId(id: string): this;
    }
    class AccountResponse implements AccountRecord {
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
        balances: BalanceLine[];
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
        inflation_destination?: any;

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

    abstract class AssetsCallBuilder extends CallBuilder<AssetRecord> {
        forCode(value: string): this;
        forIssuer(value: string): this;
    }

    abstract class EffectCallBuilder extends CallBuilder<EffectRecord> {
        forAccount(accountId: string): this;
        forLedger(sequence: string): this;
        forOperation(operationId: number): this;
        forTransaction(transactionId: string): this;
    }

    abstract class LedgerCallBuilder extends CallBuilder<LedgerRecord> { }

    abstract class OfferCallBuilder extends CallBuilder<OfferRecord> { }

    abstract class OperationCallBuilder extends CallBuilder<OperationRecord> {
        forAccount(accountId: string): this;
        forLedger(sequence: string): this;
        forTransaction(transactionId: string): this;
    }
    abstract class OrderbookCallBuilder extends CallBuilder<OrderbookRecord> { }
    abstract class PathCallBuilder extends CallBuilder<PaymentPathRecord> { }
    abstract class PaymentCallBuilder extends CallBuilder<PaymentOperationRecord> {
        forAccount(accountId: string): this;
        forLedger(sequence: string): this;
        forTransaction(transactionId: string): this;
    }

    interface Options {
        allowHttp: boolean;
    }

    abstract class TradeAggregationCallBuilder extends CallBuilder<TradeAggregationRecord> { }
    abstract class TradesCallBuilder extends CallBuilder<TradeRecord> {
        forAssetPair(base: Asset, counter: Asset): this;
        forOffer(offerId: string): this;
    }

    abstract class TransactionCallBuilder extends CallBuilder<TransactionRecord> {
        transaction(transactionId: string): this;
        forAccount(accountId: string): this;
        forLedger(sequence: string | number): this;
    }
}

export class FederationServer {
    static createForDomain(domain: string, options?: FederationServer.Options): Promise<FederationServer>;
    static resolve(value: string, options?: FederationServer.Options): Promise<FederationServer.Record>;

    constructor(serverURL: string, domain: string, options?: FederationServer.Options)
    resolveAccountId(account: string): Promise<FederationServer.Record>;
    resolveAddress(address: string): Promise<FederationServer.Record>;
    resolveTransactionId(transactionId: string): Promise<FederationServer.Record>;
}
export namespace FederationServer {
    interface Record {
        account_id: string;
        memo_type?: string;
        memo?: string;
    }

    interface Options {
        allowHttp: boolean;
    }
}

export namespace StellarTomlResolver {
    interface StellarTomlResolveOptions {
        allowHttp?: boolean;
        timeout?: number;
    }

    function resolve(domain: string, options?: StellarTomlResolveOptions): Promise<{ [key: string]: any }>;
}
