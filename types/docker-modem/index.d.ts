// Type definitions for docker-modem 3.0
// Project: https://github.com/apocas/docker-modem
// Definitions by: Nasreddine Bac Ali <https://github.com/bacali95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { ConnectConfig } from 'ssh2';
import { ClientRequest, IncomingMessage, OutgoingHttpHeaders, RequestOptions, Agent } from 'http';
import { Socket } from 'net';
import { Duplex, DuplexOptions, Stream } from 'stream';

declare namespace DockerModem {
    class HttpDuplex extends Duplex {
        constructor(request: ClientRequest, response: IncomingMessage, options?: DuplexOptions);

        connect(request: ClientRequest, response: IncomingMessage): void;
    }

    interface KeyObject {
        pem: string | Buffer;
        passphrase?: string | undefined;
    }

    interface ConstructorOptions {
        socketPath?: string | undefined;
        host?: string | undefined;
        port?: number | string | undefined;
        username?: string | undefined;
        ca?: string | string[] | Buffer | Buffer[] | undefined;
        cert?: string | string[] | Buffer | Buffer[] | undefined;
        key?: string | string[] | Buffer | Buffer[] | KeyObject[] | undefined;
        protocol?: 'https' | 'http' | 'ssh' | undefined;
        sshOptions?: ConnectConfig | undefined;
        timeout?: number | undefined;
        version?: string | undefined;
        connectionTimeout?: number | undefined;
        checkServerIdentity?: boolean | undefined;
        agent?: Agent | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        Promise?: typeof Promise | undefined;
    }

    interface DialOptions {
        path: string;
        method?: string | undefined;
        headers?: OutgoingHttpHeaders | undefined;
        allowEmpty?: boolean | undefined;
        options?: {
            _query?: object | undefined;
            _body?: any;
            [key: string]: any;
        } | undefined;
        authconfig?: {
            key?: string | undefined;
            base64?: string | undefined;
            [key: string]: any;
        } | undefined;
        registryconfig?: {
            base64?: string | undefined;
            [key: string]: any;
        } | undefined;
        file?: string | Buffer | NodeJS.ReadableStream | undefined;
        hijack?: boolean | undefined;
        openStdin?: boolean | undefined;
        isStream?: boolean | undefined;
        statusCodes?: StatusCodes | undefined;
        abortSignal?: AbortSignal;
    }

    interface StatusCodes {
        [statusCode: number]: string | boolean;
    }

    interface RequestCallback {
        (
            err: Error | null,
            result: IncomingMessage | HttpDuplex | Socket | Buffer | object | null,
        ): void;
    }
}

declare class DockerModem {
    Promise: typeof Promise;

    constructor(options?: DockerModem.ConstructorOptions);

    dial(options: DockerModem.DialOptions, callback?: DockerModem.RequestCallback): void;

    demuxStream(stream: Stream, stdout: NodeJS.WritableStream, stderr: NodeJS.WritableStream): void;

    followProgress(
        stream: Stream,
        onFinished: (error: Error | null, result: any[]) => void,
        onProgress?: (obj: any) => void,
    ): void;

    private buildRequest(
        options: RequestOptions,
        context: DockerModem.DialOptions,
        data: string | Buffer | NodeJS.ReadableStream | undefined,
        callback?: DockerModem.RequestCallback,
    ): void;

    private buildPayload(
        error: Error | undefined,
        isStream: boolean,
        statusCode: DockerModem.StatusCodes,
        openStdin: boolean,
        req: ClientRequest,
        res: IncomingMessage,
        json: Buffer | object | null,
        callback?: DockerModem.RequestCallback,
    ): void;

    private buildQuerystring(options: object): string;
}

export = DockerModem;
