import events = require("node:events");

interface T {
    event1: [string, number];
    event2: [boolean];
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
declare const event1: "event1";
declare const event2: "event2";
declare const event3: "event3";
declare const event4: "event4";
declare const event5: "event5";

{
    let result: events.EventEmitter<T>;

    result = emitter.addListener(event1, listener1);
    result = emitter.on(event1, listener1);
    result = emitter.once(event1, listener1);
    result = emitter.prependListener(event1, listener1);
    result = emitter.prependOnceListener(event1, listener1);
    result = emitter.removeListener(event1, listener1);
    result = emitter.off(event1, listener1);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event1);
    result = emitter.setMaxListeners(42);

    result = emitter.addListener(event2, listener2);
    result = emitter.on(event2, listener2);
    result = emitter.once(event2, listener2);
    result = emitter.prependListener(event2, listener2);
    result = emitter.prependOnceListener(event2, listener2);
    result = emitter.removeListener(event2, listener2);
    result = emitter.off(event2, listener2);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event2);
    result = emitter.setMaxListeners(42);

    result = emitter.addListener(event3, listener3);
    result = emitter.on(event3, listener3);
    result = emitter.once(event3, listener3);
    result = emitter.prependListener(event3, listener3);
    result = emitter.prependOnceListener(event3, listener3);
    result = emitter.removeListener(event3, listener3);
    result = emitter.off(event3, listener3);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event3);
    result = emitter.setMaxListeners(42);

    result = emitter.addListener(event4, listener4);
    result = emitter.on(event4, listener4);
    result = emitter.once(event4, listener4);
    result = emitter.prependListener(event4, listener4);
    result = emitter.prependOnceListener(event4, listener4);
    result = emitter.removeListener(event4, listener4);
    result = emitter.off(event4, listener4);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event4);
    result = emitter.setMaxListeners(42);

    result = emitter.addListener(event5, listener5);
    result = emitter.on(event5, listener5);
    result = emitter.once(event5, listener5);
    result = emitter.prependListener(event5, listener5);
    result = emitter.prependOnceListener(event5, listener5);
    result = emitter.removeListener(event5, listener5);
    result = emitter.off(event5, listener5);
    result = emitter.removeAllListeners();
    result = emitter.removeAllListeners(event5);
    result = emitter.setMaxListeners(42);
}

{
    emitter.addListener(event1, () => undefined);
    emitter.addListener(event1, (a: string) => undefined);
    emitter.addListener(event1, (a: string, b?: number) => undefined);
    emitter.addListener(event1, (a: string, b: number | boolean): number => 1);
    // @ts-expect-error
    emitter.addListener(event1, (a: string, b: boolean): number => 1);
}

{
    let result: number;

    result = events.EventEmitter.defaultMaxListeners;

    const promise: Promise<any[]> = events.once(new events.EventEmitter<T>(), "error");

    result = emitter.getMaxListeners();
    result = emitter.listenerCount(event1);
    result = emitter.listenerCount(event2);
    result = emitter.listenerCount(event3);
    result = emitter.listenerCount(event4);
    result = emitter.listenerCount(event5);

    result = emitter.listenerCount(event1, listener1);
    result = emitter.listenerCount(event2, listener2);
    result = emitter.listenerCount(event3, listener3);
    result = emitter.listenerCount(event4, listener4);
    result = emitter.listenerCount(event5, listener5);
}

{
    // Uncomment once static methods are generic
    // let result1: Promise<T["event1"]>;
    // let result2: Promise<T["event2"]>;
    // let result3: Promise<T["event3"]>;
    // let result4: Promise<T["event4"]>;
    // let result5: Promise<T["event5"]>;

    // result1 = events.once(emitter, event1);
    // result2 = events.once(emitter, event2);
    // result3 = events.once(emitter, event3);
    // result4 = events.once(emitter, event4);
    // result5 = events.once(emitter, event5);

    emitter.emit("event1", "hello", 42);
    emitter.emit("event2", true);
    emitter.emit("event3");
    emitter.emit("event4", "hello", "world");
    emitter.emit("event5", "hello", 42, true);
}

{
    let result: Function[];

    result = emitter.listeners(event1);
    result = emitter.listeners(event2);
    result = emitter.listeners(event3);
    result = emitter.listeners(event4);
    result = emitter.listeners(event5);
}

{
    let result: boolean;

    result = emitter.emit(event1, "hello", 42);
    result = emitter.emit(event2, true);
    result = emitter.emit(event3);
    result = emitter.emit(event4, "hello", "world");
    result = emitter.emit(event5, "hello", 42, true);
}

{
    let result: Array<keyof T | keyof events.EventEmitterBuiltInEventMap>;

    result = emitter.eventNames();
}

