import * as events from "node:events";

interface T {
    event1: [s: string, n: number];
    event2: [b: boolean];
    event3: [];
    event4: string[];
    event5: unknown[];
}

const emitter = new events.EventEmitter<T>();
declare const listener1: (...args: T["event1"]) => void;
declare const listener2: (...args: T["event2"]) => void;
declare const listener3: (...args: T["event3"]) => void;
declare const listener4: (...args: T["event4"]) => void;
declare const listener5: (...args: T["event5"]) => void;
declare const listenerX: (...args: unknown[]) => void;
declare const anything: unknown[];

{
    let result: events.EventEmitter<T>;

    result = emitter.addListener("event1", listener1);
    result = emitter.on("event1", listener1);
    result = emitter.once("event1", listener1);
    result = emitter.prependListener("event1", listener1);
    result = emitter.prependOnceListener("event1", listener1);
    result = emitter.removeListener("event1", listener1);
    result = emitter.off("event1", listener1);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners("event1");

    result = emitter.addListener("event2", listener2);
    result = emitter.on("event2", listener2);
    result = emitter.once("event2", listener2);
    result = emitter.prependListener("event2", listener2);
    result = emitter.prependOnceListener("event2", listener2);
    result = emitter.removeListener("event2", listener2);
    result = emitter.off("event2", listener2);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners("event2");

    result = emitter.addListener("event3", listener3);
    result = emitter.on("event3", listener3);
    result = emitter.once("event3", listener3);
    result = emitter.prependListener("event3", listener3);
    result = emitter.prependOnceListener("event3", listener3);
    result = emitter.removeListener("event3", listener3);
    result = emitter.off("event3", listener3);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners("event3");

    result = emitter.addListener("event4", listener4);
    result = emitter.on("event4", listener4);
    result = emitter.once("event4", listener4);
    result = emitter.prependListener("event4", listener4);
    result = emitter.prependOnceListener("event4", listener4);
    result = emitter.removeListener("event4", listener4);
    result = emitter.off("event4", listener4);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners("event4");

    result = emitter.addListener("event5", listener5);
    result = emitter.on("event5", listener5);
    result = emitter.once("event5", listener5);
    result = emitter.prependListener("event5", listener5);
    result = emitter.prependOnceListener("event5", listener5);
    result = emitter.removeListener("event5", listener5);
    result = emitter.off("event5", listener5);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners("event5");

    result = emitter.addListener("eventX", listenerX);
    result = emitter.on("eventX", listenerX);
    result = emitter.once("eventX", listenerX);
    result = emitter.prependListener("eventX", listenerX);
    result = emitter.prependOnceListener("eventX", listenerX);
    result = emitter.removeListener("eventX", listenerX);
    result = emitter.off("eventX", listenerX);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners("eventX");

    // @ts-expect-error
    emitter.on({}, listenerX);
}

{
    emitter.addListener("event1", () => {});
    emitter.addListener("event1", (a: string) => {});
    emitter.addListener("event1", (a: string, b?: number) => {});
    emitter.addListener("event1", (a: string, b: number | boolean) => {});
    // @ts-expect-error
    emitter.addListener("event1", (a: string, b: boolean): number => {});
}

{
    let result: number;

    result = emitter.listenerCount("event1");
    result = emitter.listenerCount("event2");
    result = emitter.listenerCount("event3");
    result = emitter.listenerCount("event4");
    result = emitter.listenerCount("event5");
    result = emitter.listenerCount("eventX");

    result = emitter.listenerCount("event1", listener1);
    result = emitter.listenerCount("event2", listener2);
    result = emitter.listenerCount("event3", listener3);
    result = emitter.listenerCount("event4", listener4);
    result = emitter.listenerCount("event5", listener5);
    result = emitter.listenerCount("eventX", listenerX);

    // @ts-expect-error
    emitter.listenerCount("event1", listener2);
}

