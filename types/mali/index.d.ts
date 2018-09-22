// Type definitions for mali 0.9
// Project: https://github.com/malijs/mali
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from 'events';
import { Stream } from 'stream';

declare class Mali extends EventEmitter {
	constructor(path: any, name?: string | ReadonlyArray<string>, options?: any);
	name: string;
	env: string;
	ports: ReadonlyArray<number>;
	silent: boolean;

	addService(path: any, name: string | ReadonlyArray<string>, options?: any): void;
	use(service?: any, name?: any, fns?: any): void;
	start(port: number | string, creds?: any, options?: any): any; // gnarly type inferring for these functions so Im just gonna let them handle it.
	toJSON(): any;
	close(): Promise<void>;
	inspect(): any;
}

declare namespace Mali {
	interface Context {
		name: string;
		fullName: string;
		service: string;
		package: string;
		app: any; // ? app
		call: any;
		request: Request;
		response: Response;
		req: any; // ?
		res: any; // ?
		type: string;
		metadata: string;
		get(field: string): any;
		set(field: any, val?: any): void; // do I need `?:` if its of type `any`?
		sendMetadata(md: any): void;
		getStatus(field: string): any;
		setStatus(field: any, val?: any): void; // ^
	}

	class Request {
		constructor(call: any, type: string);
		call: any;
		type: string;
		metadata: any;
		req: any; // ?

		getMetadata(): any;
		get(field: string): any;
	}

	class Response {
		constructor(call: any, type: string);
		call: any;
		type: string;
		metadata: any;
		status: any;
		res: any; // ?
		set(field: any, val?: any): void; // is `val?:` necessary when its of type `any`?
		get(field: string): any;
		getMetadata(): any;
		sendMetadata(md?: any): void;
		getStatus(field: string): any;
		setStatus(field: any, val?: any): void; // ^ same as above
	}

	function exec(ctx: Context, handler: any, cb?: any): void;
}

export = Mali;
