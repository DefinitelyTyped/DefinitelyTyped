// Type definitions for phin 3.3
// Project: https://github.com/ethanent/phin
// Definitions by: Tony Wooster <https://github.com/twooster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { ClientRequestArgs, IncomingMessage } from 'http';
import { URL } from 'url';
import { Response as CentraResponse } from 'centra';

type Options = Phin.Options;
type BufferResponse = Phin.BufferResponse;
type StreamResponse = Phin.StreamResponse;
type JsonResponse = Phin.JsonResponse;
type DefaultOpts = Phin.DefaultOpts;
type BatchResponse = JsonResponse | BufferResponse;
type AnyResponse = BatchResponse | StreamResponse;

interface PhinFactory {
    (optsOrUrl: (Options & { parse?: 'none', stream?: false }) | string): Promise<BufferResponse>;
    (optsOrUrl: Options & { parse: 'json', stream?: false }): Promise<JsonResponse>;
    (optsOrUrl: Options & { stream: true }): Promise<StreamResponse>;
    (optsOrUrl: Options): Promise<AnyResponse>;

    promisified(optsOrUrl: (Options & { parse?: 'none', stream?: false }) | string): Promise<BufferResponse>;
    promisified(optsOrUrl: Options & { parse: 'json', stream?: false }): Promise<JsonResponse>;
    promisified(optsOrUrl: Options & { stream: true }): Promise<StreamResponse>;
    promisified(optsOrUrl: Options): Promise<AnyResponse>;

    unpromisified(optsOrUrl: (Options & { parse?: 'none', stream?: false }) | string, cb: (err: unknown, resp: BufferResponse) => unknown): void;
    unpromisified(optsOrUrl: Options & { parse: 'json', stream?: false }, cb: (err: unknown, resp: JsonResponse) => unknown): void;
    unpromisified(optsOrUrl: Options & { stream: true }, cb: (err: unknown, resp: StreamResponse) => unknown): void;
    unpromisified(optsOrUrl: Options, cb: (err: unknown, resp: AnyResponse) => unknown): void;

    defaults(defaultOpts: DefaultOpts & { parse: 'json', stream?: false }):
    {
        (optsOrUrl: Options & { stream: true }): Promise<StreamResponse>
        (optsOrUrl: Options & { parse: 'none', stream?: false }): Promise<BufferResponse>
        (optsOrUrl: (Options & { parse?: 'json', stream?: false }) | string): Promise<JsonResponse>
        (optsOrUrl: Options): Promise<AnyResponse>
    };

    defaults(defaultOpts: DefaultOpts & { parse?: 'none', stream?: false }):
    {
        (optsOrUrl: Options & { stream: true }): Promise<StreamResponse>
        (optsOrUrl: Options & { parse: 'json', stream?: false }): Promise<JsonResponse>
        (optsOrUrl: (Options & { parse?: 'none', stream?: false }) | string): Promise<BufferResponse>
        (optsOrUrl: Options): Promise<AnyResponse>
    };

    defaults(defaultOpts: DefaultOpts & { parse: 'json', stream: true }):
    {
        (optsOrUrl: Options & { parse: 'none', stream: false }): Promise<BufferResponse>
        (optsOrUrl: Options & { parse?: 'json', stream: false }): Promise<JsonResponse>
        (optsOrUrl: (Options & { stream?: true }) | string): Promise<StreamResponse>
        (optsOrUrl: Options | string): Promise<AnyResponse>
    };

    defaults(defaultOpts: DefaultOpts & { parse?: 'none', stream: true }):
    {
        (opts: Options & { parse: 'json', stream: false }): Promise<JsonResponse>
        (opts: Options & { parse?: 'none', stream: false }): Promise<BufferResponse>
        (opts: (Options & { stream?: true }) | string): Promise<StreamResponse>
        (opts: Options): Promise<AnyResponse>
    };

    defaults(defaultOpts: DefaultOpts):
    {
        (optsOrUrl: Options & { stream: true }): Promise<StreamResponse>
        (optsOrUrl: Options & { parse: 'json', stream: false }): Promise<JsonResponse>
        (optsOrUrl: Options & { parse: 'none', stream: false }): Promise<BufferResponse>
        (optsOrUrl: Options | string): Promise<AnyResponse>
    };
}

declare const Phin: PhinFactory;

declare namespace Phin {
    interface DefaultOpts {
        url?: string;
        method?: string;
        data?: any;
        form?: { [k: string]: string };
        headers?: { [k: string]: string };
        core?: ClientRequestArgs;
        parse?: 'none' | 'json';
        followRedirects?: boolean;
        compression?: boolean;
        timeout?: number | null;
        hostname?: string;
        port?: number;
        path?: string;
        stream?: boolean;
    }

    interface Options extends DefaultOpts {
        url: string;
    }

    interface BatchOptions extends Options {
        stream: false;
    }

    interface StreamOptions extends Options {
        stream: true;
    }

    interface StreamResponse extends IncomingMessage {
        stream: StreamResponse;
    }

    interface BufferResponse extends IncomingMessage {
        body: Buffer;
    }

    interface JsonResponse extends IncomingMessage {
        body: any;
    }
}

export = Phin;
