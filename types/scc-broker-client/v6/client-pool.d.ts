import { EventEmitter } from 'events';
import { SCClientSocket } from 'socketcluster-client';
import Hasher = require('./hasher');
import { Secret } from 'jsonwebtoken';

interface ClientPoolOptions {
    clientCount?: number;
    targetURI: string;
    authKey?: Secret;
}

interface BrokenDownURI {
    hostname: string;
    port?: string;
    secure?: true;
}

declare class ClientPool extends EventEmitter {
    hasher: Hasher;
    clientCount: number;
    targetURI: string;
    authKey?: Secret;
    areClientListenersBound: boolean;
    clients: SCClientSocket[];

    constructor(options?: ClientPoolOptions);

    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'subscribe', listener: (data: ClientPool.SubscribeData) => void): this;
    on(event: 'subscribeFail', listener: (data: ClientPool.SubscribeFailData) => void): this;
    on(event: 'publish' | 'publishFail', listener: (data: ClientPool.PublishData) => void): this;

    bindClientListeners(): void;
    unbindClientListeners(): void;

    breakDownURI(uri: string): BrokenDownURI;

    selectClient(key: string): SCClientSocket;

    publish(channelName: string, data: any): void;

    subscriptions(includePending?: boolean): string[];
    subscribeAndWatch(channelName: string, handler: (data: any) => void): void;

    destroyChannel(channelName: string): void;
    destroy(): void;
}

export = ClientPool;

declare namespace ClientPool {
    interface SubscribeData {
        targetURI: string;
        poolIndex: number;
        channel: string;
    }

    interface SubscribeFailData extends SubscribeData {
        error: Error;
    }

    interface PublishData {
        targetURI: string;
        poolIndex: number;
        channel: string;
        data: any;
    }
}
