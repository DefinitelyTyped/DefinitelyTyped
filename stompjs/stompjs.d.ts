// Type definitions for stompjs 2.3.x
// Project: https://github.com/jmesnil/stomp-websocket
// Definitions by: Jimi (Dimitris) Charalampidis <https://github.com/jimic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'stompjs' {

    export const VERSIONS: {
        V1_0: '1.0',
        V1_1: '1.1',
        V1_2: '1.2',
        supportedVersions: () => '1.1,1.0'.split(',');
    };

    class Client {

        connected: boolean;
        counter: number;
        heartbeat: {
            incoming: number,
            outgoing: number
        };
        maxWebSocketFrameSize: number;
        subscriptions: Object;
        ws: WebSocket;

        debug(...args: string[]): any;

        connect(...args: any[]): any;
        disconnect(disconnectCallback: () => any, headers?: Object): any;

        send(destination: string, headers?: Object, body?: string): any;
        subscribe(destination: string, callback?: (message: Message) => any, headers?: Object): any;
        unsubscribe(): any;

        begin(transaction: string): any;
        commit(transaction: string): any;
        abort(transaction: string): any;

        ack(messageID: string, subscription: string, headers?: Object): any;
        nack(messageID: string, subscription: string, headers?: Object): any;
    }

    export interface Message {
        command: string;
        headers: Object;
        body: string;

        ack(headers?: Object): any;
        nack(headers?: Object): any;
    }

    export class Frame {
        constructor(command: string, headers?: Object, body?: string);

        toString(): string;
        sizeOfUTF8(s: string): number;
        unmarshall(datas: any): any;
        marshall(command: string, headers?: Object, body?: string): any;
    }

    export function client(url: string, protocols?: string | Array<string>): Client;
    export function over(ws: WebSocket): Client;
    export function overTCP(host: string, port: number): Client;
    export function overWS(url: string): Client;
    export function setInterval(interval: number, f: (...args: any[]) => void): NodeJS.Timer;
    export function clearInterval(id: NodeJS.Timer): void;
}
