// Type definitions for @rails/actioncable 6.1
// Project: https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ActionCable;

export enum MessageTypes {
    confirmation = 'confirm_subscription',
    disconnect = 'disconnect',
    ping = 'ping',
    rejection = 'reject_subscription',
    welcome = 'welcome',
}

export enum DisconnectReasons {
    invalid_request = 'invalid_request',
    server_restart = 'server_restart',
    unauthorized = 'unauthorized',
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/internal.js
 */
export const INTERNAL: {
    default_mount_path: '/cable';
    disconnect_reasons: typeof DisconnectReasons;
    message_types: typeof MessageTypes;
    protocols: ['actioncable-v1-json', 'actioncable-unsupported'];
};

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/connection.js
 */
export class Connection {
    constructor(consumer: Consumer);

    send(data: object): boolean;

    open(): boolean;

    close(options?: { allowReconnect: boolean }): any;

    reopen(): void;

    getProtocol(): void | string;

    isOpen(): boolean;

    isActive(): boolean;

    static readonly reopenDelay: number;

    static readonly events: {
        message(event: {
            data: {
                identifier: string;
                message: string;
                reason: DisconnectReasons;
                reconnect: boolean;
                type: MessageTypes;
            };
        }): any;

        open(): void;

        close(): void;

        error(): void;
    };
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/connection_monitor.js
 */
export class ConnectionMonitor {
    constructor(connection: Connection);

    start(): void;

    stop(): void;

    isRunning(): boolean;

    recordPing(): void;

    recordConnect(): void;

    recordDisconnect(): void;

    static readonly staleThreshold: number;

    static readonly reconnectionBackoffRate: number;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/consumer.js
 */
export class Consumer {
    constructor(url: string);

    url: string;

    send(data: object): boolean;

    connect(): boolean;

    disconnect(): any;

    ensureActiveConnection(): void | boolean;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/subscription.js
 */
export class Subscription {
    constructor(consumer: Consumer, params?: object, mixin?: any);

    perform(action: string, data?: object): boolean;

    send(data: object): boolean;

    unsubscribe(): this;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/subscriptions.js
 */
export class Subscriptions {
    constructor(consumer: Consumer);

    create(channelName: string | { channel: string }, mixin?: any): Subscription;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/adapters.js
 */
export const adapters: {
    logger: Console;
    WebSocket: WebSocket;
};

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/consumer.js
 */
export function createWebSocketURL(url: string): string;

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/logger.js
 */
export const logger: {
    log(...messages: any[]): void;
};

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/index.js
 */
export function createConsumer(url: string): typeof Consumer;
export function getConfig(name: string): string | void;
