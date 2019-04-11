import cookiejarLib = require('cookiejar');

const { Cookie, CookieAccessInfo, CookieJar } = cookiejarLib;

// Original test: https://github.com/bmeck/node-cookiejar/blob/master/tests/test.js

let testCookie = new Cookie("a=1;domain=.test.com;path=/");
// assert.equal(testCookie.name, "a");
// assert.equal(testCookie.value, "1");
// assert.equal(testCookie.domain, ".test.com");
// assert.equal(testCookie.path, "/");
// assert.equal(testCookie.secure, false);
// assert.equal(testCookie.expiration_date, Infinity);

// assert.deepEqual(testCookie, new Cookie("a=1;domain=.test.com;path=/"));
// assert.ok(testCookie.collidesWith(new Cookie("a=1;domain=.test.com;path=/")));

testCookie = new Cookie("a=1;path=/", ".test.com");
// assert.equal(testCookie.domain, ".test.com");

// Test CookieJar
const testCookieJar = new CookieJar();
testCookieJar.setCookies([
 "a=1;domain=.test.com;path=/",
 "b=2;domain=test.com;path=/",
 "c=3;domain=test.com;path=/;expires=January 1, 1970"
].join(':'));

let testCookies = testCookieJar.getCookies(new CookieAccessInfo("test.com", "/"));
// assert.equal(testCookies.length, 2, "Expires on setCookies fail\n" + testCookies.toString());
// assert.equal(testCookies.toValueString(), 'a=1;b=2', "Cannot get value string of multiple cookies");

testCookies = testCookieJar.getCookies(new CookieAccessInfo("www.test.com", "/"));
// assert.equal(testCookies.length, 2, "Wildcard domain fail\n" + testCookies.toString());

testCookieJar.setCookies("b=2;domain=test.com;path=/;expires=January 1, 1970");
testCookies = testCookieJar.getCookies(new CookieAccessInfo("test.com", "/"));
// assert.equal(testCookies.length, 1, "Delete cookie fail\n" + testCookies.toString());
// assert.equal(String(testCookieJar.getCookies(new CookieAccessInfo("test.com", "/"))), "a=1; domain=.test.com; path=/");

testCookie = new Cookie("a=1;domain=test.com;path=/;HttpOnly");
// assert.ok(testCookie.noscript, "HttpOnly flag parsing failed\n" + testCookie.toString());

const testCookieJar2 = new CookieJar();
testCookieJar2.setCookies([
    "a=1;domain=.test.com;path=/",
    "a=1;domain=.test.com;path=/",
    "a=2;domain=.test.com;path=/",
    "b=3;domain=.test.com;path=/"
]);
testCookies = testCookieJar2.getCookies(new CookieAccessInfo("test.com", "/"));
// assert.equal(testCookies.length, 2);
// assert.equal(testCookies[0].value, 2);

// Test pure appending
testCookieJar2.setCookie("d=4;domain=.test.com;path=/");
testCookies = testCookieJar2.getCookies(new CookieAccessInfo("test.com", "/"));
// assert.equal(testCookies.length, 3);
// assert.equal(testCookies[2].value, 4);

// Test Ignore Trailing Semicolons (Github Issue #6)
testCookie = new Cookie("a=1;domain=.test.com;path=/;;;;");
// assert.equal(testCookie.name, "a");
// assert.equal(testCookie.value, "1");
// assert.equal(testCookie.domain, ".test.com");
// assert.equal(testCookie.path, "/");
// assert.deepEqual(testCookie, new Cookie("a=1;domain=.test.com;path=/"));

// Test request_path and request_domain
testCookieJar2.setCookie(new Cookie("sub=4;path=/", "test.com"));
testCookie = testCookieJar2.getCookie("sub", new CookieAccessInfo("sub.test.com", "/"));
// assert.equal(testCookie, undefined);

testCookie = testCookieJar2.getCookie("sub", new CookieAccessInfo("test.com", "/"));
// assert.equal(testCookie.name, "sub");
// assert.equal(testCookie.domain, "test.com");

testCookieJar2.setCookie(new Cookie("sub=4;path=/accounts", "test.com", "/accounts"));
testCookie = testCookieJar2.getCookie("sub", new CookieAccessInfo("test.com", "/foo"));
// assert.equal(testCookie, undefined);

testCookie = testCookieJar2.getCookie("sub", new CookieAccessInfo("test.com", "/accounts"));
// assert.equal(testCookie.path, "/accounts");

testCookieJar2.setCookie(new Cookie("sub=5;path=/", "test.com", "/accounts"));
testCookies = testCookieJar2.getCookies(new CookieAccessInfo("test.com"));
// assert.equal(testCookies.length, 4);

testCookieJar2.setCookie(new Cookie("sub=5;path=/", "test.com", "/accounts"));
testCookie = testCookieJar2.getCookie('sub', CookieAccessInfo.All);
// assert(testCookie);
// assert.equal(testCookie.name, 'sub');
