import * as readline from 'node:readline';
import * as stream from 'node:stream';
import * as fs from 'node:fs';
import * as readlinePromises from 'node:readline/promises';

const rl: readline.ReadLine = readline.createInterface(new stream.Readable());

{
    const options: readline.ReadLineOptions = {
        input: new fs.ReadStream(),
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
        },
    });
    result = readline.createInterface({
        input,
        completer(str: string, callback: (err: any, result: readline.CompleterResult) => void): any {
            callback(null, [['test'], 'test']);
        },
    });
    result = readline.createInterface({
        input,
        tabSize: 4,
    });
}

{
    rl.setPrompt('prompt');
}

{
    rl.prompt();
    rl.prompt(true);
}

{
    rl.getPrompt(); // $ExpectType string
}

{
    rl.question('query', (answer: string) => {});
    rl.question('query', { signal: new AbortSignal() }, (answer: string) => {});
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
    const data: string | Buffer = 'asd';
    const key: readline.Key = {};

    rl.write(data);
    rl.write('asd', key);
}

{
    const data: string | Buffer = 'test';
    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number

    rl.write(data);

    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number
}

{
    const data: undefined | null | string | Buffer = null;
    const key: readline.Key = { ctrl: true, name: 'u' };

    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number

    rl.write(data, key);

    rl.line; // $ExpectType string
    rl.cursor; // $ExpectType number
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    const x = 1;
    const y = 1;

    readline.cursorTo(strm, x);
    readline.cursorTo(strm, x, y);
    readline.cursorTo(strm, x, y, () => {}); // $ExpectType boolean
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
    readline.moveCursor(strm, dx, dy, () => {}); // $ExpectType boolean
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    readline.clearLine(strm, 1);
    readline.clearLine(strm, 1, () => {}); // $ExpectType boolean
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();

    readline.clearScreenDown(strm);
    readline.clearScreenDown(strm, () => {}); // $ExpectType boolean
}

{
    let _rl = readline.createInterface({
        input: process.stdin,
    });
    let _boolean: boolean;

    _rl = _rl.addListener('close', () => {});
    _rl = _rl.addListener('line', input => {
        const _input: string = input;
    });
    _rl = _rl.addListener('pause', () => {});
    _rl = _rl.addListener('resume', () => {});
    _rl = _rl.addListener('SIGCONT', () => {});
    _rl = _rl.addListener('SIGINT', () => {});
    _rl = _rl.addListener('SIGTSTP', () => {});
    _rl = _rl.addListener('history', history => {
        const _input: string[] = history;
    });

    _boolean = _rl.emit('close');
    _boolean = _rl.emit('line');
    _boolean = _rl.emit('pause');
    _boolean = _rl.emit('resume');
    _boolean = _rl.emit('SIGCONT');
    _boolean = _rl.emit('SIGINT');
    _boolean = _rl.emit('SIGTSTP');
    _boolean = _rl.emit('history');

    _rl = _rl.on('close', () => {});
    _rl = _rl.on('line', input => {
        const _input: string = input;
    });
    _rl = _rl.on('pause', () => {});
    _rl = _rl.on('resume', () => {});
    _rl = _rl.on('SIGCONT', () => {});
    _rl = _rl.on('SIGINT', () => {});
    _rl = _rl.on('SIGTSTP', () => {});
    _rl = _rl.on('history', history => {
        const _input: string[] = history;
    });

    _rl = _rl.once('close', () => {});
    _rl = _rl.once('line', input => {
        const _input: string = input;
    });
    _rl = _rl.once('pause', () => {});
    _rl = _rl.once('resume', () => {});
    _rl = _rl.once('SIGCONT', () => {});
    _rl = _rl.once('SIGINT', () => {});
    _rl = _rl.once('SIGTSTP', () => {});
    _rl = _rl.once('history', history => {
        const _input: string[] = history;
    });

    _rl = _rl.prependListener('close', () => {});
    _rl = _rl.prependListener('line', input => {
        const _input: string = input;
    });
    _rl = _rl.prependListener('pause', () => {});
    _rl = _rl.prependListener('resume', () => {});
    _rl = _rl.prependListener('SIGCONT', () => {});
    _rl = _rl.prependListener('SIGINT', () => {});
    _rl = _rl.prependListener('SIGTSTP', () => {});
    _rl = _rl.prependListener('history', history => {
        const _input: string[] = history;
    });

    _rl = _rl.prependOnceListener('close', () => {});
    _rl = _rl.prependOnceListener('line', input => {
        const _input: string = input;
    });
    _rl = _rl.prependOnceListener('pause', () => {});
    _rl = _rl.prependOnceListener('resume', () => {});
    _rl = _rl.prependOnceListener('SIGCONT', () => {});
    _rl = _rl.prependOnceListener('SIGINT', () => {});
    _rl = _rl.prependOnceListener('SIGTSTP', () => {});
    _rl = _rl.prependOnceListener('history', history => {
        const _input: string[] = history;
    });
}

