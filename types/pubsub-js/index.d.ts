// Type definitions for PubSubJS 1.8.0
// Project: https://github.com/mroderick/PubSubJS
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Matthias Lindinger <https://github.com/morpheus-87>
//                 Profesor08 <https://github.com/Profesor08>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PubSubJS {
    interface Base<T = any, M = Message>
        extends CountSubscriptions,
            ClearAllSubscriptions,
            GetSubscriptions,
            Publish<T, M>,
            Subscribe<T, M>,
            Unsubscribe<T> {
        name: string;
        version: string;
    }

    type Token = string;

    type Message = string | symbol;

    type SubscriptionListener<T> = (message: string, data?: T) => void;

    interface CountSubscriptions {
        countSubscriptions(token: Token): number;
    }

    interface ClearAllSubscriptions {
        clearAllSubscriptions(token?: Token): void;
    }

    interface GetSubscriptions {
        getSubscriptions(token: Token): Message[];
    }

    interface Publish<T, M> {
        publish(message: M, data?: T): boolean;

        publishSync(message: M, data?: T): boolean;
    }

    interface Subscribe<T, M> {
        subscribe(message: M, func: SubscriptionListener<T>): Token;

        subscribeOnce(message: M, func: SubscriptionListener<T>): Base<T, M>;
    }

    interface Unsubscribe<T> {
        unsubscribe(tokenOrFunction: Token | SubscriptionListener<T>): Token | boolean;
    }
}

declare var PubSub: PubSubJS.Base;

declare module 'pubsub-js' {
    export = PubSub;
}
