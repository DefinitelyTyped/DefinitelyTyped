// Type definitions for microservice-utilities 0.1
// Project: https://github.com/Cimpress-MCP/microservice-utilities.js
// Definitions by: Daan Boerlage <https://github.com/runebaas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Authorizer
 */

export interface AuthorizerConfiguration {
    jwkKeyListUrl: string;
    authorizerContextResolver?: string;
}

export interface AuthorizerPolicy {
    principalId: string;
    policyDocument: object;
}

export class Authorizer {
    constructor(logFunction: (msg: any) => void, configuration: AuthorizerConfiguration);
    getPolicy(request: object): Promise<AuthorizerPolicy>;
}

/**
 * PlatformClient
 */

export interface PlatformClientConfiguration {
    client: object;
}

export interface PlatformClientResponse {
    data?: any;
    status: number;
    statusText: string;
    headers: any;
    config: object;
    request?: any;
}

export class PlatformClient {
    constructor(logFunction: (msg: any) => void, tokenResolverFunction?: Promise<() => string>, configuration?: PlatformClientConfiguration)
    get(url: string, headers?: { [s: string]: string; }, type?: string): Promise<PlatformClientResponse>;
    post(url: string, data: object, headers?: { [s: string]: string; }): Promise<PlatformClientResponse>;
    put(url: string, data: object, headers?: { [s: string]: string; }): Promise<PlatformClientResponse>;
    patch(url: string, data: object, headers?: { [s: string]: string; }): Promise<PlatformClientResponse>;
    delete(url: string, headers?: { [s: string]: string; }): Promise<PlatformClientResponse>;
    head(url: string, headers?: { [s: string]: string; }): Promise<PlatformClientResponse>;
    options(url: string, headers?: { [s: string]: string; }): Promise<PlatformClientResponse>;
}

/**
 * RequestLogger
 */

export interface RequestLoggerConfiguration {
    logFunction?: (msg: any) => void;
    extendErrorObjects?: boolean;
    jsonSpace?: number;
}

export class RequestLogger {
    constructor(configuration?: RequestLoggerConfiguration);
    log(msg: any): void;
}

/**
 * ServiceTokenProvider
 */

export interface ServiceTokenProviderConfiguration {
    clientId: string;
    encryptedClientSecret: string;
    audience: string;
    tokenEndpoint: string;
}

export class ServiceTokenProvider {
    constructor(httpClient: object, kmsClient: object, configuration?: ServiceTokenProviderConfiguration);
    getToken(): Promise<string>;
    getTokenWithoutCache(): Promise<string>;
}
