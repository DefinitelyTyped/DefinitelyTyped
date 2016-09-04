// Type definitions for bluebird-retry
// Project: https://github.com/jut-io/bluebird-retry
// Definitions by: Pascal Vomhoff <https://github.com/pvomhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../bluebird/bluebird-2.0.d.ts" />
declare module "bluebird-retry" {
	import Promise = require('bluebird');

	function retry<T>(func:(param:T)=>void, options?:retry.Options):Promise<T>;

	namespace retry {
		export interface Options {
			interval?:number;
			backoff?:number;
			max_interval?:number;
			timeout?:number;
			max_tries?:number;
		}

	}

	export = retry;
}
