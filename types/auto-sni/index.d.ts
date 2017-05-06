// Type definitions for auto-sni v2.1.1
// Project: https://www.npmjs.com/package/auto-sni
// Definitions by: Jan Wolf <https://github.com/janwo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {Server} from "https";

declare namespace createServer {

}

declare function createServer(opts: {
	email: string,
	agreeTos: boolean,
	domains: Array<string|string[]>,
	ports?: {
		http?: number,
		https?: number
	},
	debug?: boolean
}, app?: any): Server;

export = createServer;
