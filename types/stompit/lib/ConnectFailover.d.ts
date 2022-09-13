import { EventEmitter } from "events";
import { ConnectOptions, ConnectionListener } from "./connect";
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
        initialReconnectDelay?: number | undefined;

        // Maximum milliseconds delay of any reconnect
        maxReconnectDelay?: number | undefined;

        // Exponential increase of the reconnect delay
        useExponentialBackOff?: boolean | undefined;

        // The exponent used in the exponential backoff attempts
        reconnectDelayExponent?: number | undefined;

        // Maximum number of reconnects
        maxReconnects?: number | undefined;

        // Randomly choose a server to use for reconnect
        randomize?: boolean | undefined;

        // Override the connect function
        connectFunction?: ((options: ConnectOptions, connectionListener?: ConnectionListener) => Client) | undefined;
    }

    interface Server {
        connectOptions: ConnectOptions;
        remoteAddress: AddressInfo;
    }

    interface ConnectState {
        serverProperties: Server;
        failedConnects: number;

        blacklist(error?: Error): void;
        isBlacklisted(): boolean;
        getBlacklistError(): Error;
    }

    interface ConnectError extends Error {
        connectArgs: ConnectOptions;
    }
}
