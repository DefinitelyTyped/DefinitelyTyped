// Type definitions for @storybook/channels 4.1
// Project: https://github.com/storybookjs/storybook/tree/master/lib/channels
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

type EventName = PropertyKey;
type EventHandler = (event: Channel.Event) => void;
type Listener = (...args: any) => void;

declare namespace Channel {
    interface Event {
        type: EventName;
        args: any;
        from: string;
    }

    interface Transport {
        setHandler(handler: EventHandler): void;
        send(event: any): void;
    }
}

declare class Channel {
    constructor(options?: { transport?: Channel.Transport, async?: boolean });
    addListener(type: EventName, listener: Listener): void;
    addPeerListener(type: EventName, listener: Listener): void;
    emit(type: EventName, ...args: any): void;
    eventNames(): EventName[];
    listenerCount(type: EventName): number;
    listeners(type: EventName): Listener[];
    on(type: EventName, listener: Listener): void;
    once(type: EventName, listener: Listener): void;
    prependListener(type: EventName, listener: Listener): void;
    removeAllListeners(type: EventName): void;
    removeListener(type: EventName, listener: Listener): void;
}

export = Channel;
