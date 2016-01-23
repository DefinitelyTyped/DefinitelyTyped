// Type definitions for Brorand v1.0.5
// Project: https://github.com/indutny/brorand
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "brorand" {
	type rand = {getByte: () => number};

	interface RandStatic {
		new (rand: rand): RandInstance;
	}

	interface RandInstance {
		rand: rand;
		generate(len: number): Buffer|Uint8Array;
	}

	interface BrorandStatic {
		(len: number): Buffer|Uint8Array;
		Rand: RandStatic;
	}

	namespace Brorand {}

	let Brorand: BrorandStatic;

	export = Brorand;
}
