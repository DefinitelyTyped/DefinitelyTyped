/// <reference path="./buffer.d.ts" />

declare namespace AV {
	class BufferList {
		availableBytes: number;
		availableBuffers: number;
		numBuffers: number;
		first: Buffer | null;
		last: Buffer | null;

		copy(): BufferList;
		append(buffer: Buffer): void;
		advance(): boolean;
		rewind(): boolean;
		reset(): void;
	}
}
