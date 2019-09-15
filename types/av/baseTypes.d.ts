import { BufferList } from "./bufferList";
import { Buffer } from "./buffer";

export interface Format {
	formatID: string;
	sampleRate: number;
	channelsPerFrame: number;
	bitsPerChannel: number;
}

export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

export type Metadata = object;

export type BufferFormats = Buffer | TypedArray | ArrayBuffer | BufferList;

export type Encoding = "ascii" | "utf8" | "utf16-be" | "utf16-le" | "utf16-bom";

export class UnderflowError extends Error {
}
