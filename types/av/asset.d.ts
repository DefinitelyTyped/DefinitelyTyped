/// <reference path="./eventEmitter.d.ts" />
/// <reference path="./source.d.ts" />
/// <reference path="./baseTypes.d.ts" />
/// <reference path="./demuxer.d.ts" />
/// <reference path="./decoder.d.ts" />

declare namespace AV {
	class Asset {
		static fromURL(url: string, opts?: HttpSourceOpts): Asset;
		static fromFile(file: File): Asset;
		static fromBuffer(buffer: BufferFormats): Asset;

		constructor(source: Source);

		buffered: number;
		duration: number | null;
		format: Format | null;
		metadata: Metadata | null;
		active: boolean;
		source: Source;
		demuxer: Demuxer | null;
		decoder: Decoder | null;

		start(): void;
		stop(): void;
		get(event: "format", callback: (format: Format) => void): void;
		get(event: "duration", callback: (duration: number) => void): void;
		get(event: "metadata", callback: (metadata: Metadata) => void): void;
		decodeToBuffer(callback: (buffer: Float32Array) => void): void;

		on(event: "buffer", fn: (percent: number) => void): void;
		on(event: "format", fn: (object: Format) => void): void;
		on(event: "duration", fn: (msecs: number) => void): void;
		on(event: "metadata", fn: (object: Metadata) => void): void;
		on(event: "decodeStart", fn: () => void): void;
		on(event: "data", fn: (data: Float32Array) => void): void;
		on(event: "error", fn: (err: Error) => void): void;

		off(event: "buffer", fn: (percent: number) => void): void;
		off(event: "format", fn: (object: Format) => void): void;
		off(event: "duration", fn: (msecs: number) => void): void;
		off(event: "metadata", fn: (object: Metadata) => void): void;
		off(event: "decodeStart", fn: () => void): void;
		off(event: "data", fn: (data: Float32Array) => void): void;
		off(event: "error", fn: (err: Error) => void): void;

		once(event: "buffer", fn: (percent: number) => void): void;
		once(event: "format", fn: (object: Format) => void): void;
		once(event: "duration", fn: (msecs: number) => void): void;
		once(event: "metadata", fn: (object: Metadata) => void): void;
		once(event: "decodeStart", fn: () => void): void;
		once(event: "data", fn: (data: Float32Array) => void): void;
		once(event: "error", fn: (err: Error) => void): void;

		emit(event: "buffer", fn: (percent: number) => void): void;
		emit(event: "format", fn: (object: Format) => void): void;
		emit(event: "duration", fn: (msecs: number) => void): void;
		emit(event: "metadata", fn: (object: Metadata) => void): void;
		emit(event: "decodeStart", fn: () => void): void;
		emit(event: "data", fn: (data: Float32Array) => void): void;
		emit(event: "error", fn: (err: Error) => void): void;
	}
}
