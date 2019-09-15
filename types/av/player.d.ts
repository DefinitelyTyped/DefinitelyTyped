import { BufferFormats, Format, Metadata } from "./baseTypes";
import { Asset } from "./asset";
import { Filter } from "./filter";

export class Player {
	static fromURL(url: string): Player;
	static fromFile(file: File): Player;
	static fromBuffer(buffer: BufferFormats): Player;

	buffered: number;
	duration: number;
	playing: boolean;
	currentTime: number;
	volume: number;
	pan: number;
	format?: Format;
	metadata: Metadata;
	asset: Asset;
	filters: Filter[];

	constructor(asset: Asset);

	preload(): void;
	play(): void;
	pause(): void;
	togglePlayback(): void;
	stop(): void;

	on(event: "buffer", fn: (percent: number) => void): void;
	on(event: "format", fn: (object: Format) => void): void;
	on(event: "duration" | "progress", fn: (msecs: number) => void): void;
	on(event: "metadata", fn: (object: Metadata) => void): void;
	on(event: "ready" | "end", fn: () => void): void;
	on(event: "error", fn: (err: Error) => void): void;

	off(event: "buffer", fn: (percent: number) => void): void;
	off(event: "format", fn: (object: Format) => void): void;
	off(event: "duration" | "progress", fn: (msecs: number) => void): void;
	off(event: "metadata", fn: (object: Metadata) => void): void;
	off(event: "ready" | "end", fn: () => void): void;
	off(event: "error", fn: (err: Error) => void): void;

	once(event: "buffer", fn: (percent: number) => void): void;
	once(event: "format", fn: (object: Format) => void): void;
	once(event: "duration" | "progress", fn: (msecs: number) => void): void;
	once(event: "metadata", fn: (object: Metadata) => void): void;
	once(event: "ready" | "end", fn: () => void): void;
	once(event: "error", fn: (err: Error) => void): void;

	emit(event: "buffer", fn: (percent: number) => void): void;
	emit(event: "format", fn: (object: Format) => void): void;
	emit(event: "duration" | "progress", fn: (msecs: number) => void): void;
	emit(event: "metadata", fn: (object: Metadata) => void): void;
	emit(event: "ready" | "end", fn: () => void): void;
	emit(event: "error", fn: (err: Error) => void): void;
}
