/// <reference types="node"/>

import type {EventEmitter} from "events"

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

export function chainSerialPorts(clientPort: any, serverPort: any): void
