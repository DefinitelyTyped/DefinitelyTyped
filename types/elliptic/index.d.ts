// Type definitions for elliptic 6.4
// Project: https://github.com/indutny/elliptic
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
//                 Gaylor Bosson <https://github.com/Gilthoniel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import BN = require('bn.js');

// incomplete typings
export const utils: any;
export const rand: any;

export type BNInput = string | BN | number | Buffer | number[];

export const version: number;

export namespace curve {
    /**
     * @description Base class for the curves
     */
    class base {
        p: BN;
        type: string;
        red: any; // ?
        zero: BN;
        one: BN;
        two: BN;
        n: BN;
        g: base.BasePoint;
        redN: BN;

        constructor(type: string, conf: base.BaseCurveOptions)

        validate(point: base.BasePoint): boolean;
        decodePoint(bytes: Buffer | string, enc?: 'hex'): base.BasePoint;
    }

    namespace base {
        class BasePoint {
            curve: base;
            type: string;
            precomputed: PrecomputedValues | null;

            constructor(curve: base, type: string);

            encode(enc: string, compact: boolean): string | Buffer;
            encodeCompressed(enc: string): BN;
            validate(): boolean;
            precompute(power: number): BasePoint;
            dblp(k: number): BasePoint;
            inspect(): string;
            isInfinity(): boolean;
            add(p: BasePoint): BasePoint;
            mul(k: BN): BasePoint;
            dbl(): BasePoint;
            getX(): BN;
            getY(): BN;
            eq(p: BasePoint): boolean;
            neg(): BasePoint;
        }

        interface BaseCurveOptions {
            p: number | string | number[] | Buffer | BN;
            prime?: BN | string;
            n?: number | BN | Buffer;
            g?: BasePoint;
            gRed?: any; // ?
        }

        interface PrecomputedValues {
            doubles: any; // ?
            naf: any; // ?
            beta: any; // ?
        }
    }

    class edwards extends base {
        a: BN;
        c: BN;
        c2: BN;
        d: BN;
        dd: BN;

        constructor(conf: edwards.EdwardsConf);

        point(x: BNInput, y: BNInput, z?: BNInput, t?: BNInput): edwards.EdwardsPoint;
        pointFromX(x: BNInput, odd?: boolean): edwards.EdwardsPoint;
        pointFromY(y: BNInput, odd?: boolean): edwards.EdwardsPoint;
        pointFromJSON(obj: BNInput[]): edwards.EdwardsPoint;
    }

    namespace edwards {
        interface EdwardsConf extends base.BaseCurveOptions {
            a: BNInput;
            c: BNInput;
            d: BNInput;
        }

        class EdwardsPoint extends base.BasePoint {
            x: BN;
            y: BN;
            z: BN;
            t: BN;

            normalize(): EdwardsPoint;
            eqXToP(x: BN): boolean;
        }
    }

    class short extends base {
        a: BNInput;
        b: BNInput;
        g: short.ShortPoint;

        constructor(conf: short.ShortConf);

        point(x: BNInput, y: BNInput, isRed?: boolean): short.ShortPoint;
        pointFromX(x: BNInput, odd?: boolean): short.ShortPoint;
        pointFromJSON(obj: BNInput[], red: boolean): short.ShortPoint;
    }

    namespace short {
        interface ShortConf extends base.BaseCurveOptions {
            a: BNInput;
            b: BNInput;
            beta?: BNInput;
            lambda?: BNInput;
        }

        class ShortPoint extends base.BasePoint {
            x: BN;
            y: BN;
            inf: boolean;

            toJSON(): BNInput[];
        }
    }
}

export namespace curves {
    class PresetCurve {
        type: string;
        g: any; // ?
        n: BN | undefined | null;
        hash: any; // ?

        constructor(options: PresetCurve.Options)
    }

    namespace PresetCurve {
        interface Options {
            type: string;
            prime: string | null;
            p: string;
            a: string;
            b: string;
            n: string;
            hash: any;
            gRed: boolean;
            g: any; // ?
            beta?: string;
            lambda?: string;
            basis?: any; // ?
        }
    }
}

export class ec {
    curve: any;
    n: BN | undefined | null;
    nh: any;
    g: any;
    hash: any;

    constructor(options: string | curves.PresetCurve)

