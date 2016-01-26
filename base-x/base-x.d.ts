// Type definitions for base-x v1.0.1
// Project: https://github.com/cryptocoinjs/base-x
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

declare module "base-x" {
	namespace base {}

	let base: BaseX.Base;

	export = base;
}
