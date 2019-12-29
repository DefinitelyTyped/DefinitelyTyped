// Type definitions for sc-channel 1.2
// Project: https://github.com/SocketCluster/sc-channel
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import Emitter = require("component-emitter");
import { SCExchange, handlerFunction } from "sc-broker-cluster";

export interface SCChannelOptions {
    waitForAuth?: boolean;
    batch?: boolean;
    data?: any;
}

export class SCChannel extends Emitter {
    readonly PENDING: "pending";
    readonly SUBSCRIBED: "subscribed";
    readonly UNSUBSCRIBED: "unsubscribed";

    name: string;
    state: ChannelState;
    waitForAuth: boolean;
    batch: boolean;
    data: any;

    constructor(name: string, client: SCExchange, options?: SCChannelOptions);

    setOptions(options?: SCChannelOptions): void;
    getState(): "pending" | "subscribed" | "unsubscribed";

    subscribe(options?: any): void;
    unsubscribe(): void;
    isSubscribed(includePending?: boolean): boolean;

    publish(data: any, callback?: (err?: Error) => void): void;

    watch(handler: handlerFunction): void;
    unwatch(handler?: handlerFunction): void;
    watchers(): handlerFunction[];

    destroy(): void;
}

export type ChannelState = "pending" | "subscribed" | "unsubscribed";
