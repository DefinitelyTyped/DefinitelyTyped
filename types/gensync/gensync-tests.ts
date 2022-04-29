import gensync = require('gensync');

// Fake node fs.readFile for testing.
declare function readFileCallback(
    path: string,
    encoding: 'utf8' | 'ascii',
    cb: (err: unknown, result: string) => void,
): void;
declare function readFileSync(path: string, encoding: 'utf8' | 'ascii'): string;
declare function readFileAsync(path: string, encoding: 'utf8' | 'ascii'): Promise<string>;

const readFile1 = gensync({
    name: 'readFile',
    arity: 2,
    sync: readFileSync,
});

const readFile2 = gensync({
    name: 'readFile',
    sync: readFileSync,
    async: readFileAsync,
});

const readFile3 = gensync({
    name: 'readFile',
    sync: readFileSync,
    errback: readFileCallback,
});

const addNumbers = gensync(function* (a: number, b?: number) {
    return a + (b ?? 0);
});

const pathJoin = gensync(function* (...args: string[]) {
    return args.join('/');
});

const readContents = gensync(function* (p: string) {
    const path = yield* pathJoin('folder', p);
    const contents = yield* readFile1(path, 'utf8');
    return contents;
});

// $ExpectType string
const contents = readContents.sync('foo');

async function readContents2() {
    // $ExpectType string
    const result = await readContents.async('foo');
}

readContents.errback('foo', (err, result) => {
    // $ExpectType string
    result;
});

function* someOtherGenerator() {
    yield 'this is not a gensync generator';
    return 1234;
}

gensync(function* () {
    // $ExpectType [number, string]
    const all = yield* gensync.all([addNumbers(1, 2), readContents('foo')]);

    // $ExpectType string | number
    const race = yield* gensync.race([addNumbers(1, 2), readContents('foo')]);
});

gensync(function* () {
    const gens = [addNumbers(1, 2), readContents('foo')];

    // $ExpectType (string | number)[]
    const all = yield* gensync.all(gens);

    // $ExpectType string | number
    const race = yield* gensync.race(gens);
});

declare const iterable: Iterable<gensync.GensyncGenerator<number | boolean>>;

gensync(function* () {
    // $ExpectType (number | boolean)[]
    const all = yield* gensync.all(iterable);

    // $ExpectType number | boolean
    const race = yield* gensync.race(iterable);
});

// gensync throws when both async and errback are provided.
// $ExpectError
const readFileBad = gensync({
    name: 'readFile',
    sync: readFileSync,
    async: readFileAsync,
    errback: readFileCallback,
});

// $ExpectError
gensync(function* () {
    // This generator was not produced by gensync.
    const result = yield* someOtherGenerator();
});

// $ExpectError
gensync(() => {});

gensync(function* () {
    // $ExpectError
    yield* gensync.all(['not a generator']);

    // $ExpectError
    yield* gensync.all([someOtherGenerator()]);

    // $ExpectError
    yield* gensync.race(['not a generator']);

    // $ExpectError
    yield* gensync.race([someOtherGenerator()]);
});

Promise.all;
