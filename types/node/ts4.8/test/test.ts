import { describe, it, run, test, before, beforeEach, after, afterEach } from 'node:test';

// run without options
// $ExpectType TapStream
run();

// run with partial options and boolean concurrency
// $ExpectType TapStream
run({
    concurrency: false,
});

// run with all options and number concurrency
// $ExpectType TapStream
run({
    concurrency: 1,
    files: ['test-file-name.js'],
    signal: new AbortController().signal,
    timeout: 100,
    inspectPort: () => 8081,
});

// TapStream should be a NodeJS.ReadableStream
run().pipe(process.stdout);

test('foo', t => {
    // $ExpectType TestContext
    t;
});

test('blank options', {});

test('options with values', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    skip: 'reason for skip',
    timeout: Infinity,
    todo: 'reason for todo',
});

test('options with booleans', {
    skip: true,
    todo: false,
});

{
    const ret = test();
    // $ExpectType Promise<void>
    ret;
}

// Test callback mode
test((t, cb) => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});

// Test the context's methods
test(undefined, undefined, t => {
    // $ExpectType void
    t.diagnostic('tap diagnostic');
    // $ExpectType void
    t.runOnly(true);
    // $ExpectType void
    t.skip('skip reason');
    // $ExpectType void
    t.skip();
    // $ExpectType void
    t.todo('todo reason');
    // $ExpectType void
    t.todo();
    // $ExpectType void
    t.afterEach(() => {});
    // $ExpectType void
    t.beforeEach(() => {});
});

// Test the subtest approach.
test(t => {
    // $ExpectType TestContext
    t;
    const sub = t.test('sub', {}, t => {
        // $ExpectType TestContext
        t;
    });
    // $ExpectType Promise<void>
    sub;
});

// @ts-expect-error
test(1, () => {});

describe('foo', () => {
    it('it', () => {});
});

describe('blank options', {});
it('blank options', {});

describe('options with values', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    skip: 'reason for skip',
    timeout: Infinity,
    todo: 'reason for todo',
});

it('options with values', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    skip: 'reason for skip',
    timeout: Infinity,
    todo: 'reason for todo',
});

describe('options with booleans', {
    skip: true,
    todo: false,
});
it('options with booleans', {
    skip: true,
    todo: false,
});

describe.skip('skip shorthand', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
it.skip('todo shorthand', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});

describe.todo('skip shorthand', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});
it.todo('todo shorthand', {
    concurrency: 1,
    only: true,
    signal: new AbortController().signal,
    timeout: Infinity,
});

// Test callback mode
describe(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});

// Test callback mode
it(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});

// @ts-expect-error
describe(1, () => {});

// @ts-expect-error
it(1, () => {});

// Hooks
// - without callback
before(() => {});
beforeEach(() => {});
after(() => {});
beforeEach(() => {});
// - with callback
before(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});
beforeEach(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});
after(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});
afterEach(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});
beforeEach(cb => {
    // $ExpectType (result?: any) => void
    cb;
    // $ExpectType void
    cb({ x: 'anything' });
});
// - with options
before(() => {}, { signal: new AbortController().signal, timeout: Infinity });
beforeEach(() => {}, { signal: new AbortController().signal, timeout: Infinity });
after(() => {}, { signal: new AbortController().signal, timeout: Infinity });
beforeEach(() => {}, { signal: new AbortController().signal, timeout: Infinity });
