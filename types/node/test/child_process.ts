import * as childProcess from 'child_process';
import * as net from 'net';
import * as fs from 'fs';
import * as assert from 'assert';
import { promisify } from 'util';
import { Writable, Readable, Pipe } from 'stream';

{
    childProcess.exec("echo test");
    childProcess.exec("echo test", { windowsHide: true });
    childProcess.spawn("echo");
    childProcess.spawn("echo", { windowsHide: true });
    childProcess.spawn("echo", ["test"], { windowsHide: true });
    childProcess.spawn("echo", ["test"], { windowsHide: true, argv0: "echo-test" });
    childProcess.spawn("echo", ["test"], { stdio: [0xdeadbeef, "inherit", undefined, "pipe"] });
    childProcess.spawnSync("echo test");
    childProcess.spawnSync("echo test", {windowsVerbatimArguments: false});
    childProcess.spawnSync("echo test", {windowsVerbatimArguments: false, argv0: "echo-test"});
    childProcess.spawnSync("echo test", {input: new Uint8Array([])});
    childProcess.spawnSync("echo test", {input: new DataView(new ArrayBuffer(1))});
}

{
    childProcess.execFile("npm", () => {});
    childProcess.execFile("npm", { windowsHide: true }, () => {});
    childProcess.execFile("npm", { shell: true }, () => {});
    childProcess.execFile("npm", { shell: '/bin/sh' }, () => {});
    childProcess.execFile("npm", ["-v"], () => {});
    childProcess.execFile("npm", ["-v"], { windowsHide: true, encoding: 'utf-8' }, (stdout, stderr) => { assert(stdout instanceof String); });
    childProcess.execFile("npm", ["-v"], { windowsHide: true, encoding: 'buffer' }, (stdout, stderr) => { assert(stdout instanceof Buffer); });
    childProcess.execFile("npm", { encoding: 'utf-8' }, (stdout, stderr) => { assert(stdout instanceof String); });
    childProcess.execFile("npm", { encoding: 'buffer' }, (stdout, stderr) => { assert(stdout instanceof Buffer); });
}

{
    childProcess.execFileSync("echo test", {input: new Uint8Array([])});
    childProcess.execFileSync("echo test", {input: new DataView(new ArrayBuffer(1))});
}

{
    const forked = childProcess.fork('./', ['asd'], {
        windowsVerbatimArguments: true,
        silent: false,
        stdio: "inherit",
        execPath: '',
        execArgv: ['asda']
    });
    const ipc: Pipe = forked.channel!;
    const hasRef: boolean = ipc.hasRef();
    ipc.close();
    ipc.unref();
    ipc.ref();
}

async function testPromisify() {
    const execFile = promisify(childProcess.execFile);
    let r: { stdout: string | Buffer, stderr: string | Buffer } = await execFile("npm");
    r = await execFile("npm", ["-v"]);
    r = await execFile("npm", ["-v"], { encoding: 'utf-8' });
    r = await execFile("npm", ["-v"], { encoding: 'buffer' });
    r = await execFile("npm", { encoding: 'utf-8' });
    r = await execFile("npm", { encoding: 'buffer' });

    const prom: childProcess.PromiseWithChild<{ stdout: string, stderr: string }> = execFile('test');
    prom.child;
}

