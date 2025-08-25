/// <reference types="node" />
import { RemoteInfo } from "dgram";

export class Session {
    constructor(target: string, authenticator: User, options: SessionOptionsV3);
    constructor(target: string, authenticator: string, options: SessionOptions);
    constructor(target: string, authenticator: undefined, options: SessionOptions);

    cancelRequests(error: any): void;

    close(): this;

    get(oids: string | string[], responseCb: GetSetCallback): Session;

    getBulk(oids: string[], nonRepeaters: number, maxRepetitions: number, responseCb: GetBulkCallback): this;
    getBulk(oids: string[], nonRepeaters: number, responseCb: GetBulkCallback): this;
    getBulk(oids: string[], responseCb: GetBulkCallback): this;

    getNext(oids: string[], responseCb: GetSetCallback): this;

    simpleGet(
        pduClass: any,
        feedCb: (req: Req, message: Message) => void,
        varbinds: Varbind[],
        responseCb: ResponseCallback,
        options?: SimpleGetOptions,
    ): void;

    inform(typeOrOid: string | number, varbinds: Varbind[], options: InformOptions, responseCb: ResponseCallback): this;
    inform(typeOrOid: string | number, varbinds: Varbind[], responseCb: ResponseCallback): this;
    inform(typeOrOid: string | number, options: InformOptions, responseCb: ResponseCallback): this;
    inform(typeOrOid: string | number, responseCb: ResponseCallback): this;
    onClose(): void;

    onError(error: any): void;

    onMsg(buffer: Buffer): void;

    onProxyResponse(req: Req, message: Message): void;

    onSimpleGetResponse(req: Req, message: Message): void;

    registerRequest(req: Req): void;

    send(req: Req, noWait: boolean): this;

    private sendV3Discovery(
        originalPdu: any,
        feedCb: (req: Req, message: Message) => void,
        responseCb: (error: Error | null, result?: any) => void,
        options?: RequestOptions,
    ): void;

    private sendV3Req(
        pdu: any,
        feedCb: (req: Req, message: Message) => void,
        responseCb: (error: Error | null, result?: any) => void,
        options?: RequestOptions,
        port?: number,
        allowReport?: boolean,
    ): void;

    set(varbinds: Varbind[], responseCb: GetSetCallback): this;

    subtree(oid: string, feedCb: FeedCallback, doneCb: DoneCallback): this;
    subtree(oid: string, maxRepetitions: number, feedCb: FeedCallback, doneCb: DoneCallback): this;

    table(oid: string, responseCb: TableCallback): this;
    table(oid: string, maxRepetitions: number, responseCb: TableCallback): this;

    tableColumns(oid: string, columns: string[], responseCb: TableColumnsCallback): this;
    tableColumns(oid: string, columns: string[], maxRepetitions: number, responseCb: TableColumnsCallback): this;

    trap(typeOrOid: string | number, varbinds: Varbind[], options: TrapOptions, responseCb: TrapCallback): this;
    trap(typeOrOid: string | number, varbinds: Varbind[], agentAddr: string, responseCb: TrapCallback): this;
    trap(typeOrOid: string | number, varbinds: Varbind[], responseCb: TrapCallback): this;
    trap(typeOrOid: string | number, agentAddr: string, responseCb: TrapCallback): this;
    trap(typeOrOid: string | number, options: TrapOptions, responseCb: TrapCallback): this;
    trap(typeOrOid: string | number, responseCb: TrapCallback): this;

    unregisterRequest(id: number): Req | null;

    userSecurityModelError(req: Req, oid: string): void;

    walk(oid: string, feedCb: FeedCallback, doneCb: DoneCallback): this;
    walk(oid: string, maxRepetitions: number, feedCb: FeedCallback, doneCb: DoneCallback): this;

    static create(target: string, community: string, options: SessionOptions): Session;

    static createV3(target: string, user: User, options?: SessionOptionsV3): Session;

    on(event: "close", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "message", listener: (buffer: Buffer) => void): this;
}

export type TableColumnsCallback = (error: Error | null, table?: TableColumnsData) => void;

export interface TableData {
    [columnName: string]: { // e.g., "ifDescr", "ifOperStatus"
        [instanceNumber: number]: VarbindValue;
    };
}

// tableColumns() returns complete table with column numbers as keys
export interface TableColumnsData {
    [columnNumber: string]: { // e.g., "2", "7", "8" (column suffixes)
        [instanceNumber: number]: VarbindValue;
    };
}

export type TableCallback = (error: RequestFailedError | null, table?: TableData) => void;
export type TrapCallback = (error: Error | null) => void;