{
    async () => {
        const result = readline.createInterface({
            input: process.stdin,
        });

        // tslint:disable-next-line: await-promise
        for await (const line of result) {
            line; // $ExpectType string
        }
    };
}

{
    const rl = readline.createInterface({
        input: process.stdin,
    });
    const pos: readline.CursorPos = rl.getCursorPos();
}

const rlPromise: readlinePromises.ReadLine = readlinePromises.createInterface(new stream.Readable());
const rlPromiseClass = new readlinePromises.Readline(new stream.Writable());

{
    const options: readline.ReadLineOptions = {
        input: new fs.ReadStream(),
    };
    const input: NodeJS.ReadableStream = new stream.Readable();
    const output: NodeJS.WritableStream = new stream.Writable();
    const completer: readline.Completer = str => [['asd'], 'asd'];
    const terminal = false;

    let result: readlinePromises.ReadLine;

    result = readlinePromises.createInterface(options);
    result = readlinePromises.createInterface(input);
    result = readlinePromises.createInterface(input, output);
    result = readlinePromises.createInterface(input, output, completer);
    result = readlinePromises.createInterface(input, output, completer, terminal);
    result = readlinePromises.createInterface({
        input,
        completer(str: string): readline.CompleterResult {
            return [['test'], 'test'];
        },
    });
    result = readlinePromises.createInterface({
        input,
        async completer(str: string): Promise<readline.CompleterResult> {
            return [['test'], 'test'];
        },
    });
    result = readlinePromises.createInterface({
        input,
        tabSize: 4,
    });
}

{
    rlPromise.setPrompt('prompt');
}

{
    rlPromise.prompt();
    rlPromise.prompt(true);
}

{
    rlPromise.getPrompt(); // $ExpectType string
}

{
    async () => {
        await rlPromise.question('query'); // $ExpectType string
        await rlPromise.question('query', { signal: new AbortSignal() }); // $ExpectType string
    };
}

{
    let result: readlinePromises.ReadLine;

    result = rlPromise.pause();
}

{
    let result: readlinePromises.ReadLine;

    result = rlPromise.resume();
}

{
    const data: string | Buffer = 'asd';
    const key: readline.Key = {};

    rlPromise.write(data);
    rlPromise.write(data, key);
}

{
    const data: string | Buffer = 'test';
    rlPromise.line; // $ExpectType string
    rlPromise.cursor; // $ExpectType number

    rlPromise.write(data);

    rlPromise.line; // $ExpectType string
    rlPromise.cursor; // $ExpectType number
}

{
    const data: undefined | null | string | Buffer = null;
    const key: readline.Key = { ctrl: true, name: 'u' };

    rlPromise.line; // $ExpectType string
    rlPromise.cursor; // $ExpectType number

    rlPromise.write(data, key);

    rlPromise.line; // $ExpectType string
    rlPromise.cursor; // $ExpectType number
}

{
    const strm: NodeJS.WritableStream = new stream.Writable();
    let result: readlinePromises.Readline;

    result = new readlinePromises.Readline(strm);
    result = new readlinePromises.Readline(strm, {});
    result = new readlinePromises.Readline(strm, { autoCommit: undefined });
    result = new readlinePromises.Readline(strm, { autoCommit: true });
    result = new readlinePromises.Readline(strm, { autoCommit: false });
}

{
    let result: readlinePromises.Readline;

    result = rlPromiseClass.clearLine(-1);
    result = rlPromiseClass.clearLine(0);
    result = rlPromiseClass.clearLine(1);
}

{
    let result: readlinePromises.Readline;

    result = rlPromiseClass.clearScreenDown();
}

{
    async () => {
        await rlPromiseClass.commit();
    };
}

{
    let result: readlinePromises.Readline;

    result = rlPromiseClass.cursorTo(0, 0);
    result = rlPromiseClass.cursorTo(0);
}

{
    let result: readlinePromises.Readline;

    result = rlPromiseClass.moveCursor(0, 0);
}

{
    let result: readlinePromises.Readline;

    result = rlPromiseClass.rollback();
}
