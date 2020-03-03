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
    process.once("uncaughtExceptionMonitor", (error: Error) => { });
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
    const usage: NodeJS.ResourceUsage = process.resourceUsage();
}

{
    const usage: NodeJS.MemoryUsage = process.memoryUsage();
    const rss: number = usage.rss;
    const heapTotal: number = usage.heapTotal;
    const heapUsed: number = usage.heapUsed;
    const external: number = usage.external;
    const arrayBuffers: number = usage.arrayBuffers;
}
