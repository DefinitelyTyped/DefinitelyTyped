import streamx = require('streamx');
const { Readable, Writable } = streamx;

{
    const r = new Readable<string, number>({
        read(cb) {
            cb(null, 123); // $ExpectError
        },
    });
    r.on('anyevent', () => {}); // $ExpectError
    r.on('data', (data: string) => {}); // $ExpectError
    r.on('error', (error: number) => {}); // $ExpectError
    r.on('open', (hello: string) => {}); // $ExpectError
    r.on('close', (hello: string) => {}); // $ExpectError
    r.unshift(1); // $ExpectError
    r.push(1); // $ExpectError
    r.destroy('hi'); // $ExpectError
    r.pipe(new Readable()); // $ExpectError
    r.pipe(new Writable<string>()); // $ExpectError
}

{
    const w = new Writable<number, string>({
        write(data: string, cb) {
            cb(null, 123); // $ExpectError
        },
    });
    w.write('123'); // $ExpectError
    w.end('123'); // $ExpectError
}
