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

    interface CountSubscriptions {
        countSubscriptions(token: any): number;
    }

    interface ClearAllSubscriptions {
        clearAllSubscriptions(token?: any): void;
    }

    interface GetSubscriptions {
        getSubscriptions(token: any): any[];
    }

    interface Publish {
        publish(message: string, data?: any): boolean;

        publishSync(message: string, data?: any): boolean;
    }

    interface Subscribe {
        subscribe(message: string, func: Function): string;

        subscribeOnce(message: string, func: Function): any;
    }

    interface Unsubscribe {
        unsubscribe(tokenOrFunction: any): any;
    }
}

declare var PubSub: PubSubJS.Base;

declare module 'pubsub-js' {
    export = PubSub;
}