    keyPair(options: ec.KeyPairOptions): ec.KeyPair;
    keyFromPrivate(priv: Buffer | string | ec.KeyPair, enc?: string): ec.KeyPair;
    keyFromPublic(pub: Buffer | string | {x: string, y: string} | ec.KeyPair, enc?: string): ec.KeyPair;
    genKeyPair(options?: ec.GenKeyPairOptions): ec.KeyPair;
    sign(msg: BNInput, key: Buffer | ec.KeyPair, enc: string, options?: ec.SignOptions): ec.Signature;
    sign(msg: BNInput, key: Buffer | ec.KeyPair, options?: ec.SignOptions): ec.Signature;
    verify(msg: BNInput, signature: ec.Signature | ec.SignatureOptions, key: Buffer | ec.KeyPair, enc?: string): boolean;
    recoverPubKey(msg: BNInput, signature: ec.Signature | ec.SignatureOptions, j: number, enc?: string): any;
    getKeyRecoveryParam(e: Error | undefined, signature: ec.Signature | ec.SignatureOptions, Q: BN, enc?: string): number;
}

export namespace ec {
    interface GenKeyPairOptions {
        pers?: any;
        entropy: any;
        persEnc?: string;
        entropyEnc?: string;
    }

    interface SignOptions {
        pers: any;
        persEnc?: string;
        canonical?: boolean;
        k?: BN;
    }

    class KeyPair {
        static fromPublic(ec: ec, pub: Buffer | string | {x: string, y: string} | KeyPair, enc?: string): KeyPair;
        static fromPrivate(ec: ec, priv: Buffer | string | KeyPair, enc?: string): KeyPair;

        ec: ec;

        constructor(ec: ec, options: KeyPairOptions)

        validate(): { readonly result: boolean, readonly reason: string };
        getPublic(compact: boolean, enc?: string): any; // ?
        getPublic(enc?: string): any; // ?
        getPrivate(enc?: 'hex'): Buffer | BN | string;
        derive(pub: any): any; // ?
        sign(msg: BNInput, enc: string, options?: SignOptions): Signature;
        sign(msg: BNInput, options?: SignOptions): Signature;
        verify(msg: BNInput, signature: Signature | SignatureOptions): boolean;
        inspect(): string;
    }

    class Signature {
        r: BN;
        s: BN;
        recoveryParam: number | null;

        constructor(options: SignatureOptions | Signature, enc?: string)

        toDER(enc?: string | null): any; // ?
    }

    interface SignatureOptions {
        r: BNInput;
        s: BNInput;
        recoveryParam?: number;
    }

    interface KeyPairOptions {
        priv?: Buffer;
        privEnc?: string;
        pub?: Buffer;
        pubEnc?: string;
    }
}

export class eddsa {
    curve: curve.edwards;

    constructor(name: 'ed25519');

    sign(message: eddsa.Bytes, secret: eddsa.Bytes): eddsa.Signature;
    verify(message: eddsa.Bytes, sig: eddsa.Bytes | eddsa.Signature, pub: eddsa.Bytes | eddsa.Point | eddsa.KeyPair): boolean;
    hashInt(): BN;
    keyFromPublic(pub: eddsa.Bytes): eddsa.KeyPair;
    keyFromSecret(secret: eddsa.Bytes): eddsa.KeyPair;
    makeSignature(sig: eddsa.Signature | Buffer | string): eddsa.Signature;
    encodePoint(point: eddsa.Point): Buffer;
    decodePoint(bytes: eddsa.Bytes): eddsa.Point;
    encodeInt(num: BN): Buffer;
    decodeInt(bytes: BNInput): BN;
    isPoint(val: any): boolean;
}

export namespace eddsa {
    type Point = curve.base.BasePoint;
    type Bytes = string | Buffer;

    class Signature {
        constructor(eddsa: eddsa, sig: Signature | Bytes);

        toBytes(): Buffer;
        toHex(): string;
    }

    class KeyPair {
        constructor(eddsa: eddsa, params: KeyPairOptions);

        static fromPublic(eddsa: eddsa, pub: Bytes): KeyPair;
        static fromSecret(eddsa: eddsa, secret: Bytes): KeyPair;

        secret(): Buffer;
        sign(message: Bytes): Signature;
        verify(message: Bytes, sig: Signature | Bytes): boolean;
        getSecret(enc: 'hex'): string;
        getSecret(): Buffer;
        getPublic(enc: 'hex'): string;
        getPublic(): Buffer;
    }

    interface KeyPairOptions {
        secret: Buffer;
        pub: Buffer | Point;
    }
}
