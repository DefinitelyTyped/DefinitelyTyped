// Type definitions for @rails/actioncable 6.0
// Project: https://github.com/rails/rails/tree/master/actioncable/app/assets/javascripts
// Definitions by: Vincent Zhu <https://github.com/zhu1230>
//                 Jared Szechy <https://github.com/szechyjs>
// Definitions: https://github.com/zhu1230/DefinitelyTyped
// TypeScript Version: 2.3

export interface Channel {
    unsubscribe(): void;
    perform(action: string, data: {}): void;
    send(data: any): boolean;
}

export interface Subscriptions {
    create(channel: string | ChannelNameWithParams, obj?: CreateMixin): Channel;
}

export interface Cable {
    subscriptions: Subscriptions;
    send(data: any): void;
    connect(): void;
    disconnect(): void;
    ensureActiveConnection(): void;
}

export interface CreateMixin {
    connected?(): void;
    disconnected?(): void;
    received?(obj: any): void;
    [key: string]: any;
}

export interface ChannelNameWithParams {
    channel: string;
    [key: string]: any;
}

export function createConsumer(url?: string): Cable;

export interface AppInterface {
    cable?: Cable;
    network?: Channel;
}
