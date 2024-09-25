import test, { configure, skip, solo, test as test2 } from "brittle";

test("assertions", async (t) => {
    t.is(123, 123);
    t.is(123, 123, "message");

    t.not(123, 456);
    t.not(123, 456, "message");

    t.alike([1, 2], [1, 2]);
    t.alike([1, 2], [1, 2], "message");

    t.unlike([1, 2], [3, 4]);
    t.unlike([1, 2], [3, 4], "message");

    t.ok(true);
    t.ok(true, "message");

    t.absent(false);
    t.absent(false, "message");

    t.pass();
    t.pass("message");

    t.fail();
    t.fail("message");

    const throwSync = () => {
        throw new Error("foo");
    };
    t.exception(throwSync);
    t.exception(throwSync, Error);
    t.exception(throwSync, /foo/);
    t.exception(throwSync, /foo/, "message");

    const throwAsync = async () => {
        throw new Error("foo");
    };
    await t.exception(throwAsync);

    await t.exception(Promise.reject("foo"));

    t.exception.all(throwSync);
    await t.exception.all(throwAsync);
    await t.exception.all(Promise.reject("foo"));

    t.execution(() => {});
    t.execution(() => {}, "message");
    t.execution(async () => {});
    t.execution(Promise.resolve("ok"));

    t.snapshot("foo");
    t.snapshot("foo", "message");
});

test("sync test + t.end", (t) => {
    t.end();
});

test("comment", (t) => {
    t.comment("foo");
});

test("plan", (t) => {
    t.plan(2);
    t.ok(true);
    t.ok(123);
});

test("teardown", (t) => {
    t.teardown(() => {});
    t.teardown(() => {}, { order: 123 });
    t.teardown(async () => {});
});

test("timeout", (t) => {
    t.timeout(999);
    t.end();
});

test("subtests", async (t) => {
    await t.test("subtest", (st) => {
        st.end();
    });
});

test(
    "test options",
    {
        timeout: 999,
        solo: true,
        skip: false,
        todo: false,
    },
    (t) => {
        t.end();
    },
);

test2("non-default export", (t) => {
    t.end();
});

skip("skipped", (t) => {
    t.end();
});

solo("solo", (t) => {
    t.end();
});

configure({
    timeout: 999,
    solo: true,
    skip: false,
    todo: false,
});
