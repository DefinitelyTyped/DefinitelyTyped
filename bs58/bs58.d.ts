// Type definitions for bs58 3.0.0
// Project: https://github.com/cryptocoinjs/bs58
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../base-x/base-x.d.ts" />

declare module "bs58" {
	namespace base58 {}

	let base58: BaseX.BaseConverter;

	export = base58;
}
