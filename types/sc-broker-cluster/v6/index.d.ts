// Type definitions for sc-broker-cluster 6.1
// Project: https://github.com/SocketCluster/sc-broker-cluster
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { SCServerSocket, SCServer } from "socketcluster-server";
import { BrokerStartInfo, BrokerExitInfo } from "socketcluster";
import { SpliceOptions, QueryOptions } from "sc-broker";
import { SCChannel } from "sc-channel";
import { EventEmitter } from "events";
import { AsyncResultArrayCallback } from "async";
import { KeyChain, FlexiMap } from "fleximap";
import { Keys } from "expirymanager";
import { ClientCluster } from "./clientcluster";

export class AbstractDataClient extends EventEmitter {
    constructor(dataClient: ClientCluster);

    set(keyChain: KeyChain, value: any, getValue?: boolean, callback?: (err?: Error) => void): void;
    set(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;

    expire(keys: Keys, seconds: number, callback?: (err?: Error) => void): void;
    unexpire(keys: Keys, callback?: (err?: Error) => void): void;

    add(keyChain: KeyChain, value: any, getValue?: boolean, callback?: (err?: Error) => void): void;
    add(keyChain: KeyChain, value: any, callback?: (err?: Error) => void): void;

    get(keyChain: KeyChain, callback: (err: Error | null, value: any) => void): void;

    getRange(keyChain: KeyChain, fromIndex: number, toIndex: number, callback: (err: Error | null, value: any) => void): void;
    getRange(keyChain: KeyChain, fromIndex: number, callback: (err: Error | null, value: any) => void): void;

    getAll(callback: (err: Error | null, value: any[] | object) => void): void;

    count(keyChain: KeyChain, callback: (err: Error | null, value: number) => void): void;

    remove(keyChain: KeyChain, getValue?: boolean, callback?: (err?: Error) => void): void;
    remove(keyChain: KeyChain, callback?: (err?: Error) => void): void;

    removeRange(keyChain: KeyChain, fromIndex: number, toIndex?: number, getValue?: boolean, callback?: (err?: Error) => void): void;
    removeRange(keyChain: KeyChain, fromIndex: number, toIndex?: number, callback?: (err?: Error) => void): void;
    removeRange(keyChain: KeyChain, fromIndex: number, callback?: (err?: Error) => void): void;

    removeAll(callback?: (err: Error) => void): void;

    splice(keyChain: KeyChain, options?: SpliceOptions, callback?: (err?: Error) => void): void;
    splice(keyChain: KeyChain, callback?: (err?: Error) => void): void;

    pop(keyChain: KeyChain, callback: (err: Error | null, data: any) => void): void;

    hasKey(keyChain: KeyChain, callback: (err: Error | null, data: boolean) => void): void;

    extractKeys(keyChain: KeyChain): string[];

    extractValues(keyChain: KeyChain): any[];

    exec(query: (datamap: FlexiMap) => void, options?: QueryOptions, callback?: (err: Error | null, data: any) => void): void;
    exec(query: (datamap: FlexiMap) => void, callback: (err: Error | null, data: any) => void): void;
}

export type handlerFunction = (data: any) => void;

export type mapperFunction = (keyChain: KeyChain, method: string, clientIds: number[]) => number | number[];

/**
 * The exchange object is a top-level SCBrokerClient which lets you publish events and manipulate data within your brokers - It represents a cluster of 1 or more brokers.
 */
export class SCExchange extends AbstractDataClient {
    constructor(privateClientCluster: ClientCluster, publicClientCluster: ClientCluster, ioClusterClient: Client);

    send(data: any, mapIndex: number | string | string[] | null, callback?: AsyncResultArrayCallback<any>): void;

    publish(channelName: string, data: any, callback?: (err?: Error) => void): void;

    subscribe(channelName: string): SCChannel;
    unsubscribe(channelName: string): void;

    channel(channelName: string): SCChannel;
    destroyChannel(channelName: string): void;

    subscriptions(includePending?: boolean): string[];
    isSubscribed(channelName: string, includePending?: boolean): boolean;

    watch(channelName: string, handler: handlerFunction): void;
    unwatch(channelName: string, handler?: handlerFunction): void;
    watchers(channelName: string): handlerFunction[];

    setMapper(mapper: mapperFunction): void;
    getMapper(): mapperFunction;

    map(keyChain: KeyChain, method: string): { type: string; targets: Client[] };

    destroy(): void;
}

export interface SCBrokerClusterServerOptions {
    brokers: string[];
    debug?: boolean;
    inspect?: boolean;
    instanceId?: string;
    secretKey?: string;
    expiryAccuracy?: number;
    downgradeToUser: number | string;
    appBrokerControllerPath?: string;
    processTermTimeout?: number;
    ipcAckTimeout?: number;
    brokerOptions?: SCServer.SCServerOptions;
}

export class Server extends EventEmitter {
    constructor(options: SCBrokerClusterServerOptions);

    on(event: "brokerStart", listener: (brokerInfo: BrokerStartInfo) => void): this;
    on(event: "brokerExit", listener: (brokerInfo: BrokerExitInfo) => void): this;
    on(event: "brokerMessage", listener: (brokerId: string, data: any, callback: (err: Error | null, data: any) => void) => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "error", listener: (err?: Error) => void): this;

    sendToBroker(brokerId: string, data: any, callback?: (err: Error | null, data: any) => void): void;
    killBrokers(): void;
    destroy(): void;
}

export interface SCBrokerClusterClientOptions {
    brokers: string[];
    secretKey?: string;
    pubSubBatchDuration?: number;
    connectRetryErrorThreshold: number;
}

export interface MessagePacket {
    channel: string;
    data: any;
}

export class Client extends EventEmitter {
    constructor(options: SCBrokerClusterClientOptions);

    exchange(): SCExchange;

    options: SCBrokerClusterClientOptions;

    on(event: "error", listener: (err?: Error) => void): this;
    on(event: "warning", listener: (warning?: Error) => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "message", listener: (packet: MessagePacket) => void): this;

    destroy(callback?: AsyncResultArrayCallback<SCExchange>): void;

    subscribe(channel: string, callback?: (err?: Error) => void): void;
    unsubscribe(channel: string, callback?: () => void): void;
    unsubscribeAll(callback?: AsyncResultArrayCallback<any>): void;
    isSubscribed(channel: string, includePending?: boolean): boolean;

    subscribeSocket(socket: SCServerSocket, channel: string, callback?: (err?: Error) => void): void;
    unsubscribeSocket(socket: SCServerSocket, channel: string, callback?: () => void): void;

    setSCServer(scServer: SCServer): void;
}
