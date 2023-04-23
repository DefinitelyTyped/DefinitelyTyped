import { describe, it, run, test, before, beforeEach, after, afterEach } from 'node:test';

// run without options
// $ExpectType TestsStream
run();

// run with partial options and boolean concurrency
// $ExpectType TestsStream
run({
    concurrency: false,
});

// run with all options and number concurrency
// $ExpectType TestsStream
run({
    concurrency: 1,
    files: ['test-file-name.js'],
    signal: new AbortController().signal,
    timeout: 100,
    inspectPort: () => 8081,
});

// TestsStream should be a NodeJS.ReadableStream
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
    t.after(() => {});
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

test('mocks a counting function', (t) => {
    let cnt = 0;

    function addOne() {
      cnt++;
      return cnt;
    }

    function addTwo() {
      cnt += 2;
      return cnt;
    }

    const fn = t.mock.fn(addOne, addTwo, { times: 2 });
    // $ExpectType number
    fn();
});

test('spies on an object method', (t) => {
    const number = {
        value: 5,
        subtract(a: number) {
            return this.value - a;
        },
    };

    const subtract = t.mock.method(number, 'subtract');

    number.subtract(3);

    const call = subtract.mock.calls[0];
    // $ExpectType [a: number]
    call.arguments;
    // $ExpectType number | undefined
    call.result;
    // $ExpectType unknown
    call.error;
    // $ExpectType undefined
    call.target;

    // @ts-expect-error
    t.mock.method(obj, 'value');
});

test('mocks an object method', (t) => {
    const obj = {
        prop: 5,
        method(a: number, b: number) {
            return a + b + this.prop;
        },
    };

    function mockMethod(this: typeof obj, a: number) {
      return a + this.prop;
    }

    const mocked = t.mock.method(obj, 'method', mockMethod);
    obj.method(1, 3);
    const call = mocked.mock.calls[0];

    // $ExpectType [a: number, b: number] | [a: number]
    call.arguments;
    // $ExpectType number | undefined
    call.result;
    // $ExpectType unknown
    call.error;
    // $ExpectType undefined
    call.target;

    // @ts-expect-error
    t.mock.method(obj, 'prop', mockMethod);
});

test('a no-op spy function is created by default', (t) => {
    const fn = t.mock.fn();
    fn(3, 4);

    const call = fn.mock.calls[0];
    // $ExpectType any[]
    call.arguments;
    // $ExpectType undefined
    call.result;
});

test('spies on a constructor', (t) => {
    class ParentClazz {
        constructor(public c: number) {
          this.c = c;
        }
    }

    class Clazz extends ParentClazz {
        #privateValue;

        constructor(public a: number, b: number) {
            super(a + b);
            this.a = a;
            this.#privateValue = b;
        }

        getPrivateValue() {
            return this.#privateValue;
        }
    }

    const ctor = t.mock.fn(Clazz);
    const instance = new ctor(42, 85);

    // $ExpectType number
    instance.a;
    // $ExpectType number
    instance.getPrivateValue();
    // $ExpectType number
    instance.c;

    const call = ctor.mock.calls[0];
    // $ExpectType [a: number, b: number]
    call.arguments;
    // $ExpectType Clazz | undefined
    call.result;
    // $ExpectType typeof Clazz
    call.target;
});

test('spies on a getter', (t) => {
    const obj = {
        prop: 5,
        get method() {
            return this.prop;
        },
    };

    {
        const getter = t.mock.method(obj, 'method', { getter: true });
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const getter = t.mock.getter(obj, 'method');
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType []
        call.arguments;
        // $ExpectType number | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test('mocks a getter', (t) => {
    const obj = {
        prop: 5,
        get method() {
            return this.prop;
        },
    };

    function mockMethod(this: typeof obj) {
      return this.prop - 1;
    }

    {
        const getter = t.mock.method(obj, 'method', mockMethod, { getter: true });
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const getter = t.mock.getter(obj, 'method', mockMethod);
        console.log(obj.method);
        const call = getter.mock.calls[0];

        // $ExpectType []
        call.arguments;
        // $ExpectType number | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test('spies on a setter', (t) => {
    const obj = {
        prop: 100,
        set method(val: number) {
            this.prop = val;
        },
    };

    {
        const setter = t.mock.method(obj, 'method', { setter: true });
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const setter = t.mock.setter(obj, 'method');
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType [value: number]
        call.arguments;
        // $ExpectType void | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});

test('mocks a setter', (t) => {
    const obj = {
        prop: 100,
        set method(val: number) {
            this.prop = val;
        },
    };

    function mockMethod(this: typeof obj, value: number) {
      this.prop = -value;
    }

    {
        const setter = t.mock.method(obj, 'method', mockMethod, { setter: true });
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType unknown[]
        call.arguments;
        // $ExpectType unknown
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
    {
        const setter = t.mock.setter(obj, 'method', mockMethod);
        obj.method = 77;
        const call = setter.mock.calls[0];

        // $ExpectType [value: number] | [value: number]
        call.arguments;
        // $ExpectType void | undefined
        call.result;
        // $ExpectType undefined
        call.target;
        // $ExpectType unknown
        call.this;
    }
});
