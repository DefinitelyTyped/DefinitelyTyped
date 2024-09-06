import BufferCursor from "buffercursor";
import { Buffer } from "node:buffer";

const buffer = Buffer.from([0x00, 0x01, 0x02, 0x03]);
const cursor = new BufferCursor(buffer);

const firstByte = cursor.readUInt8();
console.log(firstByte);

const secondByte = cursor.readUInt8();
console.log(secondByte);

cursor.seek(2);
const thirdByte = cursor.readUInt8();
console.log(thirdByte);

cursor.seek(0);
cursor.writeUInt8(0xFF);
cursor.seek(0);
const overwrittenByte = cursor.readUInt8();
console.log(overwrittenByte);

try {
    cursor.seek(100);
} catch (error) {
    if (error instanceof BufferCursor.BufferCursorOverflow) {
        console.log("Caught overflow error as expected");
    }
}

cursor.seek(0);
cursor.writeInt16BE(0x1234);
cursor.seek(0);
const readInt16 = cursor.readInt16BE();
console.log(readInt16);

cursor.fill(0xAB, 4);
cursor.seek(0);
const filledValue = cursor.readUInt32BE();
console.log(filledValue.toString(16));

cursor.seek(buffer.length - 1);
try {
    cursor.readUInt16BE();
} catch (error) {
    console.log("Caught boundary overflow error as expected");
}
