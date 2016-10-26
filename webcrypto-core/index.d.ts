// Type definitions for webcrypto-core
// Project: https://github.com/PeculiarVentures/webcrypto-core
// Definitions by: Stepan Miroshin <https://github.com/microshine/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace webcrypto {

    class WebCryptoError extends Error {
        code: number;
        stack: string;
        constructor(template: string, ...args: any[]);
        static NOT_SUPPORTED: string;
    }

    class AlgorithmError extends WebCryptoError {
        code: number;
        static PARAM_REQUIRED: string;
        static PARAM_WRONG_TYPE: string;
        static PARAM_WRONG_VALUE: string;
        static WRONG_ALG_NAME: string;
        static UNSUPPORTED_ALGORITHM: string;
    }

    class CryptoKeyError extends WebCryptoError {
        code: number;
        static EMPTY_KEY: string;
        static WRONG_KEY_ALG: string;
        static WRONG_KEY_TYPE: string;
        static WRONG_KEY_USAGE: string;
        static NOT_EXTRACTABLE: string;
        static WRONG_FORMAT: string;
        static UNKNOWN_FORMAT: string;
        static ALLOWED_FORMAT: string;
    }

}

declare namespace webcrypto {
    const AlgorithmNames: {
        RsaSSA: string;
        RsaPSS: string;
        RsaOAEP: string;
        AesCTR: string;
        AesCMAC: string;
        AesGCM: string;
        AesCBC: string;
        Sha1: string;
        Sha256: string;
        Sha384: string;
        Sha512: string;
        EcDSA: string;
        EcDH: string;
    };
}
declare namespace webcrypto {
    function PrepareAlgorithm(alg: AlgorithmIdentifier | string): Algorithm;
    function PrepareData(data: BufferSource, paramName: string): Uint8Array;
    class BaseCrypto {
        static checkAlgorithm(alg: Algorithm): void;
        static checkAlgorithmParams(alg: Algorithm): void;
        static checkKey(key: CryptoKey, alg?: string, type?: string | null, usage?: string | null): void;
        static checkWrappedKey(key: CryptoKey): void;
        static checkKeyUsages(keyUsages: string[]): void;
        static checkFormat(format: string, type?: string): void;
        static checkFormatImport(format: string, isBuffer: boolean, type: string): void;
        static generateKey(algorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey | CryptoKeyPair>;
        static digest(algorithm: Algorithm, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static sign(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static verify(algorithm: Algorithm, key: CryptoKey, signature: Uint8Array, data: Uint8Array): PromiseLike<boolean>;
        static encrypt(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static decrypt(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static deriveBits(algorithm: Algorithm, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
        static deriveKey(algorithm: Algorithm, baseKey: CryptoKey, derivedKeyType: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        static exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
        static importKey(format: string, keyData: JsonWebKey | BufferSource, algorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        static wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: Algorithm): PromiseLike<ArrayBuffer>;
        static unwrapKey(format: string, wrappedKey: Uint8Array, unwrappingKey: CryptoKey, unwrapAlgorithm: Algorithm, unwrappedKeyAlgorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
}
declare namespace webcrypto {
    class Base64Url {
        protected static buffer2string(buffer: Uint8Array): string;
        protected static string2buffer(binaryString: string): Uint8Array;
        static encode(value: Uint8Array): string;
        static decode(base64url: string): Uint8Array;
    }
}
declare namespace webcrypto.sha {
    const ShaAlgorithms: string;
    class Sha extends BaseCrypto {
        static checkAlgorithm(alg: Algorithm): void;
        static digest(algorithm: Algorithm, data: Uint8Array): PromiseLike<ArrayBuffer>;
    }
}
declare namespace webcrypto.rsa {
    class RsaKeyGenParamsError extends AlgorithmError {
        code: number;
    }
    class RsaHashedImportParamsError extends AlgorithmError {
        code: number;
    }
    class Rsa extends BaseCrypto {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkAlgorithm(alg: Algorithm): void;
        static checkImportAlgorithm(alg: RsaHashedImportParams): void;
        static checkKeyGenParams(alg: RsaHashedKeyGenParams): void;
        static checkKeyGenUsages(keyUsages: string[]): void;
        static generateKey(algorithm: RsaHashedKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey | CryptoKeyPair>;
        static exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
        static importKey(format: string, keyData: JsonWebKey | BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
    class RsaSSA extends Rsa {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static sign(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static verify(algorithm: Algorithm, key: CryptoKey, signature: Uint8Array, data: Uint8Array): PromiseLike<boolean>;
    }
    class RsaPSSParamsError extends AlgorithmError {
        code: number;
    }
    class RsaPSS extends RsaSSA {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkRsaPssParams(alg: RsaPssParams): RsaPSSParamsError | undefined;
    }
    class RsaOAEPParamsError extends AlgorithmError {
        code: number;
    }
    class RsaOAEP extends Rsa {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkAlgorithmParams(alg: RsaOaepParams): RsaOAEPParamsError | undefined;
        static encrypt(algorithm: RsaOaepParams, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static decrypt(algorithm: RsaOaepParams, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: RsaOaepParams): PromiseLike<ArrayBuffer>;
        static unwrapKey(format: string, wrappedKey: Uint8Array, unwrappingKey: CryptoKey, unwrapAlgorithm: RsaOaepParams, unwrappedKeyAlgorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
}
declare namespace webcrypto.aes {
    class Aes extends BaseCrypto {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkAlgorithm(alg: Algorithm): void;
        static checkKeyGenParams(alg: AesKeyGenParams): void;
        static checkKeyGenUsages(keyUsages: string[]): void;
        static generateKey(algorithm: AesKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey | CryptoKeyPair>;
        static exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
        static importKey(format: string, keyData: JsonWebKey | Uint8Array, algorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
    class AesAlgorithmError extends AlgorithmError {
        code: number;
    }
    class AesEncrypt extends Aes {
        protected static KEY_USAGES: string[];
        static encrypt(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static decrypt(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: Algorithm): PromiseLike<ArrayBuffer>;
        static unwrapKey(format: string, wrappedKey: Uint8Array, unwrappingKey: CryptoKey, unwrapAlgorithm: Algorithm, unwrappedKeyAlgorithm: Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
    class AesCBC extends AesEncrypt {
        protected static ALG_NAME: string;
        static checkAlgorithmParams(alg: AesCbcParams): void;
    }
    class AesCTR extends AesEncrypt {
        protected static ALG_NAME: string;
        static checkAlgorithmParams(alg: AesCtrParams): void;
    }
    class AesGCM extends AesEncrypt {
        protected static ALG_NAME: string;
        static checkAlgorithmParams(alg: AesGcmParams): void;
    }
}
declare namespace webcrypto.ec {
    class EcKeyGenParamsError extends AlgorithmError {
        code: number;
    }
    class Ec extends BaseCrypto {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkAlgorithm(alg: Algorithm): void;
        static checkKeyGenParams(alg: EcKeyGenParams): void;
        static checkKeyGenUsages(keyUsages: string[]): void;
        static generateKey(algorithm: EcKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey | CryptoKeyPair>;
        static exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
        static importKey(format: string, keyData: JsonWebKey | Uint8Array, algorithm: EcKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
    class EcAlgorithmError extends AlgorithmError {
        code: number;
    }
    class EcDSA extends Ec {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkAlgorithmParams(alg: EcdsaParams): void;
        static sign(algorithm: EcdsaParams, key: CryptoKey, data: Uint8Array): PromiseLike<ArrayBuffer>;
        static verify(algorithm: EcdsaParams, key: CryptoKey, signature: Uint8Array, data: Uint8Array): PromiseLike<boolean>;
    }
    class EcDH extends Ec {
        protected static ALG_NAME: string;
        protected static KEY_USAGES: string[];
        static checkDeriveParams(algorithm: EcdhKeyDeriveParams): void;
        static deriveBits(algorithm: EcdhKeyDeriveParams, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
        static deriveKey(algorithm: EcdhKeyDeriveParams, baseKey: CryptoKey, derivedKeyType: AesDerivedKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
}
declare type NativeCrypto = Crypto;
declare type NativeSubtleCrypto = SubtleCrypto;
declare type NativeCryptoKey = CryptoKey;
declare module "webcrypto-core" {
    export = webcrypto;
}
declare namespace webcrypto {
    class SubtleCrypto implements NativeSubtleCrypto {
        generateKey(algorithm: string, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair | CryptoKey>;
        generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair>;
        generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        digest(algorithm: AlgorithmIdentifier, data: BufferSource): PromiseLike<ArrayBuffer>;
        sign(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        verify(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: BufferSource, data: BufferSource): PromiseLike<boolean>;
        encrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        decrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: BufferSource): PromiseLike<ArrayBuffer>;
        deriveBits(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
        deriveKey(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: string | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>;
        exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): PromiseLike<ArrayBuffer>;
        exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
        importKey(format: "jwk", keyData: JsonWebKey, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: "raw" | "pkcs8" | "spki", keyData: BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        importKey(format: string, keyData: JsonWebKey | BufferSource, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
        wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier): PromiseLike<ArrayBuffer>;
        unwrapKey(format: string, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier, unwrappedKeyAlgorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    }
}