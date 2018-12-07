// Type definitions for requestretry 1.12
// Project: https://github.com/FGRibreau/node-request-retry
// Definitions by: Eric Byers <https://github.com/EricByers>
// 				   Andrew Throener <https://github.com/trainerbill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import request = require('request');
import http = require('http');

declare namespace requestretry {
	type RetryStrategy = (err: Error, response: http.IncomingMessage, body: any) => boolean;
	interface RetryRequestAPI extends request.RequestAPI<request.Request, RequestRetryOptions, request.RequiredUriUrl> {
		RetryStrategies: {
			'HttpError': RetryStrategy;
			'HTTPOrNetworkError': RetryStrategy;
			'NetworkError': RetryStrategy;
		};
	}

	interface RequestRetryOptions extends request.CoreOptions {
		maxAttempts?: number;
		promiseFactory?(resolver: any): any;
		retryDelay?: number;
		retryStrategy?: RetryStrategy;
	}
}

declare let requestretry: requestretry.RetryRequestAPI;
export = requestretry;
