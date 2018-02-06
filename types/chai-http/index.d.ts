// Type definitions for chai-http 3.0
// Project: https://github.com/chaijs/chai-http
// Definitions by: Wim Looman <https://github.com/Nemo157>
//                 Liam Jones <https://github.com/G1itcher>
//                 Federico Caselli <https://github.com/CaselIT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="chai" />

import request = require('superagent');

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

		interface Agent  {
			get(url: string, callback?: (err: any, res: Response) => void): request.Request;
			post(url: string, callback?: (err: any, res: Response) => void): request.Request;
			put(url: string, callback?: (err: any, res: Response) => void): request.Request;
			head(url: string, callback?: (err: any, res: Response) => void): request.Request;
			del(url: string, callback?: (err: any, res: Response) => void): request.Request;
			options(url: string, callback?: (err: any, res: Response) => void): request.Request;
			patch(url: string, callback?: (err: any, res: Response) => void): request.Request;
		}

		interface TypeComparison {
			ip: any;
		}
	}
}

declare function chaiHttp(chai: any, utils: any): void;
export = chaiHttp;
