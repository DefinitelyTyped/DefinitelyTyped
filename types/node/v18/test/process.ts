import * as p from 'node:process';
import assert = require('node:assert');
import EventEmitter = require('node:events');

{
    let eventEmitter: EventEmitter;
    eventEmitter = process;                // Test that process implements EventEmitter...

    let _p: NodeJS.Process = process;
    _p = p;
}
{
    assert.ok(process.argv[0] === process.argv0);
}
{
    process.on("message", (req: any) => { });
    process.addListener("beforeExit", (code: number) => { });
    process.once("disconnect", () => { });
    process.prependListener("exit", (code: number) => { });
    process.prependOnceListener("rejectionHandled", (promise: Promise<any>) => { });
    process.on("uncaughtException", (error: Error, origin: NodeJS.UncaughtExceptionOrigin) => { });
    process.once("uncaughtExceptionMonitor", (error: Error) => { });
    process.addListener("unhandledRejection", (reason: unknown, promise: Promise<unknown>) => { });
    process.once("warning", (warning: Error) => { });
    process.prependListener("message", (message: any, sendHandle: any) => { });
    process.prependOnceListener("SIGBREAK", () => { });
    process.emit("SIGINT");
    process.on("newListener", (event: string | symbol, listener: Function) => { });
    process.once("removeListener", (event: string | symbol, listener: Function) => { });
    process.on("multipleResolves", (type: NodeJS.MultipleResolveType, prom: Promise<any>, value: any) => {});
    process.on("customEvent", () => { });
    process.on('worker', w => {
        w; // $ExpectType Worker
    });

    const listeners = process.listeners('uncaughtException');
    const oldHandler = listeners[listeners.length - 1];
    process.addListener('uncaughtException', oldHandler);

    const stdInFd = process.stdin.fd;
    const stdOutFd = process.stdout.fd;
    const stdErrorFd = process.stderr.fd;
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
    const rssFast: number = process.memoryUsage.rss();
}
{
    let strDict: NodeJS.Dict<string>;
    strDict = process.versions;
    strDict = p.versions;
}
{
    process.traceDeprecation = true;
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

const hrtimeBigint: bigint = process.hrtime.bigint();

process.allowedNodeEnvironmentFlags.has('asdf');

process.env.TZ = 'test';

{
    const arch: NodeJS.Architecture = process.arch;
}

{
    // @ts-expect-error
    process.getgid();
    // $ExpectType number | undefined
    process.getgid?.();
    // @ts-expect-error
    process.setgid(1);
    // $ExpectType void | undefined
    process.setgid?.(1);
    // @ts-expect-error
    process.getuid();
    // $ExpectType number | undefined
    process.getuid?.();
    // @ts-expect-error
    process.setuid(1);
    // $ExpectType void | undefined
    process.setuid?.(1);
    // @ts-expect-error
    process.geteuid();
    // $ExpectType number | undefined
    process.geteuid?.();
    // @ts-expect-error
    process.seteuid(1);
    // $ExpectType void | undefined
    process.seteuid?.(1);
    // @ts-expect-error
    process.getegid();
    // $ExpectType number | undefined
    process.getegid?.();
    // @ts-expect-error
    process.setegid(1);
    // $ExpectType void | undefined
    process.setegid?.(1);
    // @ts-expect-error
    process.getgroups();
    // $ExpectType number[] | undefined
    process.getgroups?.();
    // @ts-expect-error
    process.setgroups([1]);
    // $ExpectType void | undefined
    process.setgroups?.([1]);

    if (process.getuid) {
        // $ExpectType number
        process.getuid();
    }
}
