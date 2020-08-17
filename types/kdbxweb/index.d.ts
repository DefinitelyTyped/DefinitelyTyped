// Type definitions for kdbxweb 1.2
// Project: https://github.com/keeweb/kdbxweb#readme
// Definitions by: Roang-zero1 <https://github.com/Roang-zero1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type KdbxObject = Entry | Group;
export type StringProtected = ProtectedValue | string;

export interface Settings {
    binaries?: boolean;
    customIcons?: boolean;
    historyRules?: boolean;
}

export interface ObjectMap {
    objects: KdbxObject[];
    remote: KdbxObject[];
    deleted: KdbxObject[];
}

export interface BinaryInforamtion {
    ref: string;
    value: ProtectedValue | ArrayBuffer;
}

export interface editingState {
    added: [Date];
    deleted: [Date];
}

export interface editingStateDict {
    meta: editingState;
    [uuid: string]: editingState;
}

export class Credentials {
    constructor(
        password: ProtectedValue | null,
        keyFile: string | ArrayBuffer | Uint8Array | null
    );

    getHash(): Promise<ArrayBuffer>;

    setKeyFile(keyFile: ArrayBuffer | Uint8Array | null): Promise<void>;

    setPassword(password: ProtectedValue | null): Promise<void>;

    static createKeyFileWithHash(hash: string): Uint8Array;

    static createRandomKeyFile(): Uint8Array;
}

export class Int64 {
    constructor(lo: number, hi: number);

    lo: number;
    hi: number;

    valueOf(): number;

    static from(value: number): Int64;
}

export class Kdbx {
    constructor();

    header: Header;
    credentials: Credentials;
    meta: Meta;
    xml: Document;
    binaries: Binaries;
    groups: Group[];
    deletedObjects: KdbxObject[];

    addDeletedObject(uuid: KdbxUuid, dt: Date): void;

    cleanup(settings: Settings): void;

    createBinary(
        value: ProtectedValue | ArrayBuffer
    ): Promise<ProtectedValue | ArrayBuffer>;

    createDefaultGroup(): void;

    createEntry(group: Group): Entry;

    createGroup(group: Group, name: StringProtected): Group;

    createRecycleBin(): void;

    getDefaultGroup(): Group;

    getGroup(uuid: KdbxUuid | string, parentGroup?: Group): Group | undefined;

    getLocalEditState(): editingStateDict;

    merge(remote: Kdbx): void;

    move(object: KdbxObject, toGroup: Group, atIndex?: number): void;

    remove(object: KdbxObject): void;

    removeLocalEditState(): void;

    save(): Promise<ArrayBuffer>;

    saveXml(): Promise<string>;

    setLocalEditState(editingState: editingStateDict): void;

    upgrade(): void;

    static create(credentials: Credentials, name: string): Kdbx;

    static load(data: ArrayBuffer, credentials: Credentials): Promise<Kdbx>;

    static loadXml(data: string, credentials: Credentials): Promise<Kdbx>;
}

export type KdbxErrorCode = typeof Consts.ErrorCodes[keyof typeof Consts.ErrorCodes];

export class KdbxError {
    constructor(code: KdbxErrorCode, message: string);

    name: "KdbxError";
    code: KdbxErrorCode;
    message: string;

    // Native method; no parameter or return type inference available
    toString(): string;
}

export class KdbxUuid {
    constructor(ab: string | ArrayBuffer);

    id: string | undefined;
    empty: boolean;

    equals(other: KdbxUuid): boolean;

    toBytes(): Uint8Array | undefined;

    toString(): string;

    valueOf(): string | undefined;

    static random(): KdbxUuid;
}

export class ProtectedValue {
    constructor(value: ArrayBuffer, salt: ArrayBuffer);

    clone(): ProtectedValue;

    getBinary(): Uint8Array;

    getHash(): Promise<ArrayBuffer>;

    getText(): string;

    includes(str: string): boolean;

    setSalt(newSalt: ArrayBuffer): void;

    toString(): string;

    static fromBinary(binary: ArrayBuffer): ProtectedValue;

    static fromString(str: string): ProtectedValue;
}

export class VarDictionary {
    constructor();

    get(key: string): object;

    keys(): string[];

    remove(key: string): void;

    set(key: string, type: number, value: object): void;

    write(stm: BinaryStream): void;

    static ValueType: {
        Bool: number;
        Bytes: number;
        Int32: number;
        Int64: number;
        String: number;
        UInt32: number;
        UInt64: number;
    };

    static read(stm: BinaryStream): VarDictionary;
}

