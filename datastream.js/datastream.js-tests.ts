/// <reference path="datastream.js.d.ts" />

var buf = new ArrayBuffer(100);
var ds = new DataStream(buf);
ds = new DataStream(buf, 10);
ds = new DataStream(buf, 10, DataStream.BIG_ENDIAN);

ds.save('somefile.ext');
ds.dynamicSize = true;

for (var i=0; i<ds.byteLength; i++) {
}

ds.buffer = buf;
ds.byteOffset = 10;
ds.seek(0);
ds.isEof();

var int32arr: Int32Array;
var int16arr: Int16Array;
var int8arr: Int8Array;

var uint32arr: Uint32Array;
var uint16arr: Uint16Array;
var uint8arr: Uint8Array;

var float64arr: Float64Array;
var float32arr: Float32Array;

var val: number;
var str: string;

int32arr = ds.mapInt32Array(2);
int32arr = ds.mapInt32Array(2, DataStream.LITTLE_ENDIAN);

int16arr = ds.mapInt16Array(2);
int16arr = ds.mapInt16Array(2, DataStream.BIG_ENDIAN);

int8arr = ds.mapInt8Array(2);

uint32arr = ds.mapUint32Array(2);
uint32arr = ds.mapUint32Array(2, DataStream.LITTLE_ENDIAN);

uint16arr = ds.mapUint16Array(2);
uint16arr = ds.mapUint16Array(2, DataStream.BIG_ENDIAN);

uint8arr = ds.mapUint8Array(2);

float64arr = ds.mapFloat64Array(2);
float64arr = ds.mapFloat64Array(2, DataStream.LITTLE_ENDIAN);

float32arr = ds.mapFloat32Array(2);
float32arr = ds.mapFloat32Array(2, DataStream.BIG_ENDIAN);

int32arr = ds.readInt32Array(2);
int32arr = ds.readInt32Array(2, DataStream.LITTLE_ENDIAN);

int16arr = ds.readInt16Array(2);
int16arr = ds.readInt16Array(2, DataStream.BIG_ENDIAN);

int8arr = ds.readInt8Array(2);

uint32arr = ds.readUint32Array(2);
uint32arr = ds.readUint32Array(2, DataStream.LITTLE_ENDIAN);

uint16arr = ds.readUint16Array(2);
uint16arr = ds.readUint16Array(2, DataStream.BIG_ENDIAN);

uint8arr = ds.readUint8Array(2);

float64arr = ds.readFloat64Array(2);
float64arr = ds.readFloat64Array(2, DataStream.LITTLE_ENDIAN);

float32arr = ds.readFloat32Array(2);
float32arr = ds.readFloat32Array(2, DataStream.BIG_ENDIAN);

ds.writeInt32Array(new Int32Array([1,2,3]));
ds.writeInt32Array(new Int32Array([1,2,3]), DataStream.BIG_ENDIAN);

ds.writeInt16Array(new Int16Array([1,2,3]));
ds.writeInt16Array(new Int16Array([1,2,3]), DataStream.BIG_ENDIAN);

ds.writeInt8Array(new Int8Array([1,2,3]));

ds.writeUint32Array(new Uint32Array([1,2,3]));
ds.writeUint32Array(new Uint32Array([1,2,3]), DataStream.BIG_ENDIAN);

ds.writeUint16Array(new Uint16Array([1,2,3]));
ds.writeUint16Array(new Uint16Array([1,2,3]), DataStream.BIG_ENDIAN);

ds.writeUint8Array(new Uint8Array([1,2,3]));

ds.writeFloat64Array(new Float64Array([1,2,3]));
ds.writeFloat64Array(new Float64Array([1,2,3]), DataStream.BIG_ENDIAN);

ds.writeFloat32Array(new Float32Array([1,2,3]));
ds.writeFloat32Array(new Float32Array([1,2,3]), DataStream.BIG_ENDIAN);

val = ds.readInt32();
val = ds.readInt32(DataStream.LITTLE_ENDIAN);

val = ds.readInt16();
val = ds.readInt16(DataStream.BIG_ENDIAN);

val = ds.readInt8();

val = ds.readUint32();
val = ds.readUint32(DataStream.LITTLE_ENDIAN);

val = ds.readUint16();
val = ds.readUint16(DataStream.BIG_ENDIAN);

val = ds.readUint8();

val = ds.readFloat64();
val = ds.readFloat64(DataStream.LITTLE_ENDIAN);

val = ds.readFloat32();
val = ds.readFloat32(DataStream.BIG_ENDIAN);

ds.writeInt32(1);
ds.writeInt32(2, DataStream.BIG_ENDIAN);

ds.writeInt16(1);
ds.writeInt16(2, DataStream.LITTLE_ENDIAN);

ds.writeInt8(1);

ds.writeUint32(1);
ds.writeUint32(2, DataStream.BIG_ENDIAN);

ds.writeUint16(1);
ds.writeUint16(2, DataStream.LITTLE_ENDIAN);

ds.writeUint8(1);

ds.writeFloat32(1);
ds.writeFloat32(2, DataStream.BIG_ENDIAN);

ds.writeFloat64(1);
ds.writeFloat64(2, DataStream.LITTLE_ENDIAN);

var embed = [
    'tag', 'uint32be',
    'code', 'uint32le',
    'greet', 'cstring'
];
    
var def = [
    'tag', 'cstring:4',
    'code', 'uint32le',
    'embed', embed,
    'length', 'uint16be',
    'data', ['[]', 'float32be', 'length'],
    'greet', 'cstring:20',
    'endNote', 'uint8'
];

var obj = ds.readStruct(def);
ds.writeStruct(def, obj);

str = ds.readUCS2String(2);
str = ds.readUCS2String(2, DataStream.LITTLE_ENDIAN);

ds.writeUCS2String("str");
ds.writeUCS2String("str", DataStream.LITTLE_ENDIAN);
ds.writeUCS2String("str", DataStream.LITTLE_ENDIAN, 1);

str = ds.readString(2);
str = ds.readString(2, "ASCII");

ds.writeString("str");
ds.writeString("str", "ASCII");
ds.writeString("str", "ASCII", 1);

str = ds.readCString();
str = ds.readCString(2);

ds.writeCString("str");
ds.writeCString("str", 1);
