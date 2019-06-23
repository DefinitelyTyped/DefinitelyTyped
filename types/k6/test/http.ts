import { CookieJar, cookieJar } from 'k6/http';

let jar: CookieJar;

// cookieJar
jar = cookieJar();
cookieJar(5); // $ExpectError
