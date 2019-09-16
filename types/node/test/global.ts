import { Readable, Writable } from 'stream';

{
    const x: NodeModule = {} as any;
    const y: NodeModule = {} as any;
    x.children.push(y);
    x.parent = require.main!;
    require.main = y;
}

{
    // const a = new TextEncoder();
}

{
    queueMicrotask(() => {
        // cool
    });
}

{
    const a = new Readable();
    a.unshift('something', 'utf8');
}

{
    const a = Readable.from(['test'], {
        objectMode: true,
    });
}

const a: NodeJS.TypedArray = new Buffer(123);

{
    const stdin: Readable = process.stdin;
    let writableFinished: boolean;
    const stdout: Writable = process.stdout;
    writableFinished = process.stdout.writableFinished;
    const stderr: Writable = process.stderr;
    writableFinished = process.stderr.writableFinished;
}

{
    const res: Promise<Array<PromiseSettlement<number>>> = Promise.allSettled([Promise.resolve(1)]);
}
