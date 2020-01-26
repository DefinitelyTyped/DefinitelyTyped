import * as http from "http";
import setCookie = require("set-cookie-parser");

// Declaring shims removes assert dependency. These tests are never executed, only typechecked, so this is fine.
declare function assertEqual<T>(actual: T, expected: T, message?: string): void;

// Call parse function on imported object
var input = "foo=bar;";
var cookies = setCookie.parse(input);
assertEqual(cookies.length, 1);
assertEqual(cookies[0].name, "foo");
assertEqual(cookies[0].value, "bar");

// Required properties only test
var requiredOnly = "foo=bar;";
cookies = setCookie(requiredOnly);
assertEqual(cookies.length, 1);
assertEqual(cookies[0].name, "foo");
assertEqual(cookies[0].value, "bar");

// Optional properties included test
var optionalIncluded = "foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure; SameSite=Strict";
cookies = setCookie(optionalIncluded);
assertEqual(cookies.length, 1);
assertEqual(cookies[0].name, "foo");
assertEqual(cookies[0].value, "bar");
assertEqual(cookies[0].domain, ".example.com");
assertEqual(cookies[0].path, "/");
assertEqual(cookies[0].expires, new Date('Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)'));
assertEqual(cookies[0].maxAge, 1000);
assertEqual(cookies[0].httpOnly, true);
assertEqual(cookies[0].secure, true);
assertEqual(cookies[0].sameSite, "Strict");

// Array of strings test
var arrayOfCookies = ["bam=baz", "foo=bar"];
cookies = setCookie(arrayOfCookies);
assertEqual(cookies.length, 2);
assertEqual(cookies[0].name, "bam");
assertEqual(cookies[0].value, "baz");
assertEqual(cookies[1].name, "foo");
assertEqual(cookies[1].value, "bar");

// HTTP response message test
var message = {} as http.IncomingMessage;
message.headers = { "set-cookie": ["bam=baz", "foo=bar"] };
cookies = setCookie(message);
assertEqual(cookies.length, 2);
assertEqual(cookies[0].name, "bam");
assertEqual(cookies[0].value, "baz");
assertEqual(cookies[1].name, "foo");
assertEqual(cookies[1].value, "bar");

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

var cookiesString = setCookie.splitCookiesString(null)
assertEqual(cookiesString, [])

cookiesString = setCookie.splitCookiesString([])
assertEqual(cookiesString, [])

cookiesString = setCookie.splitCookiesString([
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
    'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
])
assertEqual(cookiesString, [
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
    'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
])

cookiesString = setCookie.splitCookiesString(
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure, baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
)
assertEqual(cookiesString, [
    'foo=bar; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
    'baz=buz; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 2025 10:01:11 GMT; HttpOnly; Secure',
])

// Use decodeValues=false option
var notDecodedValueCookies = setCookie.parse('user=%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 3000 10:01:11 GMT; HttpOnly; Secure', { decodeValues: false });
assertEqual(notDecodedValueCookies[0].value, '%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2');

var decodedValueCookies = setCookie.parse('user=%D0%98%D0%BB%D1%8C%D1%8F%20%D0%97%D0%B0%D0%B9%D1%86%D0%B5%D0%B2; Max-Age=1000; Domain=.example.com; Path=/; Expires=Tue, 01 Jul 3000 10:01:11 GMT; HttpOnly; Secure', { decodeValues: true });
assertEqual(decodedValueCookies[0].value, 'Илья Зайцев');

// Use map=true option
var expectedCookiesMap: setCookie.CookieMap = {
    foo: {
        name: 'foo',
        value: 'bar',
        maxAge: 1000,
        domain: '.example.com',
    }
};
var cookiesMap = setCookie.parse('foo=bar; Max-Age=1000; Domain=.example.com;', { map: true });
assertEqual(cookiesMap, expectedCookiesMap);
