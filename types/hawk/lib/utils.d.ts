import * as Boom from '@hapi/boom';
import * as http from 'http';
import * as https from 'https';

export interface Host {
    name: string;
    port: number;
}

export interface CustomRequest {
    authorization: string;
    contentType: string;
    host: string;
    method: string;
    port: number;
    url: string;
}

export interface ParseRequestOptions {
    host?: string;
    hostHeaderName?: string;
    name?: string;
    port?: number;
}

export const version: string;

export const limits: {
    /** Limit the length of uris and headers to avoid a DoS attack on string matching */
    maxMatchLength: number;
};

export function now(localtimeOffsetMsec: number): number;

export function nowSecs(localtimeOffsetMsec: number): number;

export function parseAuthorizationHeader(header: string, keys?: string[]): Record<string, string>;

export function parseContentType(header?: string): string;

export function parseHost(req: http.RequestOptions | https.RequestOptions, hostHeaderName?: string): Host | null;

export function parseRequest(
    req: http.RequestOptions | https.RequestOptions,
    options?: ParseRequestOptions,
): CustomRequest;

export function unauthorized(
    message?: string,
    attributes?: string | Boom.unauthorized.Attributes,
): Boom.Boom & Boom.unauthorized.MissingAuth;
