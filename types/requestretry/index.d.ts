// Type definitions for requestretry 1.12
// Project: https://github.com/FGRibreau/node-request-retry
// Definitions by: Eric Byers <https://github.com/EricByers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'requestretry' {
	import request = require('request');
	import http = require('http');

	type RetryStrategy = (err: Error, response: http.IncomingMessage, body: any) => boolean;

	namespace requestRetry {
		interface RequestAPI extends request.RequestAPI<request.Request, requestRetry.RequestRetryOptions, request.RequiredUriUrl> {
			RetryStrategies: {
				'HttpError': RetryStrategy;
				'HTTPOrNetworkError': RetryStrategy;
				'NetworkError': RetryStrategy;
			};
		}

		interface RequestRetryOptions extends request.CoreOptions {
			maxAttempts?: number;
			retryDelay?: number;
			retryStrategy?: RetryStrategy;
		}

		type OptionsWithUri = request.UriOptions & RequestRetryOptions;
		type OptionsWithUrl = request.UrlOptions & RequestRetryOptions;
		type Options = OptionsWithUri | OptionsWithUrl;
	}

	let requestRetryExport: requestRetry.RequestAPI;

	export = requestRetryExport;
}
