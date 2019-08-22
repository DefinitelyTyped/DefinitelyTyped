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

// When Buffer.from takes a single argument it can be a union of any accepted value
let value: string | Buffer | ArrayBuffer | number[];
const ranNum = Math.random();
if (ranNum < 0.25) {
    value = 'hello';
} else if (ranNum < 0.5) {
    value = Buffer.alloc(0);
} else if (ranNum < 0.75) {
    value = new ArrayBuffer(0);
} else {
    value = [1, 2, 3];
}
const buf: Buffer = Buffer.from(value);
