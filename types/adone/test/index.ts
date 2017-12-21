namespace AdoneRootTests {
    { const a: symbol = adone.null; }
    adone.noop();
    { const a: number = adone.identity(2); }
    { const a: string = adone.identity("2"); }
    { const a: number[] = adone.identity([1, 2]); }
    { adone.truly() === true; }
    { adone.falsely() === false; }
    { const a: string = adone.ok; }
    { const a: string = adone.bad; }
    { const a: string[] = adone.exts; }
    adone.log();
    adone.fatal();
    adone.error();
    adone.warn();
    adone.info();
    adone.debug();
    adone.trace();
    { const a: object = adone.o(); }
    { const a: object = adone.o({}); }
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
    { const a: boolean = adone.tag.has({}, "123"); }
    adone.tag.define("12");
    adone.tag.define("123", "456");
    { const a: symbol = adone.tag.SUBSYSTEM; }
    { const a: symbol = adone.tag.APPLICATION; }
    { const a: symbol = adone.tag.TRANSFORM; }
    { const a: symbol = adone.tag.CORE_STREAM; }
    { const a: symbol = adone.tag.LOGGER; }
    { const a: symbol = adone.tag.LONG; }
    { const a: symbol = adone.tag.BIGNUMBER; }
    { const a: symbol = adone.tag.EXBUFFER; }
    { const a: symbol = adone.tag.EXDATE; }
    { const a: symbol = adone.tag.CONFIGURATION; }
    { const a: symbol = adone.tag.GENESIS_NETRON; }
    { const a: symbol = adone.tag.GENESIS_PEER; }
    { const a: symbol = adone.tag.NETRON; }
    { const a: symbol = adone.tag.NETRON_PEER; }
    { const a: symbol = adone.tag.NETRON_ADAPTER; }
    { const a: symbol = adone.tag.NETRON_DEFINITION; }
    { const a: symbol = adone.tag.NETRON_DEFINITIONS; }
    { const a: symbol = adone.tag.NETRON_REFERENCE; }
    { const a: symbol = adone.tag.NETRON_INTERFACE; }
    { const a: symbol = adone.tag.NETRON_STUB; }
    { const a: symbol = adone.tag.NETRON_REMOTESTUB; }
    { const a: symbol = adone.tag.NETRON_STREAM; }
    { const a: symbol = adone.tag.FAST_STREAM; }
    { const a: symbol = adone.tag.FAST_FS_STREAM; }
    { const a: symbol = adone.tag.FAST_FS_MAP_STREAM; }
    { const a: object = adone.bind("library"); } // hmm
    { const a: string = adone.getAssetAbsolutePath("asset"); }
    { const a: Buffer | string = adone.loadAsset("asset"); }
    { const a: object = adone.require("path"); }
    { const a: object = adone.package; }
    { const a: typeof adone.assertion.assert = adone.assert; }
    { const a: typeof adone.assertion.expect = adone.expect; }
}
