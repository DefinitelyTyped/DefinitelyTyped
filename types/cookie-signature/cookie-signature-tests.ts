import * as cookie from "cookie-signature";

let val = cookie.sign('hello', 'tobiiscool');

val = cookie.sign('hello', 'tobiiscool');
cookie.unsign(val, 'tobiiscool');
cookie.unsign(val, 'luna');
