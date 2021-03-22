import { Readable, Writable } from 'stream';

{
    const x: NodeModule = {} as any;
    const y: NodeModule = {} as any;
    x.children.push(y);
    x.parent = require.main!;
    require.main = y;
    x.path; // $ExpectType string
}

{
    // const a = new TextEncoder();
}

{
    queueMicrotask(() => {
        // cool
    });
}

{
    const a = new Readable();
    a.unshift('something', 'utf8');
}

{
    const a = Readable.from(['test'], {
        objectMode: true,
    });
}

const a: NodeJS.TypedArray = new Buffer(123);

{
    let writableFinished: boolean;
    const readable: Readable = new Readable({
        read() {
            this.push('hello');
            this.push('world');
            this.push(null);
        },
    });
    readable.destroyed;
    const writable: Writable = new Writable({
        write(chunk, _, cb) {
            cb();
        },
    });
    readable.pipe(writable);
    writableFinished = writable.writableFinished;
    writable.destroyed;
}

{
  const obj = {
    valueOf() {
      return 'hello';
    }
  };
  Buffer.from(obj);
}

const buff = Buffer.from("Hello World!");

// reads

buff.readInt8();
buff.readInt8(0);
buff.readUInt8();
buff.readUInt8(0);
buff.readUInt16BE();
buff.readUInt16BE(0);
buff.readUInt32LE();
buff.readUInt32LE(0);
buff.readUInt32BE();
buff.readUInt32BE(0);
buff.readInt8();
buff.readInt8(0);
buff.readInt16LE();
buff.readInt16LE(0);
buff.readInt16BE();
buff.readInt16BE(0);
buff.readInt32LE();
buff.readInt32LE(0);
buff.readInt32BE();
buff.readInt32BE(0);
buff.readFloatLE();
buff.readFloatLE(0);
buff.readFloatBE();
buff.readFloatBE(0);
buff.readDoubleLE();
buff.readDoubleBE(0);

// writes

buff.writeInt8(0xab);
buff.writeInt8(0xab, 0);
buff.writeUInt8(0xab);
buff.writeUInt8(0xab, 0);
buff.writeUInt16LE(0xabcd);
buff.writeUInt16LE(0xabcd, 0);
buff.writeUInt16BE(0xabcd);
buff.writeUInt16BE(0xabcd, 0);
buff.writeUInt32LE(0xabcd);
buff.writeUInt32LE(0xabcd, 0);
buff.writeUInt32BE(0xabcd);
buff.writeUInt32BE(0xabcd, 0);
buff.writeInt16LE(0xabcd);
buff.writeInt16LE(0xabcd, 0);
buff.writeInt16BE(0xabcd);
buff.writeInt16BE(0xabcd, 0);
buff.writeInt32LE(0xabcd);
buff.writeInt32LE(0xabcd, 0);
buff.writeInt32BE(0xabcd);
buff.writeInt32BE(0xabcd, 0);
buff.writeFloatLE(0xabcd);
buff.writeFloatLE(0xabcd, 0);
buff.writeFloatBE(0xabcd);
buff.writeFloatBE(0xabcd, 0);
buff.writeDoubleLE(123.123);
buff.writeDoubleLE(123.123, 0);
buff.writeDoubleBE(123.123);
buff.writeDoubleBE(123.123, 0);