{
    type Listener<K> = events.EventEmitterEventMapListener<T, K>;

    function on1<K extends keyof T>(event: K, listener: Listener<K>): void {
        emitter.on(event, listener);
    }

    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function on2<K extends keyof T>(...args: Parameters<typeof emitter.on<K>>): void {
        emitter.on(...args);
    }

    on1(event1, listener1);
    on1(event2, listener2);
    on1(event3, listener3);
    on1(event4, listener4);
    on1(event5, listener5);

    // @ts-expect-error
    on1(event2, listener1);
    // @ts-expect-error
    on1(event5, listener4);

    on2(event1, listener1);
    on2(event2, listener2);
    on2(event3, listener3);
    on2(event4, listener4);
    on2(event5, listener5);

    // @ts-expect-error
    on2(event4, listener1);
    // @ts-expect-error
    on2(event5, listener4);
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
    const emitter = new events.EventEmitter<{ 123: [string, number] }>();

    emitter.emit(123, "hello", 123);
    // @ts-expect-error
    emitter.emit(123, 123, false);
    // @ts-expect-error
    emitter.emit(456, "hello", 123);
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
    const emitter = new events.EventEmitter<{ 123: [string, number]; 456: any[]; abc: number[]; [s1]: boolean[] }>();

    emitter.emit(123, "hello", 123);
    emitter.emit(456, 123, false);
    emitter.emit(s1, false);
    // @ts-expect-error
    emitter.emit("abc", 123, "false");
    // @ts-expect-error
    emitter.emit(789, 123, false);
    // @ts-expect-error
    emitter.emit(s1, "hello", false);
    emitter.emit(s2, "hello", false);
}

// Uncomment once static methods are generic
// {
//     const promise1: Promise<[string, number]> = events.once(new events.EventEmitter<T>(), "event1");
//     const promise2: Promise<[boolean]> = events.once(new events.EventEmitter<T>(), "event2");
//     const promise3: Promise<[]> = events.once(new events.EventEmitter<T>(), "event3");
//     const promise4: Promise<string[]> = events.once(new events.EventEmitter<T>(), "event4");
//     const promise5: Promise<unknown[]> = events.once(new events.EventEmitter<T>(), "event5");
//     // @ts-expect-error
//     const promise6: Promise<[string, string]> = events.once(new events.EventEmitter<T>(), "event1");
//     const promise7: Promise<any[]> = events.once(new events.EventEmitter<T>(), "event");

//     const iterable1: NodeJS.AsyncIterator<[string, number]> = events.on(new events.EventEmitter<T>(), "event1");
//     const iterable2: NodeJS.AsyncIterator<[boolean]> = events.on(new events.EventEmitter<T>(), "event2");
//     const iterable3: NodeJS.AsyncIterator<[]> = events.on(new events.EventEmitter<T>(), "event3");
//     const iterable4: NodeJS.AsyncIterator<string[]> = events.on(new events.EventEmitter<T>(), "event4");
//     const iterable5: NodeJS.AsyncIterator<unknown[]> = events.on(new events.EventEmitter<T>(), "event5");
//     // @ts-expect-error
//     const iterable6: NodeJS.AsyncIterator<[string, string]> = events.on(new events.EventEmitter<T>(), "event1");
//     const iterable7: NodeJS.AsyncIterator<any[]> = events.on(new events.EventEmitter<T>(), "event");
// }

{
    function acceptsEventEmitterInterface(eventEmitter: NodeJS.EventEmitter) {
    }

    function acceptsEventEmitterClass(eventEmitter: events.EventEmitter) {
    }

    acceptsEventEmitterInterface(emitter);
    acceptsEventEmitterClass(emitter);
}

{
    class Extended extends events.EventEmitter<T> {}

    class DoubleExtension extends Extended {}

    const extended = new Extended();
    const doubleExtended = new DoubleExtension();

    // Uncomment once static methods are generic
    // events.on(extended, "event1"); // $ExpectType AsyncIterator<[string, number], any, any>
    // events.once(extended, "event1"); // $ExpectType Promise<[string, number]>

    // events.on(extended, "unknown"); // $ExpectType AsyncIterator<any[], any, any>
    // events.once(extended, "unknown"); // $ExpectType Promise<any[]>

    // events.on(doubleExtended, "event1"); // $ExpectType AsyncIterator<[string, number], any, any>
    // events.once(doubleExtended, "event1"); // $ExpectType Promise<[string, number]>

    // events.on(doubleExtended, "unknown"); // $ExpectType AsyncIterator<any[], any, any>
    // events.once(doubleExtended, "unknown"); // $ExpectType Promise<any[]>

    extended.addListener(event1, (a: string, b: number | boolean): number => 1);
    doubleExtended.addListener(event1, (a: string, b: number | boolean): number => 1);
    // @ts-expect-error
    extended.addListener(event1, (a: string, b: boolean): number => 1);
    // @ts-expect-error
    doubleExtended.addListener(event1, (a: string, b: boolean): number => 1);

    extended.emit("event1", "hello", 42);
    doubleExtended.emit("event1", "hello", 42);
    // @ts-expect-error
    extended.emit("event1", 123);
    // @ts-expect-error
    doubleExtended.emit("event1", 123);
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
}

interface Implementing extends events.EventEmitter {}
declare class Implementing implements events.EventEmitter {
    addListener(eventName: "event", listener: (arg: boolean) => void): this;
}
