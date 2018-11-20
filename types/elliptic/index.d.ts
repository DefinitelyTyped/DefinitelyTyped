// Type definitions for elliptic 6.4
// Project: https://github.com/indutny/elliptic
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import BN = require('bn.js');

// incomplete typings
export const utils: any;
export const rand: any;
export const eddsa: any;

export type BNInput = string | BN | number | Buffer | number[];

export const version: number;

export namespace curve {
	class BaseCurve {
		constructor(type: string, conf: BaseCurve.BaseCurveOptions)
		p: BN;
		type: string;
		red: any; // ?
		zero: any; // ?
		one: any; // ?
		two: any; // ?
		n: BN | undefined | null;
		g: any; // ?
		redN: any; // ?
		decodePoint(bytes: any, enc: string): any; // ?
	}

	namespace BaseCurve {
		class BasePoint {
			constructor(curve: any, type: string);
			curve: any;
			type: string;
			precomputed: PrecomputedValues | null;
			encode(enc: string, compact: boolean): BN;
			encodeCompressed(enc: string): BN;
			validate(): boolean;
			precompute(power: number): BasePoint;
			dblp(k: any): any; // ?
		}

		interface BaseCurveOptions {
			p: number | string | number[] | Buffer | BN;
			prime?: BN | string;
			n?: number | BN | Buffer;
			g?: any; // ?
			gRed?: any; // ?
		}

		interface PrecomputedValues {
			doubles: any; // ?
			naf: any; // ?
			beta: any; // ?
		}
	}
}

export namespace curves {
	class PresetCurve {
		constructor(options: PresetCurve.Options)
		type: string;
		g: any; // ?
		n: BN | undefined | null;
		hash: any; // ?
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
	constructor(options: string | curves.PresetCurve)
	curve: any;
	n: BN | undefined | null;
	nh: any;
	g: any;
	hash: any;

	keyPair(options: ec.KeyPairOptions): ec.KeyPair;
	keyFromPrivate(priv: Buffer | ec.KeyPair, enc?: string): ec.KeyPair;
	keyFromPublic(pub: Buffer | ec.KeyPair, enc?: string): ec.KeyPair;
	genKeyPair(options?: ec.GenKeyPairOptions): ec.KeyPair;
	sign(msg: BNInput, key: Buffer | ec.KeyPair, enc: string, options?: ec.SignOptions): ec.Signature;
	sign(msg: BNInput, key: Buffer | ec.KeyPair, options?: ec.SignOptions): ec.Signature;
	verify(msg: BNInput, signature: ec.Signature | ec.SignatureOptions, key: Buffer | ec.KeyPair, enc?: string): boolean;
	recoverPubKey(msg: BNInput, signature: ec.Signature | ec.SignatureOptions, j: number, enc?: string): any;
	getKeyRecoveryParam(e: Error | undefined, signature: ec.Signature | ec.SignatureOptions, Q: BN, enc?: string): number;
}

export namespace ec {
	interface GenKeyPairOptions {
		pers: any;
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
		static fromPublic(ec: ec, pub: Buffer | KeyPair, enc?: string): KeyPair;
		static fromPrivate(ec: ec, priv: Buffer | KeyPair, enc?: string): KeyPair;
		constructor(ec: ec, options: KeyPairOptions)
		ec: ec;
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
		constructor(options: SignatureOptions | Signature, enc?: string)
		r: BN;
		s: BN;
		recoveryParam: number | null;
		toDER(enc?: string | null): any; // ?
	}

	interface SignatureOptions {
		r: number;
		s: number;
		recoveryParam?: number;
	}

	interface KeyPairOptions {
		priv?: Buffer;
		privEnc?: string;
		pub?: Buffer;
		pubEnc?: string;
	}
}
