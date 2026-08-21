export as namespace ActionCable;

export interface ChannelNameWithParams {
    channel: string;
    [key: string]: any;
}

/**
 * @see https://github.com/rails/rails/blob/8-0-stable/actioncable/app/javascript/action_cable/adapters.js
 */
export const adapters: {
    logger: Console;
    WebSocket: typeof WebSocket;
};

/**
 * @see https://github.com/rails/rails/blob/8-0-stable/actioncable/app/javascript/action_cable/consumer.js
 */
export class Consumer {
    readonly subscriptions: Subscriptions;
    readonly subprotocols: string[];

    constructor(url: string);
    get url(): string;
    connect(): boolean;
    disconnect(): void;
    addSubProtocol(protocol: string): void;
}

export interface BaseMixin {
    connected?(arg: { reconnected: boolean }): void;
    disconnected?(arg: { willAttemptReconnect: boolean | undefined }): void;
    initialized?(): void;
    rejected?(): void;
    received?(data: any): void;
}

/**
 * @see https://github.com/rails/rails/blob/8-0-stable/actioncable/app/javascript/action_cable/subscription.js
 */
export class Subscription<M extends BaseMixin = BaseMixin> {
    readonly identifier: string;

    constructor(consumer: Consumer, params: ChannelNameWithParams, mixin: M);
    perform(action: string, data?: object): boolean;
    send(data: any): boolean;
    unsubscribe(): this;
}

/**
 * @see https://github.com/rails/rails/blob/8-0-stable/actioncable/app/javascript/action_cable/subscriptions.js
 */
export class Subscriptions {
    constructor(consumer: Consumer);
    create<M extends BaseMixin = {}>(
        channelName: string | ChannelNameWithParams,
        mixin?: M & ThisType<Subscription & M>,
    ): Subscription & M;
}

/**
 * @see https://github.com/rails/rails/blob/8-0-stable/actioncable/app/javascript/action_cable/logger.js
 */
export const logger: {
    log(...messages: any[]): void;
    enabled?: boolean | undefined;
};

/**
 * @see https://github.com/rails/rails/blob/8-0-stable/actioncable/app/javascript/action_cable/index.js
 */
export function createConsumer(url?: string | (() => string)): Consumer;
