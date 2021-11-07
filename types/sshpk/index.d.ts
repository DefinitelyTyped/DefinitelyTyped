// Type definitions for sshpk 1.10
// Project: https://github.com/arekinath/node-sshpk
// Definitions by: Meno Abels <https://github.com/mabels>
//                 Alexander Lavallee <https://github.com/lavalleeale>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import crypto = require('crypto');
import { Stream } from 'stream';

declare class SshPK {}

declare namespace SshPK {
    class Algo {
        parts: string[];
        sizePart?: string | undefined;
        normalize?: boolean | undefined;
    }

    class algInfo {
        dsa: Algo;
        rsa: Algo;
        ecdsa: Algo;
        ed25519: Algo;
        curve25519: Algo;
    }

    class algPrivInfo {
        dsa: Algo;
        rsa: Algo;
        ecdsa: Algo;
        ed25519: Algo;
        curve25519: Algo;
    }

    class hashAlgs {
        md5: boolean;
        sha1: boolean;
        sha256: boolean;
        sha384: boolean;
        sha512: boolean;
    }

    class Curve {
        size: number;
        pkcs8oid: string;
        p: Buffer;
        a: Buffer;
        b: Buffer;
        s: Buffer;
        n: Buffer;
        G: Buffer;
    }

    class curves {
        nistp256: Curve;
        nistp384: Curve;
        nistp512: Curve;
    }

    class algs {
        info: algInfo;
        privInfo: algPrivInfo;
        hashAlgs: hashAlgs;
        curves: curves;
    }

    class Certificate {
        subjects: Identity[];
        issuer: Identity;
        subjectKey: Key;
        issuerKey: Key;
        signatures: { x509: Signature; openssh: Signature };
        serial: Buffer;
        validFrom: Date;
        validUntil: Date;
        static formats: Formats;
        constructor(opts: any);

        toBuffer(format: string, options?: any): Buffer;

        toString(format: string, options?: any): string;

        fingerprint(algo: string): Fingerprint;

        hash(algo: string): string;

        isExpired(when: Date): boolean;

        isSignedBy(issuerCert: Certificate): boolean;

        isSignedByKey(issuerKey: Key): boolean;

        signWith(key: PrivateKey): void;

        getExtensions():
            | Array<{ format: 'x509'; oid: string; critical: boolean; pathLen: number }>
            | Array<{ format: 'openssh'; name: string; critical: boolean; data: Buffer }>;
        getExtension(
            keyOrOid: string,
        ):
            | { format: 'x509'; oid: string; critical: boolean; pathLen: number }
            | { format: 'openssh'; name: string; critical: boolean; data: Buffer }
            | undefined;
        static createSelfSigned(
            subjectOrSubjects: Identity[],
            key: Key,
            options: { validFrom?: Date; validUntil?: Date; lifetime?: number; serial?: Buffer; purposes?: string[] },
        ): Certificate;

        static create(
            subjectOrSubjects: string,
            key: Key,
            issuer: string,
            issuerKey: PrivateKey,
            options: any,
        ): Certificate;

        static parse(
            data: string | Buffer,
            format: string,
            options: { validFrom?: Date; validUntil?: Date; lifetime?: number; serial?: Buffer; purposes?: string[] },
        ): Certificate;

        static isCertificate(data: string | Buffer, ver: string): boolean;
    }

    class DiffieHellman {
        constructor(key: Key);

        getPublicKey(): Key;
        getPrivateKey(): PrivateKey;
        getKey(): PrivateKey;
        setKey(key: PrivateKey): void;
        setPrivateKey(key: PrivateKey): void;

        computeSecret(otherpk: PrivateKey): Buffer;

        generateKey(): PrivateKey;
        generateKeys(): PrivateKey;
    }

    class X9ECParameters {
        G: any;
        g: any;
        n: any;
        h: any;
    }

    class ECPublic {
        constructor(params: X9ECParameters, buffer: Buffer);
    }

    class ECPrivate {
        constructor(params: X9ECParameters, buffer: Buffer);
        deriveSharedSecret(pk: Key): Buffer;
    }

    class Verifier {
        constructor(key: Key, hashAlgo: string);

        update(chunk: string | Buffer): void;

        verify(signature: string): boolean;
    }

    class Signer extends Stream.Writable {
        private constructor();

        update(data: crypto.BinaryLike): this;
        update(data: string, input_encoding: crypto.Encoding): this;
        sign(private_key: crypto.KeyLike | crypto.SignKeyObjectInput | crypto.SignPrivateKeyInput): Buffer;
        sign(
            private_key: crypto.KeyLike | crypto.SignKeyObjectInput | crypto.SignPrivateKeyInput,
            output_format: crypto.BinaryToTextEncoding,
        ): string;
        sign(): Signature;
    }
    class FingerprintFormatError implements Error {
        name: string;
        message: string;
        constructor(fp: Fingerprint, format: string);
    }

    class InvalidAlgorithmError implements Error {
        name: string;
        message: string;
        constructor(algo: string);
    }

    class KeyParseError implements Error {
        name: string;
        message: string;
        constructor(name: string, format: string, innerErr: any);
    }

    class SignatureParseError implements Error {
        name: string;
        message: string;
        constructor(type: string, format: string, innerErr: any);
    }

    class CertificateParseError implements Error {
        name: string;
        message: string;
        constructor(name: string, format: string, innerErr: any);
    }

    class KeyEncryptedError implements Error {
        name: string;
        message: string;
        constructor(name: string, format: string);
    }

    class Fingerprint {
        algorithm: string;
        hash: string;
        type: string;
        constructor(opts: any);

        toString(format?: string): string;
        matches(other: Fingerprint): boolean;
        addColons(fp: string): string;
        base64Strip(fp: string): string;
        sshBase64Format(alg: string, h: string): string;
        isFingerprint(obj: string | Buffer, ver: string): boolean;