export interface TrapOptions {
    upTime?: number;
    agentAddr?: string;
    port?: number;
}

export interface SessionOptions {
    version?: 0 | 1; // Version1 | Version2c
    transport?: "udp4" | "udp6";
    port?: number;
    trapPort?: number;
    retries?: number;
    timeout?: number;
    backoff?: number;
    sourceAddress?: string;
    sourcePort?: number;
    idBitsSize?: number;
    context?: string;
    backwardsGetNexts?: boolean;
    reportOidMismatchErrors?: boolean;
    debug?: boolean;
    dgramModule?: any;
}
export interface InformOptions extends RequestOptions {
    upTime?: number;
}
export type ResponseCallback = (error: RequestInvalidError | ResponseInvalidError | null, varbinds?: Varbind[]) => void;
export type GetSetCallback = (error: ResponseInvalidError | null, varbinds?: Varbind[]) => void;

export type GetBulkCallback = (error: ResponseInvalidError | null, varbinds?: (Varbind | Varbind[])[]) => void;

interface Req {
    message: Message;
    responseCb: ResponseCallback;
    retries: number;
    timeout: number;
    backoff: number;
    onResponse: ResponseHandler;
    feedCb: FeedHandler;
    port: number;
    context: string;
    originalPdu?: any;
    allowReport?: boolean;
    timer?: NodeJS.Timeout;
    id?: number | string;
    proxiedRinfo?: RemoteInfo;
    proxiedPduId?: number;
    proxiedUser?: User;
    proxiedEngine?: any;
    proxiedSocket?: any;

    getId(): number | string;
}

export type ResponseHandler = (req: Req, message: Message) => void;
export type FeedHandler = (req: Req, message: Message) => void;

export interface ReqConstructor {
    new(
        session: Session,
        message: Message,
        feedCb: FeedHandler,
        responseCb: ResponseCallback,
        options?: RequestOptions,
    ): Req;
}
export interface RequestOptions {
    port?: number;
    context?: string;
    timeout?: number;
    retries?: number;
    backoff?: number;
}
export interface Message {
    version: number;
    community?: string;
    pdu: any;
    buffer?: Buffer;
    msgGlobalData?: {
        msgID: number;
        msgMaxSize: number;
        msgFlags: number;
        msgSecurityModel: number;
    };
    msgSecurityParameters?: {
        msgAuthoritativeEngineID: Buffer;
        msgAuthoritativeEngineBoots: number;
        msgAuthoritativeEngineTime: number;
        msgUserName: string;
        msgAuthenticationParameters: Buffer;
        msgPrivacyParameters: Buffer;
    };
    user?: User;
    encryptedPdu?: Buffer;
    disableAuthentication?: boolean;

    // Methods
    getReqId(): number;
    toBuffer(): Buffer;
    toBufferCommunity(): Buffer;
    toBufferV3(): Buffer;
    processIncomingSecurity(user: User, responseCb: (error: Error | null) => void): boolean;
    decryptPdu(user: User, responseCb: (error: Error | null) => void): boolean;
    checkAuthentication(user: User, responseCb: (error: Error | null) => void): boolean;
    setMsgFlags(bitPosition: number, flag: boolean): void;
    hasAuthentication(): boolean;
    setAuthentication(flag: boolean): void;
    hasPrivacy(): boolean;
    setPrivacy(flag: boolean): void;
    isReportable(): boolean;
    setReportable(flag: boolean): void;
    isAuthenticationDisabled(): boolean;
    hasAuthoritativeEngineID(): boolean;
    createReportResponseMessage(engine: any, context: string): Message;
    createResponseForRequest(responsePdu: any): Message;
    createCommunityResponseFromRequest(responsePdu: any): Message;
    createV3ResponseFromRequest(responsePdu: any): Message;
}
// to do fix buffer types  TODO

interface MessageConstructor {
    new(): Message;

    createCommunity(version: number, community: string, pdu: any): Message;
    createRequestV3(user: User, msgSecurityParameters: any, pdu: any): Message;
    createV3(user: User, msgGlobalData: any, msgSecurityParameters: any, pdu: any): Message;
    createDiscoveryV3(pdu: any): Message;
    createFromBuffer(buffer: Buffer, user?: User): Message;
}

// Declare the Message constructor
declare const Message: MessageConstructor;

export interface SimpleGetOptions extends RequestOptions {
    nonRepeaters?: number;
    maxRepetitions?: number;
}
export interface User {
    name: string;
    level: SecurityLevel;
    authProtocol?: AuthProtocols;
    authKey?: string;
    privProtocol?: PrivProtocols;
    privKey?: string;
}

