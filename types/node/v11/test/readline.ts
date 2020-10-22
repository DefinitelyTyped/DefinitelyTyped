import * as readline from 'readline';
import * as stream from 'stream';
import * as fs from 'fs';

const rl: readline.ReadLine = readline.createInterface(new stream.Readable());

{
    const options: readline.ReadLineOptions = {
        input: new fs.ReadStream()
    };
    const input: NodeJS.ReadableStream = new stream.Readable();
    const output: NodeJS.WritableStream = new stream.Writable();
    const completer: readline.Completer = str => [['asd'], 'asd'];
    const terminal = false;

    let result: readline.ReadLine;

    result = readline.createInterface(options);
    result = readline.createInterface(input);
    result = readline.createInterface(input, output);
    result = readline.createInterface(input, output, completer);
    result = readline.createInterface(input, output, completer, terminal);
    result = readline.createInterface({
        input,
        completer(str: string): readline.CompleterResult {
            return [['test'], 'test'];
        }
    });
    result = readline.createInterface({
        input,
        completer(str: string, callback: (err: any, result: readline.CompleterResult) => void): any {
            callback(null, [['test'], 'test']);
        }
    });
}

{
    rl.setPrompt("prompt");
}

{
    rl.prompt();
    rl.prompt(true);
}

{
    rl.question("query", (answer: string) => {});
}

{
    let result: readline.ReadLine;

    result = rl.pause();
}

{
    let result: readline.ReadLine;

    result = rl.resume();
}

{
    rl.close();
}

{
    const data: string | Buffer = "asd";
    const key: readline.Key = {};

    rl.write(data);
    rl.write('asd', key);
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    const x = 1;
    const y = 1;

    readline.cursorTo(strm, x);
    readline.cursorTo(strm, x, y);
}

{
    const strm: NodeJS.ReadableStream = new stream.Readable();
    const readLineInterface: readline.ReadLine = readline.createInterface(new stream.Readable());

    readline.emitKeypressEvents(strm);
    readline.emitKeypressEvents(strm, readLineInterface);
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    const dx: number | string = 1;
    const dy: number | string = 1;

    readline.moveCursor(strm, dx, dy);
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    readline.clearLine(strm, 1);
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();

    readline.clearScreenDown(strm);
}

{
    let _rl = readline.createInterface({
        input: process.stdin,
    });
    let _boolean: boolean;

    _rl = _rl.addListener("close", () => { });
    _rl = _rl.addListener("line", (input) => {
        const _input: string = input;
    });
    _rl = _rl.addListener("pause", () => { });
    _rl = _rl.addListener("resume", () => { });
    _rl = _rl.addListener("SIGCONT", () => { });
    _rl = _rl.addListener("SIGINT", () => { });
    _rl = _rl.addListener("SIGTSTP", () => { });

    _boolean = _rl.emit("close", () => { });
    _boolean = _rl.emit("line", () => { });
    _boolean = _rl.emit("pause", () => { });
    _boolean = _rl.emit("resume", () => { });
    _boolean = _rl.emit("SIGCONT", () => { });
    _boolean = _rl.emit("SIGINT", () => { });
    _boolean = _rl.emit("SIGTSTP", () => { });

    _rl = _rl.on("close", () => { });
    _rl = _rl.on("line", (input) => {
        const _input: any = input;
    });
    _rl = _rl.on("pause", () => { });
    _rl = _rl.on("resume", () => { });
    _rl = _rl.on("SIGCONT", () => { });
    _rl = _rl.on("SIGINT", () => { });
    _rl = _rl.on("SIGTSTP", () => { });

    _rl = _rl.once("close", () => { });
    _rl = _rl.once("line", (input) => {
        const _input: any = input;
    });
    _rl = _rl.once("pause", () => { });
    _rl = _rl.once("resume", () => { });
    _rl = _rl.once("SIGCONT", () => { });
    _rl = _rl.once("SIGINT", () => { });
    _rl = _rl.once("SIGTSTP", () => { });

    _rl = _rl.prependListener("close", () => { });
    _rl = _rl.prependListener("line", (input) => {
        const _input: any = input;
    });
    _rl = _rl.prependListener("pause", () => { });
    _rl = _rl.prependListener("resume", () => { });
    _rl = _rl.prependListener("SIGCONT", () => { });
    _rl = _rl.prependListener("SIGINT", () => { });
    _rl = _rl.prependListener("SIGTSTP", () => { });

    _rl = _rl.prependOnceListener("close", () => { });
    _rl = _rl.prependOnceListener("line", (input) => {
        const _input: any = input;
    });
    _rl = _rl.prependOnceListener("pause", () => { });
    _rl = _rl.prependOnceListener("resume", () => { });
    _rl = _rl.prependOnceListener("SIGCONT", () => { });
    _rl = _rl.prependOnceListener("SIGINT", () => { });
    _rl = _rl.prependOnceListener("SIGTSTP", () => { });
}

{
    (async () => {
        const result = readline.createInterface({
            input: process.stdin,
        });
        // Pending lib upgrade
        // for await (const line of result) {
        //
        // }
    });
}
