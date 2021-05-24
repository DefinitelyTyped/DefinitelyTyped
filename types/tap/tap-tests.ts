import { EventEmitter } from "events";
import * as tap from "tap";

Tap.Test;
Tap.Tap;

tap.pass();

tap.test("all-assertions", t => {
    const obj: any = {};
    const found: any = 1;
    const wanted: any = 1;
    const notWanted: any = 1;
    const fn: (stuff: any) => void = () => { };
    const expectedError: Error = new Error();
    const eventEmitter: EventEmitter = new EventEmitter();
    const pattern: RegExp | string | { [key: string]: RegExp } = "pattern";

    const message = "message";
    const extra = {
        todo: false,
        skip: "skip",
        diagnostic: true,
        extra_stuff: false,
    };

    t.ok(obj, message, extra);
    t.ok(obj, message);
    t.ok(obj);
    t.true(obj);
    t.assert(obj);

    t.notOk(obj, message, extra);
    t.notOk(obj, message);
    t.notOk(obj);
    t.false(obj);
    t.assertNot(obj);

    t.error(expectedError, message, extra);
    t.error(expectedError, message);
    t.error(expectedError);
    t.ifErr(expectedError);
    t.ifError(expectedError);

    t.emits(eventEmitter, "event", message, extra);
    t.emits(eventEmitter, "event", message);
    t.emits(eventEmitter, "event");

    t.matchSnapshot(found, message, extra);
    t.matchSnapshot(found, message);
    t.matchSnapshot(found);

    t.throws(fn, expectedError, message, extra);
    t.throws(fn, expectedError, message);
    t.throws(fn, expectedError);
    t.throws(fn, message);
    t.throws(fn, expectedError, extra);
    t.throws();
    t.throw(fn, message);

    t.doesNotThrow(fn, message, extra);
    t.doesNotThrow(fn, message);
    t.doesNotThrow(fn);
    t.doesNotThrow();
    t.notThrow(fn, message);

    t.expectUncaughtException(fn, expectedError, message, extra);
    t.expectUncaughtException(fn, expectedError, message);
    t.expectUncaughtException(fn, expectedError);
    t.expectUncaughtException(fn);

    t.equal(found, wanted, message, extra);
    t.equal(found, wanted, message);
    t.equal(found, wanted);
    t.equals(found, wanted);
    t.isEqual(found, wanted);
    t.is(found, wanted);
    t.strictEqual(found, wanted);
    t.strictEquals(found, wanted);
    t.strictIs(found, wanted);
    t.isStrict(found, wanted);
    t.isStrictly(found, wanted);

    t.notEqual(found, notWanted, message, extra);
    t.notEqual(found, notWanted, message);
    t.notEqual(found, notWanted);
    t.inequal(found, notWanted);
    t.notEqual(found, notWanted);
    t.notEquals(found, notWanted);
    t.notStrictEqual(found, notWanted);
    t.notStrictEquals(found, notWanted);
    t.isNotEqual(found, notWanted);
    t.isNot(found, notWanted);
    t.doesNotEqual(found, notWanted);
    t.isInequal(found, notWanted);

    t.same(found, wanted, message, extra);
    t.same(found, wanted, message);
    t.same(found, wanted);
    t.equivalent(found, wanted);
    t.looseEqual(found, wanted);
    t.looseEquals(found, wanted);
    t.deepEqual(found, wanted);
    t.deepEquals(found, wanted);
    t.isLoose(found, wanted);
    t.looseIs(found, wanted);

    t.notSame(found, notWanted, message, extra);
    t.notSame(found, notWanted, message);
    t.notSame(found, notWanted);
    t.inequivalent(found, notWanted);
    t.looseInequal(found, notWanted);
    t.notDeep(found, notWanted);
    t.deepInequal(found, notWanted);
    t.notLoose(found, notWanted);
    t.looseNot(found, notWanted);

    t.strictSame(found, wanted, message, extra);
    t.strictSame(found, wanted, message);
    t.strictSame(found, wanted);
    t.strictEquivalent(found, wanted);
    t.strictDeepEqual(found, wanted);
    t.sameStrict(found, wanted);
    t.deepIs(found, wanted);
    t.isDeeply(found, wanted);
    t.isDeep(found, wanted);
    t.strictDeepEquals(found, wanted);

    t.strictNotSame(found, notWanted, message, extra);
    t.strictNotSame(found, notWanted, message);
    t.strictNotSame(found, notWanted);
    t.strictInequivalent(found, notWanted);
    t.strictDeepInequal(found, notWanted);
    t.notSameStrict(found, notWanted);
    t.deepNot(found, notWanted);
    t.notDeeply(found, notWanted);
    t.strictDeepInequals(found, notWanted);
    t.notStrictSame(found, notWanted);

    t.hasStrict(found, pattern, message, extra);
    t.hasStrict(found, pattern, message);
    t.hasStrict(found, pattern);

    t.match(found, pattern, message, extra);
    t.match(found, pattern, message);
    t.match(found, pattern);
    t.has(found, pattern);
    t.hasFields(found, pattern);
    t.matches(found, pattern);
    t.similar(found, pattern);
    t.like(found, pattern);
    t.isLike(found, pattern);
    t.includes(found, pattern);
    t.include(found, pattern);
    t.contains(found, pattern);

    t.notMatch(found, pattern, message, extra);
    t.notMatch(found, pattern, message);
    t.notMatch(found, pattern);
    t.dissimilar(found, pattern);
    t.unsimilar(found, pattern);
    t.notSimilar(found, pattern);
    t.unlike(found, pattern);
    t.isUnlike(found, pattern);
    t.notLike(found, pattern);
    t.isNotLike(found, pattern);
    t.doesNotHave(found, pattern);
    t.isNotSimilar(found, pattern);
    t.isDissimilar(found, pattern);

    t.type(new Date(), "object", message, extra);
    t.type(new Date(), "object", message);
    t.type(new Date(), "object");
    t.isa(new Date(), "Date");
    t.isA(new Date(), Date);
});

