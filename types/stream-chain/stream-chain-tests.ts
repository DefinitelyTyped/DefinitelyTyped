import * as Chain from 'stream-chain';
import { Readable, Writable, Transform } from 'stream';

const streamFromArray = (array: number[]): Readable => {
    let index = 0;
    return new Readable({
        objectMode: true,
        read(): void {
            this.push(index < array.length ? array[index++] : null);
        }
    });
};

const streamToArray = (array: number[]): Writable =>
    new Writable({
        objectMode: true,
        write(chunk, encoding, callback) {
            array.push(chunk);
            callback(null);
        }
    });

{
    // generic function

    const chain = new Chain([(x: number) => 2 * x]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // generator

    const chain = new Chain([
        // function*(x: number): IterableIterator<number> {
        //     const n = +x;
        //     yield 2 * n - 1;
        //     return 2 * n;
        // }
    ]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // async function

    const chain = new Chain([
        // async (x: number) => Promise.resolve(x)
    ]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // function that returns an array of values

    const chain = new Chain([(x: number) => [x, x + 1]]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // chain of functions

    const chain = new Chain([(x: number) => x * x, (x: number) => 2 * x + 1]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // Transform + a function

    const chain = new Chain([
        new Transform({
            objectMode: true,
            transform(x: number, _: string | undefined, callback: (error: Error | undefined, chunk: any) => void) {
                callback(undefined, x * x);
            }
        }),
        (x: number) => 2 * x + 1
    ]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // factory

    const chain = Chain.chain([(x: number) => 2 * x]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // include Readable

    const chain = new Chain([streamFromArray([1, 2, 3]), (x: number) => 2 * x]);
    const out1: number[] = [];
    const out2: number[] = [];

    chain.pipe(streamToArray(out1));
    chain.on('data', value => out2.push(+value));
}

{
    // include Writable

    const out1: number[] = [];
    const chain = new Chain([(x: number) => 2 * x, streamToArray(out1)]);
    const out2: number[] = [];

    streamFromArray([1, 2, 3]).pipe(chain);
    chain.on('data', value => out2.push(+value));
}

{
    // include Readable and Writable

    const out1: number[] = [];
    const chain = new Chain([streamFromArray([1, 2, 3]), (x: number) => 2 * x, streamToArray(out1)]);
    const out2: number[] = [];

    chain.on('data', value => out2.push(+value));
}
