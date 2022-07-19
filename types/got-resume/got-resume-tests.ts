import gotResume = require("got-resume");
import * as zlib from "zlib";

// test type exports
type TransferOptionsWithUrl = gotResume.TransferOptionsWithUrl;
type TransferOptions = gotResume.TransferOptions;
type WithUrl = gotResume.WithUrl;
type TimeoutSpec = gotResume.TimeoutSpec;
type ToFileOptionsWithUrl = gotResume.ToFileOptionsWithUrl;
type ToFileOptions = gotResume.ToFileOptions;
type TransferStream = gotResume.TransferStream;
type Progress = gotResume.Progress;
type Err = gotResume.Error;
type OptionsError = gotResume.OptionsError;
type TransferError = gotResume.TransferError;
type CancelError = gotResume.CancelError;
type PreError = gotResume.PreError;
type Transfer = gotResume.Transfer;

// Default `stream` function tests.

gotResume({ url: "http://test.com" }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", attempts: 0 }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", attemptsTotal: 0 }); // $ExpectType TransferStream
// $ExpectType TransferStream
gotResume({
    url: "http://test.com",
    backoff: (attempt, transfer) => {
        attempt; // $ExpectType number
        transfer; // $ExpectType Transfer
        return 1;
    },
});
gotResume({ url: "http://test.com", got: { method: "POST" } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", length: 10 }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", offset: 5 }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", needLength: true }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: 1000 }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: null }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { lookup: 100 } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { connect: 100 } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { socket: 100 } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { response: 100 } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { send: 100 } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { request: 100 } }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", timeout: { idle: 100 } }); // $ExpectType TransferStream
// $ExpectType TransferStream
gotResume({
    url: "http://test.com",
    pre(transfer) {
        transfer.gotOptions.headers!["user-agent"] = "Stealth 2.0";
        return Promise.resolve();
    },
});
gotResume({ url: "http://test.com", transform: zlib.createGzip() }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", log: console.log }); // $ExpectType TransferStream
gotResume({ url: "http://test.com", got: { baseUrl: "foo" } }); // $ExpectType TransferStream
// @ts-expect-error
gotResume({});

gotResume("http://test.com"); // $ExpectType TransferStream
gotResume("http://test.com", { attempts: 0 }); // $ExpectType TransferStream
gotResume("http://test.com", { attemptsTotal: 0 }); // $ExpectType TransferStream
// $ExpectType TransferStream
gotResume("http://test.com", {
    backoff: (attempt, transfer) => {
        attempt; // $ExpectType number
        transfer; // $ExpectType Transfer
        return 1;
    },
});
gotResume("http://test.com", { got: { method: "POST" } }); // $ExpectType TransferStream
gotResume("http://test.com", { length: 10 }); // $ExpectType TransferStream
gotResume("http://test.com", { offset: 5 }); // $ExpectType TransferStream
gotResume("http://test.com", { needLength: true }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: 1000 }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: null }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { lookup: 100 } }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { connect: 100 } }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { socket: 100 } }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { response: 100 } }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { send: 100 } }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { request: 100 } }); // $ExpectType TransferStream
gotResume("http://test.com", { timeout: { idle: 100 } }); // $ExpectType TransferStream
// $ExpectType TransferStream
gotResume("http://test.com", {
    pre(transfer) {
        transfer.gotOptions.headers!["user-agent"] = "Stealth 2.0";
        return Promise.resolve();
    },
});
gotResume("http://test.com", { transform: zlib.createGzip() }); // $ExpectType TransferStream
gotResume("http://test.com", { log: console.log }); // $ExpectType TransferStream
gotResume("http://test.com", { got: { baseUrl: "foo" } }); // $ExpectType TransferStream
gotResume("http://test.com", {}); // $ExpectType TransferStream
// @ts-expect-error
gotResume("http://test.com", { url: "foo" });

