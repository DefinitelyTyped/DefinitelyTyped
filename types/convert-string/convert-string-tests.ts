import { convertString } from "convert-string";

const utf8Bytes = convertString.UTF8.stringToBytes("Test ♥");
const utf8Message = convertString.UTF8.bytesToString(utf8Bytes);

const bytes = convertString.stringToBytes("Hello");
const message = convertString.bytesToString(bytes);
