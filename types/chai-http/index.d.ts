// Type definitions for chai-http 3.0
// Project: https://github.com/chaijs/chai-http
// Definitions by: Wim Looman <https://github.com/Nemo157>
//                 Liam Jones <https://github.com/G1itcher>
//                 Federico Caselli <https://github.com/CaselIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="chai" />

declare global {
	namespace Chai {
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
			header(key: string, value?: string | RegExp): Assertion;
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

	namespace ChaiHttp {
		interface Promise<T> {
			then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U): Promise<U>;
		}

		interface Response {
			body: any;
			type: string;
			status: number;
			text: string;
			setEncoding(encoding: string): void;
			on(event: string, fn: (...args: any[]) => void): void;
		}

		interface Request extends FinishedRequest {
			attach(field: string, file: string|Buffer, filename: string): Request;
			set(field: string, val: string): Request;
			query(params: any): Request;
			send(data: any): Request;
			auth(user: string, name: string): Request;
			field(name: string, val: string): Request;
			buffer(): Request;
			parse(fn: (res: Response, cb: (e?: Error, r?: any) => void) => void): Request;
			end(callback?: (err: any, res: Response) => void): FinishedRequest;
		}

		interface FinishedRequest<T = Response> {
			then<TR1 = T, TR2 = void>(success?: (res: T) => TR1 | PromiseLike<TR1>, failure?: (err: any) => TR2 | PromiseLike<TR2>): FinishedRequest<TR1>;
			catch(failure?: (err: any) => void): FinishedRequest<T>;
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
}

declare function chaiHttp(chai: any, utils: any): void;
export = chaiHttp;
