/// <reference lib="dom" />
export {};

/** Shape of errors thrown by client methods. */
export type NCALayerErrorLike = Error & { canceledByUser?: boolean };

export type Base64String = string;
export type BinaryLike = ArrayBuffer | Blob | File;
export type Signable = Base64String | BinaryLike;
export type SignableMany = ReadonlyArray<Signable>;

export type StorageType = string;

export interface BasicsCMSParams {
    decode?: boolean;
    encapsulate?: boolean;
    digested?: boolean;
    tsaProfile?: Record<string, unknown>;
    [key: string]: unknown;
}

export interface BasicsXMLParams {
    [key: string]: unknown;
}

export interface BasicsSignerParams {
    extKeyUsageOids: ReadonlyArray<string>;
    chain?: ReadonlyArray<unknown>;
    [key: string]: unknown;
}

export class NCALayerClient {
    constructor(url?: string, allowKmdHttpApi?: boolean);

    // Connection and environment
    url: string;
    wsConnection: unknown | null;
    responseProcessed: boolean;
    isKmd: boolean;
    allowKmdHttpApi: boolean;
    kmdHttpApiUrl: string;
    isKmdHttpApiAvailable: boolean;

    // KMD HTTP API operation state
    KmdHTTPAPIOperationId: string | null;
    KmdHTTPAPIOperationInBase64: boolean;
    KmdHTTPAPIOperationTotal: number;
    KmdHTTPAPIOperationProcessed: number;

    // Branding
    basicsLogo: Base64String | "";

    // Testing hooks
    onRequestReady: ((json: string) => void) | null;
    onResponseReady: ((json: string) => void) | null;

    /** Connects to NCALayer and resolves with its version string. */
    connect(): Promise<string>;

    /** Whether multisign is available (always true for this API surface). */
    readonly multisignAvailable: boolean;

    // Storage type presets
    static readonly basicsStorageKAZTOKEN: ReadonlyArray<string>;
    static readonly basicsStorageIDCard: ReadonlyArray<string>;
    static readonly basicsStorageEToken72k: ReadonlyArray<string>;
    static readonly basicsStorageEToken5110: ReadonlyArray<string>;
    static readonly basicsStorageJaCarta: ReadonlyArray<string>;
    static readonly basicsStorageAKey: ReadonlyArray<string>;
    static readonly basicsStoragePKCS12: ReadonlyArray<string>;
    static readonly basicsStorageJKS: ReadonlyArray<string>;
    static readonly basicsStorageAll: null;
    static readonly basicsStorageHardware: ReadonlyArray<string>;

    // Signing params presets
    static readonly basicsCMSParams: BasicsCMSParams;
    static readonly basicsCMSParamsDetached: BasicsCMSParams;
    static readonly basicsCMSParamsDetachedNoTSP: BasicsCMSParams;
    static readonly basicsCMSParamsDetachedHash: BasicsCMSParams;
    static readonly basicsCMSParamsAttached: BasicsCMSParams;
    static readonly basicsXMLParams: BasicsXMLParams;

    // Signer selection presets
    static readonly basicsSignerAny: BasicsSignerParams;
    static readonly basicsSignerSignAny: BasicsSignerParams;
    static readonly basicsSignerSignPerson: BasicsSignerParams;
    static readonly basicsSignerSignOrg: BasicsSignerParams;
    static readonly basicsSignerSignHead: BasicsSignerParams;
    static readonly basicsSignerSignTrusted: BasicsSignerParams;
    static readonly basicsSignerSignEmployee: BasicsSignerParams;
    static readonly basicsSignerAuthAny: BasicsSignerParams;
    static readonly basicsSignerAuthPerson: BasicsSignerParams;
    static readonly basicsSignerAuthOrg: BasicsSignerParams;
    static readonly basicsSignerAuthHead: BasicsSignerParams;
    static readonly basicsSignerAuthRight: BasicsSignerParams;
    static readonly basicsSignerAuthEmployee: BasicsSignerParams;
    static readonly basicsSignerTestAny: BasicsSignerParams;

    /** Sets logo used by NCALayer Basics module UI from various sources. */
    setLogoForBasicsSign(logo: Signable): Promise<void>;

