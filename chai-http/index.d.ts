// Type definitions for chai-http
// Project: https://github.com/chaijs/chai-http
// Definitions by: Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="chai" />

declare namespace Chai {

	interface ChaiStatic {
		request: ChaiHttpRequest;
	}

	interface ChaiHttpRequest {
		(server: any): ChaiHttp.Agent;
		agent(server: any): ChaiHttp.Agent;
		addPromises(promiseConstructor: any): void;
	}

	interface Assertion {
		status(code: number): Assertion;
		header(key: string, value?: string): Assertion;
		header(key: string, value?: RegExp): Assertion;
		headers: Assertion;
		json: Assertion;
		text: Assertion;
		html: Assertion;
		redirect: Assertion;
		redirectTo(location: string): Assertion;
		param(key: string, value?: string): Assertion;
		cookie(key: string, value?: string): Assertion;
	}

	interface TypeComparison {
		ip: Assertion;
	}
}

declare namespace ChaiHttp {
	interface Promise<T> {
		then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U): Promise<U>;
	}

	interface Response {
		body: any;
		type: string;
		status: number;
	}

	interface Request extends FinishedRequest {
		attach(field: string, file: string|Buffer, filename: string): Request;
		set(field: string, val: string): Request;
		query(params: Object): Request;
		send(data: Object): Request;
		auth(user: string, name: string): Request;
		field(name: string, val: string): Request;
		buffer(): Request;
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

	interface TypeComparison {
		ip: any;
	}
}

declare module "chai-http" {
	function chaiHttp(chai: any, utils: any): void;
	export = chaiHttp;
}
