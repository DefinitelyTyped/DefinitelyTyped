// Type definitions for @rails/actioncable 6.1
// Project: https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

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

export interface Mixin {
    appear?(): void;
    away?(): void;
    connected?(): void;
    disconnected?(): void;
    initialized?(): void;
    install?(): void;
    rejected?(): void;
    uninstall?(): void;
    update?(): void;

    received?(data: any): void;

    readonly documentIsActive?: boolean;
    readonly appearingOn?: string | null;

    [key: string]: any;
}

export interface ChannelNameWithParams {
    channel: string;
    [key: string]: any;
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
export class Connection<C = Consumer> {
    constructor(consumer: C);

    readonly consumer: C;

    readonly subscriptions: Subscriptions<C>;

    readonly monitor: ConnectionMonitor<C>;

    readonly disconnected: boolean;

    send(data: object): boolean;

    open(this: Connection<C>): boolean;

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
export class ConnectionMonitor<C = Consumer> {
    constructor(connection: C);

    readonly connection: C;

    readonly reconnectAttempts: number;

    start(): void;

    stop(): void;

    isRunning(): boolean;

    recordPing(): void;

    recordConnect(): void;

    recordDisconnect(): void;

    visibilityDidChange(this: ConnectionMonitor<C>): void;

    static readonly staleThreshold: number;

    static readonly reconnectionBackoffRate: number;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/consumer.js
 */
export class Consumer {
    constructor(url: string);

    readonly subscriptions: Subscriptions<this>;

    readonly connection: Connection<this>;

    get url(): string;

    send(data: object): boolean;

    connect(): boolean;

    disconnect(): any;

    ensureActiveConnection(): void | boolean;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/subscription.js
 */
export class Subscription<C = Consumer> {
    constructor(consumer: C, params?: object, mixin?: Mixin);

    readonly consumer: C;

    readonly identifier: string;

    perform(action: string, data?: object): boolean;

    send(data: object): boolean;

    unsubscribe(): this;
}

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/subscriptions.js
 */
export class Subscriptions<C = Consumer> {
    constructor(consumer: C);

    readonly consumer: C;

    readonly subscriptions: Array<Subscription<C>>;

    create<M>(channelName: string | ChannelNameWithParams, mixin?: Mixin & M): Subscription<C> & Mixin & M;
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
    enabled?: boolean;
};

/**
 * @see https://github.com/rails/rails/blob/main/actioncable/app/javascript/action_cable/index.js
 */
export function createConsumer(url?: string): Consumer;
export function getConfig(name: string): string | void;
