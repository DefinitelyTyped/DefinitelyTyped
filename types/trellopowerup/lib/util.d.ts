import * as L18N from "./localizer";
import * as Theming from "./theming";

export type HexString = string;

export interface Util {
    colors: {
        getHexString: Theming.getHexString;
        namedColorStringToHex: Theming.namedColorStringToHex;
    };

    convert: {
        bytesToHexString(bytes: ArrayBuffer): HexString;
        hexStringToUint8Array(hexString: HexString): Uint8Array;
    };

    crypto: {
        decryptSecret(initVector: BufferSource, key: CryptoKey, encryptedSecret: HexString): string;
        encryptSecret(initVector: BufferSource, key: CryptoKey, secret: string): Promise<ArrayBuffer>;
        exportAESCBCKeyToRaw(key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
        generateAESCBCKey(): Promise<CryptoKeyPair | CryptoKey>;
        generateInitVector(): Uint8Array;
        importAESCBCKeyFromRaw(rawHexString: HexString): Promise<CryptoKey>;
        sha256Digest(text: string): null | string;
    };

    initLocalizer(locale: string, options: L18N.LocalizerOptions): Promise<void>;
    makeErrorEnum(): Error;
    relativeUrl(url: string): string;
}
