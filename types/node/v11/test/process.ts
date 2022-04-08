import * as p from "process";
import { ok } from "assert";
import { EventEmitter } from "events";

{
    let eventEmitter: EventEmitter;
    eventEmitter = process;                // Test that process implements EventEmitter...

    let _p: NodeJS.Process = process;
    _p = p;
}
{
    ok(process.argv[0] === process.argv0);
}
{
    let module: NodeModule | undefined;
    module = process.mainModule;
}
{
    process.on("message", (req: any) => { });
    process.addListener("beforeExit", (code: number) => { });
    process.once("disconnect", () => { });
    process.prependListener("exit", (code: number) => { });
    process.prependOnceListener("rejectionHandled", (promise: Promise<any>) => { });
    process.on("uncaughtException", (error: Error) => { });
    process.addListener("unhandledRejection", (reason: {} | null | undefined, promise: Promise<any>) => { });
    process.once("warning", (warning: Error) => { });
    process.prependListener("message", (message: any, sendHandle: any) => { });
    process.prependOnceListener("SIGBREAK", () => { });
    process.on("newListener", (event: string | symbol, listener: Function) => { });
    process.once("removeListener", (event: string | symbol, listener: Function) => { });
    process.on("multipleResolves", (type: NodeJS.MultipleResolveType, prom: Promise<any>, value: any) => {});

    const listeners = process.listeners('uncaughtException');
    const oldHandler = listeners[listeners.length - 1];
    process.addListener('uncaughtException', oldHandler);
}
{
    function myCb(err: Error): void {
    }
    process.setUncaughtExceptionCaptureCallback(myCb);
    process.setUncaughtExceptionCaptureCallback(null);
    const b: boolean = process.hasUncaughtExceptionCaptureCallback();
}

{
    const report = process.report!;
    report.directory = 'asd';
    report.filename = 'asdasd';
    const rep: string = report.getReport(new Error());
    report.reportOnFatalError = true;
    report.reportOnSignal = true;
    report.reportOnUncaughtException = true;
    report.signal = 'SIGINT';
    let dest = report.writeReport('asdasd', new Error());
    dest = report.writeReport('asdasd');
    dest = report.writeReport(new Error());
}
{
    if (process.send) {
        let r: boolean = process.send('aMessage');
        r = process.send({ msg: "foo"}, {});
        r = process.send({ msg: "foo"}, {}, { swallowErrors: true });
        r = process.send({ msg: "foo"}, {}, { swallowErrors: true }, (err: Error | null) => {});
    }
}

{
    function abortNeverReturns() {
        process.abort(); // $ExpectType never
    }
}

{
    // Emit a warning using a string.
    process.emitWarning('Something happened!');
    // Emits: (node:56338) Warning: Something happened!

    // Emit a warning using a string and a type.
    process.emitWarning('Something Happened!', 'CustomWarning');
    // Emits: (node:56338) CustomWarning: Something Happened!

    process.emitWarning('Something happened!', 'CustomWarning', 'WARN001');
    // Emits: (node:56338) [WARN001] CustomWarning: Something happened!

    // Emit a warning with a code and additional detail.
    process.emitWarning('Something happened!', {
        code: 'MY_WARNING',
        detail: 'This is some additional information'
    });
    // Emits: (node:56338) [MY_WARNING] Warning: Something happened!
    // This is some additional information
}
