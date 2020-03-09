// Type definitions for axios-token-interceptor 0.2
// Project: https://github.com/sandrinodimattia/axios-token-interceptor#readme
// Definitions by: Vivint Team Innovation <https://github.com/innovation-team>
//                 Mike Dodge <https://github.com/mgdodge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { AxiosRequestConfig } from 'axios';

// Module
declare function AxiosTokenProvider(Options: AxiosTokenProvider.InterceptorOptions): AxiosTokenProvider.TokenProvider;
declare namespace AxiosTokenProvider {
	function tokenCache(getToken: () => Promise<string>, options: TokenCacheOptions): TokenCache;

	// Interfaces
	interface InterceptorOptions {
		token?: string;
		getToken?: () => string | Promise<string>;
		header?: string;
		headerFormatter?: (token: string) => string;
	}

	type TokenProvider = (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>;

	interface TokenCacheOptions {
		getMaxAge?: () => number;
		maxAge?: number;
	}

	interface TokenCache {
        (): Promise<string>;
		reset(): void;
	}
}
export = AxiosTokenProvider;
