// Type definitions for tunnel 0.0
// Project: https://github.com/koichik/node-tunnel/
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Agent } from 'http';
import { Agent as HttpsAgent } from 'https';

export function httpOverHttp(options?: HttpOptions): Agent;
export function httpsOverHttp(options?: HttpsOverHttpOptions): Agent;
export function httpOverHttps(options?: HttpOverHttpsOptions): HttpsAgent;
export function httpsOverHttps(options?: HttpsOverHttpsOptions): HttpsAgent;

export interface HttpOptions {
    maxSockets?: number | undefined;
    proxy?: ProxyOptions | undefined;
}

export interface HttpsOverHttpOptions extends HttpOptions {
    ca?: Buffer[] | undefined;
    key?: Buffer | undefined;
    cert?: Buffer | undefined;
}

export interface HttpOverHttpsOptions extends HttpOptions {
    proxy?: HttpsProxyOptions | undefined;
}

export interface HttpsOverHttpsOptions extends HttpsOverHttpOptions {
    proxy?: HttpsProxyOptions | undefined;
}

export interface ProxyOptions {
    host: string;
    port: number;
    localAddress?: string | undefined;
    proxyAuth?: string | undefined;
    headers?: { [key: string]: any } | undefined;
}

export interface HttpsProxyOptions extends ProxyOptions {
    ca?: Buffer[] | undefined;
    servername?: string | undefined;
    key?: Buffer | undefined;
    cert?: Buffer | undefined;
}