{
    let cp = childProcess.fork('asd');
    const _socket: net.Socket = net.createConnection(1);
    const _server: net.Server = net.createServer();
    let _boolean: boolean;

    _boolean = cp.send(1);
    _boolean = cp.send('one');
    _boolean = cp.send({
        type: 'test'
    });

    _boolean = cp.send(1, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send('one', (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send({
        type: 'test'
    }, (error) => {
        const _err: Error | null = error;
    });

    _boolean = cp.send(1, _socket);
    _boolean = cp.send('one', _socket);
    _boolean = cp.send({
        type: 'test'
    }, _socket);

    _boolean = cp.send(1, _socket, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send('one', _socket, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send({
        type: 'test'
    }, _socket, (error) => {
        const _err: Error | null = error;
    });

    _boolean = cp.send(1, _socket, {
        keepOpen: true
    });
    _boolean = cp.send('one', _socket, {
        keepOpen: true
    });
    _boolean = cp.send({
        type: 'test'
    }, _socket, {
            keepOpen: true
        });

    _boolean = cp.send(1, _socket, {
        keepOpen: true
    }, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send('one', _socket, {
        keepOpen: true
    }, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send({
        type: 'test'
    }, _socket, {
            keepOpen: true
        }, (error) => {
            const _err: Error | null = error;
        });

    _boolean = cp.send(1, _server);
    _boolean = cp.send('one', _server);
    _boolean = cp.send({
        type: 'test'
    }, _server);

    _boolean = cp.send(1, _server, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send('one', _server, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send({
        type: 'test'
    }, _server, (error) => {
        const _err: Error | null = error;
    });

    _boolean = cp.send(1, _server, {
        keepOpen: true
    });
    _boolean = cp.send('one', _server, {
        keepOpen: true
    });
    _boolean = cp.send({
        type: 'test'
    }, _server, {
            keepOpen: true
        });

    _boolean = cp.send(1, _server, {
        keepOpen: true
    }, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send('one', _server, {
        keepOpen: true
    }, (error) => {
        const _err: Error | null = error;
    });
    _boolean = cp.send({
        type: 'test'
    }, _server, {
            keepOpen: true
        }, (error) => {
            const _err: Error | null = error;
        });

    const stdin: Writable | null = cp.stdio[0];
    const stdout: Readable | null = cp.stdio[1];
    const stderr: Readable | null = cp.stdio[2];
    const fd4: Readable | Writable | null = cp.stdio[3]!;
    const fd5: Readable | Writable | null = cp.stdio[4]!;

    cp = cp.addListener("close", (code, signal) => {
        const _code: number = code;
        const _signal: NodeJS.Signals = signal;
    });
    cp = cp.addListener("disconnect", () => { });
    cp = cp.addListener("error", (err) => {
        const _err: Error = err;
    });
    cp = cp.addListener("exit", (code, signal) => {
        const _code: number | null = code;
        const _signal: NodeJS.Signals | null  = signal;
    });
    cp = cp.addListener("message", (message, sendHandle) => {
        const _message: any = message;
        const _sendHandle: net.Socket | net.Server = sendHandle;
    });

    _boolean = cp.emit("close", () => { });
    _boolean = cp.emit("disconnect", () => { });
    _boolean = cp.emit("error", () => { });
    _boolean = cp.emit("exit", () => { });
    _boolean = cp.emit("message", () => { });

    cp = cp.on("close", (code, signal) => {
        const _code: number = code;
        const _signal: NodeJS.Signals = signal;
    });
    cp = cp.on("disconnect", () => { });
    cp = cp.on("error", (err) => {
        const _err: Error = err;
    });
    cp = cp.on("exit", (code, signal) => {
        const _code: number | null  = code;
        const _signal: NodeJS.Signals | null  = signal;
    });
    cp = cp.on("message", (message, sendHandle) => {
        const _message: any = message;
        const _sendHandle: net.Socket | net.Server = sendHandle;
    });

    cp = cp.once("close", (code, signal) => {
        const _code: number = code;
        const _signal: NodeJS.Signals = signal;
    });
    cp = cp.once("disconnect", () => { });
    cp = cp.once("error", (err) => {
        const _err: Error = err;
    });
    cp = cp.once("exit", (code, signal) => {
        const _code: number | null  = code;
        const _signal: NodeJS.Signals | null  = signal;
    });
    cp = cp.once("message", (message, sendHandle) => {
        const _message: any = message;
        const _sendHandle: net.Socket | net.Server = sendHandle;
    });

    cp = cp.prependListener("close", (code, signal) => {
        const _code: number = code;
        const _signal: NodeJS.Signals = signal;
    });
    cp = cp.prependListener("disconnect", () => { });
    cp = cp.prependListener("error", (err) => {
        const _err: Error = err;
    });
    cp = cp.prependListener("exit", (code, signal) => {
        const _code: number | null  = code;
        const _signal: NodeJS.Signals | null  = signal;
    });
    cp = cp.prependListener("message", (message, sendHandle) => {
        const _message: any = message;
        const _sendHandle: net.Socket | net.Server = sendHandle;
    });

    cp = cp.prependOnceListener("close", (code, signal) => {
        const _code: number = code;
        const _signal: NodeJS.Signals = signal;
    });
    cp = cp.prependOnceListener("disconnect", () => { });
    cp = cp.prependOnceListener("error", (err) => {
        const _err: Error = err;
    });
    cp = cp.prependOnceListener("exit", (code, signal) => {
        const _code: number | null  = code;
        const _signal: NodeJS.Signals | null  = signal;
    });
    cp = cp.prependOnceListener("message", (message, sendHandle) => {
        const _message: any = message;
        const _sendHandle: net.Socket | net.Server = sendHandle;
    });

    function expectNonNull(cp: {
        readonly stdin: Writable;
        readonly stdout: Readable;
        readonly stderr: Readable;
        readonly stdio: [
            Writable,
            Readable,
            Readable,
            any,
            any
        ];
    }): void {
        return undefined;
    }

    expectNonNull(childProcess.spawn('command'));
    expectNonNull(childProcess.spawn('command', {}));
    expectNonNull(childProcess.spawn('command', { stdio: undefined }));
    expectNonNull(childProcess.spawn('command', { stdio: 'pipe' }));
    expectNonNull(childProcess.spawn('command', { stdio: [undefined, undefined, undefined] }));
    expectNonNull(childProcess.spawn('command', { stdio: [null, null, null] }));
    expectNonNull(childProcess.spawn('command', { stdio: ['pipe', 'pipe', 'pipe'] }));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c']));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c'], {}));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: undefined }));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: 'pipe' }));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [undefined, undefined, undefined] }));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [null, null, null] }));
    expectNonNull(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['pipe', 'pipe', 'pipe'] }));

    function expectStdio<Stdin, Stdout, Stderr>(...cps: Array<{
        stdin: Stdin,
        stdout: Stdout,
        stderr: Stderr,
        stdio: [Stdin, Stdout, Stderr, any, any]
    }>): void {
        return undefined;
    }

    expectStdio<Writable, Readable, Readable>(
        childProcess.spawn('command', { stdio: ['pipe', 'pipe', 'pipe'] }),
        childProcess.spawn('command', { stdio: [null, null, null] }),
        childProcess.spawn('command', { stdio: [undefined, undefined, undefined] }),
        childProcess.spawn('command', { stdio: ['pipe', null, undefined] }),
    );

    expectStdio<Writable, Readable, null>(
        childProcess.spawn('command', { stdio: ['pipe', 'pipe', 'ignore'] }),
        childProcess.spawn('command', { stdio: [null, null, 'inherit'] }),
        childProcess.spawn('command', { stdio: [undefined, undefined, process.stdout] }),
        childProcess.spawn('command', { stdio: ['pipe', null, process.stderr] }),
    );

    expectStdio<null, null, null>(
        childProcess.spawn('command', { stdio: ['ignore', 'ignore', 'ignore'] }),
        childProcess.spawn('command', { stdio: ['inherit', 'inherit', 'inherit'] }),
        childProcess.spawn('command', { stdio: [process.stdin, process.stdout, process.stderr] }),
        childProcess.spawn('command', { stdio: ['ignore', 'inherit', process.stderr] }),
    );

    expectStdio<Writable, Readable, Readable>(
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['pipe', 'pipe', 'pipe'] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [null, null, null] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [undefined, undefined, undefined] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['pipe', null, undefined] }),
    );

    expectStdio<Writable, Readable, null>(
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['pipe', 'pipe', 'ignore'] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [null, null, 'inherit'] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [undefined, undefined, process.stdout] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['pipe', null, process.stderr] }),
    );

    expectStdio<null, null, null>(
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['ignore', 'ignore', 'ignore'] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['inherit', 'inherit', 'inherit'] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [process.stdin, process.stdout, process.stderr] }),
        childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['ignore', 'inherit', process.stderr] }),
    );

    function expectChildProcess(cp: childProcess.ChildProcess): void {
        return undefined;
    }

    expectChildProcess(childProcess.spawn('command'));
    expectChildProcess(childProcess.spawn('command', {}));
    expectChildProcess(childProcess.spawn('command', { stdio: undefined }));
    expectChildProcess(childProcess.spawn('command', { stdio: 'pipe' }));
    expectChildProcess(childProcess.spawn('command', { stdio: [undefined, undefined, undefined] }));
    expectChildProcess(childProcess.spawn('command', { stdio: [null, null, null] }));
    expectChildProcess(childProcess.spawn('command', { stdio: ['pipe', 'pipe', 'pipe'] }));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c']));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c'], {}));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: undefined }));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: 'pipe' }));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [undefined, undefined, undefined] }));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: [null, null, null] }));
    expectChildProcess(childProcess.spawn('command', ['a', 'b', 'c'], { stdio: ['pipe', 'pipe', 'pipe'] }));
}
{
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
        const chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write(`data: ${chunk}`);
        }
    });

    process.stdin.on('end', () => {
        process.stdout.write('end');
    });

    process.stdin.pipe(process.stdout);

    console.log(process.stdin.isTTY);
    console.log(process.stdout.isTTY);

    console.log(process.stdin instanceof net.Socket);
    console.log(process.stdout instanceof fs.ReadStream);

    const stdin: NodeJS.ReadableStream = process.stdin;
    console.log(stdin instanceof net.Socket);
    console.log(stdin instanceof fs.ReadStream);

    const stdout: NodeJS.WritableStream = process.stdout;
    console.log(stdout instanceof net.Socket);
    console.log(stdout instanceof fs.WriteStream);
}
