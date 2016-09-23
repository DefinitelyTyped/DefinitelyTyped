// Type definitions for base-x v1.0.1
// Project: https://github.com/cryptocoinjs/base-x
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var BaseX: BaseX.Base;
export = BaseX;

declare namespace BaseX {
	interface EncodeBuffer {
		[index: number]: number;
		length: number;
	}

	interface BaseConverter {
		encode: (buffer: EncodeBuffer) => string;
		decode: (string: string) => number[];
	}

	interface Base {
		(ALPHABET: string): BaseX.BaseConverter
	}
}
