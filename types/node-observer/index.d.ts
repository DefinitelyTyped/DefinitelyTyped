// Type definitions for node-observer 0.4
// Project: https://github.com/hormander/node-observer
// Definitions by: wjchi <https://github.com/CwjXFH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = observer;

declare class Observer {
    private subscribers: object[];
    /**
     * subscirpt event
     * @param targetObj objects that subscribe to events
     * @param eventName the event name
     * @param callback callback function executed when an event is fired
     */
    subscribe(targetObj: object, eventName: string, callback: any): void;
    /**
     * unsubscript event
     * @param targetObj objects that subscribe to events
     * @param eventName the event name
     */
    unsubscribe(targetObj: object, eventName: string): void;
    /**
     * triggering event
     * @param targetObj objects that subscribe to events
     * @param eventName the event name
     * @param data passed to the callback function when the event is fired
     */
    send(targetObj: object, eventName: string, data: any): void;
}

declare let observer: Observer;
