// Type definitions for chai-http
// Project: https://github.com/chaijs/chai-http
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../chai/chai.d.ts" />

declare module chai {
	export function request(server: any): chaiHttp.Agent;

	export module request {
		export function agent(server: any): chaiHttp.Agent;
		export function addPromises(promiseConstructor: chaiHttp.PromiseConstructor): void;
	}

	interface Assertions extends chaiHttp.Assertions {
	}

	interface TypeComparison extends chaiHttp.TypeComparison {
	}
}

declare function chaiHttp(chai: any, utils: any): void;
declare module chaiHttp {
	interface PromiseConstructor {
		<T>(resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void): Promise<T>;
	}

	interface Promise<T> {
		then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U): Promise<U>;
	}

	interface Response {
		body: any;
		type: string;
		status: number;
	}

	interface Request extends FinishedRequest {
		attach(field: string, file: string, filename: string): Request;
		attach(field: string, file: Buffer, filename: string): Request;
		set(field: string, val: string): Request;
		query(key: string, value: string): Request;
		send(data: Object): Request;
		auth(user: string, name: string): Request;
		field(name: string, val: string): Request;
		end(callback?: (err: any, res: Response) => void): FinishedRequest;
	}

	interface FinishedRequest {
		then(success?: (res: Response) => void, failure?: (err: any) => void): FinishedRequest;
		catch(failure?: (err: any) => void): FinishedRequest;
	}

	interface Agent {
		get(url: string, callback?: (err: any, res: Response) => void): Request;
		post(url: string, callback?: (err: any, res: Response) => void): Request;
		put(url: string, callback?: (err: any, res: Response) => void): Request;
		head(url: string, callback?: (err: any, res: Response) => void): Request;
		del(url: string, callback?: (err: any, res: Response) => void): Request;
		options(url: string, callback?: (err: any, res: Response) => void): Request;
		patch(url: string, callback?: (err: any, res: Response) => void): Request;
	}

	interface Assertions {
		status(code: number): any;
		header(key: string, value?: string): any;
		header(key: string, value?: RegExp): any;
		headers: any;
		json: any;
		// text: any;
		// html: any;
		redirect: any;
		redirectTo(location: string): any;
		param(key: string, value?: string): any;
		cookie(key: string, value?: string): any;
	}

	interface TypeComparison {
		ip: any;
	}
}

declare module "chai-http" {
	export = chaiHttp;
}
