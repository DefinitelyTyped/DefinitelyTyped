import { Readable, Writable } from 'stream';

{
    const x: NodeModule = {} as any;
    const y: NodeModule = {} as any;
    x.children.push(y);
    x.parent = require.main!;
    require.main = y;
    x.path; // $ExpectType string
    y.parent; // $ExpectType NodeModule | null | undefined
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
    let writableFinished: boolean;
    const readable: Readable = new Readable({
        read() {
            this.push('hello');
            this.push('world');
            this.push(null);
        },
    });
    readable.destroyed;
    const writable: Writable = new Writable({
        write(chunk, _, cb) {
            cb();
        },
    });
    readable.pipe(writable);
    writableFinished = writable.writableFinished;
    writable.destroyed;
}