export const Consts: {
    AutoTypeObfuscationOptions: {
        None: number;
        UseClipboard: number;
    };
    CipherId: {
        Aes: string;
        ChaCha20: string;
    };
    CompressionAlgorithm: {
        GZip: number;
        None: number;
    };
    CrsAlgorithm: {
        ArcFourVariant: number;
        ChaCha20: number;
        Null: number;
        Salsa20: number;
    };
    Defaults: {
        HistoryMaxItems: number;
        HistoryMaxSize: number;
        KeyEncryptionRounds: number;
        MntncHistoryDays: number;
        RecycleBinName: string;
    };
    ErrorCodes: {
        NotImplemented: 'NotImplemented';
        InvalidArg: 'InvalidArg';
        BadSignature: 'BadSignature';
        InvalidVersion: 'InvalidVersion';
        Unsupported: 'Unsupported';
        FileCorrupt: 'FileCorrupt';
        InvalidKey: 'InvalidKey';
        MergeError: 'MergeError';
    };
    Icons: {
        Apple: number;
        Archive: number;
        BlackBerry: number;
        Book: number;
        CDRom: number;
        Certificate: number;
        Checked: number;
        ClipboardReady: number;
        Clock: number;
        Configuration: number;
        Console: number;
        Digicam: number;
        Disk: number;
        Drive: number;
        DriveWindows: number;
        EMail: number;
        EMailBox: number;
        EMailSearch: number;
        Energy: number;
        EnergyCareful: number;
        Expired: number;
        Feather: number;
        Folder: number;
        FolderOpen: number;
        FolderPackage: number;
        Home: number;
        Homebanking: number;
        IRCommunication: number;
        Identity: number;
        Info: number;
        Key: number;
        List: number;
        LockOpen: number;
        MarkedDirectory: number;
        Memory: number;
        Money: number;
        Monitor: number;
        MultiKeys: number;
        NetworkServer: number;
        Note: number;
        Notepad: number;
        Package: number;
        PaperFlag: number;
        PaperLocked: number;
        PaperNew: number;
        PaperQ: number;
        PaperReady: number;
        Parts: number;
        Pen: number;
        Printer: number;
        ProgramIcons: number;
        Run: number;
        Scanner: number;
        Screen: number;
        Settings: number;
        Star: number;
        TerminalEncrypted: number;
        Thumbnail: number;
        Tool: number;
        TrashBin: number;
        Tux: number;
        UserCommunication: number;
        UserKey: number;
        Warning: number;
        Wiki: number;
        World: number;
        WorldComputer: number;
        WorldSocket: number;
        WorldStar: number;
    };
    KdfId: {
        Aes: string;
        Argon2: string;
    };
    Signatures: {
        FileMagic: number;
        Sig2Kdb: number;
        Sig2Kdbx: number;
    };
};

export namespace ByteUtils {
    function arrayBufferEquals(ab1: ArrayBuffer, ab2: ArrayBuffer): boolean;

    function arrayToBuffer(arr: Uint8Array | ArrayBuffer): ArrayBuffer;

    function base64ToBytes(str: string): Uint8Array;

    function bytesToBase64(arr: Uint8Array | ArrayBuffer): string;

    function bytesToHex(arr: Uint8Array | ArrayBuffer): string;

    function bytesToString(arr: Uint8Array | ArrayBuffer): string;

    function hexToBytes(hex: string): Uint8Array;

    function stringToBytes(str: string): Uint8Array;

    function zeroBuffer(buffer: Uint8Array | ArrayBuffer): void;
}

export namespace CryptoEngine {
    const subtle: SubtleCrypto | null;
    const webCrypto: Crypto | null;
    const NodeCrypto: Crypto | null;

    function argon2(
        password: ArrayBuffer,
        salt: ArrayBuffer,
        memory: number,
        iterations: number,
        length: number,
        parallelism: number,
        type: number,
        version: number
    ): Promise<ArrayBuffer>;

    function chacha20(
        data: ArrayBuffer,
        key: ArrayBuffer,
        iv: ArrayBuffer
    ): Promise<ArrayBuffer>;

    function configure(
        newSubtle: SubtleCrypto | null,
        newWebCrypto: Crypto | null,
        newNodeCrypto: Crypto | null
    ): void;

    function createAesCbc(): any;

    function hmacSha256(
        key: ArrayBuffer,
        data: ArrayBuffer
    ): Promise<ArrayBuffer>;

    function random(len: number): Uint8Array;

    function sha256(data: ArrayBuffer): Promise<ArrayBuffer>;

    function sha512(data: ArrayBuffer): Promise<ArrayBuffer>;
}

export namespace Random {
    function getBytes(len: number): Uint8Array;
}

export class BinaryStream {
    constructor(arrayBuffer: ArrayBuffer);

    getByteLength(): number;

    getFloat32(littleEdian?: boolean): number;

    getFloat64(littleEdian?: boolean): number;

    getInt16(littleEdian?: boolean): number;

    getInt32(littleEdian?: boolean): number;

    getInt8(littleEdian?: boolean): number;

