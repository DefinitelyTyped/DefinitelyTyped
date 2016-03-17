﻿// Type definitions for logrotate-stream 0.2.5
// Project: https://github.com/dstokes/logrotate-stream
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
declare module "logrotate-stream" {
	import stream = require("stream");

	// wrapper to be able to use "export =" while also exporting the Options interface
	namespace logrotateStream {

		/**
		 * Options object for the exported function.
		 */
		export interface Options {
			/**
			 * The file log file to write data to.
			 */
			file: string;
			/**
			 * The max file size of a log before rotation occurs. Supports 1024, 1k, 1m, 1g
			 */
			size: string;
			/**
			 * The number of rotated log files to keep (including the primary log file). Additional logs are deleted no rotation.
			 */
			keep: number;
			/**
			 * Optionally compress rotated files with gzip.
			 */
			compress?: boolean;
		}

	}

	/**
	 * Create a rotating log stream.
	 * @returns a writable stream to a rotating log file
	 */
	function logrotateStream(opts: logrotateStream.Options): stream.Writable;


	export = logrotateStream;
}

