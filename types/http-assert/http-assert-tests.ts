import httpAssert = require("http-assert");

declare function unknown(): unknown;

(() => {
    const value = unknown();
    httpAssert(typeof value === "string");

    // $ExpectType string
    value;
})();

(() => {
    const value = unknown() as string | undefined;
    httpAssert(value);

    // $ExpectType string
    value;
})();

(() => {
    const value = unknown();
    httpAssert(typeof value === "number", 400);

    // $ExpectType number
    value;
})();

(() => {
    const value = unknown();
    httpAssert(typeof value === "boolean", 400, "message");

    // $ExpectType boolean
    value;
})();

(() => {
    const value = unknown();
    httpAssert(value === undefined, 400, { foo: "bar" });

    // $ExpectType undefined
    value;
})();

(() => {
    const value = unknown();
    httpAssert(value === null, 400, "message", { foo: "bar" });

    // $ExpectType null
    value;
})();

(() => {
    const value = unknown();
    httpAssert.ok(typeof value === "string");

    // $ExpectType string
    value;
})();

(() => {
    const value = unknown() as string | undefined;
    httpAssert.ok(value);

    // $ExpectType string
    value;
})();

(() => {
    const value = unknown();
    httpAssert.ok(typeof value === "number", 400);

    // $ExpectType number
    value;
})();

(() => {
    const value = unknown();
    httpAssert.ok(typeof value === "boolean", 400, "message");

    // $ExpectType boolean
    value;
})();

(() => {
    const value = unknown();
    httpAssert.ok(value === null, 400, "message", { foo: "bar" });

    // $ExpectType null
    value;
})();

const status = 401;
const message = "some error message";
const options = {};

httpAssert.equal("hello", "hello");
httpAssert.notEqual("hello", "hello", status, message);
httpAssert.ok(true);
httpAssert.ok(true, status, message, options);
httpAssert.strictEqual(3, "3");
httpAssert.strictEqual(3, "3", status, message, options);
httpAssert.notStrictEqual(3, "3");
httpAssert.notStrictEqual(3, "3", status, message, options);
httpAssert.deepEqual({ foo: "foo" }, { bar: "bar" });
httpAssert.deepEqual({ foo: "foo" }, { bar: "bar" }, status, message, options);
httpAssert.notDeepEqual({ foo: "foo" }, { bar: "bar" });
httpAssert.notDeepEqual({ foo: "foo" }, { bar: "bar" }, status, message, options);
httpAssert(false, status, message, options);