        static parse(fp: string, options: any): Fingerprint;
    }

    class Identity {
        cn: string;
        components: string[];
        componentLookup: any;
        type: string;
        hostname: string;
        uid: string;
        email: string;
        constructor(opts: any);

        toString(): string;

        toAsn1(der: Buffer | string, tag: string): void;

        equals(other: Identity): boolean;

        static forHost(hostname: string): Identity;
        static forUser(uid: string): Identity;
        static forEmail(email: string): Identity;
        static parseDN(dn: string): Identity;
        static parseAsn1(dn: Buffer | string, top: string): Identity;
        static isIdentity(dn: Buffer | string, ver: string): boolean;
    }

    class Format {
        read: (buf: Buffer, options?: any) => Buffer;
        write: (key: Key, options?: any) => Buffer;
    }

    class Formats {
        auto: Format;
        pem: Format;
        pkcs1: Format;
        pkcs8: Format;
        rfc4253: Format;
        ssh: Format;
        'ssh-private': Format;
        openssh: Format;
    }

    class Verify {
        verify(data: string, fmt: string): boolean;
    }

    class Key {
        type: string;
        parts: string;
        part: string;
        comment?: string | undefined;
        source?: string | undefined;
        curve?: string | undefined;
        size: number;
        constructor(opts: any);

        static formats: Formats;

        toBuffer(format: string, options?: any): Buffer;
        toString(format: string, options?: any): string;
        hash(algo: string): Buffer;
        fingerprint(algo: string): Fingerprint;
        defaultHashAlgorithm(): string;
        createVerify(algo: string): Verify;
        createDiffieHellman(): DiffieHellman;
        createDH(): DiffieHellman;

        static parse(data: string | Buffer, format: string, options: any): Key;

        static isKey(obj: string | Buffer, ver: string): boolean;
    }

    class PrivateKey {
        comment?: string | undefined;
        constructor(opts: any);

        static formats: Formats;

        toBuffer(format: string, options: any): Buffer;
        hash(algo: string): Buffer;
        toPublic(): Key;
        derive(newType: string, newSize: number): PrivateKey;
        createVerify(hashAlgo: string): Key;
        createSign(hashAlgo: string): Signer;

        static parse(data: string | Buffer, format: string, options: any): PrivateKey;
        static isPrivateKey(data: string | Buffer, ver: string): boolean;
    }

    class Signature {
        extras?: Array<{ exts?: { oid: string; critical: boolean; pathLen: number } }>;
        exts?: Array<{ name: string; critical: boolean; data: Buffer }>;
        constructor(opts: any);
        toBuffer(format: string): Buffer;
        toString(format: string): string;

        static parse(data: string | Buffer, type: string, format: string): Signature;

        static isSignature(obj: string | Buffer, ver: string): boolean;
    }

    class SSHPart {
        data: Buffer;
    }

    class SSHBuffer {
        constructor(opts: any);
        toBuffer(): Buffer;
        atEnd(): boolean;
        remainder(): Buffer;
        skip(n: number): void;
        expand(): void;
        readPart(): SSHPart;
        readBuffer(): Buffer;
        readString(): string;
        readInt(): number;
        readInt64(): Buffer;
        readChar(): string;
        writeBuffer(buf: Buffer): void;
        writeString(buf: string): void;
        writeCString(buf: string): void;
        writeInt(buf: number): void;
        writeInt64(buf: Buffer): void;
        writeChar(buf: string): void;
        writePart(buf: SSHPart): void;
        write(buf: Buffer): void;
    }

    function bufferSplit(buf: Buffer, chr: string): Buffer[];
    function addRSAMissing(key: PrivateKey): void;
    function calculateDSAPublic(g: Buffer, p: Buffer, x: Buffer): Buffer;
    function mpNormalize(buf: Buffer): Buffer;
    function ecNormalize(buf: Buffer, addZero: boolean): Buffer;
    function countZeros(buf: Buffer): number;
    function assertCompatible(obj: any, klass: any, needVer: string, name: string): void;
    function isCompatible(obj: any, klass: any, needVer: string): boolean;
    class OpenSllKeyDeriv {
        key: Buffer;
        iv: Buffer;
    }
    function opensslKeyDeriv(cipher: string, salt: string, passphrase: string, count: number): OpenSllKeyDeriv;

    class OpensshCipherInfo {
        keySize: number;
        blockSize: number;
        opensslName: string;
    }
    function opensshCipherInfo(cipber: string): OpensshCipherInfo;

    function parseKey(data: string | Buffer, format: string, options?: any): Key;
    function parseFingerprint(fp: string, options?: any): Fingerprint;
    function parseSignature(data: string | Buffer, type: string, format: string): Signature;
    function parsePrivateKey(data: string | Buffer, format: string, options?: any): PrivateKey;

    function parseCertificate(data: string | Buffer, format: string, options?: any): Certificate;
    function createSelfSignedCertificate(
        subjectOrSubjects: Identity | Identity[],
        key: Key,
        options?: { validFrom?: Date; validUntil?: Date; lifetime?: number; serial?: Buffer; purposes?: string[] },
    ): Certificate;
    function createCertificate(
        subjectOrSubjects: Identity | Identity[],
        key: Key,
        issuer: Identity,
        issuerKey: PrivateKey,
        options?: { validFrom?: Date; validUntil?: Date; lifetime?: number; serial?: Buffer; purposes?: string[] },
    ): Certificate;

    function identityFromDN(dn: string): Identity;
    function identityForHost(hostname: string): Identity;
    function identityForUser(uid: string): Identity;
    function identityForEmail(email: string): Identity;
}

export = SshPK;
