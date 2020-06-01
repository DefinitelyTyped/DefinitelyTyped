// Type definitions for protoo-client 4.0
// Project: https://protoojs.org
// Definitions by: Marks Polakovs <https://github.com/markspolakovs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as http from 'http';
import * as retry from 'retry';
import * as websocket from 'websocket';

export interface ProtooRequest {
    request: true;
    id: number;
    method: string;
    data?: any;
}

export type ProtooResponse =
    | { response: true; id: number; ok: true; data: any }
    | { response: true; id: number; ok: false; errorCode: number; errorReason: string };

export interface ProtooNotification {
    notification: true;
    method: string;
    data?: any;
}

export class WebSocketTransport {
    constructor(
        url: string,
        options?: {
            protocols?: string | string[];
            origin?: string;
            headers?: http.OutgoingHttpHeaders;
            requestOptions?: object;
            clientConfig?: websocket.IClientConfig;
            retry?: retry.OperationOptions;
        },
    );

    readonly closed: boolean;

    close(): void;

    send(message: any): Promise<void>;
}

export class Peer {
    constructor(transport: WebSocketTransport);

    data: any;

    readonly closed: boolean;
    readonly connected: boolean;

    request(method: string, data?: any): Promise<any>;

    notify(method: string, data?: any): Promise<any>;

    close(): void;

    on(evt: 'open' | 'disconnected' | 'close', handler: () => any): void;

    on(evt: 'failed', handler: (currentAttempt: number) => any): void;

    on(
        evt: 'request',
        handler: (
            request: ProtooRequest,
            accept: (data?: ProtooResponse) => void,
            reject: (error?: Error | number, errorReason?: string) => void,
        ) => any,
    ): void;

    on(evt: 'notification', handler: (notif: ProtooNotification) => any): void;
}
