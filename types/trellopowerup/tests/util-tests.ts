import * as Trello from "trellopowerup";

// Util interface
const util: Trello.PowerUp.Util = {
    colors: {
        getHexString: (name, weight) => "#fff",
        namedColorStringToHex: (name) => "#fff",
    },
    convert: {
        bytesToHexString: (bytes) => "deadbeef",
        hexStringToUint8Array: (hex) => new Uint8Array([0, 1, 2]),
    },
    crypto: {
        decryptSecret: (iv, key, encrypted) => "decrypted",
        encryptSecret: (iv, key, secret) => Promise.resolve(new ArrayBuffer(8)),
        exportAESCBCKeyToRaw: (key) => Promise.resolve(new ArrayBuffer(8)),
        generateAESCBCKey: () => Promise.resolve({} as CryptoKey),
        generateInitVector: () => new Uint8Array([1, 2, 3]),
        importAESCBCKeyFromRaw: (raw) => Promise.resolve({} as CryptoKey),
        sha256Digest: (text) => "hash",
    },
    initLocalizer: (locale, options) => Promise.resolve(),
    makeErrorEnum: () => new Error("err"),
    relativeUrl: (url) => url,
};
// $ExpectType { getHexString: getHexString; namedColorStringToHex: namedColorStringToHex; }
util.colors;
// Assignability checks for util.convert and util.crypto
const convertCheck: {
    bytesToHexString: (bytes: ArrayBuffer) => string;
    hexStringToUint8Array: (hexString: string) => Uint8Array;
} = util.convert;
const cryptoCheck: {
    decryptSecret: (initVector: BufferSource, key: CryptoKey, encryptedSecret: string) => string;
    encryptSecret: (initVector: BufferSource, key: CryptoKey, secret: string) => Promise<ArrayBuffer>;
    exportAESCBCKeyToRaw: (key: CryptoKey) => Promise<ArrayBuffer | JsonWebKey>;
    generateAESCBCKey: () => Promise<CryptoKeyPair | CryptoKey>;
    generateInitVector: () => Uint8Array;
    importAESCBCKeyFromRaw: (rawHexString: string) => Promise<CryptoKey>;
    sha256Digest: (text: string) => null | string;
} = util.crypto;
// $ExpectType (locale: string, options: LocalizerOptions) => Promise<void>
util.initLocalizer;
// $ExpectType () => Error
util.makeErrorEnum;
// $ExpectType (url: string) => string
util.relativeUrl;

// $ExpectType `#${string}`
util.colors.getHexString("blue", 500);
// $ExpectType `#${string}`
util.colors.namedColorStringToHex("blue#500");
// $ExpectType string
util.convert.bytesToHexString(new ArrayBuffer(2));
// $ExpectType string
util.crypto.decryptSecret(new Uint8Array([1]), {} as CryptoKey, "abc");
// $ExpectType Promise<ArrayBuffer>
util.crypto.encryptSecret(new Uint8Array([1]), {} as CryptoKey, "abc");
// $ExpectType Promise<ArrayBuffer | JsonWebKey>
util.crypto.exportAESCBCKeyToRaw({} as CryptoKey);
// $ExpectType Promise<CryptoKeyPair | CryptoKey>
util.crypto.generateAESCBCKey();
// $ExpectType Promise<CryptoKey>
util.crypto.importAESCBCKeyFromRaw("deadbeef");
// $ExpectType null | string
util.crypto.sha256Digest("abc");
// $ExpectType Promise<void>
util.initLocalizer("en", {});
// $ExpectType Error
util.makeErrorEnum();
// $ExpectType string
util.relativeUrl("/foo");

// @ts-expect-error - missing colors
const invalidUtil1: Trello.PowerUp.Util = {
    convert: util.convert,
    crypto: util.crypto,
    initLocalizer: util.initLocalizer,
    makeErrorEnum: util.makeErrorEnum,
    relativeUrl: util.relativeUrl,
};
const invalidUtil2: Trello.PowerUp.Util = {
    colors: {
        getHexString: (name) => "#fff",
        namedColorStringToHex: (name) => "#fff",
    },
    convert: util.convert,
    crypto: util.crypto,
    initLocalizer: util.initLocalizer,
    makeErrorEnum: util.makeErrorEnum,
    relativeUrl: util.relativeUrl,
};
const invalidUtil3: Trello.PowerUp.Util = {
    colors: util.colors,
    convert: {
        // @ts-expect-error - convert.bytesToHexString wrong return type
        bytesToHexString: (bytes) => 123,
        hexStringToUint8Array: (hex) => new Uint8Array([0, 1, 2]),
    },
    crypto: util.crypto,
    initLocalizer: util.initLocalizer,
    makeErrorEnum: util.makeErrorEnum,
    relativeUrl: util.relativeUrl,
};
