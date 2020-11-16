// Type definitions for mosca 2.8
// Project: https://github.com/mcollina/mosca
// Definitions by: Joao Gabriel Gouveia <https://github.com/GabrielGouv>
//                 Jerray Fu <https://github.com/jerray>
//                 Ran <https://github.com/ranto2012>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO add detailed definition.
// http://www.mosca.io/docs/lib/server.js.html#Server currently has no more description about this.
export interface ServerOptions {
    port?: number;
    host?: string;
    backend?: any;
    ascoltatore?: any;
    maxInflightMessages?: number;
    logger?: any;
    persistence?: any;
    secure?: {
        port: number;
        keyPath: string;
        certPath: string;
    };
    allowNonSecure?: boolean;
    http?: {
        port: number;
    };
    bundle?: any;
    static?: any;
    stats?: any;
}

export class Server {
    id: string;
    opts: any;
    modernOpts: any;
    clients: any;
    closed: boolean;

    constructor(opts: ServerOptions, callback?: () => void);

    on(when: string, callback: (() => void) | ((client: Client) => void) | ((packet: Packet, client: Client) => void)): void;
    on(when: 'clientConnected' | 'clientDisconnecting' | 'clientDisconnected', callback: (client: Client) => void): void;
    on(when: 'subscribed' | 'unsubscribed', callback: (topic: string, client: Client) => void): void;
    on(when: 'published', callback: (packet: Packet, client: Client) => void): void;
    on(when: 'ready', callback: () => void): void;
    once(when: string, callback: () => void): void;
    toString(): string;
    subscribe(topic: string, callback: () => void, done: () => void): void;
    publish(message: Message, callback: (obj: any, packet: Packet) => void): void;
    authenticate(client: Client, username: string, password: string,
        callback: (obj: any, authenticated: boolean) => void): void;
    published(packet: Packet, client: Client, callback: (obj: any) => void): void;
    authorizePublish(client: Client, topic: string, payload: string,
        callback: (obj: any, authorized: boolean) => void): void;
    authorizeSubscribe(client: Client, topic: string, callback: (obj: any, authorized: boolean) => void): void;
    authorizeForward(client: Client, packet: Packet, callback: (obj: any, authorized: boolean) => void): void;
    storePacket(packet: Packet, callback: () => void): void;
    deleteOfflinePacket(client: Client, messageId: number, callback: () => void): void;
    forwardRetained(pattern: string, client: Client, callback: () => void): void;
    restoreClientSubscriptions(client: Client, callback: () => void): void;
    forwardOfflinePackets(client: Client, callback: () => void): void;
    updateOfflinePacket(client: Client, originMessageId: number, packet: Packet,
        callback: (obj: any, packet: Packet) => void): void;
    persistClient(client: Client, callback: () => void): void;
    close(callback?: () => void): void;
    attachHttpServer(server: any, path?: any): void;
}

export class Client {
    id: string;
    connection: any;
    server: Server;
    logger: any;
    subscriptions: any;
    nextId: number;
    inflight: any;
    inflightCounter: number;

    constructor(connection: any, server: Server);

    close(callback?: () => void, reason?: string): void;
}

export class Stats {
    maxConnectedClients: number;
    connectedClients: number;
    lastIntervalConnectedClients: number;
    publishedMessages: number;
    lastIntervalPublishedMessages: number;
    started: Date;
    load: any;

    wire(server: Server): void;
}

export class Authorizer {
    users: any;

    addUser(username: string, password: string, authorizePublish: string,
        authorizeSubscribe: string, callback: (func: any) => void): void;
}

export interface Packet {
    topic: string;
    payload: any;
    messageId: string;
    qos: number;
    retain: boolean;
}

export interface Message {
    topic: string;
    payload: any;
    qos: number;
    retain: boolean;
}

export namespace persistence {
    interface Persistence {
        wire(server: Server): void;
    }
    type FactoryFunc = (options: { [key: string]: any }) => Persistence;

    const Redis: FactoryFunc;
    const Mongo: FactoryFunc;
    const LevelUp: FactoryFunc;
    const Memory: FactoryFunc;
}