    getPos(): number;

    getUint16(littleEdian?: boolean): number;

    getUint32(littleEdian?: boolean): number;

    getUint64(littleEdian?: boolean): number;

    getUint8(littleEdian?: boolean): number;

    getWrittenBytes(): ArrayBuffer;

    readBytes(size: number): ArrayBuffer;

    readBytesNoAdvance(startPos: number, endPos: number): ArrayBuffer;

    readBytesToEnd(): ArrayBuffer;

    setFloat32(value: number, littleEdian?: boolean): void;

    setFloat64(value: number, littleEdian?: boolean): void;

    setInt16(value: number, littleEdian?: boolean): void;

    setInt32(value: number, littleEdian?: boolean): void;

    setInt8(value: number, littleEdian?: boolean): void;

    setUint16(value: number, littleEdian?: boolean): void;

    setUint32(value: number, littleEdian?: boolean): void;

    setUint64(value: number, littleEdian?: boolean): void;

    setUint8(value: number, littleEdian?: boolean): void;

    writeBytes(bytes: ArrayBuffer | Uint8Array): void;
}

export class Binaries {
    constructor();

    hash(): Promise<any[]>;
    getBinaryHash(
        binary: ProtectedValue | ArrayBuffer | Uint8Array
    ): Promise<string>;
    assignIds(): void;
    add(value: ProtectedValue | ArrayBuffer): Promise<BinaryInforamtion>;
}

export class Context {
    constructor(opts: Kdbx);

    setXmlDate(node: Node, dt: Date): void;
}

export class Group {
    constructor();

    uuid: KdbxUuid;
    name: StringProtected;
    notes: StringProtected;
    icon: number;
    customIcon: KdbxUuid;
    times: Times;
    expanded: boolean;
    defaultAutoTypeSeq: StringProtected;
    enableAutoType: boolean;
    enableSearching: boolean;
    lastTopVisibleEntry: KdbxUuid;
    groups: Group[];
    entries: Entry[];
    parentGroup: Group;
    customData: {};

    static create(name: StringProtected, parentGroup: Group): Group;
    static read(xmlNode: Node, ctx: Context, parentGroup: Group): Group;

    write(parentNode: Node, ctx: Context): void;
    forEach(
        callback: (
            thisArg: (value: any) => void,
            entry: Entry | undefined
        ) => void,
        thisArg: (value: any) => void
    ): void;
    merge(objectMap: ObjectMap): void;
    copyFrom(group: Group): void;
}

export class Entry {
    constructor();

    uuid: KdbxUuid;
    icon: number;
    customIcon: KdbxUuid;
    fgColor: StringProtected;
    bgColor: StringProtected;
    overrideUrl: StringProtected;
    tags: string[];
    times: Times;
    fields: { [key: string]: StringProtected };
    binaries: {};
    autoType: {
        enabled: boolean;
        obfuscation: number;
        defaultSequence: string;
        items: {
            windows: string;
            keystrokeSequence: string;
        };
    };
    history: Entry[];
    parentGroup: Group;
    customData: {};

    static create(meta: Meta, parentGroup: Group): Entry;
    static read(xmlNode: Node, ctx: Context, parentGroup: Group): Entry;

    write(parentNode: Node, ctx: Context): void;
    pushHistory(): void;
    removeHistory(index: number, count: number): void;
    copyFrom(entry: Entry): void;
    merge(objectMap: ObjectMap): void;
}

export class Meta {
    constructor();

    static create(): Meta;
    static read(xmlNode: Node, ctx: Context): Meta;

    write(parentNode: Node, ctx: Context): void;
    merge(remote: Meta, objectMap: ObjectMap): void;
}

export class Header {
    constructor();

    compression: number;
    crsAlgorithm: number;
    dataCipherUuid: KdbxUuid;
    encryptionIV: any;
    endPos: number;
    kdfParameters: VarDictionary;
    keyEncryptionRounds: number;
    masterSeed: Uint8Array;
    protectedStreamKey: any;
    publicCustomData: any;
    streamStartBytes: any;
    transformSeed: any;
    versionMajor: number;
    versionMinor: number;

    static read(stm: BinaryStream, ctx: Context): Header;
    static create(): Header;

    generateSalts(): void;
    readInnerHeader(stm: BinaryStream, ctx: Context): void;
    upgrade(): void;
    write(stm: BinaryStream): void;
    writeInnerHeader(stm: BinaryStream, ctx: Context): void;
}

export class Times {
    constructor();

    creationTime: Date;
    lastModTime: Date;
    lastAccessTime: Date;
    expiryTime: Date;
    expires: boolean;
    usageCount: number;
    locationChanged: Date;

    static create(): Times;
    static read(xmlNode: Node): Times;

    clone(): Times;
    update(): void;
    write(parentNode: Node, ctx: Context): void;
}