export interface SessionOptionsV3 {
    version?: 3;
    transport?: "udp4" | "udp6";
    port?: number;
    trapPort?: number;
    retries?: number;
    timeout?: number;
    backoff?: number;
    sourceAddress?: string;
    sourcePort?: number;
    idBitsSize?: number;
    context?: string;
    backwardsGetNexts?: boolean;
    reportOidMismatchErrors?: boolean;
    engineID?: string | Buffer;
    debug?: boolean;
    dgramModule?: any;
}

export type FeedCallback = ((varbinds: Varbind[]) => true) | ((varbinds: Varbind[]) => void);

export type DoneCallback = (error: Error | null) => void;
export enum AccessControlModelType {
    None,
    Simple,
}

export enum AccessLevel {
    None,
    ReadOnly,
    ReadWrite,
}

export enum AgentXPduType {
    Open = 1,
    Close,
    Register,
    Unregister,
    Get,
    GetNext,
    GetBulk,
    TestSet,
    CommitSet,
    UndoSet,
    CleanupSet,
    Notify,
    Ping,
    IndexAllocate,
    IndexDeallocate,
    AddAgentCaps,
    RemoveAgentCaps,
    Response,
}

export enum AuthProtocols {
    none = 1,
    md5 = 2,
    sha = 3,
    sha224 = 4,
    sha256 = 5,
    sha384 = 6,
    sha512 = 7,
}

export enum ErrorStatus {
    NoError,
    TooBig,
    NoSuchName,
    BadValue,
    ReadOnly,
    GeneralError,
    NoAccess,
    WrongType,
    WrongLength,
    WrongEncoding,
    WrongValue,
    NoCreation,
    InconsistentValue,
    ResourceUnavailable,
    CommitFailed,
    UndoFailed,
    AuthorizationError,
    NotWritable,
    InconsistentName,
}

export enum MaxAccess {
    "not-accessible",
    "accessible-for-notify",
    "read-only",
    "read-write",
    "read-create",
}

export enum MibProviderType {
    Scalar,
    Table,
}
export enum ObjectType {
    Boolean = 1,
    Integer,
    INTEGER = 2,
    Integer32 = 2,
    BitString,
    OctetString,
    "OCTET STRING" = 4,
    Null,
    OID,
    "OBJECT IDENTIFIER" = 7,
    IpAddress = 64,
    Counter = 65,
    Counter32 = Counter,
    Gauge = 66,
    Gauge32 = Gauge,
    Unsigned32 = Gauge32,
    TimeTicks = 67,
    Opaque = 68,
    Counter64 = 70,
    NoSuchObject = 128,
    NoSuchInstance = 129,
    EndOfMibView = 130,
}

export const OidFormat: {
    module: string;
    oid: string;
    path: string;
};

export enum PduType {
    GetRequest = 160,
    GetNextRequest,
    GetResponse,
    SetRequest,
    Trap,
    GetBulkRequest,
    InformRequest,
    TrapV2,
    Report,
}

export enum PrivProtocols {
    none = 1,
    des = 2,
    aes = 4,
    aes256b = 6,
    aes256r = 8,
}

export enum ResponseInvalidCode {
    EIp4AddressSize = 1,
    EUnknownObjectType,
    EUnknownPduType,
    ECouldNotDecrypt,
    EAuthFailure,
    EReqResOidNoMatch,
    EOutOfOrder = 8,
    EVersionNoMatch,
    ECommunityNoMatch,
    EUnexpectedReport,
    EResponseNotHandled,
    EUnexpectedResponse,
}

export enum RowStatus {
    active = 1,
    notInService,
    notReady,
    createAndGo,
    createAndWait,
    destroy,
}

export enum SecurityLevel {
    noAuthNoPriv = 1,
    authNoPriv,
    authPriv,
}

export enum TrapType {
    ColdStart,
    WarmStart,
    LinkDown,
    LinkUp,
    AuthenticationFailure,
    EgpNeighborLoss,
    EnterpriseSpecific,
}
export const Version1: 0;

export const Version2c: 1;

export const Version3: 3;

export const Version: {
    "1": typeof Version1;
    "2c": typeof Version2c;
    "3": typeof Version3;
};

export interface RequestFailedError extends Error {
    name: "RequestFailedError";
    message: string;
    status: ErrorStatus;
}

export const RequestFailedError: {
    new(message: string, status: ErrorStatus): RequestFailedError;
    prototype: RequestFailedError;
};

