import { Ber, BerReader, BerWriter } from "asn1";

let buf = Buffer.alloc(0);
let bufferOrNull: Buffer | null = Buffer.alloc(0);
const bool = false;
let boolOrNull: boolean | null = false;
const str = "";
let strOrNull: string | null = "";
let num = 0;
let numOrNull: number | null = 0;
const roStrArray: readonly string[] = [str];

const reader = new BerReader(buf);
numOrNull = reader.peek();
boolOrNull = reader.readBoolean();
numOrNull = reader.readByte(bool);
numOrNull = reader.readEnumeration();
numOrNull = reader.readInt();
numOrNull = reader.readLength();
numOrNull = reader.readLength(num);
strOrNull = reader.readOID();
strOrNull = reader.readOID(num);
numOrNull = reader.readSequence();
numOrNull = reader.readSequence(num);
strOrNull = reader.readString();
strOrNull = reader.readString(num);
bufferOrNull = reader.readString(num, bool);
numOrNull = reader._readTag();
numOrNull = reader._readTag(num);

let writer = new BerWriter();
writer = new BerWriter({
    size: num,
    growthFactor: num,
});

buf = writer.buffer;
buf = writer._buf;
num = writer._size;
num = writer._offset;

writer.endSequence();
writer.startSequence();
writer.startSequence(num);
writer.writeBoolean(bool);
writer.writeBoolean(bool, num);
writer.writeBuffer(buf, num);
writer.writeByte(num);
writer.writeEnumeration(num);
writer.writeEnumeration(num, num);
writer.writeInt(num);
writer.writeInt(num, num);
writer.writeLength(num);
writer.writeNull();
writer.writeOID(str, num);
writer.writeString(str);
writer.writeString(str, num);
writer.writeStringArray(roStrArray);
writer._ensure(num);

num = Ber.BMPString;
num = Ber.BitString;
num = Ber.Boolean;
num = Ber.CharacterString;
num = Ber.Constructor;
num = Ber.Context;
num = Ber.EOC;
num = Ber.Enumeration;
num = Ber.External;
num = Ber.GeneralString;
num = Ber.GeneralizedTime;
num = Ber.GraphicString;
num = Ber.IA5String;
num = Ber.Integer;
num = Ber.Null;
num = Ber.NumericString;
num = Ber.OID;
num = Ber.ObjectDescriptor;
num = Ber.OctetString;
num = Ber.PDV;
num = Ber.PrintableString;
num = Ber.Real;
num = Ber.RelativeOID;
num = Ber.Sequence;
num = Ber.Set;
num = Ber.T61String;
num = Ber.UTCTime;
num = Ber.UniversalString;
num = Ber.Utf8String;
num = Ber.VideotexString;
num = Ber.VisibleString;
