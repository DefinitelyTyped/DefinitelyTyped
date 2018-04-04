// Type definitions for pngjs 3.3
// Project: https://github.com/lukeapage/pngjs
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex } from 'stream';
import { createDeflate } from 'zlib';

export class PNG extends Duplex {
	static adjustGamma(src: PNG): void;

	static bitblt(
		src: PNG,
		dst: PNG,
		srcX?: number,
		srcY?: number,
		width?: number,
		height?: number,
		deltaX?: number,
		deltaY?: number
	): void;

	static sync: {
		read(buffer: Buffer, options?: ParserOptions): PNG;
		write(buffer: Buffer, options?: PackerOptions): PNG;
	};

	constructor(options?: PNGOptions);

	data: Buffer;
	gamma: number;
	height: number;
	width: number;

	adjustGamma(): void;

	bitblt(
		dst: PNG,
		srcX?: number,
		srcY?: number,
		width?: number,
		height?: number,
		deltaX?: number,
		deltaY?: number
	): PNG;

	on(event: 'metadata', callback: (metadata: Metadata) => void): this;
	on(event: 'parsed', callback: (data: Buffer) => void): this;
	on(event: 'error', callback: (error: Error) => void): this;
	on(event: string, callback: (...args: any[]) => void): this;

	pack(): PNG;

	parse(data: string | Buffer, callback?: (error: Error, data: PNG) => void): PNG;
}

export interface BaseOptions {
	width?: number;
	height?: number;
	fill?: boolean;
}

export interface ParserOptions {
	checkCRC?: boolean;
}

export interface PackerOptions {
	deflateChunkSize?: number;
	deflateLevel?: number;
	deflateStrategy?: number;
	deflateFactory?: typeof createDeflate;
	colorType?: ColorType;
	bitDepth?: 8 | 16;
	bgColor?: {
		red: number;
		green: number;
		blue: number;
	};
	inputHasAlpha?: boolean;
	inputColorType?: ColorType;
	filterType?: number | number[];
}

export type PNGOptions = BaseOptions & ParserOptions & PackerOptions;

export type ColorType = 0 | 1 | 2 | 4;

export interface Metadata {
	width: number;
	height: number;
	depth: 1 | 2 | 4 | 8 | 16;
	interlace: boolean;
	palette: boolean;
	color: boolean;
	alpha: boolean;
	bpp: 1 | 2 | 3 | 4;
	colorType: ColorType;
}
