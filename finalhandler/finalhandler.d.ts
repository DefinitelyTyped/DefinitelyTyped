// Type definitions for finalhandler
// Project: https://github.com/pillarjs/finalhandler
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "finalhandler" {
	import {ServerRequest, ServerResponse} from "http";

	export interface Options {
		message?: boolean|((err: any, status: number) => string);
		onerror?: (err: any, req: ServerRequest, res: ServerResponse) => void;
		stacktrace?: boolean;
	}

	function finalHandler(req: ServerRequest, res: ServerResponse, options?: Options): (err: any) => void;

	export default finalHandler;
}
