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