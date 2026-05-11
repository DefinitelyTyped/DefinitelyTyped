import arc4 = require("arc4");
import { lodash, normal } from "arc4";

const cipher = arc4("arc4", "secret_key");
const d = cipher.encodeString("ciao");
const e = cipher.decodeString(d);

cipher.change("foo");
cipher.change([30, 31]);
cipher.change(Buffer.from("foo"));

cipher.encodeString("string", "utf8", "base64");

cipher.encodeArray([49, 50, 51]);

cipher.encodeBuffer(Buffer.from("ciao"));

cipher.decodeString("string", "utf8", "base64");

cipher.decodeArray([49, 50, 51]);

cipher.decodeBuffer(Buffer.from("ciao"));

const cipher2 = normal("rc4+", [1, 2, 3]);
const cipher3 = lodash("vmpc", Buffer.from("hello"));
