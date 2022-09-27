import gensync = require('gensync');

// Fake node fs.readFile for testing.
declare function readFileCallback(
    path: string,
    encoding: 'utf8' | 'ascii',
    cb: (err: Error, result: string) => void,
): void;
declare function readFileSync(path: string, encoding: 'utf8' | 'ascii'): string;
declare function readFileAsync(path: string, encoding: 'utf8' | 'ascii'): Promise<string>;

// $ExpectType Gensync<[path: string, encoding: "utf8" | "ascii"], string, unknown>
const readFileFromSync = gensync({
    name: 'readFile',
    arity: 2,
    sync: readFileSync,
});

// $ExpectType (path: string, encoding: "utf8" | "ascii") => string
readFileFromSync.sync;

// $ExpectType (path: string, encoding: "utf8" | "ascii") => Promise<string>
readFileFromSync.async;

// $ExpectType (path: string, encoding: "utf8" | "ascii", callback: (err: unknown, result: string) => void) => void
readFileFromSync.errback;

// $ExpectType Gensync<[path: string, encoding: "utf8" | "ascii"], string, unknown>
const readFileFromAsync = gensync({
    name: 'readFile',
    sync: readFileSync,
    async: readFileAsync,
});

// $ExpectType (path: string, encoding: "utf8" | "ascii") => string
readFileFromAsync.sync;

// $ExpectType (path: string, encoding: "utf8" | "ascii") => Promise<string>
readFileFromAsync.async;

// $ExpectType (path: string, encoding: "utf8" | "ascii", callback: (err: unknown, result: string) => void) => void
readFileFromAsync.errback;

// $ExpectType Gensync<[path: string, encoding: "utf8" | "ascii"], string, Error>
const readFileFromErrback = gensync({
    name: 'readFile',
    sync: readFileSync,
    errback: readFileCallback,
});

// $ExpectType (path: string, encoding: "utf8" | "ascii") => string
readFileFromErrback.sync;

// $ExpectType (path: string, encoding: "utf8" | "ascii") => Promise<string>
readFileFromErrback.async;

// $ExpectType (path: string, encoding: "utf8" | "ascii", callback: (err: Error, result: string) => void) => void
readFileFromErrback.errback;

// $ExpectType Gensync<[], void, unknown>
const noop = gensync(function* () { });

// $ExpectType () => void
noop.sync;

// $ExpectType () => Promise<void>
noop.async;

// $ExpectType (callback: (err: unknown) => void) => void
noop.errback;

gensync({
    sync: () => { },
    errback: callback => {
        callback(new Error());
    },
});

const addNumbers = gensync(function* (a: number, b?: number) {
    return a + (b ?? 0);
});

const pathJoin = gensync(function* (...args: string[]) {
    return args.join('/');
});

const readContents = gensync(function* (p: string) {
    const path = yield* pathJoin('folder', p);
    const contents = yield* readFileFromSync(path, 'utf8');
    return contents;
});

// $ExpectType string
readContents.sync('foo');

async function readContentsAsync() {
    // $ExpectType string
    await readContents.async('foo');
}

readContents.errback('foo', (err, result) => {
    // $ExpectType unknown
    err;
    // $ExpectType string
    result;
});

const isAsync = gensync<[], boolean, null>({
    sync: () => false,
    errback: cb => cb(null, true),
});

isAsync.errback((err, condition) => {
    // $ExpectType null
    err;

    // $ExpectType boolean
    condition;
});

gensync(function* () {
    // $ExpectType [number, string]
    yield* gensync.all([addNumbers(1, 2), readContents('foo')]);

    // $ExpectType string | number
    yield* gensync.race([addNumbers(1, 2), readContents('foo')]);
});

gensync(function* () {
    const gens = [addNumbers(1, 2), readContents('foo')];

    // $ExpectType (string | number)[]
    yield* gensync.all(gens);

    // $ExpectType string | number
    yield* gensync.race(gens);
});

declare const iterable: Iterable<gensync.Handler<number | boolean>>;

gensync(function* () {
    // $ExpectType (number | boolean)[]
    yield* gensync.all(iterable);

    // $ExpectType number | boolean
    yield* gensync.race(iterable);
});

// gensync throws when both async and errback are provided.
gensync({
    name: 'readFile',
    sync: readFileSync,
    // @ts-expect-error
    async: readFileAsync,
    errback: readFileCallback,
});

function* someOtherGenerator() {
    yield 'this is not a gensync generator';
    return 1234;
}

// @ts-expect-error
gensync(function* () {
    // This generator was not produced by gensync; error.
    // It"d be better to have an error on the next line rather than above,
    // but the generator type that's produced via the body appears to have
    // higher precedence than the contextual type.
    yield* someOtherGenerator();
});

// @ts-expect-error
gensync(() => { });

// @ts-expect-error
gensync({});

gensync(function* () {
    // @ts-expect-error
    yield* gensync.all(['not a generator']);

    // @ts-expect-error
    yield* gensync.all([someOtherGenerator()]);

    // @ts-expect-error
    yield* gensync.race(['not a generator']);

    // @ts-expect-error
    yield* gensync.race([someOtherGenerator()]);
});

gensync({
    sync: () => { },
    errback: callback => {
        // @ts-expect-error
        callback(new Error(), 'some result');
    },
});