gotResume.toFile("foo", { url: "http://test.com" }); // $ExpectType Promise<void>
// $ExpectType Promise<void>
gotResume.toFile("foo", {
    url: "http://test.com",
    onProgress(progress) {
        progress; // $ExpectType Progress
    },
});
// $ExpectType Promise<void>
gotResume.toFile("foo", {
    url: "http://test.com",
    onResponse(response) {
        response; // $ExpectType IncomingMessage
    },
});
gotResume.toFile("foo", { url: "http://test.com", Promise }); // $ExpectType Promise<void>
gotResume.toFile("foo", { url: "http://test.com", length: 10 }); // $ExpectType Promise<void>
// @ts-expect-error
gotResume.toFile("foo", {});

// toFile() tests

gotResume.toFile("foo", "http://test.com"); // $ExpectType Promise<void>
// $ExpectType Promise<void>
gotResume.toFile("foo", "http://test.com", {
    onProgress(progress) {
        progress; // $ExpectType Progress
    },
});
// $ExpectType Promise<void>
gotResume.toFile("foo", "http://test.com", {
    onResponse(response) {
        response; // $ExpectType IncomingMessage
    },
});
gotResume.toFile("foo", "http://test.com", { Promise }); // $ExpectType Promise<void>
gotResume.toFile("foo", "http://test.com", { length: 10 }); // $ExpectType Promise<void>
gotResume.toFile("foo", "http://test.com", {}); // $ExpectType Promise<void>
// @ts-expect-error
gotResume.toFile("foo", "http://test.com", { url: "foo" });

gotResume.toFile("foo", "http://test.com").cancel();

// TransferStream tests

const stream = gotResume({ url: "http://test.com" });

stream.cancel(); // $ExpectType void
stream.transfer; // $ExpectType Transfer

stream.addListener("error", error => {
    // Fails in TS3.5, assignment can be replaced with commented out version as soon as TS3.5 goes out of test range
    // error; // $ExpectType Error | TransferError | CancelError
    const e: Error | TransferError | CancelError = error;
});
stream.addListener("end", () => {});
stream.addListener("progress", progress => {
    progress; // $ExpectType Progress
});
stream.addListener("response", response => {
    response; // $ExpectType IncomingMessage
});
stream.addListener("readable", () => {});

// Transfer tests

const transfer = new gotResume.Transfer({});

transfer.options; // $ExpectType ToFileOptions & Partial<WithUrl>
transfer.url; // $ExpectType string | undefined
transfer.length; // $ExpectType number | undefined
transfer.log; // $ExpectType (...args: unknown[]) => void
transfer.gotOptions; // $ExpectType GotOptions<string | null>
transfer.idleTimeout; // $ExpectType number | undefined

transfer.attempt; // $ExpectType number
transfer.attemptTotal; // $ExpectTypenumber
transfer.position; // $ExpectType number | undefined
transfer.total; // $ExpectType number | undefined
transfer.cancelled; // $ExpectType boolean
transfer.requestEventFired; // $ExpectType boolean
transfer.req; // $ExpectType ClientRequest | undefined
transfer.res; // $ExpectType IncomingMessage | undefined
transfer.err; // $ExpectType Error | undefined
transfer.lastMod; // $ExpectType string | undefined
transfer.etag; // $ExpectType string | undefined
transfer.prePromise; // $ExpectType Promise<void> | undefined
transfer.waitTimer; // $ExpectType number | undefined
transfer.stream; // $ExpectType TransferStream

transfer.start(); // $ExpectType void
transfer.get(); // $ExpectType void
transfer.failed(Error("test"), true); // $ExpectType void
transfer.fatal(); // $ExpectType void
transfer.cancel(); // $ExpectType void

// Error tests

new gotResume.Error();
const error = new gotResume.Error("test");
error.name; // $ExpectType "GotResumeError"

new gotResume.OptionsError();
const optionsError = new gotResume.OptionsError("test");
optionsError.name; // $ExpectType "GotResumeOptionsError"

new gotResume.TransferError();
const transferError = new gotResume.TransferError("test");
transferError.name; // $ExpectType "GotResumeTransferError"

new gotResume.CancelError();
const cancelError = new gotResume.CancelError("test");
cancelError.name; // $ExpectType "GotResumeCancelError"

new gotResume.PreError();
const preError = new gotResume.PreError("test");
preError.name; // $ExpectType "GotResumePreError"
