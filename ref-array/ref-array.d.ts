// Type definitions for ref-array
// Project: https://github.com/TooTallNate/ref-array
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node-ffi/node-ffi-buffer.d.ts" />
/// <reference path="../ref/ref.d.ts" />

declare module "ref-array" {
	import ref = require('ref');

	interface ArrayType<T> extends ref.Type {
		BYTES_PER_ELEMENT: number;
		fixedLength: number;
		/** The reference to the base type. */
		type: ref.Type;

		/**
		 * Accepts a Buffer instance that should be an already-populated with data
		 * for the ArrayType. The "length" of the Array is determined by searching
		 * through the buffer's contents until an aligned NULL pointer is encountered.
		 */
		untilZeros(buffer: Buffer): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };

		new (length?: number): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
		new (data: number[], length?: number): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
		new (data: Buffer, length?: number): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
		(length?: number): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
		(data: number[], length?: number): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
		(data: Buffer, length?: number): { [i: number]: T; length: number; toArray(): T[];
			toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer; };
	}

	/**
	 * The array type meta-constructor.
	 * The returned constructor's API is highly influenced by the WebGL
	 * TypedArray API.
	 */
	var ArrayType: {
		new <T>(type: ref.Type, length?: number): ArrayType<T>;
		new <T>(type: string, length?: number): ArrayType<T>;
		<T>(type: ref.Type, length?: number): ArrayType<T>;
		<T>(type: string, length?: number): ArrayType<T>;
	};

export = ArrayType;
}
