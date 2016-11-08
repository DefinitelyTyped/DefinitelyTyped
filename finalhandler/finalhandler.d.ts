// Type definitions for finalhandler
// Project: https://github.com/pillarjs/finalhandler
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "finalhandler" {
	import {ServerRequest, ServerResponse} from "http";

	function finalHandler(req: ServerRequest, res: ServerResponse, options?: finalHandler.Options): (err: any) => void;

	namespace finalHandler {
		export interface Options {
			message?: boolean|((err: any, status: number) => string);
			onerror?: (err: any, req: ServerRequest, res: ServerResponse) => void;
			stacktrace?: boolean;
		}
	}

	export = finalHandler;
}
