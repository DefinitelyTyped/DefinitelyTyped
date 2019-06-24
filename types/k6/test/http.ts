import { JSON } from 'k6';
import { Selection } from 'k6/html';
import { CookieJar, CookieJarCookies, RefinedResponse, Response, ResponseType, get, cookieJar } from 'k6/http';

let response: Response;
let responseDefault: RefinedResponse<ResponseType>;
let responseBinary: RefinedResponse<'binary'>;
let responseNone: RefinedResponse<'none'>;
let responseText: RefinedResponse<'text'>;
let html: Selection;
let json: JSON | undefined;
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

// Response.clickLink
response = get('example.com');
responseDefault = response.clickLink();
response.clickLink(5); // $ExpectError
responseDefault = response.clickLink({});
responseBinary = response.clickLink({
    selector: 'div.menu span#home',
    params: { responseType: 'binary' }
});
response.clickLink({}, 5); // $ExpectError

// Response.html
response = get('example.com');
html = response.html();
response.html(5); // $ExpectError
html = response.html('div span.item');
response.html('div span.item', 5); // $ExpectError

// Response.json
response = get('example.com');
json = response.json();
response.json(5); // $ExpectError
json = response.json('user.name');
response.json('user.name', 5); // $ExpectError

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
