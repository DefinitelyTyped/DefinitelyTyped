// Type definitions for axios-token-interceptor 0.1
// Project: https://github.com/sandrinodimattia/axios-token-interceptor#readme
// Definitions by: Mike Dodge <https://github.com/innovation-team>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AxiosRequestConfig } from 'axios';

/*~ If this module has methods, declare them as functions like so.
 */

export default function tokenProvider(Options: InterceptorOptions): TokenProvider;
export function tokenCache(getToken: Promise<string>, options: TokenCacheOptions): TokenCache;

/*~ You can declare types that are available via importing the module */
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
