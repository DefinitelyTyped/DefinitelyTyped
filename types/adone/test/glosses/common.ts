namespace commonTests {
    namespace is {
        { const a: boolean = adone.is.null({}); }
        { const a: boolean = adone.is.undefined({}); }
        { const a: boolean = adone.is.exist({}); }
        { const a: boolean = adone.is.nil({}); }
        { const a: boolean = adone.is.number({}); }
        { const a: boolean = adone.is.numeral({}); }
        { const a: boolean = adone.is.infinite({}); }
        { const a: boolean = adone.is.odd({}); }
        { const a: boolean = adone.is.even({}); }
        { const a: boolean = adone.is.float({}); }
        { const a: boolean = adone.is.negativeZero({}); }
        { const a: boolean = adone.is.string({}); }
        { const a: boolean = adone.is.emptyString({}); }
        { const a: boolean = adone.is.substring("abc", "abcdef"); }
        { const a: boolean = adone.is.substring("abc", "abcdef", 0); }
        { const a: boolean = adone.is.prefix("abc", "abcdef"); }
        { const a: boolean = adone.is.suffix("def", "abbdef"); }
        { const a: boolean = adone.is.boolean({}); }
        { const a: boolean = adone.is.json({}); }
        { const a: boolean = adone.is.object({}); }
        { const a: boolean = adone.is.plainObject({}); }
        { const a: boolean = adone.is.class({}); }
        { const a: boolean = adone.is.emptyObject({}); }
        { const a: boolean = adone.is.propertyOwned({}, "a"); }
        { const a: boolean = adone.is.propertyDefined({}, "a"); }
        { const a: boolean = adone.is.conforms({}, {}); }
        { const a: boolean = adone.is.conforms({}, {}, true); }
        { const a: boolean = adone.is.arrayLikeObject({}); }
        { const a: boolean = adone.is.inArray(1, [1, 2, 3]); }
        { const a: boolean = adone.is.inArray(1, [1, 2, 3], 0); }
        { const a: boolean = adone.is.inArray(1, [1, 2, 3], 0, (a, b) => a === b); }
        { const a: boolean = adone.is.sameType({}, {}); }
        { const a: boolean = adone.is.primitive({}); }
        { const a: boolean = adone.is.equalArrays([], []); }
        { const a: boolean = adone.is.deepEqual({}, {}); }
        { const a: boolean = adone.is.shallowEqual({}, {}); }
        { const a: boolean = adone.is.stream({}); }
        { const a: boolean = adone.is.writableStream({}); }
        { const a: boolean = adone.is.readableStream({}); }
        { const a: boolean = adone.is.duplexStream({}); }
        { const a: boolean = adone.is.transformStream({}); }
        { const a: boolean = adone.is.utf8(Buffer.alloc(10)); }
        { const a: boolean = adone.is.win32PathAbsolute("abc"); }
        { const a: boolean = adone.is.posixPathAbsolute("abc"); }
        { const a: boolean = adone.is.pathAbsolute("abc"); }
        { const a: boolean = adone.is.glob("abc"); }
        { const a: boolean = adone.is.dotfile("abc"); }
        { const a: boolean = adone.is.function(() => { }); }
        { const a: boolean = adone.is.asyncFunction(async () => { }); }
        { const a: boolean = adone.is.promise({}); }
        { const a: boolean = adone.is.validDate("07.08.2017"); }
        { const a: boolean = adone.is.buffer({}); }
        { const a: boolean = adone.is.callback({}); }
        { const a: boolean = adone.is.generator({}); }
        { const a: boolean = adone.is.nan({}); }
        { const a: boolean = adone.is.finite({}); }
        { const a: boolean = adone.is.integer({}); }
        { const a: boolean = adone.is.safeInteger({}); }
        { const a: boolean = adone.is.array({}); }
        { const a: boolean = adone.is.uint8Array({}); }
        { const a: boolean = adone.is.configuration({}); }
        { const a: boolean = adone.is.long({}); }
        { const a: boolean = adone.is.bigNumber({}); }
        { const a: boolean = adone.is.exbuffer({}); }
        { const a: boolean = adone.is.exdate({}); }
        { const a: boolean = adone.is.transform({}); }
        { const a: boolean = adone.is.subsystem({}); }
        { const a: boolean = adone.is.application({}); }
        { const a: boolean = adone.is.logger({}); }
        { const a: boolean = adone.is.coreStream({}); }
        { const a: boolean = adone.is.fastStream({}); }
        { const a: boolean = adone.is.fastFSStream({}); }
        { const a: boolean = adone.is.fastFSMapStream({}); }
        { const a: boolean = adone.is.genesisNetron({}); }
        { const a: boolean = adone.is.genesisPeer({}); }
        { const a: boolean = adone.is.netronAdapter({}); }
        { const a: boolean = adone.is.netron({}); }
        { const a: boolean = adone.is.netronPeer({}); }
        { const a: boolean = adone.is.netronDefinition({}); }
        { const a: boolean = adone.is.netronDefinitions({}); }
        { const a: boolean = adone.is.netronReference({}); }
        { const a: boolean = adone.is.netronInterface({}); }
        { const a: boolean = adone.is.netronContext({}); }
        { const a: boolean = adone.is.netronIMethod({}, "hello"); }
        { const a: boolean = adone.is.netronIProperty({}, "hello"); }
        { const a: boolean = adone.is.netronStub({}); }
        { const a: boolean = adone.is.netronRemoteStub({}); }
        { const a: boolean = adone.is.netronStream({}); }
        { const a: boolean = adone.is.iterable({}); }
        { const a: boolean = adone.is.windows; }
        { const a: boolean = adone.is.linux; }
        { const a: boolean = adone.is.freebsd; }
        { const a: boolean = adone.is.darwin; }
        { const a: boolean = adone.is.sunos; }
        { const a: boolean = adone.is.uppercase("abc"); }
        { const a: boolean = adone.is.lowercase("abc"); }
        { const a: boolean = adone.is.digits("012"); }
        { const a: boolean = adone.is.identifier("someMethod"); }
        { const a: boolean = adone.is.binaryExtension("mp3"); }
        { const a: boolean = adone.is.binaryPath("a.mp3"); }
        { const a: boolean = adone.is.ip4("192.168.1.1"); }
        { const a: boolean = adone.is.ip6("::192.168.1.1"); }
        { const a: boolean = adone.is.arrayBuffer({}); }
        { const a: boolean = adone.is.arrayBufferView({}); }
        { const a: boolean = adone.is.date({}); }
        { const a: boolean = adone.is.error({}); }
        { const a: boolean = adone.is.map({}); }
        { const a: boolean = adone.is.regexp({}); }
        { const a: boolean = adone.is.set({}); }
        { const a: boolean = adone.is.symbol({}); }
        { const a: boolean = adone.is.validUTF8({}); }
    }

    namespace x {
        { const a: Error = new adone.x.Exception(); }
        { const a: Error = new adone.x.Exception("message"); }
        { const a: Error = new adone.x.Exception(new Error()); }
        { const a: Error = new adone.x.Exception(new Error(), true); }
        { const a: adone.x.Exception = new adone.x.Runtime(); }
        { const a: adone.x.Exception = new adone.x.IncompleteBufferError(); }
        { const a: adone.x.Exception = new adone.x.NotImplemented(); }
        { const a: adone.x.Exception = new adone.x.IllegalState(); }
        { const a: adone.x.Exception = new adone.x.NotValid(); }
        { const a: adone.x.Exception = new adone.x.Unknown(); }
        { const a: adone.x.Exception = new adone.x.NotExists(); }
        { const a: adone.x.Exception = new adone.x.Exists(); }
        { const a: adone.x.Exception = new adone.x.Empty(); }
        { const a: adone.x.Exception = new adone.x.InvalidAccess(); }
        { const a: adone.x.Exception = new adone.x.NotSupported(); }
        { const a: adone.x.Exception = new adone.x.InvalidArgument(); }
        { const a: adone.x.Exception = new adone.x.InvalidNumberOfArguments(); }
        { const a: adone.x.Exception = new adone.x.NotFound(); }
        { const a: adone.x.Exception = new adone.x.Timeout(); }
        { const a: adone.x.Exception = new adone.x.Incorrect(); }
        { const a: adone.x.Exception = new adone.x.NotAllowed(); }
        { const a: adone.x.Exception = new adone.x.LimitExceeded(); }
        { const a: adone.x.Exception = new adone.x.Encoding(); }
        { const a: adone.x.Exception = new adone.x.Network(); }
        { const a: adone.x.Exception = new adone.x.Bind(); }
        { const a: adone.x.Exception = new adone.x.Connect(); }
        { const a: adone.x.Exception = new adone.x.Database(); }
        { const a: adone.x.Exception = new adone.x.DatabaseInitialization(); }
        { const a: adone.x.Exception = new adone.x.DatabaseOpen(); }
        { const a: adone.x.Exception = new adone.x.DatabaseRead(); }
        { const a: adone.x.Exception = new adone.x.DatabaseWrite(); }
        { const a: adone.x.Exception = new adone.x.NetronIllegalState(); }
        { const a: adone.x.Exception = new adone.x.NetronPeerDisconnected(); }
        { const a: adone.x.Exception = new adone.x.NetronTimeout(); }
    }

    namespace EventEmitter {
        namespace static {
            const a: number = adone.EventEmitter.listenerCount(new adone.EventEmitter(), "event");
            const b: number = adone.EventEmitter.defaultMaxListeners;
        }

        namespace addListener {
            const a: adone.EventEmitter = new adone.EventEmitter().addListener("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().addListener(Symbol("event"), () => { });
        }

        namespace on {
            const a: adone.EventEmitter = new adone.EventEmitter().on("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().on(Symbol("event"), () => { });
        }

        namespace once {
            const a: adone.EventEmitter = new adone.EventEmitter().once("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().once(Symbol("event"), () => { });
        }

        namespace prependListener {
            const a: adone.EventEmitter = new adone.EventEmitter().prependListener("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().prependListener(Symbol("event"), () => { });
        }

        namespace prependOnceListener {
            const a: adone.EventEmitter = new adone.EventEmitter().prependOnceListener("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().prependOnceListener(Symbol("event"), () => { });
        }

        namespace prependOnceListener {
            const a: adone.EventEmitter = new adone.EventEmitter().prependOnceListener("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().prependOnceListener(Symbol("event"), () => { });
        }

        namespace removeListener {
            const a: adone.EventEmitter = new adone.EventEmitter().removeListener("event", () => { });
            const b: adone.EventEmitter = new adone.EventEmitter().removeListener(Symbol("event"), () => { });
        }

        namespace removeAllListeners {
            const a: adone.EventEmitter = new adone.EventEmitter().removeAllListeners("event");
            const b: adone.EventEmitter = new adone.EventEmitter().removeAllListeners(Symbol("event"));
        }

        namespace setMaxListeners {
            const a: adone.EventEmitter = new adone.EventEmitter().setMaxListeners(10);
        }

        namespace getMaxListeners {
            const a: number = new adone.EventEmitter().getMaxListeners();
        }

        namespace listeners {
            const a: Array<(...args: any[]) => any> = new adone.EventEmitter().listeners("event");
            const b: Array<(...args: any[]) => any> = new adone.EventEmitter().listeners(Symbol("event"));
        }

        namespace emit {
            const a: boolean = new adone.EventEmitter().emit("event", 1, 2, 3);
            const b: boolean = new adone.EventEmitter().emit(Symbol("event"), 1, 2, 3);
        }

        namespace eventNames {
            const a: Array<string | symbol> = new adone.EventEmitter().eventNames();
            const b: Array<string | symbol> = new adone.EventEmitter().eventNames();
        }

        namespace listenerCount {
            const a: number = new adone.EventEmitter().listenerCount("event");
            const b: number = new adone.EventEmitter().listenerCount(Symbol("event"));
        }
    }

    namespace AsyncEmitter {
        const a: adone.EventEmitter = new adone.AsyncEmitter();
        new adone.AsyncEmitter(10);

        namespace setConcurrency {
            const a: adone.AsyncEmitter = new adone.AsyncEmitter().setConcurrency();
            const b: adone.AsyncEmitter = new adone.AsyncEmitter().setConcurrency(10);
        }

        namespace emitParallel {
            const a: Promise<any[]> = new adone.AsyncEmitter().emitParallel("even");
            const b: Promise<any[]> = new adone.AsyncEmitter().emitParallel("even", 1, 2, 3);
        }

        namespace emitSerial {
            const a: Promise<any[]> = new adone.AsyncEmitter().emitSerial("even");
            const b: Promise<any[]> = new adone.AsyncEmitter().emitSerial("even", 1, 2, 3);
        }

        namespace emitReduce {
            const a: Promise<any[]> = new adone.AsyncEmitter().emitReduce("even");
            const b: Promise<any[]> = new adone.AsyncEmitter().emitReduce("even", 1, 2, 3);
        }

        namespace emitReduceRight {
            const a: Promise<any[]> = new adone.AsyncEmitter().emitReduceRight("even");
            const b: Promise<any[]> = new adone.AsyncEmitter().emitReduceRight("even", 1, 2, 3);
        }

        namespace subscribe {
            const a: () => void = new adone.AsyncEmitter().subscribe("event", () => { });
            const b: () => void = new adone.AsyncEmitter().subscribe("event", () => { }, true);
        }
    }

    namespace ExBuffer {
        new adone.ExBuffer();
        new adone.ExBuffer(10);
        new adone.ExBuffer(10, true);

        const buffer = new adone.ExBuffer();

        namespace readBitSet {
            const a: number[] = buffer.readBitSet();
            const b: number[] = buffer.readBitSet(10);
        }

        namespace read {
            const a: adone.ExBuffer = buffer.read(1);
            const b: adone.ExBuffer = buffer.read(1, 10);
        }

        namespace readInt8 {
            const a: number = buffer.readInt8();
            const b: number = buffer.readInt8(10);
        }

        namespace readUInt8 {
            const a: number = buffer.readUInt8();
            const b: number = buffer.readUInt8(10);
        }

        namespace readInt16LE {
            const a: number = buffer.readInt16LE();
            const b: number = buffer.readInt16LE(10);
        }

        namespace readUInt16LE {
            const a: number = buffer.readUInt16LE();
            const b: number = buffer.readUInt16LE(10);
        }

        namespace readInt16BE {
            const a: number = buffer.readInt16BE();
            const b: number = buffer.readInt16BE(10);
        }

        namespace readUInt16BE {
            const a: number = buffer.readUInt16BE();
            const b: number = buffer.readUInt16BE(10);
        }

        namespace readInt32LE {
            const a: number = buffer.readInt32LE();
            const b: number = buffer.readInt32LE(10);
        }

        namespace readUInt32LE {
            const a: number = buffer.readUInt32LE();
            const b: number = buffer.readUInt32LE(10);
        }

        namespace readInt32BE {
            const a: number = buffer.readInt32BE();
            const b: number = buffer.readInt32BE(10);
        }

        namespace readUInt32BE {
            const a: number = buffer.readUInt32BE();
            const b: number = buffer.readUInt32BE(10);
        }

        namespace readInt64LE {
            const a: adone.math.Long = buffer.readInt64LE();
            const b: adone.math.Long = buffer.readInt64LE(10);
        }

        namespace readUInt64LE {
            const a: adone.math.Long = buffer.readUInt64LE();
            const b: adone.math.Long = buffer.readUInt64LE(10);
        }

        namespace readInt64BE {
            const a: adone.math.Long = buffer.readInt64BE();
            const b: adone.math.Long = buffer.readInt64BE(10);
        }

        namespace readUInt64BE {
            const a: adone.math.Long = buffer.readUInt64BE();
            const b: adone.math.Long = buffer.readUInt64BE(10);
        }

        namespace readFloatLE {
            const a: number = buffer.readFloatLE();
            const b: number = buffer.readFloatLE(10);
        }

        namespace readFloatBE {
            const a: number = buffer.readFloatBE();
            const b: number = buffer.readFloatBE(10);
        }

        namespace readDoubleLE {
            const a: number = buffer.readDoubleLE();
            const b: number = buffer.readDoubleLE(10);
        }

        namespace readDoubleBE {
            const a: number = buffer.readDoubleBE();
            const b: number = buffer.readDoubleBE(10);
        }

        namespace write {
            const a: adone.ExBuffer = buffer.write("1");
            const b: adone.ExBuffer = buffer.write(new adone.ExBuffer());
            const c: adone.ExBuffer = buffer.write(Buffer.alloc(10));
            const d: adone.ExBuffer = buffer.write(new Uint8Array([1, 2, 3]));
            const e: adone.ExBuffer = buffer.write(new ArrayBuffer(10));
            const f: adone.ExBuffer = buffer.write("1", 10);
            const g: adone.ExBuffer = buffer.write("1", 10, 10);
            const h: adone.ExBuffer = buffer.write("1", 10, 10, "utf8");
        }

        namespace writeBitSet {
            const a: adone.ExBuffer = buffer.writeBitSet([1, 2, 3]);
            const b: number = buffer.writeBitSet([1, 2, 3], 10);
        }

        namespace writeInt8 {
            const a: adone.ExBuffer = buffer.writeInt8(10);
            const b: adone.ExBuffer = buffer.writeInt8(10, 10);
        }

        namespace writeUInt8 {
            const a: adone.ExBuffer = buffer.writeUInt8(10);
            const b: adone.ExBuffer = buffer.writeUInt8(10, 10);
        }

        namespace writeInt16LE {
            const a: adone.ExBuffer = buffer.writeInt16LE(10);
            const b: adone.ExBuffer = buffer.writeInt16LE(10, 10);
        }

        namespace writeInt16BE {
            const a: adone.ExBuffer = buffer.writeInt16BE(10);
            const b: adone.ExBuffer = buffer.writeInt16BE(10, 10);
        }

        namespace writeUInt16LE {
            const a: adone.ExBuffer = buffer.writeUInt16LE(10);
            const b: adone.ExBuffer = buffer.writeUInt16LE(10, 10);
        }

        namespace writeUInt16BE {
            const a: adone.ExBuffer = buffer.writeUInt16BE(10);
            const b: adone.ExBuffer = buffer.writeUInt16BE(10, 10);
        }

        namespace writeInt32LE {
            const a: adone.ExBuffer = buffer.writeInt32LE(10);
            const b: adone.ExBuffer = buffer.writeInt32LE(10, 10);
        }

        namespace writeInt32BE {
            const a: adone.ExBuffer = buffer.writeInt32BE(10);
            const b: adone.ExBuffer = buffer.writeInt32BE(10, 10);
        }

        namespace writeUInt32LE {
            const a: adone.ExBuffer = buffer.writeUInt32LE(10);
            const b: adone.ExBuffer = buffer.writeUInt32LE(10, 10);
        }

        namespace writeUInt32BE {
            const a: adone.ExBuffer = buffer.writeUInt32BE(10);
            const b: adone.ExBuffer = buffer.writeUInt32BE(10, 10);
        }

        namespace writeInt64LE {
            const a: adone.ExBuffer = buffer.writeInt64LE(10);
            const b: adone.ExBuffer = buffer.writeInt64LE(10, 10);
        }

        namespace writeInt64BE {
            const a: adone.ExBuffer = buffer.writeInt64BE(10);
            const b: adone.ExBuffer = buffer.writeInt64BE(10, 10);
        }

        namespace writeUInt64LE {
            const a: adone.ExBuffer = buffer.writeUInt64LE(10);
            const b: adone.ExBuffer = buffer.writeUInt64LE(10, 10);
        }

        namespace writeUInt64BE {
            const a: adone.ExBuffer = buffer.writeUInt64BE(10);
            const b: adone.ExBuffer = buffer.writeUInt64BE(10, 10);
        }

        namespace writeFloatLE {
            const a: adone.ExBuffer = buffer.writeFloatLE(10);
            const b: adone.ExBuffer = buffer.writeFloatLE(10, 10);
        }

        namespace writeFloatBE {
            const a: adone.ExBuffer = buffer.writeFloatBE(10);
            const b: adone.ExBuffer = buffer.writeFloatBE(10, 10);
        }

        namespace writeDoubleLE {
            const a: adone.ExBuffer = buffer.writeDoubleLE(10);
            const b: adone.ExBuffer = buffer.writeDoubleLE(10, 10);
        }

        namespace writeDoubleBE {
            const a: adone.ExBuffer = buffer.writeDoubleBE(10);
            const b: adone.ExBuffer = buffer.writeDoubleBE(10, 10);
        }

        namespace writeVarInt32 {
            const a: adone.ExBuffer = buffer.writeVarint32(10);
            const b: number = buffer.writeVarint32(10, 10);
        }

        namespace writeVarInt32ZigZag {
            const a: adone.ExBuffer = buffer.writeVarint32ZigZag(10);
            const b: number = buffer.writeVarint32ZigZag(10, 10);
        }

        namespace readVarint32 {
            const a: number = buffer.readVarint32();
            const b: { value: number, length: number } = buffer.readVarint32(10);
        }

        namespace readVarint32ZigZag {
            const a: number = buffer.readVarint32ZigZag();
            const b: { value: number, length: number } = buffer.readVarint32ZigZag(10);
        }

        namespace writeVarint64 {
            const a: adone.ExBuffer = buffer.writeVarint64(10);
            const b: number = buffer.writeVarint64(10, 10);
        }

        namespace writeVarint64ZigZag {
            const a: adone.ExBuffer = buffer.writeVarint64ZigZag(10);
            const b: number = buffer.writeVarint64ZigZag(10, 10);
        }

        namespace readVarint64 {
            const a: adone.math.Long = buffer.readVarint64();
            const b: { value: adone.math.Long, length: number } = buffer.readVarint64(10);
        }

        namespace readVarint64ZigZag {
            const a: adone.math.Long = buffer.readVarint64ZigZag();
            const b: { value: adone.math.Long, length: number } = buffer.readVarint64ZigZag(10);
        }

        namespace writeCString {
            const a: adone.ExBuffer = buffer.writeCString("asd");
            const b: number = buffer.writeCString("123", 10);
        }

        namespace readCString {
            const a: string = buffer.readCString();
            const b: { string: string, length: number } = buffer.readCString(10);
        }

        namespace writeString {
            const a: adone.ExBuffer = buffer.writeString("abc");
            const b: number = buffer.writeString("abc", 10);
        }

        namespace readString {
            const a: string = buffer.readString(10);
            const b: string = buffer.readString(10, "b");
            const c: string = buffer.readString(10, "c");
            const d: { string: string, length: number } = buffer.readString(10, "c", 10);
        }

        namespace writeVString {
            const a: adone.ExBuffer = buffer.writeVString("abc");
            const b: number = buffer.writeVString("abc", 10);
        }

        namespace readVString {
            const a: string = buffer.readVString();
            const b: { string: string, length: number } = buffer.readVString(10);
        }

        namespace appendTo {
            const a: adone.ExBuffer = buffer.appendTo(new adone.ExBuffer());
            const b: adone.ExBuffer = buffer.appendTo(new adone.ExBuffer(), 10);
        }

        namespace assert {
            const a: adone.ExBuffer = buffer.assert();
            const b: adone.ExBuffer = buffer.assert(true);
        }

        namespace capacity {
            const a: number = buffer.capacity();
        }

        namespace clear {
            const a: adone.ExBuffer = buffer.clear();
        }

        namespace compact {
            const a: adone.ExBuffer = buffer.compact();
            const b: adone.ExBuffer = buffer.compact(1);
            const c: adone.ExBuffer = buffer.compact(1, 10);
        }

        namespace copyTo {
            const a: adone.ExBuffer = buffer.copyTo(new adone.ExBuffer());
            const b: adone.ExBuffer = buffer.copyTo(new adone.ExBuffer(), 0);
            const c: adone.ExBuffer = buffer.copyTo(new adone.ExBuffer(), 0, 0);
            const d: adone.ExBuffer = buffer.copyTo(new adone.ExBuffer(), 0, 0, 10);
        }

        namespace ensureCapacity {
            const a: adone.ExBuffer = buffer.ensureCapacity(10);
        }

        namespace fill {
            const a: adone.ExBuffer = buffer.fill("0");
            const b: adone.ExBuffer = buffer.fill(0);
            const c: adone.ExBuffer = buffer.fill(0, 0);
            const d: adone.ExBuffer = buffer.fill(0, 0, 10);
        }

        namespace flip {
            const a: adone.ExBuffer = buffer.flip();
        }

        namespace mark {
            const a: adone.ExBuffer = buffer.mark();
            const b: adone.ExBuffer = buffer.mark(10);
        }

        namespace prepend {
            const a: adone.ExBuffer = buffer.prepend("");
            const b: adone.ExBuffer = buffer.prepend(new adone.ExBuffer());
            const c: adone.ExBuffer = buffer.prepend(Buffer.alloc(10));
            const d: adone.ExBuffer = buffer.prepend(new Uint8Array([1, 2, 3]));
            const e: adone.ExBuffer = buffer.prepend(new ArrayBuffer(10));
            const f: adone.ExBuffer = buffer.prepend("", "utf8");
            const g: adone.ExBuffer = buffer.prepend("", "utf8", 10);
            const h: adone.ExBuffer = buffer.prepend("", 10);
        }

        namespace prependTo {
            const a: adone.ExBuffer = buffer.prependTo(new adone.ExBuffer());
            const b: adone.ExBuffer = buffer.prependTo(new adone.ExBuffer(), 10);
        }

        namespace remaining {
            const a: number = buffer.remaining();
        }

        namespace reset {
            const a: adone.ExBuffer = buffer.reset();
        }

        namespace resize {
            const a: adone.ExBuffer = buffer.resize(10);
        }

        namespace reverse {
            const a: adone.ExBuffer = buffer.reverse();
            const b: adone.ExBuffer = buffer.reverse(1);
            const c: adone.ExBuffer = buffer.reverse(1, 10);
        }

        namespace skip {
            const a: adone.ExBuffer = buffer.skip(10);
        }

        namespace slice {
            const a: adone.ExBuffer = buffer.slice();
            const b: adone.ExBuffer = buffer.slice(1);
            const c: adone.ExBuffer = buffer.slice(1, 10);
        }

        namespace toBuffer {
            const a: Buffer = buffer.toBuffer();
            const b: Buffer = buffer.toBuffer(true);
            const c: Buffer = buffer.toBuffer(true, 0);
            const d: Buffer = buffer.toBuffer(true, 0, 10);
        }

        namespace toArrayBuffer {
            const a: ArrayBuffer = buffer.toArrayBuffer();
        }

        namespace toString {
            const a: string = buffer.toString();
            const b: string = buffer.toString("utf8");
            const c: string = buffer.toString("utf8", 0);
            const d: string = buffer.toString("utf8", 0, 10);
        }

        namespace toBase64 {
            const a: string = buffer.toBase64();
            const b: string = buffer.toBase64(0);
            const c: string = buffer.toBase64(0, 10);
        }

        namespace toBinary {
            const a: string = buffer.toBinary();
            const b: string = buffer.toBinary(0);
            const c: string = buffer.toBinary(0, 10);
        }

        namespace toDebug {
            const a: string = buffer.toDebug();
            const b: string = buffer.toDebug(true);
        }

        namespace toUTF8 {
            const a: string = buffer.toUTF8();
            const b: string = buffer.toUTF8(0);
            const c: string = buffer.toUTF8(0, 10);
        }

        namespace static {
            namespace accessor {
                const a: typeof Buffer = adone.ExBuffer.accessor();
            }

            namespace allocate {
                const a: adone.ExBuffer = adone.ExBuffer.allocate();
                const b: adone.ExBuffer = adone.ExBuffer.allocate(10);
                const c: adone.ExBuffer = adone.ExBuffer.allocate(10, true);
            }

            namespace concat {
                const a: adone.ExBuffer = adone.ExBuffer.concat([
                    new adone.ExBuffer(),
                    Buffer.alloc(10),
                    new Uint8Array([1, 2, 3]),
                    new ArrayBuffer(10)
                ]);
                const b: adone.ExBuffer = adone.ExBuffer.concat([
                    new adone.ExBuffer(),
                    Buffer.alloc(10),
                    new Uint8Array([1, 2, 3]),
                    new ArrayBuffer(10)
                ], "utf8");
                const c: adone.ExBuffer = adone.ExBuffer.concat([
                    new adone.ExBuffer(),
                    Buffer.alloc(10),
                    new Uint8Array([1, 2, 3]),
                    new ArrayBuffer(10)
                ], "utf8", true);
            }

            namespace type {
                const a: typeof Buffer = adone.ExBuffer.type();
            }

            namespace wrap {
                const a: adone.ExBuffer = adone.ExBuffer.wrap("");
                const b: adone.ExBuffer = adone.ExBuffer.wrap(new adone.ExBuffer());
                const c: adone.ExBuffer = adone.ExBuffer.wrap(Buffer.alloc(10));
                const d: adone.ExBuffer = adone.ExBuffer.wrap(new Uint8Array([1, 2, 3]));
                const e: adone.ExBuffer = adone.ExBuffer.wrap(new ArrayBuffer(10));
                const f: adone.ExBuffer = adone.ExBuffer.wrap("", "utf8");
                const g: adone.ExBuffer = adone.ExBuffer.wrap("", "utf8", true);
            }

            namespace calculateVarint32 {
                const a: number = adone.ExBuffer.calculateVarint32(10);
            }

            namespace zigZagEncode32 {
                const a: number = adone.ExBuffer.zigZagEncode32(10);
            }

            namespace zigZagDecode32 {
                const a: number = adone.ExBuffer.zigZagDecode32(10);
            }

            namespace calculateVarint64 {
                const a: number = adone.ExBuffer.calculateVarint64(10);
                const b: number = adone.ExBuffer.calculateVarint64("10");
            }

            namespace zigZagEncode64 {
                const a: adone.math.Long = adone.ExBuffer.zigZagEncode64(10);
                const b: adone.math.Long = adone.ExBuffer.zigZagEncode64("10");
                const c: adone.math.Long = adone.ExBuffer.zigZagEncode64(adone.math.Long.fromValue(10));
            }

            namespace zigZagDecode64 {
                const a: adone.math.Long = adone.ExBuffer.zigZagDecode64(10);
                const b: adone.math.Long = adone.ExBuffer.zigZagDecode64("10");
                const c: adone.math.Long = adone.ExBuffer.zigZagDecode64(adone.math.Long.fromValue(10));
            }

            namespace calculateUTF8Chars {
                const a: number = adone.ExBuffer.calculateUTF8Chars("123");
            }

            namespace calculateString {
                const a: number = adone.ExBuffer.calculateString("123");
            }

            namespace fromBase64 {
                const a: adone.ExBuffer = adone.ExBuffer.fromBase64("123");
            }

            namespace btoa {
                const a: string = adone.ExBuffer.btoa("123");
            }

            namespace atob {
                const a: string = adone.ExBuffer.atob("123");
            }

            namespace fromBinary {
                const a: adone.ExBuffer = adone.ExBuffer.fromBinary("123");
            }

            namespace fromDebug {
                const a: adone.ExBuffer = adone.ExBuffer.fromDebug("12");
                const b: adone.ExBuffer = adone.ExBuffer.fromDebug("12", true);
            }

            namespace fromHex {
                const a: adone.ExBuffer = adone.ExBuffer.fromHex("192");
                const b: adone.ExBuffer = adone.ExBuffer.fromHex("192", true);
            }

            namespace fromUTF8 {
                const a: adone.ExBuffer = adone.ExBuffer.fromUTF8("123");
                const b: adone.ExBuffer = adone.ExBuffer.fromUTF8("123", true);
            }

            namespace constants {
                const a: number = adone.ExBuffer.DEFAULT_CAPACITY;
                const b: boolean = adone.ExBuffer.DEFAULT_NOASSERT;
                const c: number = adone.ExBuffer.MAX_VARINT32_BYTES;
                const d: number = adone.ExBuffer.MAX_VARINT64_BYTES;
                const e: string = adone.ExBuffer.METRICS_CHARS;
                const f: string = adone.ExBuffer.METRICS_BYTES;
            }
        }
    }
}