tap.test("async test", async t => {
    const wanted: any = 1;
    const expectedError: Error = new Error();

    const message = "message";
    const extra = {
        todo: false,
        skip: "skip",
        diagnostic: true,
        extra_stuff: false,
    };
    const promise: Promise<any> = Promise.resolve(1);
    const promiseProvider: () => Promise<void> = () => Promise.resolve();

    await t.rejects(promise, expectedError, message, extra);
    await t.rejects(promise, expectedError, message);
    await t.rejects(promise, expectedError);
    await t.rejects(promise, message, extra);
    await t.rejects(promise, message);
    await t.rejects(promise);
    await t.rejects(promiseProvider, expectedError, message, extra);
    await t.rejects(promiseProvider, expectedError, message);
    await t.rejects(promiseProvider, expectedError);
    await t.rejects(promiseProvider, message, extra);
    await t.rejects(promiseProvider, message);
    await t.rejects(promiseProvider);

    await t.resolves(promise, message, extra);
    await t.resolves(promise, message);
    await t.resolves(promise);
    await t.resolves(promiseProvider, message, extra);
    await t.resolves(promiseProvider, message);
    await t.resolves(promiseProvider);

    await t.resolveMatch(promise, wanted, message, extra);
    await t.resolveMatch(promise, wanted, message);
    await t.resolveMatch(promise, wanted);
    await t.resolveMatch(promiseProvider, wanted, message, extra);
    await t.resolveMatch(promiseProvider, wanted, message);
    await t.resolveMatch(promiseProvider, wanted);

    await t.resolveMatchSnapshot(promise, message, extra);
    await t.resolveMatchSnapshot(promise, message);
    await t.resolveMatchSnapshot(promise);
    await t.resolveMatchSnapshot(promiseProvider, message, extra);
    await t.resolveMatchSnapshot(promiseProvider, message);
    await t.resolveMatchSnapshot(promiseProvider);
});

tap.test("lifecycle", t => {
    t.before(() => true);
    t.before(async () => true);

    t.beforeEach(() => true);
    t.beforeEach(async () => true);
    t.beforeEach(async (childTest: any) => childTest.foo);

    t.afterEach(() => true);
    t.afterEach(async () => true);
    t.afterEach(async (childTest: any) => childTest.foo);
});

tap.test("mocks", t => {
    const anyMockModule = tap.mock("../my-module", {
        fs: {
            readFile: () => false,
        },
    });

    anyMockModule.any.thing;
});

tap.only("only", t => {
    t.pass();
});

tap.skip("skip", t => {
    t.pass();
});

tap.test("test with options", { only: true, skip: true, todo: true, timeout: 1000 }, t => {
    t.pass();
});

const topLevelDir = tap.testdir();

tap.test("testdir", t => {
    const cwd = t.testdir({
        "demo.jpg": Buffer.from("a jpg"),
        "package.json": JSON.stringify({
            name: "pj",
        }),
        src: {
            "index.js": "yay",
            hardlinked: t.fixture("link", "../target"),
            softlinked: t.fixture("symlink", "../target"),
        },
        target: {},
    });
    t.notEqual(cwd, topLevelDir);
    t.equals(cwd, t.testdirName);
});

tap.test("fixture", t => {
    // fairly infrequent vs testdir() sugar
    t.fixture("dir", {});
    t.fixture("file", "content");
    t.fixture("file", Buffer.from("content"));

    // much more common, as sugar does not exist
    t.fixture("link", "target");
    t.fixture("symlink", "target");
});
