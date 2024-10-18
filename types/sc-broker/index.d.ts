import { EventEmitter } from "events";
import { Key, Keys } from "expirymanager";
import { FlexiMap, KeyChain } from "fleximap";

import { SCBrokerOptions } from "./scbroker";

export interface SCBrokerServerOptions {
    id?: string | undefined;
    instanceId?: string | undefined;
    debug?: boolean | undefined;
    inspect?: boolean | undefined;
    socketPath?: string | undefined;
    port?: number | undefined;
    expiryAccuracy?: number | undefined;
    downgradeToUser?: number | string | undefined;
    brokerControllerPath?: string | undefined;
    processTermTimeout?: number | undefined;
    ipcAckTimeout?: number | undefined;
    secretKey?: string | undefined;
    brokerOptions?: SCBrokerOptions | undefined;
}

export interface SCBrokerServer extends EventEmitter {
    options: SCBrokerServerOptions;
    socketPath?: string | undefined;
    port?: number | undefined;
    ipcAckTimeout: number;

    on(event: "error", listener: (err?: Error) => void): this;
    on(event: "brokerMessage", listener: BrokerMessageListener): this;
    on(event: "ready", listener: (data: any) => void): this;
    on(event: "exit", listener: (data: ExitData) => void): this;

    once(event: "error", listener: (err?: Error) => void): this;
    once(event: "brokerMessage", listener: BrokerMessageListener): this;
    once(event: "ready", listener: (data: any) => void): this;
    once(event: "exit", listener: (data: ExitData) => void): this;

    removeListener(event: "error", listener: (err?: Error) => void): this;
    removeListener(event: "brokerMessage", listener: BrokerMessageListener): this;
    removeListener(event: "ready", listener: (data: any) => void): this;
    removeListener(event: "exit", listener: (data: ExitData) => void): this;

    off(event: "error", listener: (err?: Error) => void): this;
    off(event: "brokerMessage", listener: BrokerMessageListener): this;
    off(event: "ready", listener: (data: any) => void): this;
    off(event: "exit", listener: (data: ExitData) => void): this;

    sendToBroker(data: any, callback?: (err: Error | null, data: any, brokerId: string) => void): void;

    destroy(): void;
}

export function createServer(options?: SCBrokerServerOptions): SCBrokerServer;

export type BrokerMessageListener = (
    brokerId: string,
    data: any,
    callback: (err: Error | null, data: any) => void,
) => void;

export interface ExitData {
    id: string;
    pid: number;
    code: number;
    signal: string;
}

export interface AutoReconnectOptions {
    initialDelay?: number | undefined;
    randomness?: number | undefined;
    multiplier?: number | undefined;
    maxDelay?: number | undefined;
}

export interface SCBrokerClientOptions {
    secretKey?: string | undefined;
    timeout?: number | undefined;
    socketPath?: string | undefined;
    port?: number | undefined;
    host?: string | undefined;
    autoReconnect?: boolean | undefined;
    autoReconnectOptions?: AutoReconnectOptions | undefined;
    connectRetryErrorThreshold?: number | undefined;
    pubSubBatchDuration?: number | undefined;
}

export interface QueryOptions {
    baseKey?: KeyChain | undefined;
    noAck?: boolean | undefined;
    data?: any;
}

export interface SpliceOptions {
    index?: number | undefined;
    count?: number | undefined;
    items?: any[] | undefined;
    getValue?: boolean | undefined;
    noAck?: boolean | undefined;
}

export interface SCBrokerClient extends EventEmitter {
    readonly CONNECTED: "connected";
    readonly CONNECTING: "connecting";
    readonly DISCONNECTED: "disconnected";

    socketPath?: string | undefined;
    port?: number | undefined;
    host?: string | undefined;
    autoReconnect: boolean;
    autoReconnectOptions?: AutoReconnectOptions | undefined;
    connectRetryErrorThreshold: number;
    state: "connected" | "connecting" | "disconnected";
    connectAttempts: number;
    pendingReconnect: boolean;
    pendingReconnectTimeout: number | null;

