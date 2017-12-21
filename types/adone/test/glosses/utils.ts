const { util } = adone;

namespace utilTests {
    namespace arrify {
        const a: number[] = util.arrify([1, 2, 3]);
        const b: number[] = util.arrify(1);
        const c: string[] = util.arrify("2");
        const d: string[] = util.arrify(["1"]);
    }

    namespace slice {
        const a: number[] = util.slice([1, 2, 3]);
        const b: number[] = util.slice([1, 2, 3], 1);
        const c: number[] = util.slice([1, 2, 3], 1, 4);
        const d: string[] = util.slice(["1"]);
    }

    namespace spliceOne {
        util.spliceOne([1, 2, 3], 0);
    }

    namespace normalizePath {
        const a: string = util.normalizePath("path");
        const b: string = util.normalizePath("path", true);
    }

    namespace unixifyPath {
        const a: string = util.unixifyPath("path");
        const b: string = util.unixifyPath("path", true);
    }

    namespace functionName {
        const a: string = util.functionName(function f() { });
        const b: string = util.functionName((a, b, c) => { });
    }

    namespace mapArguments {
        const a: (...args: any[]) => any = util.mapArguments(() => { });
        const b: <T>(...args: T[]) => T[] = util.mapArguments(1);
        const c: (...args: any[]) => any = util.mapArguments([1]);
        const d: <T>(x: T) => T = util.mapArguments();
    }

    namespace parseMs {
        const result: {
            days: number;
            hours: number;
            milliseconds: number;
            minutes: number;
        } = util.parseMs(123);
    }

    namespace pluralizeWord {
        const a: string = util.pluralizeWord("day");
        const b: string = util.pluralizeWord("day", "days");
        const c: string = util.pluralizeWord("day", "days", 1);
    }

    namespace functionParams {
        const a: string[] = util.functionParams((a: any, b: any, c: any) => { });
    }

    namespace randomChoice {
        const a: number = util.randomChoice([1, 2, 3]);
        const b: string = util.randomChoice(["1", "2", "3"]);
    }

    namespace shuffleArray {
        const a: number[] = util.shuffleArray([1, 2, 3]);
        const b: string[] = util.shuffleArray(["1", "2", "3"]);
    }

    namespace enumerate {
        {
            const a = util.enumerate([1, 2, 3]);
            const it = a[Symbol.iterator]();
            const value: [number, number] = it.next().value;
            for (const i of a) {
                const [idx, value]: [number, number] = i;
            }
        }
        {
            const a = util.enumerate(["1", "2"]);
            const it = a[Symbol.iterator]();
            const value: [number, string] = it.next().value;
            for (const i of a) {
                const [idx, value]: [number, string] = i;
            }
        }
    }

    namespace zip {
        {
            const a = util.zip([1, 2, 3], ["4", "5", "6"]);
            const it = a[Symbol.iterator]();
            const value: [number, string] = it.next().value;
            for (const i of a) {
                const [i1, i2]: [number, string] = i;
            }
        }
        {
            const a = util.zip(
                [1, 2, 3],
                ["4", "5", "6"],
                [7, 8, 9]
            );
            const it = a[Symbol.iterator]();
            const value: [number, string, number] = it.next().value;
            for (const i of a) {
                const [i1, i2, i3]: [number, string, number] = i;
            }
        }
        {
            const a = util.zip(
                [1, 2, 3],
                ["4", "5", "6"],
                [7, 8, 9],
                ["10", "11", "12"]
            );
            const it = a[Symbol.iterator]();
            const value: [number, string, number, string] = it.next().value;
            for (const i of a) {
                const [i1, i2, i3, i4]: [number, string, number, string] = i;
            }
        }
        {
            const a = util.zip(
                [1, 2, 3],
                ["4", "5", "6"],
                [7, 8, 9],
                ["10", "11", "12"],
                [13, 14, 15, 16]
            );
            const it = a[Symbol.iterator]();
            const value: any[] = it.next().value;
            for (const i of a) {
                const [i1, i2, i3, i4]: any[] = i;
            }
        }
    }

