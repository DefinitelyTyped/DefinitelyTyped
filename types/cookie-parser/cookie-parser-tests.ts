import express = require('express');
import cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('optional secret string'));

const req = null as any as express.Request;
req.secret; // $ExpectType string | undefined

let obj: object;
let str: string;
let notTrue: false;
let undef: undefined;

const res = cookieParser.JSONCookie('foo');
if (typeof res === 'undefined') {
    undef = res;
} else {
    obj = res;
}

const res2 = cookieParser.JSONCookies({foo: 'bar'});
const jsonRes: { foo?: object | undefined } = res2;

const res3 = cookieParser.signedCookie('', 'keyboard cat');
cookieParser.signedCookie('', ['keyboard', 'cat']);
if (typeof res3 === 'string') {
    str = res3;
} else {
    notTrue = res3;
}

const res4 = cookieParser.signedCookies({foo: 'bar'}, 'keyboard cat');
const signedCookieRes: { foo?: string | false | undefined } = res4;
