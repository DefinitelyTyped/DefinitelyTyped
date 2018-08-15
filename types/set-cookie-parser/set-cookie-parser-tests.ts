import * as assert from "assert";
import * as http from "http";
import setCookie = require("set-cookie-parser");

// Call parse function on imported object
var input = "foo=bar;";
var cookies = setCookie.parse(input);
assert.equal(cookies.length, 1);
assert.equal(cookies[0].name, "foo");
assert.equal(cookies[0].value, "bar");

// Required properties only test
var requiredOnly = "foo=bar;";
cookies = setCookie(requiredOnly);
assert.equal(cookies.length, 1);
assert.equal(cookies[0].name, "foo");
assert.equal(cookies[0].value, "bar");

// Optional properties included test
var optionalIncluded = "foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure";
cookies = setCookie(optionalIncluded);
assert.equal(cookies.length, 1);
assert.equal(cookies[0].name, "foo");
assert.equal(cookies[0].value, "bar");
assert.equal(cookies[0].domain, ".example.com");
assert.equal(cookies[0].path, "/");
assert.deepEqual(cookies[0].expires, new Date('Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)'));
assert.equal(cookies[0].maxAge, 1000);
assert.equal(cookies[0].httpOnly, true);
assert.equal(cookies[0].secure, true);

// Array of strings test
var arrayOfCookies = ["bam=baz", "foo=bar"];
cookies = setCookie(arrayOfCookies);
assert.equal(cookies.length, 2);
assert.equal(cookies[0].name, "bam");
assert.equal(cookies[0].value, "baz");
assert.equal(cookies[1].name, "foo");
assert.equal(cookies[1].value, "bar");

// HTTP response message test
var message = <http.IncomingMessage>{};
message.headers = { "set-cookie": ["bam=baz", "foo=bar"] };
cookies = setCookie(message);
assert.equal(cookies.length, 2);
assert.equal(cookies[0].name, "bam");
assert.equal(cookies[0].value, "baz");
assert.equal(cookies[1].name, "foo");
assert.equal(cookies[1].value, "bar");

// Create new cookie with only required properties
var requiredOnlyCookie: setCookie.Cookie = {
    name: "Foo",
    value: "Bar"
}

// Create new cookie with all properties included optional ones
var optionalIncludedCookie: setCookie.Cookie = {
    name: "Bam",
    value: "Baz",
    domain: ".example.com",
    path: "/",
    expires:  new Date("Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)"),
    maxAge: 1000,
    httpOnly: true,
    secure: true
};