    namespace keys {
        const a: string[] = util.keys({});
        const b: string[] = util.keys({}, { all: true });
        const c: string[] = util.keys({}, { followProto: true });
        const d: string[] = util.keys({}, { onlyEnumerable: true });
    }

    namespace values {
        const a: any[] = util.values({});
        const b: any[] = util.values({}, { all: true });
        const c: any[] = util.values({}, { followProto: true });
        const d: any[] = util.values({}, { onlyEnumerable: true });
    }

    namespace entries {
        const a: Array<[string, any]> = util.entries({});
        const b: Array<[string, any]> = util.entries({}, { all: true });
        const c: Array<[string, any]> = util.entries({}, { followProto: true });
        const d: Array<[string, any]> = util.entries({}, { onlyEnumerable: true });
    }

    namespace toDotNotation {
        const a: object = util.toDotNotation({ a: 1 });
    }

    namespace flatten {
        const a: number[] = util.flatten([1, [2, 3]]);
        const b: number[] = util.flatten([1, [2, 3]], {});
        const c: number[] = util.flatten([1, [2, 3]], { depth: 1 });
    }

    namespace globParent {
        const a: string = util.globParent("a/b/c/**");
    }

    namespace by {
        const a: (a: number, b: number) => any = util.by((x: number): number => x);
        const b: (a: number, b: number) => number = util.by((x: number): string => `${x}`, (a: string, b: string) => a.length - b.length);
    }

    namespace toFastProperties {
        const a: object = util.toFastProperties({});
    }

    namespace stripBom {
        const a: string = util.stripBom("123");
    }

    namespace sortKeys {
        const a: object = util.sortKeys({});
        const b: object = util.sortKeys({}, {});
        const c: object = util.sortKeys({}, { deep: true });
        const d: object = util.sortKeys({}, { compare: (a, b) => 2 });
    }

    namespace globize {
        const a: string = util.globize("test");
        const b: string = util.globize("test", {});
        const c: string = util.globize("test", { exts: "" });
        const d: string = util.globize("test", { recursively: true });
    }

    namespace unique {
        const a: number[] = util.unique([1, 2, 3]);
        const b: string[] = util.unique(["1", "2", "3"]);
        const c: object[] = util.unique([{ a: 1 }, { a: 2 }], (obj: any) => obj.a);
    }

    namespace invertObject {
        const a: object = util.invertObject({});
        const b: object = util.invertObject({}, {});
        const c: object = util.invertObject({}, { all: true });
        const d: object = util.invertObject({}, { followProto: true });
        const e: object = util.invertObject({}, { onlyEnumerable: true });
    }

    namespace humanizeTime {
        const a: string = util.humanizeTime(12345);
        const b: string = util.humanizeTime(12345, {});
        const c: string = util.humanizeTime(12345, { compact: true });
        const d: string = util.humanizeTime(12345, { msDecimalDigits: 2 });
        const e: string = util.humanizeTime(12345, { secDecimalDigits: 2 });
        const f: string = util.humanizeTime(12345, { verbose: true });
    }

    namespace humanizeSize {
        const a: string = util.humanizeSize(12345);
        const b: string = util.humanizeSize(12345, "");
    }

    namespace parseSize {
        const a: number | null = util.parseSize(123);
        const b: number | null = util.parseSize("123Kb");
    }

    namespace clone {
        const a: object = util.clone({});
        const b: object = util.clone({}, {});
        const c: object = util.clone({}, { deep: true });
    }

    namespace toUTF8Array {
        const a: number[] = util.toUTF8Array("hello");
    }

    namespace asyncIter {
        util.asyncIter([1, 2, 3], () => { }, () => { });
    }

    namespace asyncFor {
        util.asyncFor({}, () => { }, () => { });
    }

    namespace once {
        {
            const f = () => 2;
            const a: () => number = util.once(f);
        }
        {
            const f = (a: number) => `${a}`;
            const a: (a: number) => string = util.once(f);
        }
    }

    namespace asyncWaterfall {
        util.asyncWaterfall([
            (callback: (a: any, b: any, c: any) => void) => {
                callback(null, 'one', 'two');
            }
        ], (err: any, result: any) => {
            //
        });
    }

