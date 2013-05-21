// Type definitions for PubSubJS  1.3.5

module PubSubJS {
    interface Base extends Publish, Subscribe, Unsubscribe {
        version: string;
        name: string;
    }

    interface Publish{
        publish(message: any, data: any): bool;

        publish(message:any, data:any, sync:bool, immediateExceptions:Function): bool;

        publishSync(message: any, data: any): bool;
    }

    interface Subscribe{
        subscribe(message: any, func: Function): any;
    }


    interface Unsubscribe{
        unsubscribe(tokenOrFunction: any): any;
    }
}

declare var PubSub: PubSubJS.Base;