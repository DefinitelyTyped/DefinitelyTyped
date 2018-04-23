// Type definitions for axios-token-interceptor 0.1
// Project: https://github.com/sandrinodimattia/axios-token-interceptor#readme
// Definitions by: Mike Dodge <https://github.com/innovation-team>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AxiosRequestConfig } from 'axios';

// Module
export function AxiosTokenProvider(Options: InterceptorOptions): TokenProvider;
export namespace AxiosTokenProvider {
	function tokenCache(getToken: Promise<string>, options: TokenCacheOptions): TokenCache;
}
export default AxiosTokenProvider;

// Interfaces

export interface InterceptorOptions {
    token?: string;
    getToken?: () => string | Promise<string>;
    header?: string;
    headerFormatter?: (token: string) => string;
}

export type TokenProvider = (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>;

export interface TokenCacheOptions {
    getMaxAge?: () => number;
    maxAge?: number;
}

export interface TokenCache {
    reset(): void;
}
