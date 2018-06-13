namespace adoneTests.collection.ByteArray {
    const {
        collection: {
            ByteArray
        }
    } = adone;

    new ByteArray();
    new ByteArray(10);
    new ByteArray(10, true);

    const buffer = new ByteArray();

    buffer.woffset === 2;
    buffer.roffset === 3;
    buffer.noAssert === true;
    buffer.buffer.writeUInt8(0, 0);

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

    namespace readUInt24BE {
        const a: number = buffer.readUInt24BE();
        const b: number = buffer.readUInt24BE(10);
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

    namespace writeUInt24BE {
        const a: adone.collection.ByteArray = buffer.writeUInt24BE(10);
        const b: adone.collection.ByteArray = buffer.writeUInt24BE(10, 10);
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
