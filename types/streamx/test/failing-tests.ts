import streamx = require('streamx');
const { Readable, Writable } = streamx;

{
    const r = new Readable<string, number>({
        read(cb) {
            // @ts-expect-error
            cb(null, 123);
        },
    });
    // @ts-expect-error
    r.on('anyevent', () => {});
    // @ts-expect-error
    r.on('data', (data: string) => {});
    // @ts-expect-error
    r.on('error', (error: number) => {});
    // @ts-expect-error
    r.on('open', (hello: string) => {});
    // @ts-expect-error
    r.on('close', (hello: string) => {});
    // @ts-expect-error
    r.unshift(1);
    // @ts-expect-error
    r.push(1);
    // @ts-expect-error
    r.destroy('hi');
    // @ts-expect-error
    r.pipe(new Readable());
    // @ts-expect-error
    r.pipe(new Writable<string>());
}

{
    const w = new Writable<number, string>({
        write(data: string, cb) {
            // @ts-expect-error
            cb(null, 123);
        },
    });
    // @ts-expect-error
    w.write('123');
    // @ts-expect-error
    w.end('123');
}
