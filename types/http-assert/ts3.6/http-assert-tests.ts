import httpAssert = require("http-assert");

const status = 401;
const message = "some error message";
const options = {};

httpAssert.equal("hello", "hello");
httpAssert.notEqual("hello", "hello", status, message, options);
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
