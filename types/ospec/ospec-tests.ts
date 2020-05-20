import o = require('ospec');
// import o, { Definer } from 'ospec'; // NOTE: this only works with  "esModuleInterop": true

const exampleTypeUse1: o.Definer = () => {};
// const exampleTypeUse2: Definer = () => {}; // NOTE: this only works with  "esModuleInterop": true

// ======================================================================

// $ExpectType void
o.spec('ospec typings', () => {
    const bool = false;
    const numOrStr = Date.now() > 0 ? 'hi' : 42;
    const obj = { a: 1 };
    const arr = [1];
    const fn = () => {};

    // $ExpectType void
    o('o(actual) returns assertion interface based on input type', () => {
        o(bool); // $ExpectType Assertion<boolean>
        o(numOrStr); // $ExpectType Assertion<string | number>
        o(arr); // $ExpectType Assertion<number[]>
        o(obj); // $ExpectType Assertion<{ a: number; }>
        o(new Date()); // $ExpectType Assertion<Date>
        o(fn); // $ExpectType Assertion<() => void>
    });

    o('.equals() is type safe', () => {
        o(bool).equals(true); // $ExpectType AssertionDescriber
        o(bool).equals(true)('description text');
        o(numOrStr).equals('hello');
        o(numOrStr).equals(1);
        o(fn).equals(() => {});
        o(obj).equals({ a: 1 });
        o(arr).equals([1, 2]);

        // $ExpectError
        o(bool).equals(1);
        // $ExpectError
        o(numOrStr).equals(true);
        // $ExpectError
        o(fn).equals(1);
        // $ExpectError
        o(obj).equals({});
        // $ExpectError
        o(arr).equals(['hi']);
    });

    o('.notEquals() is also type safe', () => {
        o(bool).notEquals(true); // $ExpectType AssertionDescriber
        o(bool).notEquals(true)('description text');
        o(numOrStr).notEquals('hello');
        o(numOrStr).notEquals(1);
        o(fn).notEquals(() => {});
        o(obj).notEquals({ a: 1 });
        o(arr).notEquals([1, 2]);

        // $ExpectError
        o(bool).notEquals(1);
        // $ExpectError
        o(numOrStr).notEquals(true);
        // $ExpectError
        o(fn).notEquals(1);
        // $ExpectError
        o(obj).notEquals({});
        // $ExpectError
        o(arr).notEquals(['hi']);
    });

    o('.deepEquals() is similarily type safe', () => {
        o(bool).deepEquals(true); // $ExpectType AssertionDescriber
        o(bool).deepEquals(true)('description text');
        o(numOrStr).deepEquals('hello');
        o(numOrStr).deepEquals(1);
        o(fn).deepEquals(() => {});
        o(obj).deepEquals({ a: 1 });
        o(arr).deepEquals([1, 2]);

        // $ExpectError
        o(bool).deepEquals(1);
        // $ExpectError
        o(numOrStr).deepEquals(true);
        // $ExpectError
        o(fn).deepEquals(1);
        // $ExpectError
        o(obj).deepEquals({});
        // $ExpectError
        o(arr).deepEquals(['hi']);
    });

    o('and .notDeepEquals() is also type safe', () => {
        o(bool).notDeepEquals(true); // $ExpectType AssertionDescriber
        o(bool).notDeepEquals(true)('description text');
        o(numOrStr).notDeepEquals('hello');
        o(numOrStr).notDeepEquals(1);
        o(fn).notDeepEquals(() => {});
        o(obj).notDeepEquals({ a: 1 });
        o(arr).notDeepEquals([1, 2]);

        // $ExpectError
        o(bool).notDeepEquals(1);
        // $ExpectError
        o(numOrStr).notDeepEquals(true);
        // $ExpectError
        o(fn).notDeepEquals(1);
        // $ExpectError
        o(obj).notDeepEquals({});
        // $ExpectError
        o(arr).notDeepEquals(['hi']);
    });

    o('.throws()/.notThrows() only available for function values', () => {
        o(fn).throws('baz'); // $ExpectType AssertionDescriber
        o(fn).notThrows('baz'); // $ExpectType AssertionDescriber
        o(fn).throws(Error);
        // NOTE: ospec says trows/notThrows accepts "Object constructor"
        o(fn).notThrows(String);

        // $ExpectError
        o(bool).throws('baz');
        // $ExpectError
        o(bool).notThrows('baz');

        // `expected` must only be string or "Object constructor"
        // $ExpectError
        o(fn).throws(1);
        // $ExpectError
        o(fn).throws(1);

        const nonNewableFn = () => {};
        // $ExpectError
        o(fn).throws(nonNewableFn);
        // $ExpectError
        o(fn).notThrows(nonNewableFn);
    });

    // ======================================================================

    const dummySpy = o.spy();
    dummySpy();
    const {
        callCount, // $ExpectType number
        args, // $ExpectType any[]
        calls, // $ExpectType any[][]
    } = dummySpy;

    const myFunc = (a: string, b?: boolean) => 42;
    const spiedFunc = o.spy(myFunc);
    type SpiedFuncParams = Parameters<typeof spiedFunc>; // $ExpectType [string, (boolean | undefined)?] || [a: string, b?: boolean | undefined]
    const _args1: SpiedFuncParams = ['hi', true];
    const _args2: SpiedFuncParams = ['hi'];
    spiedFunc(..._args1); // $ExpectType number
    spiedFunc(..._args2); // $ExpectType number
    spiedFunc.args; // $ExpectType [string, (boolean | undefined)?] || [a: string, b?: boolean | undefined]
    spiedFunc.calls; // $ExpectType [string, (boolean | undefined)?][] || [a: string, b?: boolean | undefined][]

    // ======================================================================

    let definerFn: o.Definer;
    definerFn = () => {};
    definerFn = done => {
        done(); // $ExpectType void
        done(new Error('err'));
        done(null);

        // $ExpectError
        done('Error message');
        // $ExpectError
        done(1);
        // $ExpectError
        done(null, null);
    };
    definerFn = (_, timeout) => {
        timeout(42); // $ExpectType void

        // $ExpectError
        timeout();
        // $ExpectError
        timeout('42');
        // $ExpectError
        timeout(1, 2);
    };

    // Tests may return a promise-like value instead of calling done()
    definerFn = () => {
        return Promise.resolve('Whatever');
    };
    definerFn = (done, timeout) => {
        timeout(9000);
        // TODO: Find a way to discourage the use of done() in promise returning tests
        // $_ExpectError
        done();
        return Promise.resolve('Whatever');
    };

    o('async tests', definerFn);
    o.before(definerFn); // $ExpectType void
    o.after(definerFn); // $ExpectType void
    o.beforeEach(definerFn); // $ExpectType void
    o.afterEach(definerFn); // $ExpectType void

    // ======================================================================

    o.specTimeout(42); // $ExpectType void
    // $ExpectError
    o.specTimeout();
    // $ExpectError
    o.specTimeout('42');

    o('async test timeout', _ => {
        o.timeout(42); // $ExpectType void

        // $ExpectError
        o.timeout();
        // $ExpectError
        o.timeout('42');
    });

    // ======================================================================

    const myReporter: o.Reporter = results => {
        const myResult = results[0]; // $ExpectType Result
        return 0;
    };

    o.report = myReporter;
    // $ExpectError
    o.report = fn;

    // ======================================================================

    o.run(); // $ExpectType void
    o.run(myReporter);
    // $ExpectError
    o.run(true);
    // $ExpectError
    o.run(fn);

    // ======================================================================

    // $ExpectType void
    o.only('only this test should run', () => {
        o(true).equals(true);
    });
    // $ExpectError
    o.only('definer function missing');
    // $ExpectError
    o.only(() => {}); // Missing name parameter

    // ======================================================================

    const o2: o.Ospec = o.new();
    o2.spec('New Ospec instance', () => {
        o2('Works?', done => {
            o2('Yes').equals('Yes');
            done();
        });
    });

    // $ExpectError
    o.new(true);
});

// $ExpectError
o.spec(() => {}); // Missing name parameter
