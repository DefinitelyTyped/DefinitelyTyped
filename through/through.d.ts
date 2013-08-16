// Type definitions for through
// Project: https://github.com/dominictarr/through
// Definitions by: Andrew Gaspar <https://github.com/AndrewGaspar/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "through" {
	import Stream = require("stream");

	function through(write: (data) => void,
		end?: () => void,
		opts?: {
			autoDestroy: boolean;
		}): through.ThroughStream;

	module through {
		export interface ThroughStream extends Stream.ReadWriteStream {
			autoDestroy: boolean;
		}
	}

	export = through;
}