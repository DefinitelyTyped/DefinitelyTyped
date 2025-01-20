/// <reference types="node" />

import { Duplex, DuplexOptions } from "stream";
import WebSocket = require("ws");

declare namespace Socket {
    interface Options extends DuplexOptions {
        /** websocket server url */
        url?: string | undefined;
        /** raw websocket instance to wrap */
        socket?: WebSocket | undefined;
    }
}

declare class Socket extends Duplex {
    static WEBSOCKET_SUPPORT: boolean;

    constructor(options: Socket.Options | string);

    /** Send text/binary data to the WebSocket server */
    send(chunk: any): void;

    /** Destroy and cleanup this websocket connection */
    destroy(err?: Error): any;
}

export = Socket;
