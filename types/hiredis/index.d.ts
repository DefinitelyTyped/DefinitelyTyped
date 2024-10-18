/// <reference types="node" />

import * as net from "net";

export interface Config {
    return_buffers: boolean;
}

export class Reader {
    constructor(config?: Config);
    feed(reply: string | Buffer): void;
    get(): string | Buffer;
}

export function createConnection(port: number, host: string): net.Socket;
