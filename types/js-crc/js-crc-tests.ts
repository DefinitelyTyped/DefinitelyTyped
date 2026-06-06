import { crc16, crc32 } from "js-crc";

// $ExpectType string
const crc32value = crc32("test");
// $ExpectType string
const crc16value = crc16("test");
