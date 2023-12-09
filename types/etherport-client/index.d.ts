/// <reference types="node"/>

import type { EventEmitter } from "node:events";
import type { Duplex } from "node:stream";

export interface EtherPortClientConstructorArgs {
    host: string;
    port: number;
    reconnectTimeout?: number;
}

// tslint:disable-next-line:no-unnecessary-class
export class EtherPortClient extends EventEmitter {
    path: string;
    name: string;
    host: string;
    port: number;

    constructor(options: EtherPortClientConstructorArgs);
}

export function chainSerialPorts(clientPort: EtherPortClient, serverPort: Duplex): void;
