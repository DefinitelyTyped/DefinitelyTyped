import { Options, RetryFunction } from "async-retry";
import retry = require("async-retry");

// test type exports
type Opts = Options;
type RetryFn = RetryFunction<void>;

retry(() => "hello"); // $ExpectType Promise<string>
retry(() => 1); // $ExpectType Promise<number>
retry(() => Promise.resolve("hello")); // $ExpectType Promise<string>
retry(() => Promise.resolve(1)); // $ExpectType Promise<number>

// $ExpectType Promise<void>
retry((bail, attempt) => {
    bail; // $ExpectType (e: unknown) => void
    attempt; // $ExpectType number
});

// $ExpectType Promise<void>
retry<void, Error>((bail, attempt) => { // eslint-disable-line @typescript-eslint/no-invalid-void-type
    bail; // $ExpectType (e: Error) => void
    attempt; // $ExpectType number
});

// $ExpectType Promise<void>
retry((_: (e: Error) => void, attempt) => { // eslint-disable-line @typescript-eslint/no-invalid-void-type
    attempt; // $ExpectType number
});

retry(() => "hello", { retries: 3 }); // $ExpectType Promise<string>
retry(() => "hello", { factor: 2 }); // $ExpectType Promise<string>
retry(() => "hello", { minTimeout: 3 }); // $ExpectType Promise<string>
retry(() => "hello", { maxTimeout: 4 }); // $ExpectType Promise<string>
retry(() => "hello", { randomize: true }); // $ExpectType Promise<string>
retry(() => "hello", { forever: false }); // $ExpectType Promise<string>
retry(() => "hello", { unref: true }); // $ExpectType Promise<string>
retry(() => "hello", { maxRetryTime: 1 }); // $ExpectType Promise<string>

// $ExpectType Promise<string>
retry(() => "hello", {
    onRetry: (e, attempt) => {
        e; // $ExpectType unknown
        attempt; // $ExpectType number
        return 42;
    },
});

// $ExpectType Promise<string>
retry<string, Error>(() => "hello", {
    onRetry: (e, attempt) => {
        e; // $ExpectType Error
        attempt; // $ExpectType number
        return 42;
    },
});

// $ExpectType Promise<string>
retry(() => "hello", {
    onRetry: (e: Error, attempt) => {
        e; // $ExpectType Error
        attempt; // $ExpectType number
        return 42;
    },
});
