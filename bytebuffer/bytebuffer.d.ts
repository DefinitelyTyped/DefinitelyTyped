// Type definitions for ByteBuffer.js 2.3.1
// Project: https://github.com/dcodeIO/ByteBuffer.js
// Definitions by: Toshihide Hara <https://github.com/kerug/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../long/long.d.ts" />
/// <reference path="../node/node.d.ts" />

declare module dcodeIO {

    interface ByteBufferStatic {

        new(capacity?:number, littleEndian?:boolean):ByteBuffer;

        BIG_ENDIAN:boolean;
        DEFAULT_CAPACITY:number;
        LITTLE_ENDIAN:boolean;
        Long?:Long;
        MAX_VARINT32_BYTES:number;
        MAX_VARINT64_BYTES:number;
        VERSION:string;

        allocate(capacity?:number, littleEndian?:number):ByteBuffer;

        calculateUTF8Char(charCode:number):number;

        calculateUTF8String(str:string):number;

        calculateVarint32(value:number):number;

        calculateVarint64(value:number):number;

        calculateVarint64(value:Long):number;

        decode64(str:string, littleEndian?:boolean):ByteBuffer;

        decodeHex(str:string, littleEndian?:boolean):ByteBuffer;

        decodeUTF8Char(str:ByteBuffer, offset:number):{char:number; length:number};

        encode64(bb:ByteBuffer):string;

        encodeUTF8Char(charCode:number, dst:ByteBuffer, offset:number):number;

        wrap(buffer:ArrayBuffer, enc?:string, littleEndian?:boolean):ByteBuffer;

        wrap(buffer:Buffer, enc?:string, littleEndian?:boolean):ByteBuffer;

        wrap(buffer:{array:ArrayBuffer}, enc?:string, littleEndian?:boolean):ByteBuffer;

        wrap(buffer:{buffer:ArrayBuffer}, enc?:string, littleEndian?:boolean):ByteBuffer;

        wrap(buffer:string, enc?:string, littleEndian?:boolean):ByteBuffer;

        zigZagDecode32(n:number):number;

        zigZagDecode64(n:number):Long;

        zigZagDecode64(n:Long):Long;

        zigZagEncode32(n:number):number;

        zigZagEncode64(n:number):Long;

        zigZagEncode64(n:Long):Long;
    }

    interface ByteBuffer {

        array:ArrayBuffer;
        length:number;
        littleEndian:boolean;
        markedOffset:number;
        offset:number;
        view:DataView;

        append(src:any, offset?:number):ByteBuffer;

        BE(bigEndian?:boolean):ByteBuffer;

        capacity():number;

        clone():ByteBuffer;

        compact():ByteBuffer;

        copy():ByteBuffer;

        destroy():ByteBuffer;

        ensureCapacity(capacity:number):ByteBuffer;

        flip():ByteBuffer;

        LE(littleEndian?:boolean):ByteBuffer;

        mark(offset?:number):ByteBuffer;

        prepend(src:any, offset?:number):ByteBuffer;

        printDebug(out?:(str:string)=>void):void;

        readByte(offset?:number):number;

        readCString():string;

        readCString(offset:number):{string:string;length:number};

        readDouble(offset?:number):number;

        readFloat(offset?:number):number;

        readFloat32(offset?:number):number;

        readFloat64(offset?:number):number;

        readInt(offset?:number):number;

        readInt8(offset?:number):number;

        readInt16(offset?:number):number;

        readInt32(offset?:number):number;

        readInt64(offset?:number):Long;

        readJSON(offset?:number, parse?:(str:string)=>void):any;

        readLong(offset?:number):Long;

        readLString():string;

        readLString(offset:number):{string:string;length:number};

        readShort(offset?:number):number;

        readUint8(offset?:number):number;

        readUint16(offset?:number):number;

        readUint32(offset?:number):number;

        readUint64(offset?:number):Long;

        readUTF8String(chars:number):string;

        readUTF8String(chars:number, offset:number):{string:string;length:number};

        readUTF8StringBytes(length:number):string;

