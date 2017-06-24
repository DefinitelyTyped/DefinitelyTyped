// Type definitions for pako 1.0.4
// Project: https://github.com/nodeca/pako
// Definitions by: Denis Cappellin <https://github.com/cappellin>, Caleb Eggensperger <https://github.com/calebegg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Pako;
export as namespace pako;

declare namespace Pako {
	export interface DeflateOptions {
		level?: number;
		windowBits?: number;
		memLevel?: number;
		strategy?: number;
		dictionary?: any;
		raw?: boolean;
		to?: 'string';
	}

	export interface InflateOptions {
		windowBits?: number;
		raw?: boolean;
		to?: 'string';
	}

	export type Data = Uint8Array | Array<number> | string;

	/**
	 * Compress data with deflate algorithm and options.
	 */
	export function deflate( data: Data, options: DeflateOptions & {to: 'string'} ): string;
	export function deflate( data: Data, options?: DeflateOptions ): Uint8Array;

	/**
	 * The same as deflate, but creates raw data, without wrapper (header and adler32 crc).
	 */
	export function deflateRaw( data: Data, options: DeflateOptions & {to: 'string'} ): string;
	export function deflateRaw( data: Data, options?: DeflateOptions ): Uint8Array;

	/**
	 * The same as deflate, but create gzip wrapper instead of deflate one.
	 */
	export function gzip( data: Data, options: DeflateOptions & {to: 'string'} ): string;
	export function gzip( data: Data, options?: DeflateOptions ): Uint8Array;

	/**
	 * Decompress data with inflate/ungzip and options. Autodetect format via wrapper header
	 * by default. That's why we don't provide separate ungzip method.
	 */
	export function inflate( data: Data, options: InflateOptions & {to: 'string'} ): string;
	export function inflate( data: Data, options?: InflateOptions ): Uint8Array;

	/**
	 * The same as inflate, but creates raw data, without wrapper (header and adler32 crc).
	 */
	export function inflateRaw( data: Data, options: InflateOptions & {to: 'string'} ): string;
	export function inflateRaw( data: Data, options?: InflateOptions ): Uint8Array;

	/**
	 * Just shortcut to inflate, because it autodetects format by header.content. Done for convenience.
	 */
	export function ungzip( data: Data, options: InflateOptions & {to: 'string'} ): string;
	export function ungzip( data: Data, options?: InflateOptions ): Uint8Array;

	export class Deflate {
		constructor( options?: DeflateOptions );
		err: number;
		msg: string;
		result: Uint8Array | Array<number>;
		onData( chunk: Data ): void;
		onEnd( status: number ): void;
		push( data: Data | ArrayBuffer, mode?: number | boolean ): boolean;
	}

	export class Inflate {
		constructor( options?: InflateOptions );
		err: number;
		msg: string;
		result: Data;
		onData( chunk: Data ): void;
		onEnd( status: number ): void;
		push( data: Data | ArrayBuffer, mode?: number | boolean ): boolean;
	}
}
