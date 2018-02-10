namespace isTests {
    const {
        is
    } = adone;
    {
        const a: boolean = is.null({});
        const b: any = 2;
        if (is.null(b)) {
            const c: null = b;
        }
    }
    {
        const a: boolean = is.undefined({});
        const b: any = 2;
        if (is.undefined(b)) {
            const c: undefined = b;
        }
    }
    { const a: boolean = is.exist({}); }
    {
        const a: boolean = is.nil({});
        const b: any = 2;
        if (is.nil(b)) {
            const c: null | undefined = b;
        }
    }
    {
        const a: boolean = is.number({});
        const b: any = 2;
        if (is.number(b)) {
            b.toExponential();
        }
    }
    {
        const a: boolean = is.numeral({});
        const b: any = 2;
        if (is.numeral(b)) {
            const c: string | number = b;
        }
    }
    {
        const a: boolean = is.infinite({});
        const b: any = 2;
        if (is.infinite(b)) {
            b.toPrecision();
        }
    }
    {
        const a: boolean = is.odd({});
        const b: any = 2;
        if (is.odd(b)) {
            b.toFixed(2);
        }
    }
    {
        const a: boolean = is.even({});
        const b: any = 2;
        if (is.even(b)) {
            b.toFixed(2);
        }
    }
    {
        const a: boolean = is.float({});
        const b: any = 2;
        if (is.float(b)) {
            b.toFixed();
        }
    }
    {
        const a: boolean = is.negativeZero({});
        const b: any = 2;
        if (is.negativeZero(b)) {
            b.toFixed();
        }
    }
    {
        const a: boolean = is.string({});
        const b: any = 2;
        if (is.string(b)) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.emptyString({});
        const b: any = 2;
        if (is.emptyString(b)) {
            b.charCodeAt(0);
        }
    }
    { const a: boolean = is.substring("abc", "abcdef"); }
    { const a: boolean = is.substring("abc", "abcdef", 0); }
    { const a: boolean = is.prefix("abc", "abcdef"); }
    { const a: boolean = is.suffix("def", "abbdef"); }
    {
        const a: boolean = is.boolean({});
        const b: any = 2;
        if (is.boolean(b)) {
            b === true;
        }
    }
    { const a: boolean = is.json({}); }
    { const a: boolean = is.object({}); }
    { const a: boolean = is.plainObject({}); }
    { const a: boolean = is.class({}); }
    { const a: boolean = is.emptyObject({}); }
    { const a: boolean = is.propertyOwned({}, "a"); }
    { const a: boolean = is.propertyDefined({}, "a"); }
    { const a: boolean = is.conforms({}, {}); }
    { const a: boolean = is.conforms({}, {}, true); }
    { const a: boolean = is.arrayLikeObject({}); }
    { const a: boolean = is.inArray(1, [1, 2, 3]); }
    { const a: boolean = is.inArray(1, [1, 2, 3], 0); }
    { const a: boolean = is.inArray(1, [1, 2, 3], 0, (a, b) => a === b); }
    { const a: boolean = is.sameType({}, {}); }
    { const a: boolean = is.primitive({}); }
    { const a: boolean = is.equalArrays([], []); }
    { const a: boolean = is.deepEqual({}, {}); }
    { const a: boolean = is.shallowEqual({}, {}); }
    { const a: boolean = is.stream({}); }
    { const a: boolean = is.writableStream({}); }
    { const a: boolean = is.readableStream({}); }
    { const a: boolean = is.duplexStream({}); }
    { const a: boolean = is.transformStream({}); }
    { const a: boolean = is.utf8(Buffer.alloc(10)); }
    { const a: boolean = is.win32PathAbsolute("abc"); }
    { const a: boolean = is.posixPathAbsolute("abc"); }
    { const a: boolean = is.pathAbsolute("abc"); }
    {
        const a: boolean = is.glob("abc");
        const b: any = 2;
        if (is.glob(b)) {
            b.charCodeAt(0);
        }
    }
    { const a: boolean = is.dotfile("abc"); }
    {
        const a: boolean = is.function(() => { });
        const b: any = 2;
        if (is.function(b)) {
            b();
        }
    }
    {
        const a: boolean = is.asyncFunction(async () => { });
        const b: any = 2;
        if (is.asyncFunction(b)) {
            b().then(() => {});
        }
    }
    {
        const a: boolean = is.promise({});
        const b: any = 2;
        if (is.promise(b)) {
            b.then(() => {});
        }
        const c = Promise.resolve(2);
        if (is.promise(c)) {
            c.then((x) => x.toFixed(2));
        }
    }
    { const a: boolean = is.validDate("07.08.2017"); }
    {
        const a: boolean = is.buffer({});
        const b: any = 2;
        if (is.buffer(b)) {
            b.writeDoubleBE(10, 10);
        }
    }
    { const a: boolean = is.callback({}); }
    { const a: boolean = is.generator({}); }
    { const a: boolean = is.nan({}); }
    {
        const a: boolean = is.finite({});
        const b: any = 2;
        if (is.finite(b)) {
            b.toFixed();
        }
    }
    {
        const a: boolean = is.integer({});
        const b: any = 2;
        if (is.integer(b)) {
            b.toFixed();
        }
    }
    {
        const a: boolean = is.safeInteger({});
        const b: any = 2;
        if (is.safeInteger(b)) {
            b.toFixed();
        }
    }
    {
        const a: boolean = is.array({});
        const b: any = 2;
        if (is.array(b)) {
            b.length + b[0];
        }
        const c = [1, 2, 3];
        if (is.array(c)) {
            c[0].toFixed(0);
        }
    }
    {
        const a: boolean = is.uint8Array({});
        const b: any = 2;
        if (is.uint8Array(b)) {
            b.copyWithin(1, 2);
        }
    }
    { const a: boolean = is.configuration({}); }
    {
        const a: boolean = is.long({});
        const b: any = 2;
        if (is.long(b)) {
            b.getHighBitsUnsigned();
        }
    }
    {
        const a: boolean = is.bigNumber({});
        const b: any = 2;
        if (is.bigNumber(b)) {
            b.add(b).isBitSet(10);
        }
    }
    {
        const a: boolean = is.byteArray({});
        const b: any = 2;
        if (is.byteArray(b)) {
            b.toBuffer();
        }
    }
    {
        const a: boolean = is.datetime({});
        const b: any = 2;
        if (is.datetime(b)) {
            b.add(2, "hours");
        }
    }
    { const a: boolean = is.transform({}); }
    { const a: boolean = is.subsystem({}); }
    { const a: boolean = is.application({}); }
    { const a: boolean = is.logger({}); }
    { const a: boolean = is.coreStream({}); }
    { const a: boolean = is.fastStream({}); }
    { const a: boolean = is.fastLocalStream({}); }
    { const a: boolean = is.fastLocalMapStream({}); }
    { const a: boolean = is.genesisNetron({}); }
    { const a: boolean = is.genesisPeer({}); }
    { const a: boolean = is.netronAdapter({}); }
    { const a: boolean = is.netron({}); }
    { const a: boolean = is.netronPeer({}); }
    { const a: boolean = is.netronDefinition({}); }
    { const a: boolean = is.netronDefinitions({}); }
    { const a: boolean = is.netronReference({}); }
    { const a: boolean = is.netronInterface({}); }
    { const a: boolean = is.netronContext({}); }
    { const a: boolean = is.netronIMethod({}, "hello"); }
    { const a: boolean = is.netronIProperty({}, "hello"); }
    { const a: boolean = is.netronStub({}); }
    { const a: boolean = is.netronRemoteStub({}); }
    { const a: boolean = is.netronStream({}); }
    { const a: boolean = is.iterable({}); }
    { const a: boolean = is.windows; }
    { const a: boolean = is.linux; }
    { const a: boolean = is.freebsd; }
    { const a: boolean = is.darwin; }
    { const a: boolean = is.sunos; }
    { const a: boolean = is.uppercase("abc"); }
    { const a: boolean = is.lowercase("abc"); }
    { const a: boolean = is.digits("012"); }
    { const a: boolean = is.identifier("someMethod"); }
    { const a: boolean = is.binaryExtension("mp3"); }
    { const a: boolean = is.binaryPath("a.mp3"); }
    { const a: boolean = is.ip4("192.168.1.1"); }
    { const a: boolean = is.ip6("::192.168.1.1"); }
    {
        const a: boolean = is.arrayBuffer({});
        const b: any = 2;
        if (is.arrayBuffer(b)) {
            b.slice(10);
        }
    }
    {
        const a: boolean = is.arrayBufferView({});
        const b: any = 2;
        if (is.arrayBufferView(b)) {
            b.byteLength + b.byteOffset;
        }
    }
    {
        const a: boolean = is.date({});
        const b: any = 2;
        if (is.date(b)) {
            b.getMonth() + b.getDate();
        }
    }
    { const a: boolean = is.error({}); }
    {
        const a: boolean = is.map({});
        const b: any = 2;
        if (is.map(b)) {
            b.has("asd");
            b.set(1, 2);
            b.set("1", 2);
        }
    }
    {
        const a: boolean = is.regexp({});
        const b: any = 2;
        if (is.regexp(b)) {
            b.test("hello");
        }
    }
    {
        const a: boolean = is.set({});
        const b: any = 2;
        if (is.set(b)) {
            b.add("h");
            b.has(1);
        }
    }
    { const a: boolean = is.symbol({}); }
    { const a: boolean = is.vaultValuable({}); }
    { const a: boolean = is.task({}); }
    {
        const a: boolean = is.fqdn(1);
        const b: any = 2;
        if (is.fqdn(b)) {
            b.charCodeAt(0);
        }
        if (is.fqdn(b, {})) {
            b.charCodeAt(0);
        }
        is.fqdn(1, {
            allowTrailingDot: false
        });
        is.fqdn(1, {
            allowUnderscores: false
        });
        is.fqdn(1, {
            requireTld: true
        });
    }
    {
        const a: boolean = is.email(1);
        const b: any = 2;
        if (is.email(b)) {
            b.charCodeAt(0);
        }
        if (is.email(b, {})) {
            b.charCodeAt(0);
        }
        is.email(1, {
            allowDisplayName: false
        });
        is.email(1, {
            allowUtf8LocalPart: false
        });
        is.email(1, {
            requireDisplayName: false
        });
        is.email(1, {
            requireTld: false
        });
    }
    {
        const a: boolean = is.uuid(2);
        const b: any = 2;
        if (is.uuid(b)) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, "all");
        const b: any = 2;
        if (is.uuid(b, "all")) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, "all");
        const b: any = 2;
        if (is.uuid(b, "all")) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, 1);
        const b: any = 2;
        if (is.uuid(b, 1)) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, 2);
        const b: any = 2;
        if (is.uuid(b, 2)) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, 3);
        const b: any = 2;
        if (is.uuid(b, 2)) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, 4);
        const b: any = 2;
        if (is.uuid(b, 2)) {
            b.charCodeAt(0);
        }
    }
    {
        const a: boolean = is.uuid(2, 5);
        const b: any = 2;
        if (is.uuid(b, 2)) {
            b.charCodeAt(0);
        }
    }
}
