namespace AdoneRootTests {
    let num: number;
    let sym: symbol;
    let str: string;
    let numarr: number[];
    let obj: object;
    let bool: boolean;

    sym = adone.null;
    adone.noop();

    num = adone.identity(2);
    str = adone.identity("3");
    numarr = adone.identity([1, 2]);

    adone.truly() === true;
    adone.falsely() === false;

    str = adone.ok;
    str = adone.bad;
    adone.log();
    adone.logFatal();
    adone.logError();
    adone.logWarn();
    adone.logInfo();
    adone.logDebug();
    adone.logTrace();
    obj = adone.o();
    obj = adone.o({});
    { const a: typeof Date = adone.Date; }
    { const a: typeof process.hrtime = adone.hrtime; }
    { const a: typeof global.setTimeout = adone.setTimeout; }
    { const a: typeof clearTimeout = adone.clearTimeout; }
    { const a: typeof setInterval = adone.setInterval; }
    { const a: typeof clearInterval = adone.clearInterval; }
    { const a: typeof global.setImmediate = adone.setImmediate; }
    { const a: typeof clearImmediate = adone.clearImmediate; }

    adone.lazify({});
    adone.lazify({}, {});
    adone.lazify({}, {}, () => { });
    adone.lazify({}, {}, () => { }, {});
    adone.lazify({}, {}, () => { }, { configurable: true });
    adone.lazify({}, {}, () => { }, { writable: false });
    adone.lazify({}, {}, () => { }, { mapper: (key: string, obj: any) => null });

    adone.tag.set({}, "123");
    bool = adone.tag.has({}, "123");
    adone.tag.define("12");
    adone.tag.define("123", "456");
    str = adone.getAssetAbsolutePath("asset");
    { const a: Buffer | string = adone.loadAsset("asset"); }
    obj = adone.require("path");
    obj = adone.package;
    { const a: typeof adone.assertion.assert = adone.assert; }
    { const a: typeof adone.assertion.expect = adone.expect; }

    namespace lodashTests {
        adone.lodash.get({}, "a");
        adone.lodash.defaults({}, {});
        adone.lodash.zip([]);
    }

    namespace benchmarkTests {
        const b = new adone.benchmark.Benchmark.Suite();
        b.add(() => {}).add("", () => {}).run();
    }

    namespace asyncTests {
        adone.async.all([], () => {});
        adone.async.forEach([], () => {});
    }
}
