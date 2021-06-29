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
        passphrase?: string;
    }

    interface ConstructorOptions {
        socketPath?: string;
        host?: string;
        port?: number | string;
        username?: string;
        ca?: string | string[] | Buffer | Buffer[];
        cert?: string | string[] | Buffer | Buffer[];
        key?: string | string[] | Buffer | Buffer[] | KeyObject[];
        protocol?: 'https' | 'http' | 'ssh';
        sshOptions?: ConnectConfig;
        timeout?: number;
        version?: string;
        connectionTimeout?: number;
        checkServerIdentity?: boolean;
        agent?: Agent;
        headers?: OutgoingHttpHeaders;
        Promise?: typeof Promise;
    }

    interface DialOptions {
        path: string;
        method?: string;
        headers?: OutgoingHttpHeaders;
        allowEmpty?: boolean;
        options?: {
            _query?: object;
            _body?: any;
            [key: string]: any;
        };
        authconfig?: {
            key?: string;
            base64?: string;
            [key: string]: any;
        };
        registryconfig?: {
            base64?: string;
            [key: string]: any;
        };
        file?: string | Buffer | NodeJS.ReadableStream;
        hijack?: boolean;
        openStdin?: boolean;
        isStream?: boolean;
        statusCodes?: StatusCodes;
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
