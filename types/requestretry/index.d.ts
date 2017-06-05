declare module 'requestretry' {

	import request = require('request');
	import http = require('http');

	interface IRetryStrategy {
		(err: Error, response: http.IncomingMessage, body: any):boolean;
	}

	namespace requestRetry {

		export interface RequestAPI extends request.RequestAPI<request.Request, requestRetry.RequestRetryOptions, request.RequiredUriUrl> {

			RetryStrategies: {
				'HttpError': IRetryStrategy;
				'HTTPOrNetworkError': IRetryStrategy;
				'NetworkError': IRetryStrategy;
			}
		}

		interface RequestRetryOptions extends request.CoreOptions {
			maxAttempts?: number;
			retryDelay?: number;
			retryStrategy?: IRetryStrategy
		}

		export type OptionsWithUri = request.UriOptions & RequestRetryOptions;
		export type OptionsWithUrl = request.UrlOptions & RequestRetryOptions;
		export type Options = OptionsWithUri | OptionsWithUrl;


	}

	var requestRetryExport: requestRetry.RequestAPI;

	export = requestRetryExport;
}