    /** Generic Basics sign method. Overloads ensure data matches format. */
    basicsSign(
        allowedStorages: ReadonlyArray<string> | null,
        format: "cms",
        data: Signable | SignableMany,
        signingParams: BasicsCMSParams,
        signerParams: BasicsSignerParams,
        locale: string,
        forceSingleSignature?: boolean,
    ): Promise<string | ReadonlyArray<string>>;
    basicsSign(
        allowedStorages: ReadonlyArray<string> | null,
        format: "xml",
        data: string | ReadonlyArray<string>,
        signingParams: BasicsXMLParams,
        signerParams: BasicsSignerParams,
        locale: string,
        forceSingleSignature?: boolean,
    ): Promise<string | ReadonlyArray<string>>;

    /** Helper for CMS signing, supports single or multiple documents. */
    basicsSignCMS(
        allowedStorages: ReadonlyArray<string> | null,
        data: Signable | SignableMany,
        signingParams: BasicsCMSParams,
        signerParams: BasicsSignerParams,
        locale?: string,
    ): Promise<string | ReadonlyArray<string>>;

    /** Helper for XML signing, supports single or multiple XML strings. */
    basicsSignXML(
        allowedStorages: ReadonlyArray<string> | null,
        data: string | ReadonlyArray<string>,
        signingParams: BasicsXMLParams,
        signerParams: BasicsSignerParams,
        locale?: string,
    ): Promise<string | ReadonlyArray<string>>;

    /** Checks KMD HTTP API multisign availability. */
    kmdMultisignAvailable(): Promise<boolean>;

    /** Starts KMD HTTP API multisign operation. */
    startKmdMultisign(numberOfDocuments: number, base64: boolean, encapsulateContent: boolean): Promise<void>;

    /** Signs next document in KMD multisign flow and returns base64 signature. */
    kmdMultisignNext(data: Signable): Promise<string>;

    /** Returns active token storage types. */
    getActiveTokens(): Promise<ReadonlyArray<string>>;

    /** Returns info about one key pair (record) from given storage. */
    getKeyInfo(storageType: StorageType): Promise<Record<string, unknown>>;

    /** Creates CMS (CAdES) from data. */
    createCAdESFromBase64(
        storageType: StorageType,
        data: Signable | SignableMany,
        keyType?: "SIGNATURE" | "AUTHENTICATION" | string,
        attach?: boolean,
    ): Promise<Base64String>;

    /** Creates CMS (CAdES) from data hash. */
    createCAdESFromBase64Hash(
        storageType: StorageType,
        hash: Signable | SignableMany,
        keyType?: "SIGNATURE" | "AUTHENTICATION" | string,
    ): Promise<Base64String>;

    /** Creates deprecated CMS with integrated TSP. */
    createCMSSignatureFromBase64(
        storageType: StorageType,
        data: Signable | SignableMany,
        keyType?: "SIGNATURE" | "AUTHENTICATION" | string,
        attach?: boolean,
    ): Promise<Base64String>;

    /** Signs XML and returns signed XML document. */
    signXml(
        storageType: StorageType,
        xml: string,
        keyType?: "SIGNATURE" | "AUTHENTICATION" | string,
        tbsElementXPath?: string,
        signatureParentElementXPath?: string,
    ): Promise<string>;

    /** Signs multiple XML documents and returns array of signed XML. */
    signXmls(
        storageType: StorageType,
        xmls: ReadonlyArray<string>,
        keyType?: "SIGNATURE" | "AUTHENTICATION" | string,
        tbsElementXPath?: string,
        signatureParentElementXPath?: string,
    ): Promise<ReadonlyArray<string>>;

    /** Changes NCALayer UI locale. */
    changeLocale(localeId: string): Promise<void>;

    /** Name of file storage type ('PKCS12'). */
    static readonly fileStorageType: string;

    /** Utilities exposed by original class. */
    static arrayBufferToB64(arrayBuffer: ArrayBuffer): string;
    static normalizeDataToSign(data: Signable | SignableMany): Promise<Base64String | ReadonlyArray<Base64String>>;
}

export {};