    namespace xrange {
        for (const i of util.xrange(10)) {
            const a: number = i;
        }
        for (const i of util.xrange(1, 10)) {
            const a: number = i;
        }
        for (const i of util.xrange(1, 10, 2)) {
            const a: number = i;
        }
    }
    namespace range {
        const a: number[] = util.range(10);
        const b: number[] = util.range(1, 10);
        const c: number[] = util.range(1, 10, 2);
    }

    namespace reFindAll {
        const a: RegExpExecArray[] = util.reFindAll(/\d+/, "1 2 3 4 5");
    }

    namespace assignDeep {
        const a: object = util.assignDeep({ a: 1 }, { a: 2 });
    }

    namespace match {
        const a: number | boolean = util.match(["a", "b", "c"], "a");
        const b: (a: any, b: any) => number | boolean = util.match("a", { index: true });
        const c: number | boolean = util.match(["a", "b", "c"], "a", { dot: true });
        const d: (a: any, b: any) => number | boolean = util.match("a", { end: 2 });
        const e: (a: any, b: any) => number | boolean = util.match("a", { start: 2 });
        const f: (a: any, b: any) => number | boolean = util.match("a");
    }

    namespace toposort {
        const a: number[] = util.toposort([
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7]
        ]);
        const b: number[] = util.toposort.array([0, 1, 2], [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7]
        ]);
    }

    namespace jsesc {
        const a: string = util.jsesc({ a: 1 });
        const b: string = util.jsesc({ a: 1 }, { escapeEverything: true });
        const c: string = util.jsesc({ a: 1 }, { minimal: true });
        const d: string = util.jsesc({ a: 1 }, { isScriptContext: true });
        const e: string = util.jsesc({ a: 1 }, { quotes: "'" });
        const f: string = util.jsesc({ a: 1 }, { wrap: true });
        const g: string = util.jsesc({ a: 1 }, { es6: true });
        const h: string = util.jsesc({ a: 1 }, { json: true });
        const i: string = util.jsesc({ a: 1 }, { compact: true });
        const j: string = util.jsesc({ a: 1 }, { lowercaseHex: true });
        const k: string = util.jsesc({ a: 1 }, { numbers: "decimal" });
        const l: string = util.jsesc({ a: 1 }, { indent: "    " });
        const m: string = util.jsesc({ a: 1 }, { indentLevel: 4 });
        const n: string = util.jsesc({ a: 1 }, { __inline1__: true });
        const o: string = util.jsesc({ a: 1 }, { __inline2__: true });
    }

    namespace typeOf {
        const a: string = util.typeOf(1);
    }

    namespace memcpy {
        const a: number = util.memcpy.utou(Buffer.alloc(10), 0, Buffer.alloc(10), 0, 10);
        const b: number = util.memcpy.atoa(new ArrayBuffer(10), 0, new ArrayBuffer(10), 0, 10);
        const c: number = util.memcpy.atou(Buffer.alloc(10), 0, new ArrayBuffer(10), 0, 10);
        const d: number = util.memcpy.utoa(new ArrayBuffer(10), 0, Buffer.alloc(10), 0, 10);
        const e: number = util.memcpy.copy(Buffer.alloc(10), 0, Buffer.alloc(10), 0, 10);
        const f: number = util.memcpy.copy(new ArrayBuffer(10), 0, new ArrayBuffer(10), 0, 10);
        const g: number = util.memcpy.copy(Buffer.alloc(10), 0, new ArrayBuffer(10), 0, 10);
        const h: number = util.memcpy.copy(new ArrayBuffer(10), 0, Buffer.alloc(10), 0, 10);
    }

    namespace uuid {
        namespace v1 {
            const a: string = util.uuid.v1();
            const b: number[] = util.uuid.v1({}, []);
            const c: number[] = util.uuid.v1({}, [], 1);
            const d: string = util.uuid.v1({});
            const e: string = util.uuid.v1({ clockseq: 1 });
            const f: string = util.uuid.v1({ msecs: 1 });
            const g: string = util.uuid.v1({ nsecs: 1 });
        }

        namespace v4 {
            const a: string = util.uuid.v4();
            const b: number[] = util.uuid.v4({}, []);
            const c: number[] = util.uuid.v4({}, [], 1);
            const d: string = util.uuid.v4({});
            const e: string = util.uuid.v4({ clockseq: 1 });
            const f: string = util.uuid.v4({ msecs: 1 });
            const g: string = util.uuid.v4({ nsecs: 1 });
        }

        namespace v3 {
            const a: string = util.uuid.v3([], []);
            const b: number[] = util.uuid.v3([], [], []);
            const c: number[] = util.uuid.v3([], [], [], 1);
        }

        namespace v5 {
            const a: string = util.uuid.v5([], []);
            const b: number[] = util.uuid.v5([], [], []);
            const c: number[] = util.uuid.v5([], [], [], 1);
        }
    }

    namespace delegate {
        const a = util.delegate({}, "a");
        a.getter("a").access("b").method("c").setter("d");
    }

    namespace GlobExp {
        {
            const glob = new util.GlobExp("*.js");
            const a: boolean = glob.hasMagic();
            const b: string[] = glob.expandBraces();
            const c: RegExp = glob.makeRe();
            const d: boolean = glob.test("a.js");
        }
        {
            const a: boolean = util.GlobExp.hasMagic("*.js");
            const b: string[] = util.GlobExp.expandBraces("*.js");
            const c: RegExp = util.GlobExp.makeRe("*.js");
            const d: boolean = util.GlobExp.test("*.js", "a.js");
        }
        new util.GlobExp("");
        new util.GlobExp("", {});
        new util.GlobExp("", { dot: true });
        new util.GlobExp("", { flipNegate: true });
        new util.GlobExp("", { matchBase: true });
        new util.GlobExp("", { nobrace: true });
        new util.GlobExp("", { nocase: true });
        new util.GlobExp("", { nocomment: true });
        new util.GlobExp("", { noext: true });
        new util.GlobExp("", { noglobstar: true });
        new util.GlobExp("", { nonegate: true });
        util.GlobExp.hasMagic("", {});
        util.GlobExp.hasMagic("", { dot: true });
        util.GlobExp.hasMagic("", { flipNegate: true });
        util.GlobExp.hasMagic("", { matchBase: true });
        util.GlobExp.hasMagic("", { nobrace: true });
        util.GlobExp.hasMagic("", { nocase: true });
        util.GlobExp.hasMagic("", { nocomment: true });
        util.GlobExp.hasMagic("", { noext: true });
        util.GlobExp.hasMagic("", { noglobstar: true });
        util.GlobExp.hasMagic("", { nonegate: true });
        util.GlobExp.expandBraces("", {});
        util.GlobExp.expandBraces("", { dot: true });
        util.GlobExp.expandBraces("", { flipNegate: true });
        util.GlobExp.expandBraces("", { matchBase: true });
        util.GlobExp.expandBraces("", { nobrace: true });
        util.GlobExp.expandBraces("", { nocase: true });
        util.GlobExp.expandBraces("", { nocomment: true });
        util.GlobExp.expandBraces("", { noext: true });
        util.GlobExp.expandBraces("", { noglobstar: true });
        util.GlobExp.expandBraces("", { nonegate: true });
        util.GlobExp.makeRe("", {});
        util.GlobExp.makeRe("", { dot: true });
        util.GlobExp.makeRe("", { flipNegate: true });
        util.GlobExp.makeRe("", { matchBase: true });
        util.GlobExp.makeRe("", { nobrace: true });
        util.GlobExp.makeRe("", { nocase: true });
        util.GlobExp.makeRe("", { nocomment: true });
        util.GlobExp.makeRe("", { noext: true });
        util.GlobExp.makeRe("", { noglobstar: true });
        util.GlobExp.makeRe("", { nonegate: true });
        util.GlobExp.test("a", "b", {});
        util.GlobExp.test("a", "b", { dot: true });
        util.GlobExp.test("a", "b", { flipNegate: true });
        util.GlobExp.test("a", "b", { matchBase: true });
        util.GlobExp.test("a", "b", { nobrace: true });
        util.GlobExp.test("a", "b", { nocase: true });
        util.GlobExp.test("a", "b", { nocomment: true });
        util.GlobExp.test("a", "b", { noext: true });
        util.GlobExp.test("a", "b", { noglobstar: true });
        util.GlobExp.test("a", "b", { nonegate: true });
    }

    namespace iconv {
        // TODO
    }

    namespace sqlstring {
        namespace escapeId {
            const a: string = util.sqlstring.escapeId("asd");
            const b: string = util.sqlstring.escapeId(["asd"]);
            const c: string = util.sqlstring.escapeId(["asd"], true);
        }

        namespace dateToString {
            const a: string = util.sqlstring.dateToString(Date.now());
            const b: string = util.sqlstring.dateToString(123, "local");
        }

        namespace arrayToList {
            const a: string = util.sqlstring.arrayToList(["1", "a"]);
        }

        namespace bufferToString {
            const a: string = util.sqlstring.bufferToString(Buffer.alloc(10));
        }

        namespace objectToValues {
            const a: string = util.sqlstring.objectToValues({ a: 1 });
            const b: string = util.sqlstring.objectToValues({ a: 1 }, "local");
        }

        namespace escape {
            const a: string = util.sqlstring.escape(1);
            const b: string = util.sqlstring.escape(1, true);
            const c: string = util.sqlstring.escape(1, true, "local");
        }

        namespace format {
            const a: string = util.sqlstring.format("??");
            const b: string = util.sqlstring.format("??", "a");
            const c: string = util.sqlstring.format("??", ["a"]);
            const d: string = util.sqlstring.format("??", ["a"], true);
        }
    }

    namespace Editor {
        namespace options {
            new util.Editor();
            new util.Editor({});
            new util.Editor({ text: "" });
            new util.Editor({ editor: "" });
            new util.Editor({ path: "" });
            new util.Editor({ ext: "" });
        }

        const a: string = util.Editor.DEFAULT;
        new util.Editor().spawn().then((x: nodestd.child_process.ChildProcess) => { });
        new util.Editor().run().then((x: string) => { });
        new util.Editor().cleanup().then((x: undefined) => { });
        util.Editor.edit().then((x: string) => { });
    }

    namespace binarySearch {
        const a: number = util.binarySearch.GREATEST_LOWER_BOUND;
        const b: number = util.binarySearch.GREATEST_LOWER_BOUND;
        const c: number = util.binarySearch([1, 2, 3], 2);
        const d: number = util.binarySearch([1, 2, 3], 2, 0);
        const e: number = util.binarySearch([1, 2, 3], 2, 0, 10);
        const f: number = util.binarySearch([1, 2, 3], 2, 0, 10, (a, b) => a - b);
        const g: number = util.binarySearch([1, 2, 3], 2, 0, 10, (a, b) => a - b, util.binarySearch.GREATEST_LOWER_BOUND);
    }

    namespace buffer {
        const a: Buffer = util.buffer.concat([Buffer.alloc(10), Buffer.alloc(20)], 30);
        util.buffer.mask(Buffer.alloc(10), Buffer.alloc(10), Buffer.alloc(10), 0, 10);
        util.buffer.unmask(Buffer.alloc(10), Buffer.alloc(10));
    }

    namespace shebang {
        const a: string | null = util.shebang("#!/bin/sh");
    }

    namespace ReInterval {
        new util.ReInterval(() => { }, 1000);
        new util.ReInterval(() => { }, 1000, [1]);
        const a = new util.ReInterval(() => { }, 1000);
        a.reschedule(400);
        a.clear();
        a.destroy();
    }

    namespace RateLimiter {
        new util.RateLimiter();
        new util.RateLimiter(1);
        new util.RateLimiter(1, 1000);
        new util.RateLimiter(1, 1000, true);
        const a = new util.RateLimiter();
        a.removeTokens(1).then((x: number) => { });
        const b: boolean = a.tryRemoveTokens(10);
        const c: number = a.getTokensRemaining();
    }

    namespace throttle {
        const a: () => Promise<number> = util.throttle(() => 42);
        const b: (a: number) => Promise<string> = util.throttle((a: number) => `${a}`);
        const c: (a: number, b: string) => Promise<string> = util.throttle((a: number, b: string) => String(a) + b);
        const d = util.throttle(() => { }, {});
        const e = util.throttle(() => { }, { interval: 1000 });
        const f = util.throttle(() => { }, { max: 10 });
        const g = util.throttle(() => { }, { ordered: true });
        const h = util.throttle(() => { }, { waitForReturn: true });
    }

    namespace fakeClock {
        namespace timers {
            const a: typeof global.setTimeout = util.fakeClock.timers.setTimeout;
            const b: typeof global.clearTimeout = util.fakeClock.timers.clearTimeout;
            const c: typeof global.setInterval = util.fakeClock.timers.setInterval;
            const d: typeof global.clearInterval = util.fakeClock.timers.clearInterval;
            const e: typeof global.setImmediate = util.fakeClock.timers.setImmediate;
            const f: typeof global.clearImmediate = util.fakeClock.timers.clearImmediate;
            const g: typeof global.Date = util.fakeClock.timers.Date;
            const h: typeof global.process.hrtime = util.fakeClock.timers.hrtime;
            const i: typeof global.process.nextTick = util.fakeClock.timers.nextTick;
        }

        namespace install {
            util.fakeClock.install();
            util.fakeClock.install(100);
            util.fakeClock.install(new Date());
            util.fakeClock.install({});
            util.fakeClock.install({ advanceTimeDelta: 20 });
            util.fakeClock.install({ loopLimit: 20 });
            util.fakeClock.install({ now: 20 });
            util.fakeClock.install({ shouldAdvanceTime: false });
            util.fakeClock.install({ target: {} });
            const clock = util.fakeClock.install({ toFake: ["setTimeout", "clearTimeout"] });
            {
                const timer = clock.setTimeout(() => {}, 100, 1, 2, 3);
                const id: number = timer.id;
                timer.ref();
                timer.unref();
                clock.clearTimeout(timer);
            }
            {
                const timer = clock.setInterval(() => {}, 1, 2, 3);
                const id: number = timer.id;
                timer.ref();
                timer.unref();
                clock.clearInterval(timer);
            }
            {
                const timer = clock.setImmediate(() => {}, 1, 2, 3);
                const id: number = timer.id;
                timer.ref();
                timer.unref();
                clock.clearImmediate(timer);
            }
            clock.nextTick(() => {}, 1, 2, 3);
            clock.updateHrTime(10);
            const a: number = clock.tick(100);
            const b: number = clock.next();
            const c: number = clock.runAll();
            const d: number = clock.runToLast();
            clock.setSystemTime(100);
            const e: [number, number] = clock.hrtime();
            const f: [number, number] = clock.hrtime(e);
            clock.uninstall();
        }

        namespace createClock {
            util.fakeClock.createClock();
            util.fakeClock.createClock(0);
            const clock = util.fakeClock.createClock(0, 100);
            {
                const timer = clock.setTimeout(() => {}, 100, 1, 2, 3);
                const id: number = timer.id;
                timer.ref();
                timer.unref();
                clock.clearTimeout(timer);
            }
            {
                const timer = clock.setInterval(() => {}, 1, 2, 3);
                const id: number = timer.id;
                timer.ref();
                timer.unref();
                clock.clearInterval(timer);
            }
            {
                const timer = clock.setImmediate(() => {}, 1, 2, 3);
                const id: number = timer.id;
                timer.ref();
                timer.unref();
                clock.clearImmediate(timer);
            }
            clock.nextTick(() => {}, 1, 2, 3);
            clock.updateHrTime(10);
            const a: number = clock.tick(100);
            const b: number = clock.next();
            const c: number = clock.runAll();
            const d: number = clock.runToLast();
            clock.setSystemTime(100);
            const e: [number, number] = clock.hrtime();
            const f: [number, number] = clock.hrtime(e);
        }
    }

    namespace ltgt {
        namespace contains {
            const a: boolean = util.ltgt.contains({ lt: 2 }, 2);
            const b: boolean = util.ltgt.contains({ lt: 2 }, 2, (a, b) => b - a);
            const c: boolean = util.ltgt.contains({ lt: "2" }, "2");
            const d: boolean = util.ltgt.contains({ lt: "2" }, "2", (a, b) => b.charCodeAt(0) - a.charCodeAt(0));
        }

        namespace filter {
            const a: (a: number) => boolean = util.ltgt.filter({ lt: 2 });
            const b: (a: number) => boolean = util.ltgt.filter({ lt: 2 }, (a, b) => b - a);
            const c: (a: string) => boolean = util.ltgt.filter({ lt: "2" });
            const d: (a: string) => boolean = util.ltgt.filter({ lt: "2" }, (a, b) => b.charCodeAt(0) - a.charCodeAt(0));
        }

        namespace toLtgt {
            const a: adone.util.ltgt.I.Range<number> = util.ltgt.toLtgt({ lt: 2 }, {});
            const b: adone.util.ltgt.I.Range<string> = util.ltgt.toLtgt({ lt: 2 }, {}, (a) => `${a}`);
            const c: adone.util.ltgt.I.Range<number> = util.ltgt.toLtgt({ lt: 2 }, {}, (a) => a, 2);
            const d: adone.util.ltgt.I.Range<number> = util.ltgt.toLtgt({ lt: 2 }, {}, (a) => a, 2, 5);
        }

        namespace endEnclusive {
            const a: boolean = util.ltgt.endInclusive({ lt: 2 });
        }

        namespace startInclusive {
            const a: boolean = util.ltgt.startInclusive({ lt: 2 });
        }

        namespace end {
            const a: number | undefined = util.ltgt.end({ lt: 2 });
            const b: number | string = util.ltgt.end({ lt: 2 }, "2");
            const c: number = util.ltgt.end({ lt: 2 }, 2);
        }

        namespace start {
            const a: number | undefined = util.ltgt.start({ lt: 2 });
            const b: number | string = util.ltgt.start({ lt: 2 }, "2");
            const c: number = util.ltgt.start({ lt: 2 }, 2);
        }

        namespace upperBound {
            const a: number | undefined = util.ltgt.upperBound({ lt: 2 });
            const b: number | string = util.ltgt.upperBound({ lt: 2 }, "2");
            const c: number = util.ltgt.upperBound({ lt: 2 }, 2);
        }

        namespace upperBoundKey {
            const a: number | undefined = util.ltgt.upperBoundKey({ lt: 2 });
        }

        namespace upperBoundExclusive {
            const a: boolean = util.ltgt.upperBoundInclusive({ lt: 2 });
        }

        namespace lowerBoundExclusive {
            const a: boolean = util.ltgt.lowerBoundInclusive({ lt: 2 });
        }

        namespace upperBoundInclusive {
            const a: boolean = util.ltgt.upperBoundInclusive({ lt: 2 });
        }

        namespace lowerBoundInclusive {
            const a: boolean = util.ltgt.lowerBoundInclusive({ lt: 2 });
        }

        namespace lowerBound {
            const a: number | undefined = util.ltgt.lowerBound({ lt: 2 });
            const b: number | string = util.ltgt.lowerBound({ lt: 2 }, "2");
            const c: number = util.ltgt.lowerBound({ lt: 2 }, 2);
        }
    }

    namespace userid {
        const { userid } = util;

        { const a: number = userid.uid("someone").gid; }
        { const a: number = userid.uid("someone").uid; }
        { const a: number = userid.gid("someone"); }
        { const a: string = userid.username(1000); }
        { const a: string = userid.groupname(1000); }
        { const gids: number[] = userid.gids("someone"); }
    }

    namespace LogRotator {
        const { LogRotator } = util;
        new LogRotator("file.log");
        new LogRotator("file.log", {});
        new LogRotator("file.log", { checkInterval: 1000 });
        new LogRotator("file.log", { checkInterval: "10 minutes" });
        new LogRotator("file.log", { maxSize: 1000 });
        new LogRotator("file.log", { maxSize: "100kb" });
        new LogRotator("file.log", { maxFiles: 10 });
        new LogRotator("file.log", { compress: true });
        new LogRotator("file.log").rotate().then(() => {});
        new LogRotator("file.log").start();
        new LogRotator("file.log").stop();
    }
}
