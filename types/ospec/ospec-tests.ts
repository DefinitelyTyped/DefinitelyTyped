// import o = require('ospec');
import o, { Definer } from 'ospec'; // NOTE: this only works with  "esModuleInterop": true

const exampleTypeUse1: o.Definer = () => {};
const exampleTypeUse2: Definer = () => {}; // NOTE: this only works with  "esModuleInterop": true

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
        o(bool); // $ExpectType BasicAssertions<boolean>
        o(numOrStr); // $ExpectType BasicAssertions<string | number>
        o(arr); // $ExpectType ObjectAssertions<number[]>
        o(obj); // $ExpectType ObjectAssertions<{ a: number; }>
        o(new Date()); // $ExpectType ObjectAssertions<Date>
        o(fn); // $ExpectType FunctionAssertions<() => void>
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

    o('.notEquals() accepts anything', () => {
        o(bool).notEquals({}); // $ExpectType AssertionDescriber
        o(fn).notEquals(1);
    });

    o('.deepEquals()/.notDeepEquals() only compares objects to object values', () => {
        o(obj).deepEquals({ a: 1 });
        o(arr).deepEquals([1]); // $ExpectType AssertionDescriber
        o(fn).deepEquals(() => {}); // $ExpectType AssertionDescriber
        o(obj).notDeepEquals({});
        o(arr).notDeepEquals(['hi']); // $ExpectType AssertionDescriber
        o(fn).notDeepEquals({}); // $ExpectType AssertionDescriber

        // $ExpectError
        o(obj).deepEquals(1);
        // $ExpectError
        o(obj).notDeepEquals(1);
        // $ExpectError
        o(bool).deepEquals(1);
        // $ExpectError
        o(bool).notDeepEquals(1);
        // $ExpectError
        o(numOrStr).deepEquals(1);
        // $ExpectError
        o(numOrStr).notDeepEquals(1);
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

        /*
      // FIXME: find a way to make these lines error (See note in index.d.ts)
      const nonNewableFn = () => {}
      // $_ExpectError
      a(fn).throws(nonNewableFn)
      // $_ExpectError
      a(fn).notThrows(nonNewableFn)
    */
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
    type SpiedFuncParams = Parameters<typeof spiedFunc>; // $ExpectType [string, (boolean | undefined)?]
    const _args1: SpiedFuncParams = ['hi', true];
    const _args2: SpiedFuncParams = ['hi'];
    spiedFunc(..._args1); // $ExpectType number
    spiedFunc(..._args2); // $ExpectType number
    spiedFunc.args; // $ExpectType [string, (boolean | undefined)?]
    spiedFunc.calls; // $ExpectType [string, (boolean | undefined)?][]

    // ======================================================================

    let definerFn: o.Definer;
    definerFn = () => {};
    definerFn = done => {
        done(); // $ExpectType void

        // Done accepts just about anything thrown at it.
        done(new Error('err'));
        done('err');
        done(1);
        done(null);

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