{
    emitter.listeners("event1"); // $ExpectType ((s: string, n: number) => void)[]
    emitter.listeners("event2"); // $ExpectType ((b: boolean) => void)[]
    emitter.listeners("event3"); // $ExpectType (() => void)[]
    emitter.listeners("event4"); // $ExpectType ((...args: string[]) => void)[]
    emitter.listeners("event5"); // $ExpectType ((...args: unknown[]) => void)[]
    emitter.listeners("eventX"); // $ExpectType ((...args: any[]) => void)[]

    emitter.rawListeners("event1"); // $ExpectType ((s: string, n: number) => void)[]
    emitter.rawListeners("event2"); // $ExpectType ((b: boolean) => void)[]
    emitter.rawListeners("event3"); // $ExpectType (() => void)[]
    emitter.rawListeners("event4"); // $ExpectType ((...args: string[]) => void)[]
    emitter.rawListeners("event5"); // $ExpectType ((...args: unknown[]) => void)[]
    emitter.rawListeners("eventX"); // $ExpectType ((...args: any[]) => void)[]
}

{
    let result: boolean;

    result = emitter.emit("event1", "hello", 42);
    result = emitter.emit("event2", true);
    result = emitter.emit("event3");
    result = emitter.emit("event4", "hello", "world");
    result = emitter.emit("event5", "hello", 42, true);
    result = emitter.emit("eventX", ...anything);

    // @ts-expect-error
    emitter.emit("event1", true);
}

{
    type Listener<K extends keyof T> = ReturnType<typeof emitter.listeners<K>>[number];
    function on<K extends keyof T>(event: K, listener: Listener<K>): void {
        emitter.on(event, listener);
    }

    on("event1", listener1);
    on("event2", listener2);
    on("event3", listener3);
    on("event4", listener4);
    on("event5", listener5);
    // @ts-expect-error
    on("event2", listener1);
    // @ts-expect-error
    on("event5", listener4);
}

{
    type T = Record<"foo" | "bar", string[]>;
    const emitter = new events.EventEmitter<T>();

    emitter.emit("foo", "hello");
    // @ts-expect-error
    emitter.emit("foo", 123);
}

{
    const emitter = new events.EventEmitter<{ abc: [string, number] }>();

    emitter.emit("abc", "hello", 123);
    // @ts-expect-error
    emitter.emit("abc", 123, false);
    emitter.emit("def", "hello", 123);
}

{
    const emitter = new events.EventEmitter<{ 123: [] }>();

    // @ts-expect-error we still expect a `string | symbol` to be passed
    emitter.emit(123);
}

{
    const s1: unique symbol = Symbol();
    const s2: unique symbol = Symbol();
    const emitter = new events.EventEmitter<{ [s1]: [string, number] }>();

    emitter.emit(s1, "hello", 123);
    // @ts-expect-error
    emitter.emit(s1, 123, false);
    emitter.emit(s2, "hello", 123);
}

{
    const s1: unique symbol = Symbol();
    const s2: unique symbol = Symbol();
    const emitter = new events.EventEmitter<{ abc: number[]; [s1]: boolean[] }>();

    emitter.emit(s1, false);
    // @ts-expect-error
    emitter.emit("abc", 123, "false");
    // @ts-expect-error
    emitter.emit(s1, "hello", false);
    emitter.emit(s2, "hello", false);
}

{
    function acceptsEventEmitterInterface(eventEmitter: NodeJS.EventEmitter) {}
    acceptsEventEmitterInterface(emitter);

    function acceptsEventEmitterClass(eventEmitter: events.EventEmitter) {}
    acceptsEventEmitterClass(emitter);
}

{
    class Extended<T extends Record<keyof T, any[]>> extends events.EventEmitter<T> {}
    const extended = new Extended<T>();

    extended.addListener("event1", (a: string, b: number | boolean): number => 1);
    // @ts-expect-error
    extended.addListener("event1", (a: string, b: boolean): number => 1);

    extended.emit("event1", "hello", 42);
    // @ts-expect-error
    extended.emit("event1", 123);
}

{
    function onError(err: any) {
        console.log(err);
    }

    class Test extends events.EventEmitter {
        // The union was only uncallable when an instance method exists.
        test() {
            return true;
        }
    }

    class Test2 extends events.EventEmitter {}

    const emitter = {} as Test | Test2;
    emitter.addListener("error", onError);
    emitter.on("error", onError);
    emitter.off("error", onError);
    emitter.once("error", onError);
    emitter.prependListener("error", onError);
    emitter.prependOnceListener("error", onError);
    emitter.removeListener("error", onError);
    emitter.removeAllListeners();
    emitter.removeAllListeners("error");
    emitter.emit("error");
}

interface Implementing extends events.EventEmitter<T> {}
declare class Implementing implements events.EventEmitter {
    addListener(eventName: "event", listener: (arg: boolean) => void): this;
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
}
