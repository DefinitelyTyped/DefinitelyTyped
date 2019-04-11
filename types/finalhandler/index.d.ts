// Type definitions for finalhandler
// Project: https://github.com/pillarjs/finalhandler
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";

declare function finalHandler(req: IncomingMessage, res: ServerResponse, options?: finalHandler.Options): (err: any) => void;

declare namespace finalHandler {
	export interface Options {
		message?: boolean|((err: any, status: number) => string);
		onerror?: (err: any, req: IncomingMessage, res: ServerResponse) => void;
		stacktrace?: boolean;
	}
}

export = finalHandler;
