import { Buffer } from './buffer';
import { BufferFormats } from "./baseTypes";

export interface Source {
	start(): void;
	pause(): void;
	reset(): void;

	on(event: "data", fn: (buffer: Buffer) => void): void;
	on(event: "progress", fn: (percent: number) => void): void;
	on(event: "error", fn: (err: Error) => void): void;
	on(event: "end", fn: () => void): void;

	off(event: "data", fn: (buffer: Buffer) => void): void;
	off(event: "progress", fn: (percent: number) => void): void;
	off(event: "error", fn: (err: Error) => void): void;
	off(event: "end", fn: () => void): void;

	once(event: "data", fn: (buffer: Buffer) => void): void;
	once(event: "progress", fn: (percent: number) => void): void;
	once(event: "error", fn: (err: Error) => void): void;
	once(event: "end", fn: () => void): void;

	emit(event: "data", fn: (buffer: Buffer) => void): void;
	emit(event: "progress", fn: (percent: number) => void): void;
	emit(event: "error", fn: (err: Error) => void): void;
	emit(event: "end", fn: () => void): void;
}

export const HTTPSource: { new(url: string, opts?: { length?: number }): Source; };
export const FileSource: { new(file: File): Source; };
export const BufferSource: { new(input: BufferFormats): Source; };