export interface RequestTimedOutError extends Error {
    name: "RequestTimedOutError";
}

export interface ResponseInvalidError extends Error {
    name: "ResponseInvalidError";
    code: ResponseInvalidCode;
    info?: any;
}

export interface RequestInvalidError extends Error {
    name: "RequestInvalidError";
}

export const ResponseInvalidError: {
    new(message: string, code: ResponseInvalidCode, info?: any): ResponseInvalidError;
    prototype: ResponseInvalidError;
};
export function createAgent(options: any, callback: any, mib?: any): any;

export function createMib(options?: MibOptions): any;
export interface MibOptions {
    addScalarDefaultsOnRegistration?: boolean;
}

export function createModuleStore(options?: ModuleStoreOptions): any;

export interface ModuleStoreOptions {
    baseModules?: string[];
}

export function createReceiver(options: any, callback: any): any;

declare function createSession(target?: string, community?: string, options?: SessionOptions): Session;
declare namespace createSession {
    const prototype: {};
}

export { createSession };

export function createSubagent(options: any): any;

declare function createV3Session(target: string, user: User, options?: SessionOptionsV3): Session;

declare namespace createV3Session {
    const prototype: {};
}

export { createV3Session };
export function isVarbindError(varbind: Varbind): boolean;

export function varbindError(varbind: Varbind): string;

export interface Varbind {
    oid: string;
    type?: ObjectType;
    value?: VarbindValue;
    errorStatus?: ErrorStatus;
}

export type VarbindValue =
    | string // ifDescr, ifAlias, sysDescr
    | number // ifOperStatus, ifAdminStatus, ifIndex
    | bigint // ifHCInOctets, ifHCOutOctets (64-bit counters)
    | boolean // TruthValue
    | Buffer // Raw data
    | null // Missing values
    | undefined;

export namespace Authentication {
    const HMAC_BUFFER_SIZE: number;

    const algorithms: {
        readonly [AuthProtocols.none]: undefined; // none has no algorithm
        readonly [AuthProtocols.md5]: {
            KEY_LENGTH: 16;
            AUTHENTICATION_CODE_LENGTH: 12;
            CRYPTO_ALGORITHM: "md5";
        };
        readonly [AuthProtocols.sha]: {
            KEY_LENGTH: 20;
            AUTHENTICATION_CODE_LENGTH: 12;
            CRYPTO_ALGORITHMF: "sha1";
        };
        readonly [AuthProtocols.sha224]: {
            KEY_LENGTH: 28;
            AUTHENTICATION_CODE_LENGTH: 16;
            CRYPTO_ALGORITHM: "sha224";
        };
        readonly [AuthProtocols.sha256]: {
            KEY_LENGTH: 32;
            AUTHENTICATION_CODE_LENGTH: 24;
            CRYPTO_ALGORITHM: "sha256";
        };
        readonly [AuthProtocols.sha384]: {
            KEY_LENGTH: 48;
            AUTHENTICATION_CODE_LENGTH: 32;
            CRYPTO_ALGORITHM: "sha384";
        };
        readonly [AuthProtocols.sha512]: {
            KEY_LENGTH: 64;
            AUTHENTICATION_CODE_LENGTH: 48;
            CRYPTO_ALGORITHM: "sha512";
        };
    };

    const authToKeyCache: {
        [key: string]: Buffer;
    };

    function calculateDigest(
        messageBuffer: Buffer,
        authProtocol: Exclude<AuthProtocols, AuthProtocols.none>,
        authPassword: string,
        engineID: Buffer,
    ): Buffer;

    function computeCacheKey(authProtocol: AuthProtocols, authPasswordString: string, engineID: Buffer): string;

    function getParametersLength(authProtocol: Exclude<AuthProtocols, AuthProtocols.none>): number;

    function isAuthentic(
        messageBuffer: Buffer,
        authProtocol: AuthProtocols,
        authPassword: string,
        engineID: Buffer,
        digestInMessage: Buffer,
    ): boolean;

    function passwordToKey(
        authProtocol: Exclude<AuthProtocols, AuthProtocols.none>,
        authPasswordString: string,
        engineID: Buffer,
    ): Buffer;

    function writeParameters(
        messageBuffer: Buffer,
        authProtocol: Exclude<AuthProtocols, AuthProtocols.none>,
        authPassword: string,
        engineID: Buffer,
        digestInMessage: Buffer,
    ): void;
}

