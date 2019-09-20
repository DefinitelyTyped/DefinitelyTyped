// Type definitions for PubSubJS 1.5.2
// Project: https://github.com/mroderick/PubSubJS
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PubSubJS {
    interface Base extends Publish, Subscribe, Unsubscribe, ClearAllSubscriptions {
        version: string;
        name: string;
    }

    interface Publish{
        publish(message: any, data: any): boolean;

        publish(message:any, data:any, sync:boolean, immediateExceptions:Function): boolean;

        publishSync(message: any, data: any): boolean;
    }

    interface Subscribe{
        subscribe(message: any, func: Function): any;
    }


    interface Unsubscribe{
        unsubscribe(tokenOrFunction: any): any;
    }


    interface ClearAllSubscriptions{
        clearAllSubscriptions(): any;
    }
}

declare var PubSub: PubSubJS.Base;

declare module "pubsub-js" {
  export = PubSub;
}
