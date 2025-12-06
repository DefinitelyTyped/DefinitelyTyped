import events from "node:events";

const emitter = new events.EventEmitter();
const eventTarget = new EventTarget();
declare const listener: (...args: any[]) => void;
declare const event: string | symbol;
declare const any: any;

{
    using abortListener = events.addAbortListener(new AbortController().signal, (event) => {
        event; // $ExpectType Event
    });

    const { EventEmitter } = events;
    EventEmitter.defaultMaxListeners; // $ExpectType number
    EventEmitter.defaultMaxListeners = 100;

    events.getEventListeners(emitter, "event"); // $ExpectType ((...args: any[]) => void)[]
    events.getEventListeners(eventTarget, "event"); // $ExpectType ((...args: any[]) => void)[]
    events.getMaxListeners(emitter); // $ExpectType number
    events.getMaxListeners(eventTarget); // $ExpectType number
    events.setMaxListeners(10);
    events.setMaxListeners(10, emitter, eventTarget);

    events.listenerCount(emitter, event); // $ExpectType number
}

void async function() {
    await events.once(emitter, "event"); // $ExpectType any[]
    await events.once(eventTarget, "event"); // $ExpectType any[]
    events.once(emitter, "event", { signal: new AbortController().signal });

    for await (const result of events.on(emitter, "event")) {
        result; // $ExpectType any[]
    }
    for await (const result of events.on(eventTarget, "event")) {
        result; // $ExpectType any[]
    }
    events.on(emitter, "event", {
        close: ["end"],
        highWaterMark: 100,
        lowWaterMark: 5,
        signal: new AbortController().signal,
    });
};

{
    let result: events.EventEmitter;

    result = emitter.addListener(event, listener);
    result = emitter.on(event, listener);
    result = emitter.once(event, listener);
    result = emitter.prependListener(event, listener);
    result = emitter.prependOnceListener(event, listener);
    result = emitter.removeListener(event, listener);
    result = emitter.off(event, listener);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event);
    result = emitter.setMaxListeners(42);
}

{
    let result: boolean;

    result = emitter.emit(event);
    result = emitter.emit(event, any);
    result = emitter.emit(event, any, any);
    result = emitter.emit(event, any, any, any);
}

{
    emitter.eventNames(); // $ExpectType (string | symbol)[]
    emitter.getMaxListeners(); // $ExpectType number
    emitter.listenerCount(event); // $ExpectType number
    emitter.listenerCount(event, listener); // $ExpectType number
    emitter.listeners(event); // $ExpectType ((...args: any[]) => void)[]
}

{
    const emitter = new events.EventEmitter({ captureRejections: true });
    emitter[events.captureRejectionSymbol] = (err: Error, name: string, ...args: any[]) => {};

    emitter.on(events.errorMonitor, listener);
}

{
    class MyEmitter extends events.EventEmitterAsyncResource {}

    const emitter = new MyEmitter({
        triggerAsyncId: 123,
    });

    new events.EventEmitterAsyncResource({
        name: "test",
    });

    emitter.asyncId; // $ExpectType number
    emitter.asyncResource; // $ExpectType EventEmitterReferencingAsyncResource
    emitter.triggerAsyncId; // $ExpectType number
    emitter.emitDestroy();
}

{
    class MyEmitter extends events.EventEmitter {
        addListener(event: string, listener: () => void): this {
            return this;
        }
        listeners(event: string): Array<() => void> {
            return [];
        }
        emit(event: string, ...args: any[]): boolean {
            return true;
        }
        listenerCount(type: string): number {
            return 0;
        }
    }
}
