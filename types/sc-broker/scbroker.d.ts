import { EventEmitter } from 'events';
import { FlexiMap, KeyChain } from 'fleximap';
import { ExpiryManager } from 'expirymanager';
import { ComSocket } from 'ncom';

interface Subscriptions {
    [socketId: number]: {
        [channel: string]: ComSocket;
    };
}

declare class SCBroker extends EventEmitter {
    readonly type: 'broker';

    readonly MIDDLEWARE_SUBSCRIBE: 'subscribe';
    readonly MIDDLEWARE_PUBLISH_IN: 'publishIn';

    id: number;
    debugPort: number;
    options: SCBroker.SCBrokerOptions;
    instanceId: number;
    dataMap: FlexiMap;
    dataExpirer: ExpiryManager;
    subscriptions: Subscriptions;

    constructor(options?: { run?: () => void });
    static create(options?: { run?: () => void }): SCBroker;

    on(event: "subscribe" | "unsubscribe", listener: (channel: string) => void): this;
    on(event: "publish", listener: (channel: string, data: any) => void): this;
    on(event: "masterMessage", listener: (data: any, respond: (err: Error | null, responseData: any) => void) => void): this;
    on(event: "message", listener: (message: any, respond: (err: Error | null, responseData: any) => void) => void): this;
    on(event: "warning", listener: (err: Error) => void): this;

    publish(channel: string, message: any): void;
    run(): void;
    exec(query: SCBroker.QueryFunction, baseKey?: KeyChain): any;

    addMiddleware(type: 'subscribe', middleware: SCBroker.SubscribeMiddleware): void;
    addMiddleware(type: 'publish', middleware: SCBroker.PublishMiddleware): void;

    removeMiddleware(type: 'subscribe', middleware: SCBroker.SubscribeMiddleware): void;
    removeMiddleware(type: 'publish', middleware: SCBroker.PublishMiddleware): void;

    sendToMaster(data: any, callback?: (err: Error | null, responseData: any) => void): void;
}

export = SCBroker;

declare namespace SCBroker {
    interface SCBrokerOptions {
        // An ID to associate with this specific instance of SC
        // this may be useful if you are running an SC app on multiple
        // hosts - You can access the instanceId from the Broker object
        // (inside brokerController) - If you don't provide an instanceId,
        // SC will generate a random one (UUID v4)
        instanceId?: string;

        // A key which various SC processes will use to interact with
        // scBroker broker processes securely, defaults to a 256 bits
        // cryptographically random hex string
        secretKey?: string;

        // In milliseconds, the timeout for calling res(err, data) when
        // your sendToWorker, sendToBroker or sendToMaster (IPC) call
        // expects an ACK response from the other process
        // (when callback is provided)
        ipcAckTimeout?: number;

        [additionalOptions: string]: any;
    }

    type SubscribeMiddleware = (req: SubscribeMiddlewareData) => void;

    interface SubscribeMiddlewareData {
        socket: ComSocket;
        channel: string;
    }

    type PublishMiddleware = (req: PublishMiddlewareData) => void;

    interface PublishMiddlewareData {
        socket: ComSocket;
        channel: string;
        command: object;
    }

    type QueryFunction = (dataMap: FlexiMap, dataExpirer: ExpiryManager, subscriptions: Subscriptions) => any;
}
