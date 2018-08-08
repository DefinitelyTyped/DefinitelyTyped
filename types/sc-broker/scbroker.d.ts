import { EventEmitter } from "events";
import { SCServer, SCServerSocket } from "socketcluster-server";
import { FlexiMap, KeyChain } from "fleximap";
import { ExpiryManager } from "expirymanager";

export = SCBroker;

interface Subscriptions {
    [socketId: number]: {
        [channel: string]: SCServerSocket;
    };
}

declare class SCBroker extends EventEmitter {
    id: number;
    options: SCServer.SCServerOptions;
    instanceId: number;
    dataMap: FlexiMap;
    dataExpirer: ExpiryManager;
    subscriptions: Subscriptions;

    constructor(options?: SCServer.SCServerOptions);

    on(event: "subscribe" | "unsubscribe", listener: (channel: string) => void): this;
    on(event: "publish", listener: (channel: string, data: any) => void): this;
    on(event: "masterMessage", listener: (data: any, respond: (err: Error | null, responseData: any) => void) => void): this;

    publish(channel: string, message: any): void;
    run(): void;
    exec(query: (dataMap: FlexiMap, dataExpirer: ExpiryManager, subscriptions: Subscriptions) => any, baseKey?: KeyChain): any;
    sendToMaster(data: any, callback?: (err: Error | null, responseData: any) => void): void;
}
