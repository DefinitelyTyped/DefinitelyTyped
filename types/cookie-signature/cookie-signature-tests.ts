import * as cookie from "cookie-signature";

let val = cookie.sign("hello", "tobiiscool");

val = cookie.sign("hello", "tobiiscool");
cookie.unsign(val, "tobiiscool");
cookie.unsign(val, "luna");

import * as crypto from "node:crypto";

val = cookie.sign("hello", crypto.createSecretKey("tobiiscool", "ascii"));

val = cookie.sign("hello", crypto.createSecretKey("tobiiscool", "ascii"));
cookie.unsign(val, crypto.createSecretKey("tobiiscool", "ascii"));
cookie.unsign(val, crypto.createSecretKey("luna", "ascii"));
