// Type definitions for webidl-conversions 5.0
// Project: https://github.com/jsdom/webidl-conversions#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

declare namespace WebIDLConversions {
	interface Options {
		context?: string;
	}

	interface IntegerOptions extends Options {
		enforceRange?: boolean;
		clamp?: boolean;
	}

	interface StringOptions extends Options {
		treatNullAsEmptyString?: boolean;
	}

	type IntegerConversion = (V: any, opts?: IntegerOptions) => number;
	type StringConversion = (V: any, opts?: StringOptions) => string;
	type NumberConversion = (V: any, opts?: Options) => number;
}

declare const WebIDLConversions: {
	any<V>(V: V, opts?: WebIDLConversions.Options): V;
	void(V?: any, opts?: WebIDLConversions.Options): void;
	boolean(V: any, opts?: WebIDLConversions.Options): boolean;

	byte(V: any, opts?: WebIDLConversions.IntegerOptions): number;
	octet(V: any, opts?: WebIDLConversions.IntegerOptions): number;

	short(V: any, opts?: WebIDLConversions.IntegerOptions): number;
	['unsigned short'](V: any, opts?: WebIDLConversions.IntegerOptions): number;

	long(V: any, opts?: WebIDLConversions.IntegerOptions): number;
	['unsigned long'](V: any, opts?: WebIDLConversions.IntegerOptions): number;

	['long long'](V: any, opts?: WebIDLConversions.IntegerOptions): number;
	['unsigned long long'](V: any, opts?: WebIDLConversions.IntegerOptions): number;

	double(V: any, opts?: WebIDLConversions.Options): number;
	['unrestricted double'](V: any, opts?: WebIDLConversions.Options): number;

	float(V: any, opts?: WebIDLConversions.Options): number;
	['unrestricted float'](V: any, opts?: WebIDLConversions.Options): number;

	DOMString(V: any, opts?: WebIDLConversions.StringOptions): string;
	ByteString(V: any, opts?: WebIDLConversions.StringOptions): string;
	USVString(V: any, opts?: WebIDLConversions.StringOptions): string;

	object<V>(V: V, opts?: WebIDLConversions.Options): V extends object ? V : V & object;
	ArrayBuffer(V: any, opts?: WebIDLConversions.Options): ArrayBuffer;
	DataView(V: any, opts?: WebIDLConversions.Options): DataView;

	Int8Array(V: any, opts?: WebIDLConversions.Options): Int8Array;
	Int16Array(V: any, opts?: WebIDLConversions.Options): Int16Array;
	Int32Array(V: any, opts?: WebIDLConversions.Options): Int32Array;

	Uint8Array(V: any, opts?: WebIDLConversions.Options): Uint8Array;
	Uint16Array(V: any, opts?: WebIDLConversions.Options): Uint16Array;
	Uint32Array(V: any, opts?: WebIDLConversions.Options): Uint32Array;
	Uint8ClampedArray(V: any, opts?: WebIDLConversions.Options): Uint8ClampedArray;

	Float32Array(V: any, opts?: WebIDLConversions.Options): Float32Array;
	Float64Array(V: any, opts?: WebIDLConversions.Options): Float64Array;

	ArrayBufferView(V: any, opts?: WebIDLConversions.Options): ArrayBufferView;
	BufferSource(V: any, opts?: WebIDLConversions.Options): ArrayBuffer | ArrayBufferView;

	DOMTimeStamp(V: any, opts?: WebIDLConversions.Options): number;
	// tslint:disable:ban-types
	Function<V>(V: V, opts?: WebIDLConversions.Options): V extends ((...args: any[]) => any) ? V : Function;
	VoidFunction<V>(
		V: V,
		opts?: WebIDLConversions.Options,
	): V extends ((...args: any[]) => any) ? (...args: Parameters<V>) => void : Function;
};

// This can't use ES6 style exports, as those can't have spaces in export names.
export = WebIDLConversions;