export namespace Encryption {
    const algorithms: {
        readonly [PrivProtocols.des]: {
            BLOCK_LENGTH: 8;
            CRYPTO_ALGORITHM: "des-cbc";
            KEY_LENGTH: 8;
            decryptPdu: typeof Encryption.decryptPduDes;
            encryptPdu: typeof Encryption.encryptPduDes;
            localizationAlgorithm: typeof Encryption.generateLocalizedKey;
        };
        readonly [PrivProtocols.aes]: {
            BLOCK_LENGTH: 16;
            CRYPTO_ALGORITHM: "aes-128-cfb";
            KEY_LENGTH: 16;
            decryptPdu: typeof Encryption.decryptPduAes;
            encryptPdu: typeof Encryption.encryptPduAes;
            localizationAlgorithm: typeof Encryption.generateLocalizedKey;
        };
        readonly [PrivProtocols.aes256b]: {
            BLOCK_LENGTH: 16;
            CRYPTO_ALGORITHM: "aes-256-cfb";
            KEY_LENGTH: 32;
            decryptPdu: typeof Encryption.decryptPduAes;
            encryptPdu: typeof Encryption.encryptPduAes;
            localizationAlgorithm: typeof Encryption.generateLocalizedKeyBlumenthal;
        };
        readonly [PrivProtocols.aes256r]: {
            BLOCK_LENGTH: 16;
            CRYPTO_ALGORITHM: "aes-256-cfb";
            KEY_LENGTH: 32;
            decryptPdu: typeof Encryption.decryptPduAes;
            encryptPdu: typeof Encryption.encryptPduAes;
            localizationAlgorithm: typeof Encryption.generateLocalizedKeyReeder;
        };
    };

    function decryptPduDes(
        encryptedPdu: Buffer,
        privProtocol: PrivProtocols,
        privParameters: Buffer,
        privPassword: string,
        authProtocol: AuthProtocols,
        engine: Algorithm,
    ): Buffer;

    function encryptPduDes(
        scopedPdu: Buffer,
        privProtocol: PrivProtocols,
        privPassword: string,
        authProtocol: AuthProtocols,
        engine: Algorithm,
    ): { encryptedPdu: Buffer; msgPrivacyParameters: Buffer };

    function decryptPduAes(
        encryptedPdu: Buffer,
        privProtocol: PrivProtocols,
        privParameters: Buffer,
        privPassword: string,
        authProtocol: AuthProtocols,
        engine: Algorithm,
    ): Buffer;

    function encryptPduAes(
        scopedPdu: Buffer,
        privProtocol: PrivProtocols,
        privPassword: string,
        authProtocol: AuthProtocols,
        engine: Algorithm,
    ): { encryptedPdu: Buffer; msgPrivacyParameters: Buffer };

    function generateLocalizedKey(
        algorithm: Algorithm,
        authProtocol: AuthProtocols,
        privPassword: string,
        engineID: Buffer,
    ): Buffer;

    function generateLocalizedKeyBlumenthal(
        algorithm: Algorithm,
        authProtocol: AuthProtocols,
        privPassword: string,
        engineID: Buffer,
    ): Buffer;

    function generateLocalizedKeyReeder(
        algorithm: Algorithm,
        authProtocol: AuthProtocols,
        privPassword: string,
        engineID: Buffer,
    ): Buffer;
}
interface Algorithm {
    readonly BLOCK_LENGTH: number;
    readonly CRYPTO_ALGORITHM: string;
    readonly KEY_LENGTH: number;
    readonly decryptPdu: typeof Encryption.decryptPduAes;
    readonly encryptPdu: typeof Encryption.encryptPduAes;
    readonly localizationAlgorithm: typeof Encryption.generateLocalizedKey;
}

// module asn1-ber doesn't have type support so we to create completing type for the buffer used in Object Parser
declare class BerReader {
    readInt(): number;
    readString(type?: number, explicit?: boolean): string | Buffer;
    readBoolean(): boolean;
    readBitString(): string;
    readOID(): string;
    readByte(): number;
    readSequence(): number;
    peek(): number | null;
    readBuffer(type: number, explicit?: boolean): Buffer;
    readLength(): number;
}

export namespace ObjectParser {
    function readInt32(buffer: BerReader): number;

    function readUint32(buffer: BerReader): number;

    function readUint64(buffer: BerReader): bigint | string;
}

export namespace ObjectTypeUtil {
    function castSetValue(type: any, value: any, constraints: any): any;

    function doesIntegerMeetConstraints(value: any, constraints: any): boolean;

    function doesStringMeetConstraints(value: any, constraints: any): boolean;

    function getEnumerationNumberFromName(enumeration: any, name: any): any;

    function isValid(type: ObjectType, value: any, constraints: any): boolean;
}
