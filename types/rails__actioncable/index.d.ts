// Type definitions for @rails/actioncable 6.1
// Project: https://github.com/rails/rails/tree/main/actioncable/app/javascript/action_cable
// Definitions by: Davis Namsons <https://github.com/dnamsons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:no-single-declare-module
declare module '@rails/actioncable' {
    interface Consumer {
        subscriptions: Subscriptions;
        send(data: any): void;
        connect(): void;
        disconnect(): void;
        ensureActiveConnection(): void;
    }

    interface Subscription {
        perform(action: string, data?: any): boolean;
        send(data: any): boolean;
        unsubscribe(): void;
    }

    interface ChannelNameWithParams {
        channel: string;
        [key: string]: any;
    }

    type ChannelName = string | ChannelNameWithParams;

    interface CreateMixin {
        initialized?(): void;
        connected?(): void;
        disconnected?(): void;
        rejected?(): void;
        received?(message: any): void;
        [key: string]: any;
    }

    interface Subscriptions {
        create(channel: ChannelName, mixin?: CreateMixin): Subscription;
    }

    function createConsumer(url?: string | (() => string)): Consumer;

    function getConfig(name: string): string | void;

    function createWebSocketURL(url: string | (() => string)): string;

    namespace logger {
        let enabled: boolean;
        function log(...messages: any[]): void;
    }
}
