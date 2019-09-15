/// <reference path="./stream.d.ts" />

declare namespace AV {
	class Bitstream {
		bitposition: number;

		constructor(stream: Stream);

		copy(): Bitstream;
		offset(): number;
		available(bits: number): boolean;
		advance(bits: number): void;
		align(): void;
		read(bits: number, signed?: boolean): number;
		peek(bits: number, signed?: boolean): number;
		readLSB(bits: number, signed?: boolean): number;
		peekLSB(bits: number, signed?: boolean): number;
	}
}