        readUTF8StringBytes(length:number, offset:number):{string:string;length:number};

        readVarint():number;

        readVarint(offset:number):{value:number;length:number};

        readVarint32():number;

        readVarint32(offset:number):{value:number;length:number};

        readVarint64():Long;

        readVarint64(offset:number):{value:Long;length:number};

        readVString():string;

        readVString(offset:number):{string:string;length:number};

        readZigZagVarint():number;

        readZigZagVarint(offset:number):{value:number;length:number};

        readZigZagVarint32():number;

        readZigZagVarint32(offset:number):{value:number;length:number};

        readZigZagVarint64():Long;

        readZigZagVarint64(offset:number):{value:Long;length:number};

        remaining():number;

        reset():ByteBuffer;

        resize(capacity:number):ByteBuffer;

        reverse():ByteBuffer;

        slice(begin?:number, end?:number):ByteBuffer;

        toArrayBuffer(forceCopy?:boolean):ArrayBuffer;

        toBase64():string;

        toBuffer():Buffer;

        toColumns(wrap?:number):string;

        toHex(debug?:boolean):string;

        toString(enc?:string):string;

        toUTF8():string;

        writeByte(value:number, offset?:number):ByteBuffer;

        writeCString(str:string):ByteBuffer;

        writeCString(str:string, offset:number):number;

        writeDouble(value:number, offset?:number):ByteBuffer;

        writeFloat(value:number, offset?:number):ByteBuffer;

        writeFloat32(value:number, offset?:number):ByteBuffer;

        writeFloat64(value:number, offset?:number):ByteBuffer;

        writeInt(value:number, offset?:number):ByteBuffer;

        writeInt8(value:number, offset?:number):ByteBuffer;

        writeInt16(value:number, offset?:number):ByteBuffer;

        writeInt32(value:number, offset?:number):ByteBuffer;

        writeInt64(value:number, offset?:number):ByteBuffer;

        writeInt64(value:Long, offset?:number):ByteBuffer;

        writeJSON(data:any, stringify?:any):ByteBuffer;

        writeJSON(data:any, offset:number, stringify?:any):number;

        writeLong(value:number, offset?:number):ByteBuffer;

        writeLong(value:Long, offset?:number):ByteBuffer;

        writeLString(str:string):ByteBuffer;

        writeLString(str:string, offset:number):number;

        writeShort(value:number, offset?:number):ByteBuffer;

        writeUint8(value:number, offset?:number):ByteBuffer;

        writeUint16(value:number, offset?:number):ByteBuffer;

        writeUint32(value:number, offset?:number):ByteBuffer;

        writeUint64(value:number, offset?:number):ByteBuffer;

        writeUint64(value:Long, offset?:number):ByteBuffer;

        writeUTF8String(str:string):ByteBuffer;

        writeUTF8String(str:string, offset:number):number;

        writeVarint(value:number):ByteBuffer;

        writeVarint(value:number, offset:number):number;

        writeVarint32(value:number):ByteBuffer;

        writeVarint32(value:number, offset:number):number;

        writeVarint64(value:number):ByteBuffer;

        writeVarint64(value:number, offset:number):number;

        writeVarint64(value:Long):ByteBuffer;

        writeVarint64(value:Long, offset:number):number;

        writeVString(str:string):ByteBuffer;

        writeVString(str:string, offset:number):number;

        writeZigZagVarint(value:number):ByteBuffer;

        writeZigZagVarint(value:number, offset:number):number;

        writeZigZagVarint32(value:number):ByteBuffer;

        writeZigZagVarint32(value:number, offset:number):number;

        writeZigZagVarint64(value:number):ByteBuffer;

        writeZigZagVarint64(value:number, offset:number):number;
    }

    // for browser
    export var ByteBuffer:ByteBufferStatic;
}

interface ByteBuffer extends dcodeIO.ByteBuffer {
}

// for node, commonjs
declare module "bytebuffer" {
    var ByteBuffer:dcodeIO.ByteBufferStatic;
    export = ByteBuffer;
}
