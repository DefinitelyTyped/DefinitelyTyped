// These should be equivalent
import events = require("node:events");
import { EventEmitter } from "node:events";
{
    let module: typeof events;
    module = EventEmitter;
    module = events.EventEmitter;
}

const emitter = new EventEmitter();
declare const listener: (...args: any[]) => void;
declare const event: string | symbol;

{
    // dtslint won't alias the EventEmitter type, so we use this instead
    function $ExpectEventEmitterType(...expr: EventEmitter[]) {}

    $ExpectEventEmitterType(
        emitter.addListener(event, listener),
    );

    // $ExpectType boolean
    emitter.emit(event);
    // $ExpectType boolean
    emitter.emit(event, ...[]);

    // $ExpectType (string | symbol)[]
    emitter.eventNames();

    // $ExpectType number
    emitter.getMaxListeners();

    // $ExpectType number
    emitter.listenerCount(event);
    // $ExpectType number
    emitter.listenerCount(event, listener);

    $ExpectEventEmitterType(
        emitter.off(event, listener),
    );

    $ExpectEventEmitterType(
        emitter.on(event, listener),
    );

    $ExpectEventEmitterType(
        emitter.once(event, listener),
    );

    $ExpectEventEmitterType(
        emitter.prependListener(event, listener),
    );

    $ExpectEventEmitterType(
        emitter.prependOnceListener(event, listener),
    );

    $ExpectEventEmitterType(
        emitter.removeAllListeners(),
        emitter.removeAllListeners(event),
    );

    $ExpectEventEmitterType(
        emitter.removeListener(event, listener),
    );

    $ExpectEventEmitterType(
        emitter.setMaxListeners(42),
    );

    // $ExpectType Function[]
    emitter.rawListeners(event);

    if (emitter[EventEmitter.captureRejectionSymbol]) {
        // $ExpectType void
        emitter[EventEmitter.captureRejectionSymbol](new Error(), event);
        // $ExpectType void
        emitter[EventEmitter.captureRejectionSymbol](new Error(), event, ...[]);
    } else {
        // $ExpectType undefined
        emitter[EventEmitter.captureRejectionSymbol];
    }
}

{
    // $ExpectType number
    EventEmitter.defaultMaxListeners;
    EventEmitter.defaultMaxListeners = 50;

    // $ExpectType Function[]
    EventEmitter.getEventListeners(emitter, event);

    // $ExpectType number
    EventEmitter.getMaxListeners(emitter);

    // $ExpectType Promise<any[]>
    EventEmitter.once(emitter, event);

    // $ExpectType boolean
    EventEmitter.captureRejections;
    EventEmitter.captureRejections = true;

    // $ExpectType number
    EventEmitter.listenerCount(emitter, event);

    // $ExpectType AsyncIterableIterator<any[]>
    EventEmitter.on(emitter, event);

    // $ExpectType void
    EventEmitter.setMaxListeners(50, emitter);
}

{
    class Networker extends EventEmitter {
        static {
            // Check that namespace variables are accessible as constructor properties
            this.captureRejections = true;
            this.defaultMaxListeners = 25;
        }

        constructor() {
            super();
            this.emit("mingling");
        }
    }
}

{
    events.once(
        {
            addEventListener(name: string, listener: (res: number) => void, opts: { once: boolean }) {
                setTimeout(() => listener(123), 100);
            },
        },
        "name",
    );
}

async function test() {
    for await (const e of events.on(new EventEmitter(), "test")) {
        // $ExpectType any[]
        e;
    }
    events.on(new EventEmitter(), "test", { signal: new AbortController().signal });
}

{
    const errorMonitor: typeof events.errorMonitor = EventEmitter.errorMonitor;
    emitter.on(errorMonitor, listener);
}

{
    const captureRejectionSymbol: typeof events.captureRejectionSymbol = EventEmitter.captureRejectionSymbol;
    emitter[captureRejectionSymbol] = (err: Error, name: string, ...args: any[]) => {};
}

{
    events.setMaxListeners();
    events.setMaxListeners(42);

    const eventTarget = new EventTarget();
    events.setMaxListeners(42, eventTarget);
    // @ts-expect-error - ensure constructor does not return a constructor
    new eventTarget();

    const eventEmitter = new EventEmitter();
    events.setMaxListeners(42, eventTarget, eventEmitter);
}

{
    let disposable: Disposable | undefined;
    try {
        const signal = new AbortSignal();
        signal.addEventListener("abort", (e) => e.stopImmediatePropagation());
        disposable = events.addAbortListener(signal, (e) => {
            console.log(e);
        });
    } finally {
        disposable?.[Symbol.dispose]();
    }
}

{
    class MyEmitter extends events.EventEmitterAsyncResource {}

    const emitter = new MyEmitter({
        triggerAsyncId: 123,
    });

    new events.EventEmitterAsyncResource({
        name: "test",
    });

    // $ExpectType number
    emitter.asyncId;
    // $ExpectType EventEmitterReferencingAsyncResource
    emitter.asyncResource;
    // $ExpectType number
    emitter.triggerAsyncId;
    // $ExpectType void
    emitter.emitDestroy();
}

{
    class MyEmitter extends EventEmitter {
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
