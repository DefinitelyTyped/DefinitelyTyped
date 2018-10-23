import { EventEmitter } from "events";
import { ConnectOptions } from "./connect";
import { AddressInfo } from "./connect-failover/getAddressInfo";

import Client = require("./Client");

declare class ConnectFailover extends EventEmitter {
    constructor(servers?: ConnectOptions[] | string, options?: ConnectFailover.ConnectFailoverOptions);

    addServer(config: ConnectOptions | string): void;

    getReconnectDelay(reconnects: number): number;

    connect(callback: (error: Error | null, client: Client, reconnect: () => void, server: ConnectFailover.Server) => void): {
        abort: () => void;
    };

    on(event: "error", listener: (err: ConnectFailover.ConnectError, server: ConnectFailover.ConnectState) => void): this;
    on(event: "connect" | "connecting", listener: (server: ConnectFailover.ConnectState) => void): this;
}

export = ConnectFailover;

declare namespace ConnectFailover {
    interface ConnectFailoverOptions {
        // Milliseconds delay of the first reconnect
        initialReconnectDelay?: number;

        // Maximum milliseconds delay of any reconnect
        maxReconnectDelay?: number;

        // Exponential increase of the reconnect delay
        useExponentialBackOff?: boolean;

        // The exponent used in the exponential backoff attempts
        reconnectDelayExponent?: number;

        // Maximum number of reconnects
        maxReconnects?: number;

        // Randomly choose a server to use for reconnect
        randomize?: boolean;

        // Override the connect function
        connectFunction?: (options: ConnectOptions, connectionListener?: (err: Error | null, client: Client) => void) => Client;
    }

    interface Server {
        connectOptions: ConnectOptions;
        remoteAddress: AddressInfo;

        blacklist(error?: Error): void;
        isBlacklisted(): boolean;
        getBlacklistError(): Error;
    }

    // Internal class, which is not exported
    interface ConnectState {
        serverProperties: Server;
        failedConnects: number;
    }

    interface ConnectError extends Error {
        connectArgs: ConnectOptions;
    }
}
