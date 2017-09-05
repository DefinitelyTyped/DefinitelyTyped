// Type definitions for spark-md5 3.0
// Project: https://github.com/satazor/js-spark-md5#readme
// Definitions by: Bastien Moulia <https://github.com/bastienmoulia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface State {
	buff: Uint8Array;
	length: number;
	hash: number[];
}

// copy of ArrayBuffer because of a conflict with the class SparkMD5.ArrayBuffer
interface ArrayBufferCopy extends ArrayBuffer {}

declare class SparkMD5 {
	constructor();
	append(str: string): SparkMD5;
	appendBinary(contents: string): SparkMD5;
	end(raw?: boolean): string;
	reset(): SparkMD5;
	getState(): State;
	setState(state: State): State;
	destroy(): void;
	static hash(str: string, raw?: boolean): string;
	static hashBinary(content: string, raw?: boolean): string;
}

declare namespace SparkMD5 {
	class ArrayBuffer {
		constructor();
		append(str: string): ArrayBuffer;
		end(raw?: boolean): string;
		reset(): ArrayBuffer;
		getState(): State;
		setState(state: State): State;
		destroy(): void;
		static hash(arr: ArrayBufferCopy, raw?: boolean): string;
	}
}

export = SparkMD5;