    on(event: "error", listener: (err?: Error) => void): this;
    on(event: "warning", listener: (warning?: Error) => void): this;
    on(event: "ready", listener: (data: any) => void): this;
    on(event: "message", listener: (channel: string, data: any) => void): this;
    on(event: "subscribeFail", listener: (err: Error | null, channel: string) => void): this;
    on(event: "subscribe", listener: (channel: string) => void): this;
    on(event: "unsubscribe", listener: () => void): this;

    isConnected(): boolean;

    subscribe(channel: string, ackCallback: (err?: Error) => void, force?: boolean): void;
    unsubscribe(channel: string, ackCallback: (err?: Error) => void): void;

    subscriptions(includePending?: boolean): string[];
    isSubscribed(channel: string, includePending?: boolean): boolean;

    publish(channel: string, data: any, callback: (err?: Error) => void): void;

    send(data: any, callback: (err?: Error) => void): void;

    set(keyChain: KeyChain, value: any, getValue?: boolean, callback?: (err?: Error) => void): void;
    set(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;

    expire(keys: Keys, seconds: number, callback?: (err?: Error) => void): void;
    unexpire(keys: Keys, callback?: (err?: Error) => void): void;
    getExpiry(key: Key, callback?: (err?: Error) => void): number;

    add(keyChain: KeyChain, value: any, getValue?: boolean, callback?: (err?: Error) => void): void;
    add(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;

    concat(keyChain: KeyChain, value: any, getValue?: boolean, callback?: (err?: Error) => void): void;
    concat(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;

    get(keyChain: KeyChain, callback: (err: Error | null, value: any) => void): void;

    getRange(
        keyChain: KeyChain,
        fromIndex: number,
        toIndex: number,
        callback: (err: Error | null, value: any) => void,
    ): void;
    getRange(keyChain: KeyChain, fromIndex: number, callback: (err: Error | null, value: any) => void): void;

    getAll(callback: (err: Error | null, value: any[] | object) => void): void;

    count(keyChain: KeyChain, callback: (err: Error | null, value: number) => void): void;

    exec(
        query: (datamap: FlexiMap) => void,
        options?: QueryOptions,
        callback?: (err: Error | null, data: any) => void,
    ): void;
    exec(query: (datamap: FlexiMap) => void, callback: (err: Error | null, data: any) => void): void;

    query(query: (datamap: FlexiMap) => void, data?: any, callback?: (err: Error | null, data: any) => void): void;
    query(query: (datamap: FlexiMap) => void, callback: (err: Error | null, data: any) => void): void;

    remove(keyChain: KeyChain, getValue?: boolean, callback?: (err?: Error) => void): void;
    remove(keyChain: KeyChain, callback?: (err?: Error) => void): void;

    removeRange(
        keyChain: KeyChain,
        fromIndex: number,
        toIndex?: number,
        getValue?: boolean,
        callback?: (err?: Error) => void,
    ): void;
    removeRange(keyChain: KeyChain, fromIndex: number, toIndex?: number, callback?: (err?: Error) => void): void;
    removeRange(keyChain: KeyChain, fromIndex: number, callback?: (err?: Error) => void): void;

    removeAll(callback?: (err: Error) => void): void;

    splice(keyChain: KeyChain, options?: SpliceOptions, callback?: (err?: Error) => void): void;
    splice(keyChain: KeyChain, callback?: (err?: Error) => void): void;

    pop(keyChain: KeyChain, callback: (err: Error | null, data: any) => void): void;

    hasKey(keyChain: KeyChain, callback: (err: Error | null, data: boolean) => void): void;

    extractKeys(keyChain: KeyChain): string[];

    extractValues(keyChain: KeyChain): any[];

    end(callback: (err?: Error) => void): void;
}

export function createClient(options?: SCBrokerClientOptions): SCBrokerClient;
