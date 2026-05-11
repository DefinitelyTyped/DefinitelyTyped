import memoize = require("memoizee");

const fn = (one: string, two?: number, three?: any) => {
    return "test";
};

let memoized = memoize(fn);
memoized("foo", 3, "bar");
memoized("foo", 3, "bar");
memoized = memoize(fn, { length: 2 });
memoized("foo");
memoized("foo", undefined);
memoized("foo", 3, {});
memoized("foo", 3, 13);
memoized("foo", undefined);
memoized("foo", undefined);
memoized("foo", 3, {});
memoized("foo", 3, 13);
memoized("foo", 3, 13);
memoized = memoize(fn, { primitive: true });
memoized("/path/one");
memoized("/path/one");
memoized = memoize(fn, { dispose(value: number) {/*…*/} });
const foo3: string = memoized("foo", 3);
const bar7: string = memoized("bar", 7);
memoized.delete("foo", 3); // Dispose called with foo3 value
memoized.delete("bar", 7); // Dispose called with bar7 value
memoized.clear();

function testIncorrectParameterType(): string {
    // @ts-expect-error Expect TypeScript to error when passing parameters of wrong types.
    return memoized(3, "foo");
}
function testIncorrectDeleteParameterType(): void {
    // @ts-expect-error Expect TypeScript to error when passing parameters of wrong types.
    return memoized.delete(3, "foo");
}
function testIncorrectClearParameterType(): void {
    // @ts-expect-error Expect TypeScript since clear() does not take any parameters.
    return memoized.clear("foo", 3);
}
function testDeleteReturnType(a: string, b: number): void {
    return memoized.delete(a, b);
}
function testClearReturnType(): void {
    return memoized.clear();
}
const mFn = memoize((hash: any) => {
    // body of memoized function
}, {
    normalizer: (args) => {
        // args is arguments object as accessible in memoized function
        return JSON.stringify(args[0]);
    },
});

mFn({ foo: "bar" });

memoized = memoize(fn, { length: 2, resolvers: [String, Boolean] });
memoized(String(12), [1, 2, 3].length);
memoized("12", Number(true));
memoized(
    String({
        toString() {
            return "12";
        },
    }),
    Number({}),
);

{
    const afn = (a: number, b: number) => {
        return new Promise<number>(res => {
            res(a + b);
        });
    };
    let memoized = memoize(afn, { promise: true });
    const foo: Promise<number> = memoized(3, 7);
    const bar: Promise<number> = memoized(3, 7);

    function testDeleteReturnType(a: number, b: number): void {
        return memoized.delete(a, b);
    }
    function testClearReturnType(): void {
        return memoized.clear();
    }

    memoized = memoize(afn, { promise: "then" });
    memoized(2, 7);
    memoized(2, 7);

    memoized = memoize(afn, { promise: "done" });
    memoized(5, 7);
    memoized(5, 7);

    memoized = memoize(afn, { promise: "done:finally" });
    memoized(8, 7);
    memoized(8, 7);
}

memoized = memoize(fn, { maxAge: 1000, preFetch: 0.6 });

memoized("foo", 3);
memoized("foo", 3);

setTimeout(() => {
    memoized("foo", 3);
}, 500);

setTimeout(() => {
    memoized("foo", 3);
}, 1300);

memoize((foo: string, bar: number) => 42, {
    normalizer: ([foo, bar]) => { // normalizer argument should be typed
        return foo + bar.toFixed();
    },
});

memoized = memoize(fn, { profileName: "foo" });
