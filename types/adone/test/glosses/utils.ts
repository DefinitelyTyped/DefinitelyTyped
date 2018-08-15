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

    namespace toFastProperties {
        const a: object = util.toFastProperties({});
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

    namespace parseSize {
        const a: number | null = util.parseSize(123);
        const b: number | null = util.parseSize("123Kb");
    }

    namespace Cloner {
        const a = new util.Cloner();
        a.clone({});
        a.clone({}, {});
        a.clone({}, { deep: true });
        a.clone({}, { nonPlainObjects: false });
        a.clone({}, { onlyEnumerable: true });
        const c = a.binding();
        c({});
        c({}, {});
        c({}, { deep: true });
        c({}, { onlyEnumerable: false });
        c({}, { nonPlainObjects: true });
    }

    namespace clone {
        const a: object = util.clone({});
        const b: object = util.clone({}, {});
        const c: object = util.clone({}, { deep: true });
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

    namespace matchPath {
        const a: number | boolean = util.matchPath(["a", "b", "c"], "a");
        const b: (a: any, b: any) => number | boolean = util.matchPath("a", { index: true });
        const c: number | boolean = util.matchPath(["a", "b", "c"], "a", { dot: true });
        const d: (a: any, b: any) => number | boolean = util.matchPath("a", { end: 2 });
        const e: (a: any, b: any) => number | boolean = util.matchPath("a", { start: 2 });
        const f: (a: any, b: any) => number | boolean = util.matchPath("a");
    }

    namespace toposort {
        const a: string[] = util.toposort([
            ["0", "1"],
            ["2", "3"],
            ["4", "5"],
            ["6", "7"]
        ]);
        const b: string[] = util.toposort.array(["0", "1", "2"], [
            ["0", "1"],
            ["2", "3"],
            ["4", "5"],
            ["6", "7"]
        ]);
        const sorter = new util.toposort.Sorter();
        sorter.add("a", "b");
        sorter.add("a", ["c"]);
        const c: string[] = sorter.sort();
        sorter.clear();
        sorter.edges[0][0].charCodeAt(100);
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
        namespace toArrayBuffer {
            const a = util.buffer.toArrayBuffer(Buffer.from("hello"));
            a.slice(10);
        }

        namespace xor {
            const a = util.buffer.xor(Buffer.from("hello"), Buffer.from("world"));
            a.writeUInt32LE(20, 1);
        }
    }

    namespace shebang {
        const a: string | null = util.shebang("#!/bin/sh");
    }

    namespace reinterval {
        util.reinterval(() => { }, 1000);
        util.reinterval(() => { }, 1000, [1]);
        const a = util.reinterval(() => { }, 1000);
        a.reschedule(400);
        a.clear();
        a.destroy();
    }

    namespace throttle {
        namespace RateLimiter {
            new util.throttle.RateLimiter();
            new util.throttle.RateLimiter(1);
            new util.throttle.RateLimiter(1, 1000);
            new util.throttle.RateLimiter(1, 1000, true);
            const a = new util.throttle.RateLimiter();
            a.removeTokens(1).then((x: number) => { });
            const b: boolean = a.tryRemoveTokens(10);
            const c: number = a.getTokensRemaining();
        }

        const a: () => Promise<number> = util.throttle.create(() => 42);
        const b: (a: number) => Promise<string> = util.throttle.create((a: number) => `${a}`);
        const c: (a: number, b: string) => Promise<string> = util.throttle.create((a: number, b: string) => String(a) + b);
        const d = util.throttle.create(() => { }, {});
        const e = util.throttle.create(() => { }, { interval: 1000 });
        const f = util.throttle.create(() => { }, { concurrency: 10 });
        const g = util.throttle.create(() => { }, { ordered: true });
        const h = util.throttle.create(() => { }, { waitForReturn: true });
        const i = util.throttle.create(() => { }, { onDone() {} });
        const j = util.throttle.create(() => { }, { drop: true });
        const k = util.throttle.create(() => { }, { dropLast: true });

        const l: symbol = util.throttle.DROPPED;

        {
            const t = util.throttle.create();
            t(() => 2).then((x: number) => {});
            t(() => Promise.resolve(2)).then((x: number) => {});

            t(() => "2").then((x: string) => {});
            t(() => Promise.resolve("2")).then((x: string) => {});

            t((a) => a, 2).then((x: number) => {});
            t((a) => Promise.resolve(a), 2).then((x: number) => {});

            t((a, b) => String(a) + b, 2, "3").then((x: string) => {});
            t(async (a, b) => String(a) + b, 2, "3").then((x: string) => x);

            t((a, b, c) => String(a) + b + c, 2, "3", "4").then((x: string) => {});
            t(async (a, b, c) => String(a) + b + c, 2, "3", "4").then((x: string) => x);

            t((a, b, c, d) => String(a) + b + c + String(d), 2, "3", "4", 5).then((x: string) => {});
            t(async (a, b, c, d) => String(a) + b + c + String(d), 2, "3", "4", 5).then((x: string) => x);

            t((a, b, c, d, e) => String(a) + b + c + String(d) + e.join(","), 2, "3", "4", 5, [1, 2, 3]).then((x: string) => {});
            t(async (a, b, c, d, e) => String(a) + b + c + String(d) + e.join(","), 2, "3", "4", 5, [1, 2, 3]).then((x: string) => x);

            t((a, b, c, d, e, f) => String(a) + b + c + String(d) + e.join(",") + f, 2, "3", "4", 5, [1, 2, 3], 6).then((x: any) => {});
            t(async (a, b, c, d, e, f) => String(a) + b + c + String(d) + e.join(",") + f, 2, "3", "4", 5, [1, 2, 3], 6).then((x: any) => x);
        }
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

    namespace arrayDiff {
        const { arrayDiff } = util;

        arrayDiff([1, 2, 3], [4, 5, 6])[0].toFixed();
        arrayDiff(["1"])[0].charCodeAt(100);
    }

    namespace fillRange {
        const { fillRange } = util;

        { const a: number[] = fillRange(1, 2); }
        { const a: string[] = fillRange(1, 2, { stringify: true }); }
        { const a: string = fillRange(1, 2, { toRegex: true }); }
        { const a: string[] = fillRange("1", "2"); }
        { const a: string = fillRange("1", "2", { toRegex: true }); }
    }

    namespace inflection {
        const { inflection } = util;

        { const a: string = inflection.singularizeWord("hello"); }
        { const a: string = inflection.singularizeWord("hello", "aaaa"); }
        { const a: string = inflection.pluralizeWord("hello"); }
        { const a: string = inflection.pluralizeWord("hello", "aaaa"); }
        { const a: string = inflection.underscore("hello"); }
    }

    namespace machineId {
        const { machineId } = util;

        (async () => {
            const a: string = await machineId();
        });
    }

    namespace merge {
        const { merge } = util;

        merge({}, {});
        merge({}, {}, { allowPrototypes: true });
        merge({}, {}, { plainObjects: false });
    }

    namespace omit {
        const { omit } = util;

        omit({}, ["a"]);
        omit({}, "a");
        omit({}, (x) => x === "a");
    }

    namespace parseTime {
        const { parseTime } = util;

        { const a: number = parseTime(123); }
        { const a: number | null = parseTime("12"); }
    }

    namespace pick {
        const { pick } = util;

        pick({}, ["a", "b", "c"]);
        pick({}, new Set(["a", "b", "c"]));
    }

    namespace querystring {
        const { querystring: qs } = util;

        { const a: string = qs.escape("asd"); }
        { const a: string = qs.formats.default; }
        { const a: string = qs.formats.RFC1738; }
        { const a: string = qs.formats.RFC3986; }
        { const a: string = qs.formats.formatters.RFC1738("ha"); }
        { const a: string = qs.formats.formatters.RFC3986("ha"); }
        { const a: object = qs.parse("asdasd"); }
        { const a: object = qs.parse("asdasd", {}); }
        { const a: object = qs.parse("asdasd", { allowDots: false }); }
        { const a: object = qs.parse("asdasd", { allowPrototypes: false }); }
        { const a: object = qs.parse("asdasd", { arrayLimit: 100 }); }
        { const a: object = qs.parse("asdasd", { decoder: (s) => s }); }
        { const a: object = qs.parse("asdasd", { decoder: (s, d) => d(s) }); }
        { const a: object = qs.parse("asdasd", { delimiter: "a" }); }
        { const a: object = qs.parse("asdasd", { depth: 100 }); }
        { const a: object = qs.parse("asdasd", { ignoreQueryPrefix: false }); }
        { const a: object = qs.parse("asdasd", { parameterLimit: 100 }); }
        { const a: object = qs.parse("asdasd", { parseArrays: false }); }
        { const a: object = qs.parse("asdasd", { plainObjects: true }); }
        { const a: object = qs.parse("asdasd", { strictNullHandling: false }); }
        { const a: string = qs.stringify({}); }
        { const a: string = qs.stringify({}, {}); }
        { const a: string = qs.stringify({}, { addQueryPrefix: false }); }
        { const a: string = qs.stringify({}, { allowDots: false }); }
        { const a: string = qs.stringify({}, { arrayFormat: "indices" }); }
        { const a: string = qs.stringify({}, { arrayFormat: "brackets" }); }
        { const a: string = qs.stringify({}, { arrayFormat: "repeat" }); }
        { const a: string = qs.stringify({}, { delimiter: "1" }); }
        { const a: string = qs.stringify({}, { encode: true }); }
        { const a: string = qs.stringify({}, { encoder: (s) => s }); }
        { const a: string = qs.stringify({}, { encodeValuesOnly: false }); }
        { const a: string = qs.stringify({}, { filter: [1, 2, 3] }); }
        { const a: string = qs.stringify({}, { filter: ["1", "2", "3"] }); }
        { const a: string = qs.stringify({}, { filter: (prefix: string, value: any) => value === 1 }); }
        { const a: string = qs.stringify({}, { indices: false }); }
        { const a: string = qs.stringify({}, { serializeDate(d) { return String(d.getTime()); } }); }
        { const a: string = qs.stringify({}, { skipNulls: false }); }
        { const a: string = qs.stringify({}, { sort(a, b) { return a - b; } }); }
        { const a: string = qs.stringify({}, { strictNullHandling: false }); }
    }

    namespace regexNot {
        const { regexNot } = util;

        { const a: RegExp = regexNot("a"); }
        { const a: RegExp = regexNot("a", {}); }
        { const a: RegExp = regexNot("a", { contains: false }); }
    }

    namespace repeat {
        const { repeat } = util;
        { const a: number[] = repeat(1, 10); }
        { const a: string[] = repeat("a", 10); }
        { const a: number[][] = repeat([2], 10); }
    }

    namespace signalNameToCode {
        const { signalNameToCode } = util;
        signalNameToCode("SIGINT").toFixed(2);
    }

    namespace splitBuffer {
        const { splitBuffer } = util;

        { const a: Buffer[] = splitBuffer(Buffer.from("asd"), Buffer.from("|")); }
        { const a: Buffer[] = splitBuffer(Buffer.from("asd"), Buffer.from("|"), true); }
        { const a: Buffer[] = splitBuffer("asd", Buffer.from("|"), true); }
        { const a: Buffer[] = splitBuffer("asd", "|"); }
    }

    namespace splitString {
        const { splitString } = util;

        splitString("a");
        splitString("a", {});
        splitString("a", { braces: false });
        splitString("a", { keepDoubleQuotes: false });
        splitString("a", { keepEscaping: false });
        splitString("a", { keepQuotes: false });
        splitString("a", { keepSingleQuotes: false });
        splitString("a", { separator: "|" });
        splitString("a", {
            split(token) {
                { const a: string[] = token.arr; }
                { const a: number = token.idx; }
                { const a: string = token.str; }
                { const a: string = token.val; }
            }
        });
        splitString("a", (token) => {
            { const a: string[] = token.arr; }
            { const a: number = token.idx; }
            { const a: string = token.str; }
            { const a: string = token.val; }
        });
        splitString("a", {}, (token) => {
            { const a: string[] = token.arr; }
            { const a: number = token.idx; }
            { const a: string = token.str; }
            { const a: string = token.val; }
        });
    }

    namespace toRegex {
        const { toRegex } = util;

        { const a: RegExp = toRegex("a"); }
        { const a: RegExp = toRegex(["a"]); }
        { const a: RegExp = toRegex(["a"], {}); }
        { const a: RegExp = toRegex(["a"], { cache: false }); }
        { const a: RegExp = toRegex(["a"], { contains: false }); }
        { const a: RegExp = toRegex(["a"], { flags: "i" }); }
        { const a: RegExp = toRegex(["a"], { negate: false }); }
        { const a: RegExp = toRegex(["a"], { nocase: false }); }
    }

    namespace toRegexRange {
        const { toRegexRange } = util;

        { const a: RegExp = toRegexRange(1, 10); }
        { const a: RegExp = toRegexRange("1", "10"); }
        { const a: RegExp = toRegexRange(1, 10, {}); }
        { const a: RegExp = toRegexRange(1, 10, { capture: false }); }
        { const a: RegExp = toRegexRange(1, 10, { relaxZeros: true }); }
        { const a: RegExp = toRegexRange(1, 10, { shorthand: false }); }
    }

    namespace xorDistance {
        const { compare, create, eq, gt, lt } = util.xorDistance;

        { const a: boolean = compare(Buffer.from("1"), Buffer.from("2")); }
        { const a: Buffer = create(Buffer.from("1"), Buffer.from("2")); }
        { const a: boolean = gt(Buffer.from("1"), Buffer.from("2")); }
        { const a: boolean = lt(Buffer.from("1"), Buffer.from("2")); }
        { const a: boolean = eq(Buffer.from("1"), Buffer.from("2")); }
    }

    namespace braces {
        const { braces } = util;

        { const a: string[] = braces("a"); }
        { const a: string[] = braces("a", {}); }
        { const a: string[] = braces("a", { expand: false }); }
        { const a: string[] = braces("a", { nodupes: false }); }
        { const a: string[] = braces("a", { optimize: true }); }
        { const a: string[] = braces("a", { quantifiers: false }); }
        { const a: string[] = braces("a", { rangeLimit: 100 }); }
        { const a: string[] = braces("a", { transform: (s: string) => s }); }
        { const a: string[] = braces("a", {  unescape: false }); }

        { const a: string[] = braces.expand("a"); }
        { const a: string[] = braces.expand("a", {}); }
        { const a: string[] = braces.expand("a", { expand: false }); }
        { const a: string[] = braces.expand("a", { nodupes: false }); }
        { const a: string[] = braces.expand("a", { optimize: true }); }
        { const a: string[] = braces.expand("a", { quantifiers: false }); }
        { const a: string[] = braces.expand("a", { rangeLimit: 100 }); }
        { const a: string[] = braces.expand("a", { transform: (s: string) => s }); }
        { const a: string[] = braces.expand("a", {  unescape: false }); }

        { const a: RegExp = braces.makeRe("a"); }
        { const a: RegExp = braces.makeRe("a", {}); }
        { const a: RegExp = braces.makeRe("a", { expand: false }); }
        { const a: RegExp = braces.makeRe("a", { nodupes: false }); }
        { const a: RegExp = braces.makeRe("a", { optimize: true }); }
        { const a: RegExp = braces.makeRe("a", { quantifiers: false }); }
        { const a: RegExp = braces.makeRe("a", { rangeLimit: 100 }); }
        { const a: RegExp = braces.makeRe("a", { transform: (s: string) => s }); }
        { const a: RegExp = braces.makeRe("a", {  unescape: false }); }

        { const a: number = braces.MAX_LENGTH; }
        { const a: object = braces.getCache(); }
        braces.clearCache();
        braces.resizeCache(100500);
    }

    namespace match {
        const { match } = util;

        { const a: string[] = match(["a"], "a"); }
        { const a: string[] = match(["a"], ["a"]); }
        { const a: string[] = match(["a"], ["a"], {}); }
        { const a: string[] = match(["a"], ["a"], { basename: false }); }
        { const a: string[] = match(["a"], ["a"], { bash: false }); }
        { const a: string[] = match(["a"], ["a"], { cache: false }); }
        { const a: string[] = match(["a"], ["a"], { dot: true }); }
        { const a: string[] = match(["a"], ["a"], { failglob: false }); }
        { const a: string[] = match(["a"], ["a"], { ignore: "a" }); }
        { const a: string[] = match(["a"], ["a"], { ignore: ["a"] }); }
        { const a: string[] = match(["a"], ["a"], { matchBase: false }); }
        { const a: string[] = match(["a"], ["a"], { nobrace: true }); }
        { const a: string[] = match(["a"], ["a"], { nocase: false }); }
        { const a: string[] = match(["a"], ["a"], { nodupes: true }); }
        { const a: string[] = match(["a"], ["a"], { noext: false }); }
        { const a: string[] = match(["a"], ["a"], { noglobstar: true }); }
        { const a: string[] = match(["a"], ["a"], { nonegate: false }); }
        { const a: string[] = match(["a"], ["a"], { nonull: false }); }
        { const a: string[] = match(["a"], ["a"], { nullglob: false }); }
        { const a: string[] = match(["a"], ["a"], { snapdragon: {} }); }
        { const a: string[] = match(["a"], ["a"], { sourcemap: false }); }
        { const a: string[] = match(["a"], ["a"], { unescape: false }); }
        { const a: string[] = match(["a"], ["a"], { unixify: false }); }

        { const a: string[] = match.match(["a"], "a"); }
        { const a: string[] = match.match(["a"], "a", {}); }
        { const a: string[] = match.match(["a"], "a", { basename: false }); }
        { const a: string[] = match.match(["a"], "a", { bash: false }); }
        { const a: string[] = match.match(["a"], "a", { cache: false }); }
        { const a: string[] = match.match(["a"], "a", { dot: true }); }
        { const a: string[] = match.match(["a"], "a", { failglob: false }); }
        { const a: string[] = match.match(["a"], "a", { ignore: "a" }); }
        { const a: string[] = match.match(["a"], "a", { ignore: ["a"] }); }
        { const a: string[] = match.match(["a"], "a", { matchBase: false }); }
        { const a: string[] = match.match(["a"], "a", { nobrace: true }); }
        { const a: string[] = match.match(["a"], "a", { nocase: false }); }
        { const a: string[] = match.match(["a"], "a", { nodupes: true }); }
        { const a: string[] = match.match(["a"], "a", { noext: false }); }
        { const a: string[] = match.match(["a"], "a", { noglobstar: true }); }
        { const a: string[] = match.match(["a"], "a", { nonegate: false }); }
        { const a: string[] = match.match(["a"], "a", { nonull: false }); }
        { const a: string[] = match.match(["a"], "a", { nullglob: false }); }
        { const a: string[] = match.match(["a"], "a", { snapdragon: {} }); }
        { const a: string[] = match.match(["a"], "a", { sourcemap: false }); }
        { const a: string[] = match.match(["a"], "a", { unescape: false }); }
        { const a: string[] = match.match(["a"], "a", { unixify: false }); }

        { const a: boolean = match.isMatch("a", "a"); }
        { const a: boolean = match.isMatch("a", "a", {}); }
        { const a: boolean = match.isMatch("a", "a", { basename: false }); }
        { const a: boolean = match.isMatch("a", "a", { bash: false }); }
        { const a: boolean = match.isMatch("a", "a", { cache: false }); }
        { const a: boolean = match.isMatch("a", "a", { dot: true }); }
        { const a: boolean = match.isMatch("a", "a", { failglob: false }); }
        { const a: boolean = match.isMatch("a", "a", { ignore: "a" }); }
        { const a: boolean = match.isMatch("a", "a", { ignore: ["a"] }); }
        { const a: boolean = match.isMatch("a", "a", { matchBase: false }); }
        { const a: boolean = match.isMatch("a", "a", { nobrace: true }); }
        { const a: boolean = match.isMatch("a", "a", { nocase: false }); }
        { const a: boolean = match.isMatch("a", "a", { nodupes: true }); }
        { const a: boolean = match.isMatch("a", "a", { noext: false }); }
        { const a: boolean = match.isMatch("a", "a", { noglobstar: true }); }
        { const a: boolean = match.isMatch("a", "a", { nonegate: false }); }
        { const a: boolean = match.isMatch("a", "a", { nonull: false }); }
        { const a: boolean = match.isMatch("a", "a", { nullglob: false }); }
        { const a: boolean = match.isMatch("a", "a", { snapdragon: {} }); }
        { const a: boolean = match.isMatch("a", "a", { sourcemap: false }); }
        { const a: boolean = match.isMatch("a", "a", { unescape: false }); }
        { const a: boolean = match.isMatch("a", "a", { unixify: false }); }

        { const a: boolean = match.some(["a"], ["a"]); }
        { const a: boolean = match.some("a", "a"); }
        { const a: boolean = match.some("a", "a", {}); }
        { const a: boolean = match.some("a", "a", { basename: false }); }
        { const a: boolean = match.some("a", "a", { bash: false }); }
        { const a: boolean = match.some("a", "a", { cache: false }); }
        { const a: boolean = match.some("a", "a", { dot: true }); }
        { const a: boolean = match.some("a", "a", { failglob: false }); }
        { const a: boolean = match.some("a", "a", { ignore: "a" }); }
        { const a: boolean = match.some("a", "a", { ignore: ["a"] }); }
        { const a: boolean = match.some("a", "a", { matchBase: false }); }
        { const a: boolean = match.some("a", "a", { nobrace: true }); }
        { const a: boolean = match.some("a", "a", { nocase: false }); }
        { const a: boolean = match.some("a", "a", { nodupes: true }); }
        { const a: boolean = match.some("a", "a", { noext: false }); }
        { const a: boolean = match.some("a", "a", { noglobstar: true }); }
        { const a: boolean = match.some("a", "a", { nonegate: false }); }
        { const a: boolean = match.some("a", "a", { nonull: false }); }
        { const a: boolean = match.some("a", "a", { nullglob: false }); }
        { const a: boolean = match.some("a", "a", { snapdragon: {} }); }
        { const a: boolean = match.some("a", "a", { sourcemap: false }); }
        { const a: boolean = match.some("a", "a", { unescape: false }); }
        { const a: boolean = match.some("a", "a", { unixify: false }); }

        { const a: boolean = match.every(["a"], ["a"]); }
        { const a: boolean = match.every("a", "a"); }
        { const a: boolean = match.every("a", "a", {}); }
        { const a: boolean = match.every("a", "a", { basename: false }); }
        { const a: boolean = match.every("a", "a", { bash: false }); }
        { const a: boolean = match.every("a", "a", { cache: false }); }
        { const a: boolean = match.every("a", "a", { dot: true }); }
        { const a: boolean = match.every("a", "a", { failglob: false }); }
        { const a: boolean = match.every("a", "a", { ignore: "a" }); }
        { const a: boolean = match.every("a", "a", { ignore: ["a"] }); }
        { const a: boolean = match.every("a", "a", { matchBase: false }); }
        { const a: boolean = match.every("a", "a", { nobrace: true }); }
        { const a: boolean = match.every("a", "a", { nocase: false }); }
        { const a: boolean = match.every("a", "a", { nodupes: true }); }
        { const a: boolean = match.every("a", "a", { noext: false }); }
        { const a: boolean = match.every("a", "a", { noglobstar: true }); }
        { const a: boolean = match.every("a", "a", { nonegate: false }); }
        { const a: boolean = match.every("a", "a", { nonull: false }); }
        { const a: boolean = match.every("a", "a", { nullglob: false }); }
        { const a: boolean = match.every("a", "a", { snapdragon: {} }); }
        { const a: boolean = match.every("a", "a", { sourcemap: false }); }
        { const a: boolean = match.every("a", "a", { unescape: false }); }
        { const a: boolean = match.every("a", "a", { unixify: false }); }

        { const a: boolean = match.any(["a"], ["a"]); }
        { const a: boolean = match.any("a", "a"); }
        { const a: boolean = match.any("a", "a", {}); }
        { const a: boolean = match.any("a", "a", { basename: false }); }
        { const a: boolean = match.any("a", "a", { bash: false }); }
        { const a: boolean = match.any("a", "a", { cache: false }); }
        { const a: boolean = match.any("a", "a", { dot: true }); }
        { const a: boolean = match.any("a", "a", { failglob: false }); }
        { const a: boolean = match.any("a", "a", { ignore: "a" }); }
        { const a: boolean = match.any("a", "a", { ignore: ["a"] }); }
        { const a: boolean = match.any("a", "a", { matchBase: false }); }
        { const a: boolean = match.any("a", "a", { nobrace: true }); }
        { const a: boolean = match.any("a", "a", { nocase: false }); }
        { const a: boolean = match.any("a", "a", { nodupes: true }); }
        { const a: boolean = match.any("a", "a", { noext: false }); }
        { const a: boolean = match.any("a", "a", { noglobstar: true }); }
        { const a: boolean = match.any("a", "a", { nonegate: false }); }
        { const a: boolean = match.any("a", "a", { nonull: false }); }
        { const a: boolean = match.any("a", "a", { nullglob: false }); }
        { const a: boolean = match.any("a", "a", { snapdragon: {} }); }
        { const a: boolean = match.any("a", "a", { sourcemap: false }); }
        { const a: boolean = match.any("a", "a", { unescape: false }); }
        { const a: boolean = match.any("a", "a", { unixify: false }); }

        { const a: boolean = match.all("a", "a"); }
        { const a: boolean = match.all("a", ["a"]); }
        { const a: boolean = match.all(["a"], "a"); }
        { const a: boolean = match.all(["a"], "a", {}); }
        { const a: boolean = match.all(["a"], ["a"], { basename: false }); }
        { const a: boolean = match.all(["a"], ["a"], { bash: false }); }
        { const a: boolean = match.all(["a"], ["a"], { cache: false }); }
        { const a: boolean = match.all(["a"], ["a"], { dot: true }); }
        { const a: boolean = match.all(["a"], ["a"], { failglob: false }); }
        { const a: boolean = match.all(["a"], ["a"], { ignore: "a" }); }
        { const a: boolean = match.all(["a"], ["a"], { ignore: ["a"] }); }
        { const a: boolean = match.all(["a"], ["a"], { matchBase: false }); }
        { const a: boolean = match.all(["a"], ["a"], { nobrace: true }); }
        { const a: boolean = match.all(["a"], ["a"], { nocase: false }); }
        { const a: boolean = match.all(["a"], ["a"], { nodupes: true }); }
        { const a: boolean = match.all(["a"], ["a"], { noext: false }); }
        { const a: boolean = match.all(["a"], ["a"], { noglobstar: true }); }
        { const a: boolean = match.all(["a"], ["a"], { nonegate: false }); }
        { const a: boolean = match.all(["a"], ["a"], { nonull: false }); }
        { const a: boolean = match.all(["a"], ["a"], { nullglob: false }); }
        { const a: boolean = match.all(["a"], ["a"], { snapdragon: {} }); }
        { const a: boolean = match.all(["a"], ["a"], { sourcemap: false }); }
        { const a: boolean = match.all(["a"], ["a"], { unescape: false }); }
        { const a: boolean = match.all(["a"], ["a"], { unixify: false }); }

        { const a: string[] = match.not(["a"], ["a"]); }
        { const a: string[] = match.not(["a"], "a"); }
        { const a: string[] = match.not(["a"], "a", {}); }
        { const a: string[] = match.not(["a"], "a", { basename: false }); }
        { const a: string[] = match.not(["a"], "a", { bash: false }); }
        { const a: string[] = match.not(["a"], "a", { cache: false }); }
        { const a: string[] = match.not(["a"], "a", { dot: true }); }
        { const a: string[] = match.not(["a"], "a", { failglob: false }); }
        { const a: string[] = match.not(["a"], "a", { ignore: "a" }); }
        { const a: string[] = match.not(["a"], "a", { ignore: ["a"] }); }
        { const a: string[] = match.not(["a"], "a", { matchBase: false }); }
        { const a: string[] = match.not(["a"], "a", { nobrace: true }); }
        { const a: string[] = match.not(["a"], "a", { nocase: false }); }
        { const a: string[] = match.not(["a"], "a", { nodupes: true }); }
        { const a: string[] = match.not(["a"], "a", { noext: false }); }
        { const a: string[] = match.not(["a"], "a", { noglobstar: true }); }
        { const a: string[] = match.not(["a"], "a", { nonegate: false }); }
        { const a: string[] = match.not(["a"], "a", { nonull: false }); }
        { const a: string[] = match.not(["a"], "a", { nullglob: false }); }
        { const a: string[] = match.not(["a"], "a", { snapdragon: {} }); }
        { const a: string[] = match.not(["a"], "a", { sourcemap: false }); }
        { const a: string[] = match.not(["a"], "a", { unescape: false }); }
        { const a: string[] = match.not(["a"], "a", { unixify: false }); }

        { const a: boolean = match.contains("a", "a"); }
        { const a: boolean = match.contains("a", ["a"]); }
        { const a: boolean = match.contains("a", ["a"], {}); }
        { const a: boolean = match.contains("a", ["a"], { basename: false }); }
        { const a: boolean = match.contains("a", ["a"], { bash: false }); }
        { const a: boolean = match.contains("a", ["a"], { cache: false }); }
        { const a: boolean = match.contains("a", ["a"], { dot: true }); }
        { const a: boolean = match.contains("a", ["a"], { failglob: false }); }
        { const a: boolean = match.contains("a", ["a"], { ignore: "a" }); }
        { const a: boolean = match.contains("a", ["a"], { ignore: ["a"] }); }
        { const a: boolean = match.contains("a", ["a"], { matchBase: false }); }
        { const a: boolean = match.contains("a", ["a"], { nobrace: true }); }
        { const a: boolean = match.contains("a", ["a"], { nocase: false }); }
        { const a: boolean = match.contains("a", ["a"], { nodupes: true }); }
        { const a: boolean = match.contains("a", ["a"], { noext: false }); }
        { const a: boolean = match.contains("a", ["a"], { noglobstar: true }); }
        { const a: boolean = match.contains("a", ["a"], { nonegate: false }); }
        { const a: boolean = match.contains("a", ["a"], { nonull: false }); }
        { const a: boolean = match.contains("a", ["a"], { nullglob: false }); }
        { const a: boolean = match.contains("a", ["a"], { snapdragon: {} }); }
        { const a: boolean = match.contains("a", ["a"], { sourcemap: false }); }
        { const a: boolean = match.contains("a", ["a"], { unescape: false }); }
        { const a: boolean = match.contains("a", ["a"], { unixify: false }); }

        { const a: object = match.matchKeys({}, "a"); }
        { const a: object = match.matchKeys({}, ["a"]); }
        { const a: object = match.matchKeys({}, ["a"], {}); }
        { const a: object = match.matchKeys({}, ["a"], { basename: false }); }
        { const a: object = match.matchKeys({}, ["a"], { bash: false }); }
        { const a: object = match.matchKeys({}, ["a"], { cache: false }); }
        { const a: object = match.matchKeys({}, ["a"], { dot: true }); }
        { const a: object = match.matchKeys({}, ["a"], { failglob: false }); }
        { const a: object = match.matchKeys({}, ["a"], { ignore: "a" }); }
        { const a: object = match.matchKeys({}, ["a"], { ignore: ["a"] }); }
        { const a: object = match.matchKeys({}, ["a"], { matchBase: false }); }
        { const a: object = match.matchKeys({}, ["a"], { nobrace: true }); }
        { const a: object = match.matchKeys({}, ["a"], { nocase: false }); }
        { const a: object = match.matchKeys({}, ["a"], { nodupes: true }); }
        { const a: object = match.matchKeys({}, ["a"], { noext: false }); }
        { const a: object = match.matchKeys({}, ["a"], { noglobstar: true }); }
        { const a: object = match.matchKeys({}, ["a"], { nonegate: false }); }
        { const a: object = match.matchKeys({}, ["a"], { nonull: false }); }
        { const a: object = match.matchKeys({}, ["a"], { nullglob: false }); }
        { const a: object = match.matchKeys({}, ["a"], { snapdragon: {} }); }
        { const a: object = match.matchKeys({}, ["a"], { sourcemap: false }); }
        { const a: object = match.matchKeys({}, ["a"], { unescape: false }); }
        { const a: object = match.matchKeys({}, ["a"], { unixify: false }); }

        { const a: (s: string) => boolean = match.matcher("a"); }
        { const a: (s: string) => boolean = match.matcher(["a"]); }
        { const a: (s: string) => boolean = match.matcher(["a"], {}); }
        { const a: (s: string) => boolean = match.matcher(["a"], { basename: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { bash: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { cache: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { dot: true }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { failglob: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { ignore: "a" }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { ignore: ["a"] }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { matchBase: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { nobrace: true }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { nocase: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { nodupes: true }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { noext: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { noglobstar: true }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { nonegate: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { nonull: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { nullglob: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { snapdragon: {} }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { sourcemap: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { unescape: false }); }
        { const a: (s: string) => boolean = match.matcher(["a"], { unixify: false }); }

        { const a: string[] | null = match.capture("a", "a"); }
        { const a: string[] | null = match.capture("a", "a", {}); }
        { const a: string[] | null = match.capture("a", "a", { basename: false }); }
        { const a: string[] | null = match.capture("a", "a", { bash: false }); }
        { const a: string[] | null = match.capture("a", "a", { cache: false }); }
        { const a: string[] | null = match.capture("a", "a", { dot: true }); }
        { const a: string[] | null = match.capture("a", "a", { failglob: false }); }
        { const a: string[] | null = match.capture("a", "a", { ignore: "a" }); }
        { const a: string[] | null = match.capture("a", "a", { ignore: ["a"] }); }
        { const a: string[] | null = match.capture("a", "a", { matchBase: false }); }
        { const a: string[] | null = match.capture("a", "a", { nobrace: true }); }
        { const a: string[] | null = match.capture("a", "a", { nocase: false }); }
        { const a: string[] | null = match.capture("a", "a", { nodupes: true }); }
        { const a: string[] | null = match.capture("a", "a", { noext: false }); }
        { const a: string[] | null = match.capture("a", "a", { noglobstar: true }); }
        { const a: string[] | null = match.capture("a", "a", { nonegate: false }); }
        { const a: string[] | null = match.capture("a", "a", { nonull: false }); }
        { const a: string[] | null = match.capture("a", "a", { nullglob: false }); }
        { const a: string[] | null = match.capture("a", "a", { snapdragon: {} }); }
        { const a: string[] | null = match.capture("a", "a", { sourcemap: false }); }
        { const a: string[] | null = match.capture("a", "a", { unescape: false }); }
        { const a: string[] | null = match.capture("a", "a", { unixify: false }); }

        { const a: RegExp = match.makeRe("a"); }
        { const a: RegExp = match.makeRe("a", {}); }
        { const a: RegExp = match.makeRe("a", { basename: false }); }
        { const a: RegExp = match.makeRe("a", { bash: false }); }
        { const a: RegExp = match.makeRe("a", { cache: false }); }
        { const a: RegExp = match.makeRe("a", { dot: true }); }
        { const a: RegExp = match.makeRe("a", { failglob: false }); }
        { const a: RegExp = match.makeRe("a", { ignore: "a" }); }
        { const a: RegExp = match.makeRe("a", { ignore: ["a"] }); }
        { const a: RegExp = match.makeRe("a", { matchBase: false }); }
        { const a: RegExp = match.makeRe("a", { nobrace: true }); }
        { const a: RegExp = match.makeRe("a", { nocase: false }); }
        { const a: RegExp = match.makeRe("a", { nodupes: true }); }
        { const a: RegExp = match.makeRe("a", { noext: false }); }
        { const a: RegExp = match.makeRe("a", { noglobstar: true }); }
        { const a: RegExp = match.makeRe("a", { nonegate: false }); }
        { const a: RegExp = match.makeRe("a", { nonull: false }); }
        { const a: RegExp = match.makeRe("a", { nullglob: false }); }
        { const a: RegExp = match.makeRe("a", { snapdragon: {} }); }
        { const a: RegExp = match.makeRe("a", { sourcemap: false }); }
        { const a: RegExp = match.makeRe("a", { unescape: false }); }
        { const a: RegExp = match.makeRe("a", { unixify: false }); }

        { const a: string[] = match.braces("a"); }
        { const a: string[] = match.braces("a", {}); }
        { const a: string[] = match.braces("a", {}); }
        { const a: string[] = match.braces("a", { basename: false }); }
        { const a: string[] = match.braces("a", { bash: false }); }
        { const a: string[] = match.braces("a", { cache: false }); }
        { const a: string[] = match.braces("a", { dot: true }); }
        { const a: string[] = match.braces("a", { failglob: false }); }
        { const a: string[] = match.braces("a", { ignore: "a" }); }
        { const a: string[] = match.braces("a", { ignore: ["a"] }); }
        { const a: string[] = match.braces("a", { matchBase: false }); }
        { const a: string[] = match.braces("a", { nobrace: true }); }
        { const a: string[] = match.braces("a", { nocase: false }); }
        { const a: string[] = match.braces("a", { nodupes: true }); }
        { const a: string[] = match.braces("a", { noext: false }); }
        { const a: string[] = match.braces("a", { noglobstar: true }); }
        { const a: string[] = match.braces("a", { nonegate: false }); }
        { const a: string[] = match.braces("a", { nonull: false }); }
        { const a: string[] = match.braces("a", { nullglob: false }); }
        { const a: string[] = match.braces("a", { snapdragon: {} }); }
        { const a: string[] = match.braces("a", { sourcemap: false }); }
        { const a: string[] = match.braces("a", { unescape: false }); }
        { const a: string[] = match.braces("a", { unixify: false }); }

        { const a: object = match.create("a"); }
        { const a: object = match.create("a", {}); }
        { const a: object = match.create("a", { basename: false }); }
        { const a: object = match.create("a", { bash: false }); }
        { const a: object = match.create("a", { cache: false }); }
        { const a: object = match.create("a", { dot: true }); }
        { const a: object = match.create("a", { failglob: false }); }
        { const a: object = match.create("a", { ignore: "a" }); }
        { const a: object = match.create("a", { ignore: ["a"] }); }
        { const a: object = match.create("a", { matchBase: false }); }
        { const a: object = match.create("a", { nobrace: true }); }
        { const a: object = match.create("a", { nocase: false }); }
        { const a: object = match.create("a", { nodupes: true }); }
        { const a: object = match.create("a", { noext: false }); }
        { const a: object = match.create("a", { noglobstar: true }); }
        { const a: object = match.create("a", { nonegate: false }); }
        { const a: object = match.create("a", { nonull: false }); }
        { const a: object = match.create("a", { nullglob: false }); }
        { const a: object = match.create("a", { snapdragon: {} }); }
        { const a: object = match.create("a", { sourcemap: false }); }
        { const a: object = match.create("a", { unescape: false }); }
        { const a: object = match.create("a", { unixify: false }); }
        { const a: object = match.create("a"); }

        { const a: object = match.parse("a", {}); }
        { const a: object = match.parse("a", { basename: false }); }
        { const a: object = match.parse("a", { bash: false }); }
        { const a: object = match.parse("a", { cache: false }); }
        { const a: object = match.parse("a", { dot: true }); }
        { const a: object = match.parse("a", { failglob: false }); }
        { const a: object = match.parse("a", { ignore: "a" }); }
        { const a: object = match.parse("a", { ignore: ["a"] }); }
        { const a: object = match.parse("a", { matchBase: false }); }
        { const a: object = match.parse("a", { nobrace: true }); }
        { const a: object = match.parse("a", { nocase: false }); }
        { const a: object = match.parse("a", { nodupes: true }); }
        { const a: object = match.parse("a", { noext: false }); }
        { const a: object = match.parse("a", { noglobstar: true }); }
        { const a: object = match.parse("a", { nonegate: false }); }
        { const a: object = match.parse("a", { nonull: false }); }
        { const a: object = match.parse("a", { nullglob: false }); }
        { const a: object = match.parse("a", { snapdragon: {} }); }
        { const a: object = match.parse("a", { sourcemap: false }); }
        { const a: object = match.parse("a", { unescape: false }); }
        { const a: object = match.parse("a", { unixify: false }); }

        { const a: object = match.compile("a", {}); }
        { const a: object = match.compile({}, {}); }
        { const a: object = match.compile("a", { basename: false }); }
        { const a: object = match.compile({}, { basename: false }); }
        { const a: object = match.compile("a", { bash: false }); }
        { const a: object = match.compile({}, { bash: false }); }
        { const a: object = match.compile("a", { cache: false }); }
        { const a: object = match.compile({}, { cache: false }); }
        { const a: object = match.compile("a", { dot: true }); }
        { const a: object = match.compile({}, { dot: true }); }
        { const a: object = match.compile("a", { failglob: false }); }
        { const a: object = match.compile({}, { failglob: false }); }
        { const a: object = match.compile("a", { ignore: "a" }); }
        { const a: object = match.compile({}, { ignore: "a" }); }
        { const a: object = match.compile("a", { ignore: ["a"] }); }
        { const a: object = match.compile({}, { ignore: ["a"] }); }
        { const a: object = match.compile("a", { matchBase: false }); }
        { const a: object = match.compile({}, { matchBase: false }); }
        { const a: object = match.compile("a", { nobrace: true }); }
        { const a: object = match.compile({}, { nobrace: true }); }
        { const a: object = match.compile("a", { nocase: false }); }
        { const a: object = match.compile({}, { nocase: false }); }
        { const a: object = match.compile("a", { nodupes: true }); }
        { const a: object = match.compile({}, { nodupes: true }); }
        { const a: object = match.compile("a", { noext: false }); }
        { const a: object = match.compile({}, { noext: false }); }
        { const a: object = match.compile("a", { noglobstar: true }); }
        { const a: object = match.compile({}, { noglobstar: true }); }
        { const a: object = match.compile("a", { nonegate: false }); }
        { const a: object = match.compile({}, { nonegate: false }); }
        { const a: object = match.compile("a", { nonull: false }); }
        { const a: object = match.compile({}, { nonull: false }); }
        { const a: object = match.compile("a", { nullglob: false }); }
        { const a: object = match.compile({}, { nullglob: false }); }
        { const a: object = match.compile("a", { snapdragon: {} }); }
        { const a: object = match.compile({}, { snapdragon: {} }); }
        { const a: object = match.compile("a", { sourcemap: false }); }
        { const a: object = match.compile({}, { sourcemap: false }); }
        { const a: object = match.compile("a", { unescape: false }); }
        { const a: object = match.compile({}, { unescape: false }); }
        { const a: object = match.compile("a", { unixify: false }); }
        { const a: object = match.compile({}, { unixify: false }); }

        { const a: number = match.MAX_LENGTH; }
        match.clearCache();
        match.resizeCache(10050);
        { const a: object = match.getCache(); }
    }

    namespace iconv {
        const {
            iconv
        } = util;

        let str: string;
        let buf: Buffer;
        let bool: boolean;

        str = iconv.decode(Buffer.from("hello"), "CP1251");
        str = iconv.decode(Buffer.from("hello"), "CP1251", {});

        buf = iconv.encode("привет", "CP1251");
        buf = iconv.encode("привет", "CP1251", {});

        bool = iconv.encodingExists("cp1251");
    }
}
