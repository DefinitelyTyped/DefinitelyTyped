import { JSON } from 'k6';
import { Selection } from 'k6/html';
import {
    CookieJar,
    CookieJarCookies,
    RefinedResponse,
    Response,
    ResponseType,
    del,
    get,
    post,
    cookieJar,
} from 'k6/http';

const address = 'http://example.com';

let response: Response;
let responseDefault: RefinedResponse<ResponseType>;
let responseBinary: RefinedResponse<'binary'>;
let responseNone: RefinedResponse<'none'>;
let responseText: RefinedResponse<'text'>;
let html: Selection;
let json: JSON | undefined;
let cookies: CookieJarCookies;
let jar: CookieJar;

// del
del(); // $ExpectError
del(5); // $ExpectError
responseDefault = del(address);
del(address, 5); // $ExpectError
responseDefault = del(address, 'skadoosh');
responseDefault = del(address, {});
responseDefault = del(address, { item: '576' });
del(address, {}, 5); // $ExpectError
responseBinary = del(address, null, { responseType: 'binary' });
del(address, {}, {}, 5); // $ExpectError

// get
get(); // $ExpectError
get(5); // $ExpectError
responseDefault = get(address);
get(address, 5); // $ExpectError
responseDefault = get(address, {});
responseBinary = get(address, { responseType: 'binary' });
responseNone = get(address, { responseType: 'none' });
responseText = get(address, { responseType: 'text' });
get(address, {}, 5); // $ExpectError

// post
post(); // $ExpectError
post(5); // $ExpectError
responseDefault = post(address);
post(address, 5); // $ExpectError
responseDefault = post(address, 'hello in cyberspace');
responseDefault = post(address, {});
responseDefault = post(address, { query: 'kittens' });
post(address, {}, 5); // $ExpectError
responseNone = post(address, null, { responseType: 'none' });
post(address, {}, {}, 5); // $ExpectError

// Response.clickLink
response = get(address);
responseDefault = response.clickLink();
response.clickLink(5); // $ExpectError
responseDefault = response.clickLink({});
responseBinary = response.clickLink({
    selector: 'div.menu span#home',
    params: { responseType: 'binary' }
});
response.clickLink({}, 5); // $ExpectError

// Response.html
response = get(address);
html = response.html();
response.html(5); // $ExpectError
html = response.html('div span.item');
response.html('div span.item', 5); // $ExpectError

// Response.json
response = get(address);
json = response.json();
response.json(5); // $ExpectError
json = response.json('user.name');
response.json('user.name', 5); // $ExpectError

// Response.submitForm
response = get(address);
responseDefault = response.submitForm();
response.submitForm(5); // $ExpectError
responseDefault = response.submitForm({});
responseText = response.submitForm({
    formSelector: 'div.input form',
    fields: {
        title: 'How to train your dragon',
        body: 'This post shares my years of experience training dragons.'
    },
    submitSelector: 'div.input form button.submit',
    params: { responseType: 'text' }
});
response.submitForm({}, 5); // $ExpectError

// cookieJar
jar = cookieJar();
cookieJar(5); // $ExpectError

// CookieJar.cookiesForURL
jar = cookieJar();
jar.cookiesForURL(); // $ExpectError
jar.cookiesForURL(5); // $ExpectError
cookies = jar.cookiesForURL(address);
jar.cookiesForURL(address, 5); // $ExpectError

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
    domain: address,
    path: '/index.html',
    expires: '2019-06-23T18:04:45Z',
    max_age: 10,
    secure: true,
    http_only: true,
});
jar.set('session', 'abc123', {}, 5); // $ExpectError
