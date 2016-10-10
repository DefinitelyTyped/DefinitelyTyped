import * as base64url from "base64url";

// default
let str = base64url("some value");
str = base64url("some value", "hex");
str = base64url(new Buffer("some value"));

// encode
str = base64url.encode("some value");
str = base64url.encode("some value", "hex");
str = base64url.encode(new Buffer("some value"));

// decode
str = base64url.decode("ADA=");
str = base64url.decode("ADA=", "binary");

// toBase64
str = base64url.toBase64("ADA=");
str = base64url.toBase64(new Buffer("ADA=", "base64"));

// fromBase64
str = base64url.fromBase64("ADA=");

let buf = base64url.toBase64("ADA=");