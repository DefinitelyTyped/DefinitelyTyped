import events = require('node:events');

const emitter: events = new events.EventEmitter();
declare const listener: (...args: any[]) => void;
declare const event: string | symbol;
declare const any: any;

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
    let result: number;

    result = events.EventEmitter.defaultMaxListeners;
    result = events.EventEmitter.listenerCount(emitter, event); // deprecated

    const promise: Promise<any[]> = events.once(new events.EventEmitter(), 'error');

    result = emitter.getMaxListeners();
    result = emitter.listenerCount(event);
}

{
    let result: Promise<number[]>;

    result = events.once(emitter, event);

    emitter.emit(event, 42);
}

{
    let result: Function[];

    result = emitter.listeners(event);
}

{
    let result: boolean;

    result = emitter.emit(event);
    result = emitter.emit(event, any);
    result = emitter.emit(event, any, any);
    result = emitter.emit(event, any, any, any);
}

{
    let result: Array<string | symbol>;

    result = emitter.eventNames();
}

{
    class Networker extends events.EventEmitter {
        constructor() {
            super();

            this.emit("mingling");
        }
    }
}

{
    const emitter2: events.EventEmitter = new events();
}

{
    events.once({
        addEventListener(name: string, listener: (res: number) => void, opts: { once: boolean }) {
            setTimeout(() => listener(123), 100);
        }
    }, 'name');
}

async function test() {
    for await (const e of events.on(new events.EventEmitter(), 'test')) {
        console.log(e);
    }
    events.on(new events.EventEmitter(), 'test', { signal: new AbortController().signal });
}

{
    emitter.on(events.errorMonitor, listener);
    emitter.on(events.EventEmitter.errorMonitor, listener);
}

{
    let errorMonitor1: typeof events.errorMonitor = events.errorMonitor;
    errorMonitor1 = events.EventEmitter.errorMonitor;

    let errorMonitor2: typeof events.EventEmitter.errorMonitor = events.EventEmitter.errorMonitor;
    errorMonitor2 = events.errorMonitor;
}

{
    let captureRejectionSymbol1: typeof events.captureRejectionSymbol = events.captureRejectionSymbol;
    captureRejectionSymbol1 = events.EventEmitter.captureRejectionSymbol;

    let captureRejectionSymbol2: typeof events.EventEmitter.captureRejectionSymbol =
        events.EventEmitter.captureRejectionSymbol;
    captureRejectionSymbol2 = events.captureRejectionSymbol;
}

{
    events.EventEmitter.setMaxListeners();
    events.EventEmitter.setMaxListeners(42);

    const eventTarget = new EventTarget();
    events.EventEmitter.setMaxListeners(42, eventTarget);
    // @ts-expect-error - ensure constructor does not return a constructor
    new eventTarget();

    const eventEmitter = new events.EventEmitter();
    events.EventEmitter.setMaxListeners(42, eventTarget, eventEmitter);
}
