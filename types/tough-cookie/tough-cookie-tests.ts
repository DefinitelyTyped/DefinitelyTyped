import { Cookie, CookieJar, MemoryCookieStore } from 'tough-cookie';

let header = '';

const cookie = Cookie.parse(header)!;
cookie.value = 'somethingdifferent';
header = cookie.toString();

const cookieJarWithOptions = new CookieJar(new MemoryCookieStore(), {
	allowSpecialUseDomain: true,
	prefixSecurity: 'silent'
});

const cookieJar = new CookieJar();
cookieJar.setCookie(cookie, 'http://currentdomain.example.com/path', (err, cookie) => {});
cookieJar.setCookie(cookie, 'http://currentdomain.example.com/path')
	.then((cookie) => {});
// ...
cookieJar.getCookies('http://example.com/otherpath', (err, cookies) => {});
cookieJar.getCookies('http://example.com/otherpath')
	.then((cookies) => {});

// All option are optional.
cookieJar.getCookies('http://example.com/otherpath', {}, () => {});
cookieJar.getCookies('http://example.com/otherpath', {})
	.then((cookies) => {});

cookieJar.getCookies('http://example.com/otherpath', {
    now: new Date(),
    allPaths: true,
}, () => {});
cookieJar.getCookies('http://example.com/otherpath', {
    now: new Date(),
    allPaths: true,
})
	.then((cookies) => {});

CookieJar.deserializeSync("test cookie with store", new MemoryCookieStore());
CookieJar.deserializeSync("test cookie");

const store = new MemoryCookieStore();

store.findCookies('example.com', 'path', (cookies) => {});
store.findCookies('example.com', 'path')
	.then((cookies) => {});

store.findCookies('example.com', 'path', false, (err, cookies) => {});
store.findCookies('example.com', 'path', false)
	.then((cookies) => {});
