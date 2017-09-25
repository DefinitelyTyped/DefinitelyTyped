namespace collectionTests {
    const { collection } = adone;

    namespace linkedListTests {
        const { LinkedList } = collection;

        namespace creation {
            new LinkedList();
            new LinkedList(10);
        }

        namespace properties {
            { const a: boolean = new LinkedList().full; }
            { const a: boolean = new LinkedList().empty; }
            { const a: number = new LinkedList().maxLength; }
            { const a: number = new LinkedList().length; }
            { const a: boolean = new LinkedList().autoresize; }
        }

        namespace resize {
            { const a: boolean = new LinkedList().resize(100).full; }
        }

        namespace push {
            const a = new LinkedList<number>().push(10);
            a.next;
            a.prev;
            const b: number = a.value;
        }

        namespace pop {
            const a: number | undefined = new LinkedList<number>().pop();
        }

        namespace shift {
            const a: number | undefined = new LinkedList<number>().shift();
        }

        namespace unshift {
            const a = new LinkedList<string>().unshift("hello");
            a.next;
            a.prev;
            const b: string = a.value;
        }

        namespace pushNode {
            const a = new LinkedList<string>();
            const node = a.push("1230");
            a.pushNode(node);
        }

        namespace unshiftNode {
            const a = new LinkedList();
            const node = a.push(10);
            a.unshiftNode(node);
        }

        namespace removeNode {
            const a = new LinkedList<string>();
            const node = a.unshift("10");
            a.removeNode(node);
        }

        namespace clear {
            new LinkedList().clear();
            new LinkedList().clear(true);
        }

        namespace toArray {
            const a = new LinkedList<number>();
            const b: number[] = a.toArray();
        }

        namespace front {
            const a = new LinkedList<number>();
            const b: number = a.front;
        }

        namespace back {
            const a = new LinkedList<number>();
            const b: number = a.back;
        }

        namespace iterating {
            const a = new LinkedList<string>();
            for (const b of a) {
                const i: string = b;
            }
            const c = new LinkedList<number>();
            for (const b of c) {
                const i: number = b;
            }
        }

        namespace nextNode {
            const a = new LinkedList<string>();
            const n1 = a.push("h");
            const n2 = a.nextNode(n1);
            n1.next;
            n1.prev;
            const t: string = n1.value;
        }

        namespace map {
            const a = new LinkedList<number>();
            const f = (a: number, idx: number) => `${a}${idx}`;
            const b = a.map(f);
            const c: string = b.front;
        }

        namespace forEach {
            const a = new LinkedList<number>();

            a.forEach((a: number, b: number) => {
                const c = a + b;
            });
        }

        namespace static {
            const a: number = LinkedList.DEFAULT_LENGTH;
        }
    }

    namespace ByteArrayTests {
        const { ByteArray } = collection;

        new ByteArray();
        new ByteArray(10);
        new ByteArray(10, true);

        const buffer = new ByteArray();

        namespace readBitSet {
            const a: boolean[] = buffer.readBitSet();
            const b: boolean[] = buffer.readBitSet(10);
        }

        namespace read {
            const a: adone.collection.ByteArray = buffer.read(1);
            const b: adone.collection.ByteArray = buffer.read(1, 10);
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
            const a: adone.collection.ByteArray = buffer.write("1");
            const b: adone.collection.ByteArray = buffer.write(new ByteArray());
            const c: adone.collection.ByteArray = buffer.write(Buffer.alloc(10));
            const d: adone.collection.ByteArray = buffer.write(new Uint8Array([1, 2, 3]));
            const e: adone.collection.ByteArray = buffer.write(new ArrayBuffer(10));
            const f: adone.collection.ByteArray = buffer.write("1", 10);
            const g: adone.collection.ByteArray = buffer.write("1", 10, 10);
            const h: adone.collection.ByteArray = buffer.write("1", 10, 10, "utf8");
        }

        namespace writeBitSet {
            const a: adone.collection.ByteArray = buffer.writeBitSet([1, 2, 3]);
            const b: number = buffer.writeBitSet([1, 2, 3], 10);
        }

        namespace writeInt8 {
            const a: adone.collection.ByteArray = buffer.writeInt8(10);
            const b: adone.collection.ByteArray = buffer.writeInt8(10, 10);
        }

        namespace writeUInt8 {
            const a: adone.collection.ByteArray = buffer.writeUInt8(10);
            const b: adone.collection.ByteArray = buffer.writeUInt8(10, 10);
        }

        namespace writeInt16LE {
            const a: adone.collection.ByteArray = buffer.writeInt16LE(10);
            const b: adone.collection.ByteArray = buffer.writeInt16LE(10, 10);
        }

        namespace writeInt16BE {
            const a: adone.collection.ByteArray = buffer.writeInt16BE(10);
            const b: adone.collection.ByteArray = buffer.writeInt16BE(10, 10);
        }

        namespace writeUInt16LE {
            const a: adone.collection.ByteArray = buffer.writeUInt16LE(10);
            const b: adone.collection.ByteArray = buffer.writeUInt16LE(10, 10);
        }

        namespace writeUInt16BE {
            const a: adone.collection.ByteArray = buffer.writeUInt16BE(10);
            const b: adone.collection.ByteArray = buffer.writeUInt16BE(10, 10);
        }

        namespace writeInt32LE {
            const a: adone.collection.ByteArray = buffer.writeInt32LE(10);
            const b: adone.collection.ByteArray = buffer.writeInt32LE(10, 10);
        }

        namespace writeInt32BE {
            const a: adone.collection.ByteArray = buffer.writeInt32BE(10);
            const b: adone.collection.ByteArray = buffer.writeInt32BE(10, 10);
        }

        namespace writeUInt32LE {
            const a: adone.collection.ByteArray = buffer.writeUInt32LE(10);
            const b: adone.collection.ByteArray = buffer.writeUInt32LE(10, 10);
        }

        namespace writeUInt32BE {
            const a: adone.collection.ByteArray = buffer.writeUInt32BE(10);
            const b: adone.collection.ByteArray = buffer.writeUInt32BE(10, 10);
        }

        namespace writeInt64LE {
            const a: adone.collection.ByteArray = buffer.writeInt64LE(10);
            const b: adone.collection.ByteArray = buffer.writeInt64LE(10, 10);
        }

        namespace writeInt64BE {
            const a: adone.collection.ByteArray = buffer.writeInt64BE(10);
            const b: adone.collection.ByteArray = buffer.writeInt64BE(10, 10);
        }

        namespace writeUInt64LE {
            const a: adone.collection.ByteArray = buffer.writeUInt64LE(10);
            const b: adone.collection.ByteArray = buffer.writeUInt64LE(10, 10);
        }

        namespace writeUInt64BE {
            const a: adone.collection.ByteArray = buffer.writeUInt64BE(10);
            const b: adone.collection.ByteArray = buffer.writeUInt64BE(10, 10);
        }

        namespace writeFloatLE {
            const a: adone.collection.ByteArray = buffer.writeFloatLE(10);
            const b: adone.collection.ByteArray = buffer.writeFloatLE(10, 10);
        }

        namespace writeFloatBE {
            const a: adone.collection.ByteArray = buffer.writeFloatBE(10);
            const b: adone.collection.ByteArray = buffer.writeFloatBE(10, 10);
        }

        namespace writeDoubleLE {
            const a: adone.collection.ByteArray = buffer.writeDoubleLE(10);
            const b: adone.collection.ByteArray = buffer.writeDoubleLE(10, 10);
        }

        namespace writeDoubleBE {
            const a: adone.collection.ByteArray = buffer.writeDoubleBE(10);
            const b: adone.collection.ByteArray = buffer.writeDoubleBE(10, 10);
        }

        namespace writeVarInt32 {
            const a: adone.collection.ByteArray = buffer.writeVarint32(10);
            const b: number = buffer.writeVarint32(10, 10);
        }

        namespace writeVarInt32ZigZag {
            const a: adone.collection.ByteArray = buffer.writeVarint32ZigZag(10);
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
            const a: adone.collection.ByteArray = buffer.writeVarint64(10);
            const b: number = buffer.writeVarint64(10, 10);
        }

        namespace writeVarint64ZigZag {
            const a: adone.collection.ByteArray = buffer.writeVarint64ZigZag(10);
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
            const a: adone.collection.ByteArray = buffer.writeCString("asd");
            const b: number = buffer.writeCString("123", 10);
        }

        namespace readCString {
            const a: string = buffer.readCString();
            const b: { string: string, length: number } = buffer.readCString(10);
        }

        namespace writeString {
            const a: adone.collection.ByteArray = buffer.writeString("abc");
            const b: number = buffer.writeString("abc", 10);
        }

        namespace readString {
            const a: string = buffer.readString(10);
            const b: string = buffer.readString(10, "b");
            const c: string = buffer.readString(10, "c");
            const d: { string: string, length: number } = buffer.readString(10, "c", 10);
        }

        namespace writeVString {
            const a: adone.collection.ByteArray = buffer.writeVString("abc");
            const b: number = buffer.writeVString("abc", 10);
        }

        namespace readVString {
            const a: string = buffer.readVString();
            const b: { string: string, length: number } = buffer.readVString(10);
        }

        namespace appendTo {
            const a: adone.collection.ByteArray = buffer.appendTo(new ByteArray());
            const b: adone.collection.ByteArray = buffer.appendTo(new ByteArray(), 10);
        }

        namespace assert {
            const a: adone.collection.ByteArray = buffer.assert();
            const b: adone.collection.ByteArray = buffer.assert(true);
        }

        namespace capacity {
            const a: number = buffer.capacity();
        }

        namespace clear {
            const a: adone.collection.ByteArray = buffer.clear();
        }

        namespace copy {
            const a: adone.collection.ByteArray = buffer.clone();
            const c: adone.collection.ByteArray = buffer.clone(true);
        }

        namespace compact {
            const a: adone.collection.ByteArray = buffer.compact();
            const b: adone.collection.ByteArray = buffer.compact(1);
            const c: adone.collection.ByteArray = buffer.compact(1, 10);
        }

        namespace copyTo {
            const a: adone.collection.ByteArray = buffer.copyTo(new ByteArray());
            const b: adone.collection.ByteArray = buffer.copyTo(new ByteArray(), 0);
            const c: adone.collection.ByteArray = buffer.copyTo(new ByteArray(), 0, 0);
            const d: adone.collection.ByteArray = buffer.copyTo(new ByteArray(), 0, 0, 10);
        }

        namespace ensureCapacity {
            const a: adone.collection.ByteArray = buffer.ensureCapacity(10);
        }

        namespace fill {
            const a: adone.collection.ByteArray = buffer.fill("0");
            const b: adone.collection.ByteArray = buffer.fill(0);
            const c: adone.collection.ByteArray = buffer.fill(0, 0);
            const d: adone.collection.ByteArray = buffer.fill(0, 0, 10);
        }

        namespace flip {
            const a: adone.collection.ByteArray = buffer.flip();
        }

        namespace mark {
            const a: adone.collection.ByteArray = buffer.mark();
            const b: adone.collection.ByteArray = buffer.mark(10);
        }

        namespace prepend {
            const a: adone.collection.ByteArray = buffer.prepend("");
            const b: adone.collection.ByteArray = buffer.prepend(new ByteArray());
            const c: adone.collection.ByteArray = buffer.prepend(Buffer.alloc(10));
            const d: adone.collection.ByteArray = buffer.prepend(new Uint8Array([1, 2, 3]));
            const e: adone.collection.ByteArray = buffer.prepend(new ArrayBuffer(10));
            const f: adone.collection.ByteArray = buffer.prepend("", "utf8");
            const g: adone.collection.ByteArray = buffer.prepend("", "utf8", 10);
            const h: adone.collection.ByteArray = buffer.prepend("", 10);
        }

        namespace prependTo {
            const a: adone.collection.ByteArray = buffer.prependTo(new ByteArray());
            const b: adone.collection.ByteArray = buffer.prependTo(new ByteArray(), 10);
        }

        namespace remaining {
            const a: number = buffer.remaining();
        }

        namespace reset {
            const a: adone.collection.ByteArray = buffer.reset();
        }

        namespace resize {
            const a: adone.collection.ByteArray = buffer.resize(10);
        }

        namespace reverse {
            const a: adone.collection.ByteArray = buffer.reverse();
            const b: adone.collection.ByteArray = buffer.reverse(1);
            const c: adone.collection.ByteArray = buffer.reverse(1, 10);
        }

        namespace skip {
            const a: adone.collection.ByteArray = buffer.skip(10);
        }

        namespace slice {
            const a: adone.collection.ByteArray = buffer.slice();
            const b: adone.collection.ByteArray = buffer.slice(1);
            const c: adone.collection.ByteArray = buffer.slice(1, 10);
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
                const a: typeof Buffer = ByteArray.accessor();
            }

            namespace allocate {
                const a: adone.collection.ByteArray = ByteArray.allocate();
                const b: adone.collection.ByteArray = ByteArray.allocate(10);
                const c: adone.collection.ByteArray = ByteArray.allocate(10, true);
            }

            namespace concat {
                const a: adone.collection.ByteArray = ByteArray.concat([
                    new ByteArray(),
                    Buffer.alloc(10),
                    new Uint8Array([1, 2, 3]),
                    new ArrayBuffer(10)
                ]);
                const b: adone.collection.ByteArray = ByteArray.concat([
                    new ByteArray(),
                    Buffer.alloc(10),
                    new Uint8Array([1, 2, 3]),
                    new ArrayBuffer(10)
                ], "utf8");
                const c: adone.collection.ByteArray = ByteArray.concat([
                    new ByteArray(),
                    Buffer.alloc(10),
                    new Uint8Array([1, 2, 3]),
                    new ArrayBuffer(10)
                ], "utf8", true);
            }

            namespace type {
                const a: typeof Buffer = ByteArray.type();
            }

            namespace wrap {
                const a: adone.collection.ByteArray = ByteArray.wrap("");
                const b: adone.collection.ByteArray = ByteArray.wrap(new ByteArray());
                const c: adone.collection.ByteArray = ByteArray.wrap(Buffer.alloc(10));
                const d: adone.collection.ByteArray = ByteArray.wrap(new Uint8Array([1, 2, 3]));
                const e: adone.collection.ByteArray = ByteArray.wrap(new ArrayBuffer(10));
                const f: adone.collection.ByteArray = ByteArray.wrap("", "utf8");
                const g: adone.collection.ByteArray = ByteArray.wrap("", "utf8", true);
            }

            namespace calculateVarint32 {
                const a: number = ByteArray.calculateVarint32(10);
            }

            namespace zigZagEncode32 {
                const a: number = ByteArray.zigZagEncode32(10);
            }

            namespace zigZagDecode32 {
                const a: number = ByteArray.zigZagDecode32(10);
            }

            namespace calculateVarint64 {
                const a: number = ByteArray.calculateVarint64(10);
                const b: number = ByteArray.calculateVarint64("10");
            }

            namespace zigZagEncode64 {
                const a: adone.math.Long = ByteArray.zigZagEncode64(10);
                const b: adone.math.Long = ByteArray.zigZagEncode64("10");
                const c: adone.math.Long = ByteArray.zigZagEncode64(adone.math.Long.fromValue(10));
            }

            namespace zigZagDecode64 {
                const a: adone.math.Long = ByteArray.zigZagDecode64(10);
                const b: adone.math.Long = ByteArray.zigZagDecode64("10");
                const c: adone.math.Long = ByteArray.zigZagDecode64(adone.math.Long.fromValue(10));
            }

            namespace calculateUTF8Chars {
                const a: number = ByteArray.calculateUTF8Chars("123");
            }

            namespace calculateString {
                const a: number = ByteArray.calculateString("123");
            }

            namespace fromBase64 {
                const a: adone.collection.ByteArray = ByteArray.fromBase64("123");
            }

            namespace btoa {
                const a: string = ByteArray.btoa("123");
            }

            namespace atob {
                const a: string = ByteArray.atob("123");
            }

            namespace fromBinary {
                const a: adone.collection.ByteArray = ByteArray.fromBinary("123");
            }

            namespace fromDebug {
                const a: adone.collection.ByteArray = ByteArray.fromDebug("12");
                const b: adone.collection.ByteArray = ByteArray.fromDebug("12", true);
            }

            namespace fromHex {
                const a: adone.collection.ByteArray = ByteArray.fromHex("192");
                const b: adone.collection.ByteArray = ByteArray.fromHex("192", true);
            }

            namespace fromUTF8 {
                const a: adone.collection.ByteArray = ByteArray.fromUTF8("123");
                const b: adone.collection.ByteArray = ByteArray.fromUTF8("123", true);
            }

            namespace constants {
                const a: number = ByteArray.DEFAULT_CAPACITY;
                const b: boolean = ByteArray.DEFAULT_NOASSERT;
                const c: number = ByteArray.MAX_VARINT32_BYTES;
                const d: number = ByteArray.MAX_VARINT64_BYTES;
                const e: string = ByteArray.METRICS_CHARS;
                const f: string = ByteArray.METRICS_BYTES;
            }
        }
    }

    namespace queueTests {
        const { Queue } = collection;
        type Queue = adone.collection.Queue;

        new Queue();
        { const a: Queue = new Queue().push(123).push(123); }
        { const a: number | undefined = new Queue<number>().push(123).pop(); }
        { const a: string | undefined = new Queue<number, string>().push(123).pop(); }
        { const a: boolean = new Queue().full; }
        { const a: number = new Queue().length; }
        { const a: boolean = new Queue().empty; }
    }

    namespace asyncQueueTests {
        const { AsyncQueue } = collection;
        type AsyncQueue = adone.collection.AsyncQueue;

        { const a: AsyncQueue = new AsyncQueue().push(123); }
        { const a: Promise<number> = new AsyncQueue<number>().push(123).pop(); }
    }

    namespace priorityQueueTests {
        const { PriorityQueue } = collection;
        type PriorityQueue<T = any> = adone.collection.PriorityQueue<T>;

        { const a: boolean = new PriorityQueue().empty; }
        { const a: number = new PriorityQueue().length; }
        new PriorityQueue();
        new PriorityQueue({});
        new PriorityQueue<number>({
            compare(a: number, b: number) {
                return a - b;
            }
        });
        new PriorityQueue<string>({
            priority(a: string, b: string) {
                return a.length - b.length;
            }
        });
        { const a: PriorityQueue<string> = new PriorityQueue<string>().clone(); }
        { const a: PriorityQueue<string> = new PriorityQueue<string>().push("123"); }
        { const a: string | undefined = new PriorityQueue<string>().pop(); }
        { const a: PriorityQueue<string> = new PriorityQueue<string>().delete("123"); }
        { const a: PriorityQueue<string> = new PriorityQueue<string>().delete("123"); }
        { const a: string = new PriorityQueue<string>().replace("123"); }
        { const a: string = new PriorityQueue<string>().pushpop("123"); }
        { const a: string[] = new PriorityQueue<string>().toArray(); }
        { const a: PriorityQueue<string> = PriorityQueue.from(["1"]); }
        { const a: PriorityQueue<string> = PriorityQueue.from(["1"], {}); }
        { const a: PriorityQueue<string> = PriorityQueue.from(["1"], { compare: (a: string, b: string) => a.length - b.length }); }
        { const a: PriorityQueue<string> = PriorityQueue.from(["1"], { priority: (a: string, b: string) => a.length - b.length }); }
    }

    namespace fastlruTests {
        const { FastLRU } = collection;

        new FastLRU();
        new FastLRU(100);
        new FastLRU<string, number>(100, { dispose: (key: string, value: number) => null });
        { const a: number = new FastLRU().size; }
        { const a: number | undefined = new FastLRU<string, number>().get("key"); }
        new FastLRU<string, number>().set("key", 123);
        { const a: boolean = new FastLRU<string, number>().delete("key"); }
        { const a: boolean = new FastLRU<string, number>().has("key"); }
        { const a: string[] = [...new FastLRU<string, number>().keys()]; }
        { const a: number[] = [...new FastLRU<string, number>().values()]; }
        { const a: number[] = [...new FastLRU<string, number>().values()]; }
        { const a: Array<[string, number]> = [...new FastLRU<string, number>().entries()]; }
        new FastLRU<string, number>().clear();
    }

    namespace stackTests {
        const { Stack } = collection;
        type Stack<T = any> = adone.collection.Stack<T>;

        { const a: boolean = new Stack().empty; }
        { const a: number = new Stack<number>().top; }
        { const a: Stack<number> = new Stack<number>().push(123); }
        { const a: number | undefined = new Stack<number>().pop(); }
        { const a: number[] = [...new Stack<number>()]; }
        { const a: Stack<number> = Stack.from([1, 2, 3]); }
    }

    namespace binarySearchTreeTests {
        const { BinarySearchTree } = collection;
        type BinarySearchTree<K = any, V = any> = adone.collection.BinarySearchTree<K, V>;

        new BinarySearchTree();
        new BinarySearchTree({});
        new BinarySearchTree<string, number>({ checkValueEquality: (a: number, b: number) => a === b });
        new BinarySearchTree<string, number>({ compareKeys: (a: string, b: string) => a.length - b.length });
        new BinarySearchTree<string, number>({ parent: new BinarySearchTree<string, number>() });
        new BinarySearchTree<string, number>({ unique: true });
        new BinarySearchTree<string, number>({ value: 123 });
        { const a: BinarySearchTree<string, number> = new BinarySearchTree<string, number>().getMaxKeyDescendant(); }
        { const a: string = new BinarySearchTree<string, number>().getMaxKey(); }
        { const a: BinarySearchTree<string, number> = new BinarySearchTree<string, number>().getMinKeyDescendant(); }
        { const a: string = new BinarySearchTree<string, number>().getMinKey(); }
        new BinarySearchTree<string, number>().checkAllNodesFullfillCondition((key: string, value: number) => null);
        new BinarySearchTree<string, number>().checkIsBST();
        { const a: number = new BinarySearchTree<string, number>().getNumberOfKeys(); }
        new BinarySearchTree<string, number>().insert("asd", 123);
        { const a: number[] = new BinarySearchTree<string, number>().search("asd"); }
        { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $gt: "" }); }
        { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $lt: "" }); }
        { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $lte: "" }); }
        { const a: number[] = new BinarySearchTree<string, number>().betweenBounds({ $gte: "" }); }
        new BinarySearchTree<string, number>().delete("key");
        new BinarySearchTree<string, number>().delete("key", 123);
        new BinarySearchTree<string, number>().executeOnEveryNode((tree: BinarySearchTree<string, number>) => null);
        new BinarySearchTree<string, number>().prettyPrint();
        new BinarySearchTree<string, number>().prettyPrint(true);
        new BinarySearchTree<string, number>().prettyPrint(true, " ");
    }

    namespace avlTreeTests {
        const { AVLTree } = collection;
        type AVLTree<K = any, V = any> = adone.collection.AVLTree<K, V>;

        new AVLTree();
        new AVLTree<string, number>({ checkValueEquality: (a: number, b: number) => a === b });
        new AVLTree<string, number>({ compareKeys: (a: string, b: string) => a.length - b.length });
        new AVLTree<string, number>({ parent: new AVLTree() });
        new AVLTree<string, number>({ unique: false });
        new AVLTree<string, number>({ value: 123 });
        new AVLTree<string, number>().checkIsAVLT();
        new AVLTree<string, number>().insert("123", 123);
        new AVLTree<string, number>().delete("123");
        new AVLTree<string, number>().delete("123", 123);
        { const a: number = new AVLTree<string, number>().getNumberOFKeys(); }
        { const a: number[] = new AVLTree<string, number>().search("key"); }
        { const a: number[] = new AVLTree<string, number>().betweenBounds({}); }
        { const a: number[] = new AVLTree<string, number>().betweenBounds({ $gt: "ads" }); }
        { const a: number[] = new AVLTree<string, number>().betweenBounds({ $lt: "ads" }); }
        { const a: number[] = new AVLTree<string, number>().betweenBounds({ $gte: "ads" }); }
        { const a: number[] = new AVLTree<string, number>().betweenBounds({ $lte: "ads" }); }
        new AVLTree<string, number>().executeOnEveryNode((tree: AVLTree<string, number>) => null);
    }

    namespace redBlackTreeTests {
        const { RedBlackTree } = collection;
        type RedBlackTree<K = any, V = any> = adone.collection.RedBlackTree<K, V>;
        type RedBlackTreeIterator<K = any, V = any> = adone.collection.I.RedBlackTree.Iterator<K, V>;
        type RedBlackTreeNode<K = any, V = any> = adone.collection.I.RedBlackTree.Node<K, V>;

        new RedBlackTree();
        new RedBlackTree<string, number>((a: string, b: string) => a.length - b.length);
        new RedBlackTree<string, number>(undefined, new RedBlackTree());
        { const a: string[] = new RedBlackTree<string, number>().keys; }
        { const a: number[] = new RedBlackTree<string, number>().values; }
        { const a: number = new RedBlackTree<string, number>().length; }
        {
            const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().begin;
            { const b: boolean = a.valid; }
            { const b: RedBlackTreeNode<string, number> | null = a.node; }
            { const b: string | undefined = a.key; }
            { const b: number | undefined = a.value; }
            { const b: number = a.index; }
            { const b: boolean = a.hasNext; }
            { const b: boolean = a.hasPrev; }
            { const b: RedBlackTree<string, number> = a.tree; }
            { const b: RedBlackTreeIterator<string, number> = a.clone(); }
            { const b: RedBlackTree<string, number> = a.remove(); }
            a.next();
            { const b: RedBlackTree<string, number> = a.update(333); }
            a.prev();
        }
        { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().end; }
        { const a: RedBlackTree<string, number> = new RedBlackTree<string, number>().insert("123", 456); }
        { const a: number = new RedBlackTree<string, number>().forEach((key: string, value: number) => value); }
        { const a: number = new RedBlackTree<string, number>().forEach((key: string, value: number) => value, "1"); }
        { const a: number = new RedBlackTree<string, number>().forEach((key: string, value: number) => value, "1", "2"); }
        { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().at(1); }
        { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().ge("1"); }
        { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().gt("1"); }
        { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().lt("1"); }
        { const a: RedBlackTreeIterator<string, number> = new RedBlackTree<string, number>().le("1"); }
        { const a: RedBlackTreeIterator<string, number> | null = new RedBlackTree<string, number>().find("1"); }
        { const a: RedBlackTree<string, number> = new RedBlackTree<string, number>().remove("1"); }
        { const a: RedBlackTree<string, number> = new RedBlackTree<string, number>().remove("1"); }
        { const a: number | undefined = new RedBlackTree<string, number>().get("1"); }
    }

    namespace arraySetTests {
        const { ArraySet } = collection;
        type ArraySet<T = any> = adone.collection.ArraySet<T>;

        new ArraySet();
        { const a: number = new ArraySet().length; }
        { const a: ArraySet = new ArraySet<string>().add("hello"); }
        { const a: ArraySet = new ArraySet<string>().add("hello", true); }
        { const a: boolean = new ArraySet<string>().has("string"); }
        { const a: number = new ArraySet<string>().indexOf("hello"); }
        { const a: string[] = new ArraySet<string>().toArray(); }
        { const a: ArraySet<number> = ArraySet.from([1]); }
        { const a: ArraySet<number> = ArraySet.from([1], true); }
    }

    namespace bufferListTests {
        const { BufferList } = collection;
        type BufferList = adone.collection.BufferList;

        new BufferList();
        new BufferList(Buffer.from("123"));
        new BufferList("123");
        new BufferList(123);
        new BufferList([Buffer.from("123"), "123", 123]);
        new BufferList((err: any, data: Buffer) => null);
        new BufferList().append(Buffer.from("123"));
        new BufferList().append("123");
        new BufferList().append(123);
        new BufferList().append([Buffer.from("123"), "123", 123]);
        new BufferList().end(Buffer.from("123"));
        new BufferList().end();
        { const a: number = new BufferList().get(123); }
        { const a: Buffer = new BufferList().slice(); }
        { const a: Buffer = new BufferList().slice(1); }
        { const a: Buffer = new BufferList().slice(1, 2); }
        { const a: Buffer = new BufferList().copy(Buffer.alloc(100)); }
        { const a: Buffer = new BufferList().copy(Buffer.alloc(100), 0); }
        { const a: Buffer = new BufferList().copy(Buffer.alloc(100), 0, 1); }
        { const a: Buffer = new BufferList().copy(Buffer.alloc(100), 0, 1, 2); }
        { const a: BufferList = new BufferList().shallowSlice(); }
        { const a: BufferList = new BufferList().shallowSlice(1); }
        { const a: BufferList = new BufferList().shallowSlice(1, 2); }
        { const a: string = new BufferList().toString(); }
        { const a: string = new BufferList().toString("utf8"); }
        { const a: string = new BufferList().toString("utf8", 1); }
        { const a: string = new BufferList().toString("utf8", 1, 2); }
        { const a: BufferList = new BufferList().consume(10); }
        { const a: BufferList = new BufferList().duplicate(); }
        new BufferList().destroy();
        new BufferList().then((x: Buffer) => null);
        new BufferList().catch((err: any) => null);
    }

    namespace defaultMapTests {
        const { DefaultMap } = collection;
        type DefaultMap<K = any, V = any> = adone.collection.DefaultMap<K, V>;

        new DefaultMap();
        { const a: DefaultMap<string, number> = new DefaultMap(undefined, [["1", 2]]); }
        { const a: DefaultMap<string, number> = new DefaultMap((key: string) => 123); }
        { const a: DefaultMap<string, number> = new DefaultMap({ a: 123 }); }
    }

    namespace lruTests {
        const { LRU } = collection;
        type LRU = adone.collection.LRU;

        new LRU();
        new LRU(100);
        new LRU({});
        new LRU({ max: 100 });
        new LRU<string, number>({ dispose: (key: string, value: number) => null });
        new LRU<string, number>({ maxAge: 100 });
        new LRU<string, number>({ noDisposeOnSet: false });
        new LRU<string, number>({ stale: true });
        { const a: number = new LRU<string, number>().max; }
        { new LRU<string, number>().max = 100; }
        { const a: boolean = new LRU<string, number>().allowStale; }
        { new LRU<string, number>().allowStale = false; }
        { const a: number = new LRU<string, number>().maxAge; }
        { new LRU<string, number>().maxAge = 100; }
        { const a: (v: number, k: string) => number = new LRU<string, number>().lengthCalculator; }
        { new LRU<string, number>().lengthCalculator = () => 123; }
        { const a: number = new LRU<string, number>().length; }
        { const a: number = new LRU<string, number>().itemCount; }
        new LRU<string, number>().rforEach((value: number, key: string) => null);
        new LRU<string, number>().rforEach(function (value: number, key: string) {
            const b: number = this.a;
        }, { a: 1 });
        new LRU<string, number>().forEach((value: number, key: string) => null);
        new LRU<string, number>().forEach(function (value: number, key: string) {
            const b: number = this.a;
        }, { a: 1 });
        { const a: string[] = new LRU<string, number>().keys(); }
        { const a: number[] = new LRU<string, number>().values(); }
        new LRU<string, number>().reset();
        {
            const a: Array<adone.collection.I.LRU.SerializedEntry<string, number>> = new LRU<string, number>().dump();
            const [b] = a;
            { const c: number = b.e; }
            { const c: string = b.key; }
            { const c: number = b.value; }
        }
        {
            const a: adone.collection.LinkedList<adone.collection.I.LRU.Entry<string, number>> = new LRU<string, number>().dumpLru();
            const b = a.shift();
            if (b !== undefined) {
                { const a: string = b.key; }
                { const a: number = b.value; }
                { const a: number = b.now; }
                { const a: number = b.maxAge; }
            }
        }
        { const a: string = new LRU<string, number>().inspect(); }
        { const a: string = new LRU<string, number>().inspect({}); }
        { const a: boolean = new LRU<string, number>().set("asd", 13); }
        { const a: boolean = new LRU<string, number>().set("asd", 13, 100500); }
        { const a: boolean = new LRU<string, number>().has("asd"); }
        { const a: number | undefined = new LRU<string, number>().get("asd"); }
        { const a: number | undefined = new LRU<string, number>().peek("asd"); }
        { const a: adone.collection.I.LRU.Entry<string, number> = new LRU<string, number>().pop(); }
        new LRU<string, number>().del("asd");
        new LRU<string, number>().load(new LRU<string, number>().dump());
        new LRU<string, number>().prune();
    }

    namespace timedoutMapTests {
        const { TimedoutMap } = collection;
        type TimedoutMap<K = any, V = any> = adone.collection.TimedoutMap<K, V>;

        new TimedoutMap();
        new TimedoutMap(1000);
        new TimedoutMap<string, number>(1000, (key: string) => null);
        {
            const a: TimedoutMap<string, number> = new TimedoutMap<string, number>().forEach((value: number, key: string) => null);
        }
        {
            const a: TimedoutMap<string, number> = new TimedoutMap<string, number>().forEach(function (value: number, key: string) {
                const a: number = this.a;
            }, { a: 1 });
        }
        { const a: boolean = new TimedoutMap<string, number>().delete("123"); }
    }
}
