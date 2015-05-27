/// <reference path="jssha.d.ts" />
/// <reference path="../node/node.d.ts" />

var imported = require("jssha");

var shaObj1:jsSHA.jsSHA = new jsSHA("This is a Test", "TEXT", "UTF8");
var shaObj2 = new imported("This is a Test", "TEXT");

var hash1:string = shaObj2.getHash("SHA-512", "HEX");
var hash2:string = shaObj2.getHash("SHA-512", "HEX", 2);
var hash3:string = shaObj2.getHash("SHA-512", "HEX", 2, {outputUpper: false, b64Pad: "foobar"});

var format:jsSHA.OutputFormatOptions = {outputUpper: false, b64Pad: "foobar"};
var hmac1 = shaObj2.getHMAC("SecretKey", "TEXT", "SHA-512", "HEX");
var hmac2 = shaObj2.getHMAC("SecretKey", "TEXT", "SHA-512", "HEX", format);
