// Type definitions for raven 2.5
// Project: https://github.com/getsentry/raven-js
// Definitions by: Scott Cooper <https://github.com/scttcper>
//                 Dmitrii Sorin <https://github.com/1999>
//                 Shrey Jain <https://github.com/shreyjain1994>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {
  IncomingMessage, ServerResponse, OutgoingHttpHeaders, Agent, ClientRequest
} from 'http';
import { EventEmitter } from 'events';

// expose all methods of `Client` class since raven exposes a singleton instance
// todo: there has to be a better way of doing this that doesn't require duplicating so much stuff
export function config(options?: ConstructorOptions): Client;
export function config(dsn?: string | false, options?: ConstructorOptions): Client;
export function install(cb?: FatalErrorCallback): Client;
export function uninstall(): Client;
export function wrap<T>(func: () => T): () => T;
export function wrap<T>(options: any, func: () => T): () => T;
export function interceptErr(ctx: any): Client; // todo: part of public?
export function setContext(ctx: any): Client;
export function mergeContext(ctx: any): Client;
export function getContext(): any;
export function requestHandler(): (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
export function errorHandler(): (e: Error, req: IncomingMessage, res: ServerResponse, next: () => void) => void;
export function captureException(e: Error, cb?: CaptureCallback): string;
export function captureException(e: Error, options?: CaptureOptions, cb?: CaptureCallback): string;
export function captureMessage(message: string, cb?: CaptureCallback): string;
export function captureMessage(message: string, options?: CaptureOptions, cb?: CaptureCallback): string;
export function captureBreadcrumb(breadcrumb: any): void;
export function setDataCallback(fn: DataCallback): Client;
export function setShouldSendCallback(fn: ShouldSendCallback): Client;
export function context<T>(ctx: any, func: () => T): T;
export function context<T>(func: () => T): T;

export const version: string;
export function disableConsoleAlerts(): void;

export namespace utils {
    function consoleAlert(msg: string): void;
    function parseDSN(dsn: string | false): parsedDSN | false;
}

export class Client extends EventEmitter {
    constructor(options?: ConstructorOptions);
    constructor(dsn?: string | false, options?: ConstructorOptions);
    config(options?: ConstructorOptions): this;
    config(dsn?: string | false, options?: ConstructorOptions): this;
    install(cb?: FatalErrorCallback): this;
    uninstall(): this;
    wrap<T>(func: () => T): () => T;
    wrap<T>(options: any, func: () => T): () => T;
    setContext(ctx: any): this;
    mergeContext(ctx: any): this;
    getContext(): any;
    requestHandler(): (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
    errorHandler(): (e: Error, req: IncomingMessage, res: ServerResponse, next: () => void) => void;
    captureException(error: Error, cb?: CaptureCallback): string;
    captureException(error: Error, options?: CaptureOptions, cb?: CaptureCallback): string;
    captureMessage(message: string, cb?: CaptureCallback): string;
    captureMessage(message: string, options?: CaptureOptions, cb?: CaptureCallback): string;
    captureBreadcrumb(breadcrumb: any): void;
    setDataCallback(fn: DataCallback): this;
    setShouldSendCallback(fn: ShouldSendCallback): this;
    context<T>(ctx: any, func: () => T): T;
    context<T>(func: () => T): T;
    process(kwargs: any, cb?: () => void): void; // todo: part of public API?
    process(eventId: string, kwargs: any, cb?: () => void): void; // todo: part of public API?
}

export interface ConstructorOptions {
    name?: string;
    logger?: string;
    release?: string;
    environment?: string;
    tags?: { [key: string]: string };
    extra?: { [key: string]: any };
    dataCallback?: DataCallback;
    maxReqQueueCount?: number;
    sampleRate?: number;
    sendTimeout?: number;
    shouldSendCallback?: ShouldSendCallback;
    transport?: transports.Transport;
    captureUnhandledRejections?: boolean;
    maxBreadcrumbs?: number;
    autoBreadcrumbs?: boolean | { [breadcrumbType: string]: boolean };
    parseUser?: boolean | string[] | parseUserCallback;
}

export type parseUserCallback = (req: any) => any;

export interface parsedDSN {
    protocol: string;
    public_key: string;
    private_key: string;
    host: string;
    path: string;
    project_id: string;
    port: number;
}

export type FatalErrorCallback = (err: Error, sendErr: Error | null | undefined, eventId: string) => void;

export type CaptureCallback = (sendErr: Error | null | undefined, eventId: any) => void;

/**
 * Needs to return the modified data. It is not enough
 * to just mutate the data and return nothing.
 * https://github.com/getsentry/raven-node/blob/6f7145161a33134168ca87b53bb99b9b6d3c89e4/lib/client.js#L246-L248
 */
export type DataCallback = (data: { [key: string]: any }) => any;

export type ShouldSendCallback = (data: { [key: string]: any }) => boolean;

export interface CaptureOptions {
    tags?: { [key: string]: string };
    extra?: { [key: string]: any };
    fingerprint?: string[];
    level?: string;
    req?: IncomingMessage;
    user?: any;
}

export namespace transports {
  interface HTTPTransportOptions {
    hostname?: string;
    path?: string;
    headers?: OutgoingHttpHeaders;
    method?: 'POST' | 'GET';
    port?: number;
    ca?: string;
    agent?: Agent;
    rejectUnauthorized?: boolean;
  }
  abstract class Transport extends EventEmitter {
    abstract send(
      client: Client,
      message: any,
      headers: OutgoingHttpHeaders,
      eventId: string,
      cb: CaptureCallback
    ): void;
  }
  class HTTPTransport extends Transport {
    defaultPort: string;
    options: HTTPTransportOptions;
    agent: Agent;
    constructor(options?: HTTPTransportOptions);
    send(
      client: Client,
      message: any,
      headers: OutgoingHttpHeaders,
      eventId: string,
      cb: CaptureCallback
    ): void;
  }
  class HTTPSTransport extends HTTPTransport {
  }
  const https: HTTPSTransport;
  const http: HTTPTransport;
}
