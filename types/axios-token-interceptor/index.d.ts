import { AxiosRequestConfig } from "axios";

// Module
declare function AxiosTokenProvider(Options: AxiosTokenProvider.InterceptorOptions): AxiosTokenProvider.TokenProvider;
declare namespace AxiosTokenProvider {
    function tokenCache<T>(getToken: () => Promise<T>, options: TokenCacheOptions<T>): TokenCache<T>;

    // Interfaces
    interface InterceptorOptions<T = unknown> {
        token?: string | undefined;
        getToken?: (() => T | Promise<T>) | undefined;
        header?: string | undefined;
        headerFormatter?: ((token: T) => string) | undefined;
    }

    interface Token {
        access_token: string;
        expires_in: number;
    }

    type TokenProvider = (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>;

    interface TokenCacheOptions<T = unknown> {
        getMaxAge?: (() => number) | ((el: T) => number) | undefined;
        maxAge?: number | undefined;
    }

    interface TokenCache<T = string> {
        (): Promise<T>;
        reset(): void;
    }
}
export = AxiosTokenProvider;
