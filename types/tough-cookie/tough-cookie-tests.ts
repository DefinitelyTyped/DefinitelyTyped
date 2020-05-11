import { Cookie, CookieJar, MemoryCookieStore, PrefixSecurityEnum, version } from 'tough-cookie';

version; // $ExpectType string
PrefixSecurityEnum.DISABLED; // $ExpectType string
PrefixSecurityEnum.SILENT; // $ExpectType string
PrefixSecurityEnum.STRICT; // $ExpectType string

let header = '';
const cb = (err: Error | null) => { };
const cbCookie = (err: Error | null, cookie: Cookie | null) => {};
const cbCookies = (err: Error | null, cookies: Cookie[]) => {};
const cbCookieJar = (err: Error | null, jar: CookieJar) => {};
const cbString = (err: Error | null, value: string) => {};
const cbStrings = (err: Error | null, value: string[]) => {};

const url = 'http://example.com/otherpath';
const cookie: Cookie = Cookie.parse(header)!;
cookie.value = 'somethingdifferent';
header = cookie.toString();

const jar = new CookieJar();
jar.setCookie(cookie, 'http://currentdomain.example.com/path'); // $ExpectType Promise<Cookie>
jar.setCookie(cookie, 'http://currentdomain.example.com/path', cbCookie); // $ExpectType void
jar.setCookie(cookie, 'http://currentdomain.example.com/path', {}, cbCookie); // $ExpectType void

jar.setCookieSync(cookie, 'http://currentdomain.example.com/path'); // $ExpectType Cookie

jar.getCookies(url); // $ExpectType Promise<Cookie[]>
jar.getCookies(url, {}); // $ExpectType Promise<Cookie[]>
jar.getCookies(url, cbCookies); // $ExpectType void
jar.getCookies(url, { now: new Date(), allPaths: true }, cbCookies); // $ExpectType void

jar.getCookiesSync(url); // $ExpectType Cookie[]
jar.getCookiesSync(url, {}); // $ExpectType Cookie[]

jar.getCookieString(url); // $ExpectType Promise<string>
jar.getCookieString(url, cbString); // $ExpectType void
jar.getCookieString(url, {}, cbString); // $ExpectType void

jar.getCookieStringSync(url); // $ExpectType string
jar.getCookieStringSync(url, {}); // $ExpectType string

jar.getSetCookieStrings(url); // $ExpectType Promise<string[]>
jar.getSetCookieStrings(url, cbStrings); // $ExpectType void
jar.getSetCookieStrings(url, {}, cbStrings); // $ExpectType void

jar.getSetCookieStringsSync(url); // $ExpectType string[]
jar.getSetCookieStringsSync(url, {}); // $ExpectType string[]

jar.serialize(); // $ExpectType Promise<Serialized>
jar.serialize((err: Error | null, serializedObject: CookieJar.Serialized): void => {}); // $ExpectType void

jar.serializeSync(); // $ExpectType Serialized

jar.toJSON(); // $ExpectType Serialized

jar.clone(); // $ExpectType Promise<CookieJar>
jar.clone(new MemoryCookieStore()); // $ExpectType Promise<CookieJar>
jar.clone(cbCookieJar); // $ExpectType void
jar.clone(new MemoryCookieStore(), cbCookieJar); // $ExpectType void

jar.cloneSync(); // $ExpectType CookieJar
jar.cloneSync(new MemoryCookieStore()); // $ExpectType CookieJar

jar.removeAllCookies(); // $ExpectType Promise<void>
jar.removeAllCookies(cb); // $ExpectType void

jar.removeAllCookiesSync(); // $ExpectType void

CookieJar.deserialize("", cbCookieJar); // $ExpectType void
CookieJar.deserialize("", new MemoryCookieStore(), cbCookieJar); // $ExpectType void
CookieJar.deserialize(""); // $ExpectType Promise<CookieJar>
CookieJar.deserialize("", new MemoryCookieStore()); // $ExpectType Promise<CookieJar>

CookieJar.deserializeSync("test cookie with store", new MemoryCookieStore()); // $ExpectType CookieJar
CookieJar.deserializeSync("test cookie"); // $ExpectType CookieJar

const store = new MemoryCookieStore();
store.findCookie('example.com', '/', 'foo', cbCookie); // $ExpectType void

store.findCookies('example.com', '/', false, cbCookies); // $ExpectType void

store.putCookie(cookie, cb); // $ExpectType void

store.updateCookie(cookie, cookie, cb); // $ExpectType void

store.removeCookie('example.com', '/', 'foo', cb); // $ExpectType void

store.removeCookies('example.com', '/', cb); // $ExpectType void

store.getAllCookies(cbCookies); // $ExpectType void
