// Type definitions for PubSubJS 1.8.0
// Project: https://github.com/mroderick/PubSubJS
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Matthias Lindinger <https://github.com/morpheus-87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PubSubJS {
    interface Base
        extends CountSubscriptions,
            ClearAllSubscriptions,
            GetSubscriptions,
            Publish,
            Subscribe,
            Unsubscribe {
        name: string;
        version: string;
    }

    type Token = string;

    type Message = string | Symbol;

    type SubscriptionListener<T> = (message: Message, data?: T) => void;

    interface CountSubscriptions {
        countSubscriptions(token: Token): number;
    }

    interface ClearAllSubscriptions {
        clearAllSubscriptions(token?: Token): void;
    }

    interface GetSubscriptions {
        getSubscriptions(token: Token): Message[];
    }

    interface Publish {
        publish(message: Message, data?: any): boolean;

        publishSync(message: Message, data?: any): boolean;
    }

    interface Subscribe {
        subscribe(message: Message, func: SubscriptionListener<any>): string;

        subscribeOnce(message: Message, func: SubscriptionListener<any>): any;
    }

    interface Unsubscribe {
        unsubscribe(tokenOrFunction: Token | SubscriptionListener<any>): any;
    }
}

declare var PubSub: PubSubJS.Base;

declare module 'pubsub-js' {
    export = PubSub;
}
