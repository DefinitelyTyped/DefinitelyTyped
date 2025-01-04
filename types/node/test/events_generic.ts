import * as events from "node:events";

interface T {
    event1: [string, number];
    event2: [boolean];
    event3: [];
    event4: string[];
    event5: unknown[];
}

type NotAny<T> = 0 extends T & 1 ? never : T;

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
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function expectNotAnyOrNeverArray<T extends unknown[]>(
    input: 0 extends T & 1 ? never : T extends (infer U)[] ? [U] extends [never] ? never : NotAny<U>[] : T,
): void;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function expectNotAny<T>(input: NotAny<T>): void;

{
    // @ts-expect-error
    expectNotAnyOrNeverArray([] as any[]);
    // @ts-expect-error
    expectNotAnyOrNeverArray([]);

    expectNotAnyOrNeverArray(["test"]);
}

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

    // @ts-expect-error
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
    let result: Promise<number[]>;

    // @ts-expect-error
    result = events.once(emitter, event1);
    // @ts-expect-error
    result = events.once(emitter, event2);
    // this is still valid, because event3 args are typed as `never[]`
    result = events.once(emitter, event3);
    // @ts-expect-error
    result = events.once(emitter, event4);
    // @ts-expect-error
    result = events.once(emitter, event5);

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
    let result: Array<keyof T>;

    result = emitter.eventNames();
}

{
    type Listener<K> = K extends keyof T ? (
            (...args: T[K]) => void
        )
        : never;

    function on1<K>(event: K, listener: Listener<K>): void {
        emitter.on(event, listener);
    }

    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    function on2<K>(...args: Parameters<typeof emitter.on<K>>): void {
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
    // @ts-expect-error
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
    // @ts-expect-error
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
    // @ts-expect-error
    emitter.emit(s2, "hello", false);
}

{
    const result1: Promise<[string, number]> = events.once(emitter, event1);
    const result2: Promise<[boolean]> = events.once(emitter, event2);
    const result3: Promise<[]> = events.once(emitter, event3);
    const result4: Promise<string[]> = events.once(emitter, event4);
    const result5: Promise<unknown[]> = events.once(emitter, event5);
}

{
    const iter = events.on(emitter, event1);
    iter.next().then(({ value }) => {
        expectNotAnyOrNeverArray(value);
        const result: [string, number] = value;
        // @ts-expect-error
        const badResult: [boolean] = value;
    });
    const result: Promise<IteratorResult<[string, number], [string, number]>> = iter.next();
}

{
    const iter = events.on(new events.EventEmitter(), "error");
    const result: Promise<IteratorResult<number[], number[]>> = iter.next();
}

{
    interface EventMap {
        "no-parameters": [];
        "with-parameters": [n: number, s: string];
    }

    class DerivedEmitter extends events.EventEmitter<EventMap> {}
    const derivedEmitter = new DerivedEmitter();
    const dA = events.on(derivedEmitter, "no-parameters");
    dA.next().then(({ value }) => {
        expectNotAny(value);
        const result: [] = value;
    });

    const dB = events.on(derivedEmitter, "with-parameters");
    dB.next().then(({ value }) => {
        expectNotAny(value);
        const result: [n: number, s: string] = value;
    });

    events.once(derivedEmitter, "no-parameters").then((result) => {
        expectNotAny(result);
        const typedResult: [] = result;
    });
    events.once(derivedEmitter, "with-parameters").then((result) => {
        expectNotAny(result);
        const typedResult: [n: number, s: string] = result;
    });
}

{
    interface EventMap {
        "no-parameters": [];
        "with-parameters": [n: number, s: string];
    }
    class DerivedEmitterGeneric<Events extends Record<keyof Events, unknown[]>> extends events.EventEmitter<Events> {}
    const derivedEmitter = new DerivedEmitterGeneric<EventMap>();
    const dA = events.on(derivedEmitter, "no-parameters");
    dA.next().then(({ value }) => {
        expectNotAny(value);
        const result: [] = value;
    });

    const dB = events.on(derivedEmitter, "with-parameters");
    dB.next().then(({ value }) => {
        expectNotAny(value);
        const result: [n: number, s: string] = value;
    });

    events.once(derivedEmitter, "no-parameters").then((result) => {
        expectNotAny(result);
        const typedResult: [] = result;
    });
    events.once(derivedEmitter, "with-parameters").then((result) => {
        expectNotAny(result);
        const typedResult: [n: number, s: string] = result;
    });
}
