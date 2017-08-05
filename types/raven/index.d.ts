// Type definitions for raven 2.1
// Project: https://github.com/getsentry/raven-node
// Definitions by: Scott Cooper <https://github.com/scttcper>
//                 Dmitrii Sorin <https://github.com/1999>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from 'http';
import { EventEmitter } from 'events';

export const version: string;
export function config(dsn: string | false, options?: ConstructorOptions): Client;
export function wrap(func: () => void, onErr?: () => void): () => void;
export function wrap(options: any, func: () => void, onErr?: () => void): () => void;
export function interceptErr(ctx: any): Client;
export function setContext(ctx: any): Client;
export function captureException(e: Error, cb?: CaptureCallback): string;
export function captureException(e: Error, options?: CaptureOptions, cb?: CaptureCallback): string;
export function captureMessage(message: string, cb?: CaptureCallback): string;
export function captureMessage(message: string, options?: CaptureOptions, cb?: CaptureCallback): string;
export function mergeContext(ctx: any): Client;
export function getContext(): any;
export function requestHandler(): (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
export function errorHandler(): (e: Error, req: IncomingMessage, res: ServerResponse, next: () => void) => void;
export function context(ctx: any, func: () => void, onErr?: () => void): Client;
export function context(func: () => void, onErr?: () => void): Client;
export function captureBreadcrumb(breadcrumb: any): void;
export function disableConsoleAlerts(): void;
export function consoleAlert(msg: string): void;
export function parseDSN(dsn: string | false): parsedDSN;

export class Client extends EventEmitter {
    constructor(options: ConstructorOptions);
    constructor(dsn: string, options?: ConstructorOptions);
    config(dsn: string, options?: ConstructorOptions): Client;
    install(options?: ConstructorOptions, cb?: () => void): Client;
    setContext(ctx: any): Client;
    requestHandler(): (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
    errorHandler(): (e: Error, req: IncomingMessage, res: ServerResponse, next: () => void) => void;
    captureException(error: Error, cb?: CaptureCallback): string;
    captureException(error: Error, options?: CaptureOptions, cb?: CaptureCallback): string;
    captureMessage(message: string, cb?: CaptureCallback): string;
    captureMessage(message: string, options?: CaptureOptions, cb?: CaptureCallback): string;
    captureBreadcrumb(breadcrumb: any): void;
    setUserContext(data: UserData): void;
    setDataCallback(fn: DataCallback): void;
    context(ctx: any, func: () => void, onErr?: () => void): Client;
    context(func: () => void, onErr?: () => void): Client;
    process(kwargs: any, cb?: () => void): void;
    process(eventId: string, kwargs: any, cb?: () => void): void;
}

export interface ConstructorOptions {
    name?: string;
    logger?: string;
    release?: string;
    environment?: string;
    tags?: { [key: string]: string };
    extra?: { [key: string]: any };
    dataCallback?: DataCallback;
    transport?(): void;
    captureUnhandledRejections?: boolean;
    autoBreadcrumbs?: boolean | any;
    parseUser?: boolean | string[] | parseUserCallback;
}

export type parseUserCallback = (req: any) => any;

export interface UserData {
    id: string;
    handle?: string;
}

export interface parsedDSN {
    protocol: string;
    public_key: string;
    private_key: string;
    host: string;
    path: string;
    project_id: string;
    port: number;
}

export type CaptureCallback = (err: { [key: string]: any }, eventId: any) => void;

export type DataCallback = (data: { [key: string]: any }) => void;

export type TransportCallback = (options: { [key: string]: any }) => void;

export interface CaptureOptions {
    tags?: { [key: string]: string };
    extra?: { [key: string]: any };
    fingerprint?: string[];
    level?: string;
    req?: IncomingMessage;
    user?: any;
}
