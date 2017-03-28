// Type definitions for raven 1.2
// Project: https://github.com/getsentry/raven-node
// Definitions by: Scott Cooper <https://github.com/scttcper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from 'http';
import { EventEmitter } from 'events';

declare namespace Raven {
  const version: string;
  function config(dsn: string | false, options?: ConstructorOptions): Client;
  function wrap(func: () => void, onErr?: () => void): () => void;
  function wrap(options: any, func: () => void, onErr?: () => void): () => void;
  function interceptErr(ctx: any): Client;
  function setContext(ctx: any): Client;
  function captureException(e: Error, cb?: CaptureCallback): Client;
  function captureException(e: Error, options?: CaptureOptions, cb?: CaptureCallback): Client;
  function mergeContext(ctx: any): Client;
  function getContext(): any;
  function errorHandler(): (e: Error, req: IncomingMessage, res: ServerResponse, next: () => void) => void;
  function context(ctx: any, func: () => void, onErr?: () => void): Client;
  function context(func: () => void, onErr?: () => void): Client;
  function captureBreadcrumb(breadcrumb: any): void;
  function disableConsoleAlerts(): void;
  function consoleAlert(msg: string): void;
  function parseDSN(dsn: string | false): parsedDSN;

  class Client extends EventEmitter  {
    constructor(options: ConstructorOptions);
    constructor(dsn: string, options?: ConstructorOptions);
    config(dsn: string, options?: ConstructorOptions): Client;
    install(options?: ConstructorOptions, cb?: () => void): Client;
    setContext(ctx: any): Client;
    requestHandler(): (req: IncomingMessage, res: ServerResponse, next: () => void) => void;
    errorHandler(): (e: Error, req: IncomingMessage, res: ServerResponse, next: () => void) => void;
    captureException(error: Error, cb?: CaptureCallback): void;
    captureException(error: Error, options?: CaptureOptions, cb?: CaptureCallback): void;
    captureMessage(message: string, cb?: CaptureCallback): void;
    captureMessage(message: string, options?: CaptureOptions, cb?: CaptureCallback): void;
    captureBreadcrumb(breadcrumb: any): void;
    setUserContext(data: UserData): void;
    setDataCallback(fn: DataCallback): void;
    context(ctx: any, func: () => void, onErr?: () => void): Client;
    context(func: () => void, onErr?: () => void): Client;
    process(kwargs: any, cb?: () => void): void;
    process(eventId: string, kwargs: any, cb?: () => void): void;
  }

  interface ConstructorOptions {
    name?: string;
    logger?: string;
    release?: string;
    environment?: string;
    tags?: { string: string };
    extra?: { string: any };
    dataCallback?: DataCallback;
    transport?: () => void;
    captureUnhandledRejections?: boolean;
    autoBreadcrumbs?: boolean | object;
  }

  interface UserData {
    id: string;
    handle?: string;
  }

  interface parsedDSN {
    protocol: string;
    public_key: string;
    private_key: string;
    host: string;
    path: string;
    project_id: string;
    port: number;
  }

  interface CaptureCallback {
    (err: { string: any }, eventId: any): void;
  }

  interface DataCallback {
    (data: { string: any }): void;
  }

  interface TransportCallback {
    (options: { string: any }): void;
  }

  interface CaptureOptions {
    tags?: { string: string };
    extra?: { string: any };
    fingerprint?: string;
    level?: string;
  }
}

export = Raven;
export as namespace Raven;
