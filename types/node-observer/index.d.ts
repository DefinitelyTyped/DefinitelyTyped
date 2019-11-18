// Type definitions for node-observer 0.4.4
// Project: https://github.com/hormander/node-observer
// Definitions by: wjchi <https://github.com/CwjXFH>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3.3

export =observer;

declare class Observer {
    private subscribers: Array<Object>;
    /**
     * subscirpt event
     * @param targetObj objects that subscribe to events
     * @param eventName the event name
     * @param callback callback function executed when an event is fired
     */
    subscribe(targetObj: Object, eventName: String, callback: Function): void;
    /**
     * unsubscript event
     * @param targetObj objects that subscribe to events
     * @param eventName the event name
     */
    unsubscribe(targetObj: Object, eventName: String): void;
    /**
     * triggering event
     * @param targetObj objects that subscribe to events
     * @param eventName the event name
     * @param data passed to the callback function when the event is fired
     */
    send(targetObj: Object, eventName: String, data: Object): void;
}

declare let observer: Observer;