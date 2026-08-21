import Hex = require("crypto-js/enc-hex");
import Base64 = require("crypto-js/enc-base64");

export = fernet;

declare const fernet: fernet;

type fernet = fernet.FernetConstructor & fernet.Fernet;

declare namespace fernet {
    type FernetConstructor = new(options?: Options) => Fernet;
    interface Fernet {
        Hex: typeof Hex;
        Base64: typeof Base64;
        Secret: SecretConstructor;
        Token: TokenConstructor;

        ttl: number;
        versionHex: string;
        ivHex: string;
        iv: CryptoJS.lib.WordArray;
        secret?: Secret | undefined;

        /**
         * Parse a hex string to an int.
         */
        parseHex(hexString: string): number;
        /**
         * Convert base64 string to hex string.
         */
        decode64toHex(str: string): string;
        /**
         * Turn `bits` into number of chars in a hex string.
         */
        hexBits(bits: number): number;
        /**
         * Makes a base64 string a url-safe base64 string.
         */
        urlsafe(str: string): string;
        /**
         * Sets the secret from base64 encoded value.
         */
        setSecret(secret64: string): Secret;
        /**
         * Convert array to hex string.
         */
        ArrayToHex(array: Array<string | number>): string;
        setIV(ivArray?: Array<string | number>): string;
        encryptMessage(
            message: string | CryptoJS.lib.WordArray,
            encryptionKey: string | CryptoJS.lib.WordArray,
            iv: CryptoJS.lib.WordArray,
        ): CryptoJS.lib.WordArray;
        decryptMessage(
            cipherText: CryptoJS.lib.WordArray,
            encryptionKey: string | CryptoJS.lib.WordArray,
            iv: CryptoJS.lib.WordArray,
        ): string;
        /**
         * Convert provided time or current time into a WordArray.
         */
        timeBytes(time?: number | Date): CryptoJS.lib.WordArray;
        createToken(
            signingKey: string | CryptoJS.lib.WordArray,
            time: CryptoJS.lib.WordArray,
            iv: CryptoJS.lib.WordArray,
            cipherText: CryptoJS.lib.WordArray,
        ): string;
        createHmac(
            signingKey: string | CryptoJS.lib.WordArray,
            time: CryptoJS.lib.WordArray,
            iv: CryptoJS.lib.WordArray,
            cipherText: CryptoJS.lib.WordArray,
        ): CryptoJS.lib.WordArray;
    }

    interface Options {
        ttl?: number;
        iv?: Array<string | number>;
        secret?: string;
    }

    type SecretConstructor = new(secret64: string) => Secret;
    interface Secret {
        readonly signingKeyHex: string;
        readonly signingKey: CryptoJS.lib.WordArray;
        readonly encryptionKeyHex: string;
        readonly encryptionKey: CryptoJS.lib.WordArray;
    }

    type TokenConstructor = new(options?: TokenOptions) => Token;
    interface Token {
        secret?: Secret | undefined;
        encoded?: boolean | undefined;
        message?: string | undefined;
        token?: string | undefined;
        time?: Date | CryptoJS.lib.WordArray | undefined;
        ivHex?: string | undefined;
        iv?: CryptoJS.lib.WordArray | undefined;
        optsIV?: Array<string | number> | undefined;
        cipherTextHex?: string | undefined;
        cipherText?: CryptoJS.lib.WordArray | undefined;
        hmacHex?: string | undefined;
        version: number;
        ttl: number;
        maxClockSkew: number;

        setIV: Fernet["setIV"];
        setTime(time?: string | number | Date): CryptoJS.lib.WordArray;
        encode(message?: string): string;
        decode(token?: string): string;
    }

    interface TokenOptions {
        secret?: Secret | undefined;
        ttl?: number | undefined;
        message?: string | undefined;
        cipherText?: CryptoJS.lib.WordArray | undefined;
        token?: string | undefined;
        version?: number | undefined;
        iv?: Array<string | number> | undefined;
        time?: string | number | Date | undefined;
    }
}
