// type definitions for bunyan-prettystream
// project: https://www.npmjs.com/package/bunyan-prettystream
// definitions by jasons@novaleaf.com

/// <reference path="../node/node.d.ts" />

declare module "bunyan-prettystream" {
	import stream = require("stream");
	class PrettyStream extends stream.Writable {
		public pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
	}
	export = PrettyStream;
}