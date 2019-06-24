import { CookieJar, CookieJarCookies, RefinedResponse, ResponseType, get, cookieJar } from 'k6/http';

let responseDefault: RefinedResponse<ResponseType>;
let responseBinary: RefinedResponse<'binary'>;
let responseNone: RefinedResponse<'none'>;
let responseText: RefinedResponse<'text'>;
let cookies: CookieJarCookies;
let jar: CookieJar;

// get
get(); // $ExpectError
get(5); // $ExpectError
responseDefault = get('example.com');
get('example.com', 5); // $ExpectError
responseDefault = get('example.com', {});
responseBinary = get('example.com', { responseType: 'binary' });
responseNone = get('example.com', { responseType: 'none' });
responseText = get('example.com', { responseType: 'text' });
get('example.com', {}, 5); // $ExpectError

// cookieJar
jar = cookieJar();
cookieJar(5); // $ExpectError

// CookieJar.cookiesForURL
jar = cookieJar();
jar.cookiesForURL(); // $ExpectError
jar.cookiesForURL(5); // $ExpectError
cookies = jar.cookiesForURL('example.com');
jar.cookiesForURL('example.com', 5); // $ExpectError

// CookieJar.set
jar = cookieJar();
jar.set(); // $ExpectError
jar.set(5); // $ExpectError
jar.set('session'); // $ExpectError
jar.set('session', 5); // $ExpectError
jar.set('session', 'abc123'); // $ExpectType void
jar.set('session', 'abc123', null); // $ExpectType void
jar.set('session', 'abc123', {}); // $ExpectType void
jar.set('session', 'abc123', { badoption: true }); // $ExpectError
jar.set('session', 'abc123', { domain: 'example.com' }); // $ExpectType void
// $ExpectType void
jar.set('session', 'abc123', {
    domain: 'example.com',
    path: '/index.html',
    expires: '2019-06-23T18:04:45Z',
    max_age: 10,
    secure: true,
    http_only: true
});
jar.set('session', 'abc123', {}, 5); // $ExpectError
