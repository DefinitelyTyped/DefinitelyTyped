// Type definitions for zapier-platform-core 3.1
// Project: https://github.com/zapier/zapier-platform-core
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import * as http from "http";

export const version: string;

export interface HttpRequestOptions {
    url?: string;
    method?: "POST" | "GET" | "OPTIONS" | "HEAD" | "DELETE" | "PATCH";
    body?: string | Buffer | NodeJS.ReadableStream | object | null;
    headers?: { [name: string]: string };
    json?: object | any[] | null;
    params?: object;
    form?: object | null;
    raw?: boolean;
    redirect?: "manual" | "error" | "follow";
    follow?: number;
    compress?: boolean;
    agent?: http.Agent | null;
    timeout?: number;
    size?: number;
}

export interface HttpResponse {
    status: number;
    content: string | Buffer;
    json: object | undefined | Promise<object | undefined>;
    body?: NodeJS.ReadableStream;
    headers: { [key: string]: string };
    getHeader(key: string): string | undefined;
    throwForStatus(): void;
    request: HttpRequestOptions;
}

export class HaltedError extends Error {}
export class ExpiredAuthError extends Error {}
export class RefreshAuthError extends Error {}

export interface Z {
    request(options: HttpRequestOptions): Promise<HttpResponse>;
    request(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    JSON: typeof JSON;
    console: Console;
    hash(alg: string, data: string): any;
    errors: {
        RefreshAuthError: {
            new (message?: string): HaltedError;
            new (message?: string): ExpiredAuthError;
            new (message?: string): RefreshAuthError;
        };
    };
}

export interface AuthData {
    access_token: string;
    refresh_token?: string;
}

export interface Bundle<InputData = {}> {
    authData: AuthData;
    inputData: InputData;
}

export interface AuthorizeUrlBundle<InputData = {}> {
    inputData: InputData;
}

export interface GetAccessTokenBundle<InputData = {}> {
    inputData: InputData & {
        code: string;
    };
}

export interface RefreshAccessTokenBundle<InputData> {
    inputData: InputData;
    authData: AuthData;
}

export interface OAuth2Authentication<InputData = {}> {
    type: "oauth2";
    connectionLabel: string;
    oauth2Config: {
        authorizeUrl:
            | string
            | ((
                  z: Z,
                  bundle: AuthorizeUrlBundle<InputData>
              ) => string | Promise<string>)
            | HttpRequestOptions;
        getAccessToken:
            | ((
                  z: Z,
                  bundle: GetAccessTokenBundle<InputData>
              ) => AuthData | Promise<AuthData>)
            | HttpRequestOptions;
        refreshAccessToken?:
            | ((
                  z: Z,
                  bundle: RefreshAccessTokenBundle<InputData>
              ) => AuthData | Promise<AuthData>)
            | HttpRequestOptions;
        autoRefresh: boolean;
        scope?: string;
    };
    test:
        | ((z: Z, bundle: Bundle<InputData>) => boolean | Promise<boolean>)
        | { url: string };
}
