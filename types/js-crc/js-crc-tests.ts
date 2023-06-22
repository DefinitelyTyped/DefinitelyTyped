import { crc32, crc16 } from "js-crc";

// $ExpectType string
const crc32value = crc32("test");
// $ExpectType string
const crc16value = crc16("test");
