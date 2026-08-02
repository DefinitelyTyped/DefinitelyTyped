import { AsyncLocalStorage } from "node:async_hooks";
import {
    boundedChannel,
    Channel,
    channel,
    hasSubscribers,
    subscribe,
    tracingChannel,
    unsubscribe,
} from "node:diagnostics_channel";

const ch1: Channel = channel(Symbol.for("test"));
function listener(data: unknown) {}
function anotherListener(data: unknown, name: string | symbol) {}

const active: boolean = ch1.hasSubscribers;
const name: string | symbol = ch1.name;

ch1.publish({ some: "message" });

ch1.subscribe(listener);
ch1.subscribe(anotherListener);

ch1.unsubscribe(listener);
ch1.unsubscribe(anotherListener);

subscribe("test", listener);
unsubscribe("test", listener);

subscribe(Symbol.for("test-symbol"), listener);
unsubscribe(Symbol.for("test-symbol"), listener);

const hasSubs = hasSubscribers("test");

{
    const channelsByName = tracingChannel<{ requestId: number }, number>("my-channel");
    channelsByName.start; // $ExpectType Channel<{ requestId: number }, number>

    const channelsByCollection = tracingChannel({
        start: channel<{ requestId: number }, number>("tracing:my-channel:start"),
        end: channel<{ requestId: number }, number>("tracing:my-channel:end"),
        asyncStart: channel<{ requestId: number }, number>("tracing:my-channel:asyncStart"),
        asyncEnd: channel<{ requestId: number }, number>("tracing:my-channel:asyncEnd"),
        error: channel<{ requestId: number }, number>("tracing:my-channel:error"),
    });
    channelsByCollection.start; // $ExpectType Channel<{ requestId: number }, number>
}

{
    const channels = tracingChannel<{ requestId: number }, number>("my-channel");
    const store = new AsyncLocalStorage<number>();

    channels.start.bindStore(store);
    channels.start.bindStore(store, (data) => {
        return data.requestId;
    });
    // $ExpectType boolean
    channels.start.unbindStore(store);

    channels.subscribe({
        start(message) {
            message.requestId; // $ExpectType number
        },
        end(message) {
            message.requestId; // $ExpectType number
            message.error; // $ExpectType unknown
            message.result; // $ExpectType unknown
        },
        asyncStart(message) {
            message.requestId; // $ExpectType number
            message.error; // $ExpectType unknown
            message.result; // $ExpectType unknown
        },
        asyncEnd(message) {
            message.requestId; // $ExpectType number
            message.error; // $ExpectType unknown
            message.result; // $ExpectType unknown
        },
        error(message) {
            message.requestId; // $ExpectType number
            message.error; // $ExpectType unknown
        },
    });

    const thisArg: string = "hello";
    const a: number = 1;
    const b: string = "2";

    // $ExpectType string
    channels.traceSync(
        function(a, b) {
            this; // $ExpectType string
            a; // $ExpectType number
            b; // $ExpectType string
            return "something";
        },
        { requestId: 42 },
        thisArg,
        a,
        b,
    );

    // $ExpectType string
    channels.traceSync(function() {
        return "something";
    }, { requestId: 42 });

    // $ExpectType Promise<string>
    channels.tracePromise(
        async function(a, b) {
            this; // $ExpectType string
            a; // $ExpectType number
            b; // $ExpectType string
            return "something";
        },
        { requestId: 42 },
        thisArg,
        a,
        b,
    );

    // $ExpectType Promise<string>
    channels.tracePromise(async function() {
        return "something";
    }, { requestId: 42 });

    const callback = (err: unknown, result: string) => {};

    // $ExpectType void
    channels.traceCallback(
        function(arg1, arg2, arg3, callback): void {
            // $ExpectType number
            arg1;
            // $ExpectType number
            arg2;
            // $ExpectType string
            arg3;
            callback(null, "result");
        },
        3,
        {
            requestId: 42,
        },
        "thisArg",
        42,
        1,
        "k",
        callback,
    );

    // $ExpectType boolean
    channels.hasSubscribers;
    // @ts-expect-error - Only getter is implemented for `hasSubscribers`
    channels.hasSubscribers = false;
}

{
    const bc = boundedChannel<{ requestId: number }, number>("my-operation");
    bc.hasSubscribers; // $ExpectType boolean

    bc.subscribe({
        start(message) {
            message.requestId; // $ExpectType number
        },
        end(message) {
            message.requestId; // $ExpectType number
        },
    });

    using scope = bc.withScope({ requestId: 123 });
}
