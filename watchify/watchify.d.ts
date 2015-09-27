// Type definitions for watchify
// Project: https://github.com/substack/watchify
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../browserify/browserify.d.ts" />

declare module "watchify" {
	import Browserify = require('browserify');

	interface Browserify {
		(): BrowserifyObject;
		(files:string[]): BrowserifyObject;
		(opts:{
			entries?: string[];
			noParse?: string[];
            cache: any;
            packageCache: any;
        }): BrowserifyObject;
	}

	namespace watchify {
		var args: WatchifyArgs;

		interface Watchify extends BrowserifyObject {
			close(): any;
		}

		interface WatchifyArgs {
			cache: { }
			packageCache: { }
		}

		interface WatchifyOption {
			/**
			 * the amount of time in milliseconds to wait before emitting an "update" event after a change.
			 * Defaults to 600.
			 */
			delay?: number;
			/**
			 * ignores monitoring files for changes. If set to true, then **\/node_modules\/** will be ignored.
			 * For other possible values see Chokidar's <a href='https://github.com/paulmillr/chokidar#path-filtering'>
			 *     documentation</a> on "ignored".
			 */
			ignoreWatch?: boolean;
			/**
			 * enables polling to monitor for changes. If set to true, then a polling interval of 100ms is used.
			 * If set to a number, then that amount of milliseconds will be the polling interval.
			 * For more info see Chokidar's <a href='https://github.com/paulmillr/chokidar#performance'>documentation</a>
			 * on "usePolling" and "interval".
			 * This option is useful if you're watching an NFS volume.
			 */
			poll?: boolean|number;
		}
	}

	function watchify(browserify: BrowserifyObject, option?: watchify.WatchifyOption): watchify.Watchify;

	export = watchify;
}

