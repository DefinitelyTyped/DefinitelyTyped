import convert, { UTF8 } from "convert-string";

const utf8Bytes = UTF8.stringToBytes("Test ♥");
const utf8Message = UTF8.bytesToString(utf8Bytes);

const bytes = convert.stringToBytes("Hello");
const message = convert.bytesToString(bytes);
