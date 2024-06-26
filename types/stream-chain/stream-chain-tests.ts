import { Readable, Transform, Writable } from "stream";
import Chain = require("stream-chain");
import * as Defs from "stream-chain/defs";
import asFun = require("stream-chain/utils/asFun");
import asGen = require("stream-chain/utils/asGen");
import comp = require("stream-chain/utils/comp");
import fold = require("stream-chain/utils/fold");
import FromIterable = require("stream-chain/utils/FromIterable");
import gen = require("stream-chain/utils/gen");
import Reduce = require("stream-chain/utils/Reduce");
import scan = require("stream-chain/utils/scan");
import skip = require("stream-chain/utils/skip");
import skipWhile = require("stream-chain/utils/skipWhile");
import take = require("stream-chain/utils/take");
import takeWhile = require("stream-chain/utils/takeWhile");

const streamFromArray = (array: number[]): Readable => {
    let index = 0;
    return new Readable({
        objectMode: true,
        read(): void {
            this.push(index < array.length ? array[index++] : null);
        },
    });
};

const streamToArray = (array: number[]): Writable =>
    new Writable({
        objectMode: true,
        write(chunk, encoding, callback) {
            array.push(chunk);
            callback(null);
        },
    });

{
    // generic function

    const chain = new Chain([(x: number) => 2 * x]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on("data", value => out2.push(+value));
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
    chain.on("data", value => out2.push(+value));
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
    chain.on("data", value => out2.push(+value));
}

{
    // function that returns an array of values

    const chain = new Chain([(x: number) => [x, x + 1]]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on("data", value => out2.push(+value));
}

{
    // chain of functions

    const chain = new Chain([(x: number) => x * x, (x: number) => 2 * x + 1]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on("data", value => out2.push(+value));
}

{
    // Transform + a function

    const chain = new Chain([
        new Transform({
            objectMode: true,
            transform(x: number, _: string | undefined, callback: (error: Error | undefined, chunk: any) => void) {
                callback(undefined, x * x);
            },
        }),
        (x: number) => 2 * x + 1,
    ]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on("data", value => out2.push(+value));
}

{
    // factory

    const chain = Chain.chain([(x: number) => 2 * x]);
    const out1: number[] = [];
    const out2: number[] = [];

    streamFromArray([1, 2, 3])
        .pipe(chain)
        .pipe(streamToArray(out1));
    chain.on("data", value => out2.push(+value));
}

{
    // include Readable

    const chain = new Chain([streamFromArray([1, 2, 3]), (x: number) => 2 * x]);
    const out1: number[] = [];
    const out2: number[] = [];

    chain.pipe(streamToArray(out1));
    chain.on("data", value => out2.push(+value));
}

{
    // include Writable

    const out1: number[] = [];
    const chain = new Chain([(x: number) => 2 * x, streamToArray(out1)]);
    const out2: number[] = [];

    streamFromArray([1, 2, 3]).pipe(chain);
    chain.on("data", value => out2.push(+value));
}

{
    // include Readable and Writable

    const out1: number[] = [];
    const chain = new Chain([streamFromArray([1, 2, 3]), (x: number) => 2 * x, streamToArray(out1)]);
    const out2: number[] = [];

    chain.on("data", value => out2.push(+value));
}

// asFun()
async function testAsFun() {
    const input = [1, 2, 3];
    const out: number[] = [];
    const pipeline = asFun(
        (x: number) => x - 1,
        (x: number) => x * x,
    );
    for (const value of input) {
        const result = await pipeline(value);
        if (result === Defs.none) continue;
        out.push(result);
    }
}
testAsFun();

// asGen()
async function testAsGen() {
    const input = [1, 2, 3];
    const out: number[] = [];
    const pipeline = asGen(
        (x: number) => x - 1,
        (x: number) => x * x,
    );
    for (const value of input) {
        for await (const result of pipeline(value)) {
            out.push(result);
        }
    }
}
testAsGen();

{
    // comp()
    const out: number[] = [];
    const chain = new Chain([
        streamFromArray([1, 2, 3]),
        comp(
            (x: number) => x - 1,
            (x: number) => x * x,
        ),
    ]);
    chain.on("data", value => out.push(value));
}

{
    // fold()
    let out = 0;
    const chain = new Chain([
        streamFromArray([1, 2, 3]),
        fold((acc, value) => acc + value, 0), // reducer, initial
        fold({ // options object
            reducer: (acc, value) => acc + value,
            initial: 0,
            allowHalfOpen: false, // from DuplexOptions
        }),
    ]);
    chain.on("data", data => out = data);
}

{
    // FromIterable
    const out1: number[] = [];
    const stream1 = new FromIterable({
        iterable: [1, 2, 3], // iterable
    });
    stream1.on("data", value => out1.push(value));

    const out2: number[] = [];
    const stream2 = new FromIterable({
        iterable: { // async iterable
            [Symbol.asyncIterator]() {
                let i = 1;
                return {
                    next() {
                        if (i < 3) {
                            return Promise.resolve({ value: i++, done: false });
                        }
                        return Promise.resolve({ value: 0, done: true });
                    },
                };
            },
        },
    });
    stream2.on("data", value => out2.push(value));

    const out3: number[] = [];
    const stream3 = new FromIterable({
        iterable: Promise.resolve(1), // promise-like
    });
    stream3.on("data", value => out3.push(value));
}

{
    // gen()
    const out: number[] = [];
    const chain = new Chain([
        streamFromArray([1, 2, 3]),
        gen(
            (x: number) => x - 1,
            (x: number) => x * x,
        ),
    ]);
    chain.on("data", value => out.push(value));
}

{
    // Reduce
    let out = 0;
    const reduce = new Reduce({ reducer: (acc, value) => acc + value, initial: 0 });
    const chain = new Chain([
        streamFromArray([1, 2, 3]),
        reduce,
    ]);
    chain.on("data", () => {});
    reduce.on("finish", () => out = reduce.accumulator);
}

{
    // scan()
    let out = 0;
    const chain = new Chain([
        streamFromArray([1, 2, 3]),
        scan((acc, value) => acc + value, 0), // reducer, initial
        scan({ // options object
            reducer: (acc, value) => acc + value,
            initial: 0,
            allowHalfOpen: false, // from DuplexOptions
        }),
    ]);
    chain.on("data", data => out = data);
}

{
    // skip()
    const out: number[] = [];
    const chain = new Chain([
        streamFromArray([1, 2, 3, 4, 5]),
        skip(2), // n
        skip({ // options object
            n: 1,
            allowHalfOpen: false, // from DuplexOptions
        }),
    ]);
    chain.on("data", value => out.push(value));
}

{
    // skipWhile()
    const out: number[] = [];
    const chain = new Chain([
        streamFromArray([1, 2, 3, 4, 5]),
        skipWhile(item => item < 2), // function
        skipWhile(Promise.resolve(false)), // promise-like
        skipWhile({ // options object
            condition: item => item < 3,
            allowHalfOpen: false, // from DuplexOptions
        }),
    ]);
    chain.on("data", value => out.push(value));
}

{
    // take()
    const out: number[] = [];
    const chain = new Chain([
        streamFromArray([1, 2, 3, 4, 5]),
        take(2), // n
        take({ // options object
            n: 2,
            skip: 1,
            allowHalfOpen: false, // from DuplexOptions
        }),
    ]);
    chain.on("data", value => out.push(value));
}

{
    // takeWhile()
    const out: number[] = [];
    const chain = new Chain([
        streamFromArray([1, 2, 3, 4, 5]),
        takeWhile(item => item < 4), // function
        takeWhile(Promise.resolve(false)), // promise-like
        takeWhile({ // options object
            condition: item => item < 3,
            allowHalfOpen: false, // from DuplexOptions
        }),
    ]);
    chain.on("data", value => out.push(value));
}
