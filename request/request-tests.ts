/// <reference path="request.d.ts" />

import request = require('request');
import http = require('http');
import stream = require('stream');
import formData = require('form-data');

var value: any;
var str: string;
var buffer: NodeBuffer;
var num: number;
var bool: boolean;
var date: Date;
var obj: Object;
var dest: string;

var uri: string;
var headers: {[key: string]: string};

var agent: http.Agent;
var write: stream.Writable;
var req: request.Request;
var form: formData.FormData;

var bodyArr: request.RequestPart[] = [{
	body: value
}, {
	body: value
}, {
	body: value
}];

// --- --- --- --- --- --- --- --- --- --- --- ---

str = req.toJSON();

var cookieValue: request.CookieValue;
str = cookieValue.name;
value = cookieValue.value;
bool = cookieValue.httpOnly;

var cookie: request.Cookie;
str = cookie.str;
date = cookie.expires;
str = cookie.path;
str = cookie.toString();

var jar: request.CookieJar;
jar.add(cookie);
cookie = jar.get(req);
str = jar.cookieString(req);

var aws: request.AWSOptions;
str = aws.secret;
str = aws.bucket;

var oauth: request.OAuthOptions;
str = oauth.callback;
str = oauth.consumer_key;
str = oauth.consumer_secret;
str = oauth.token;
str = oauth.token_secret;
str = oauth.verifier;

var options: request.Options = {
	url: str,
	uri: str,
	callback: (error: any, response: any, body: any) => {

	},
	jar: value,
	form: obj,
	oauth: value,
	aws: aws,
	qs: obj,
	json: value,
	multipart: value,
	agentOptions: value,
	agentClass: value,
	forever: value,
	host: str,
	port: num,
	method: str,
	headers: value,
	body: value,
	followRedirect: bool,
	followAllRedirects: bool,
	maxRedirects: num,
	encoding: str,
	pool: value,
	timeout: num,
	proxy: value,
	strictSSL: bool
};

// --- --- --- --- --- --- --- --- --- --- --- ---

agent = req.getAgent();
//req.start();
//req.abort();
req.pipeDest(dest);
req = req.setHeader(str, str);
req = req.setHeader(str, str, bool);
req = req.setHeaders(headers);
req = req.qs(obj);
req = req.qs(obj, bool);
req = req.form(obj);
form = req.form();
req = req.multipart(bodyArr);
req = req.json(value);
req = req.aws(aws);
req = req.aws(aws, bool);
req = req.oauth(oauth);
req = req.jar(jar);
write = req.pipe(write);
write = req.pipe(write, value);
req.pipe(req);
req.write(value);
req.end(str);
req.end(buffer);
req.pause();
req.resume();
req.abort();
req.destroy();

// --- --- --- --- --- --- --- --- --- --- --- ---

var callback: (error: any, response: any, body: any) => void;

value = request.initParams;

req = request(uri);
req = request(uri, options);
req = request(uri, options, callback);
req = request(uri, callback);
req = request(options);
req = request(options, callback);

req = request.request(uri);
req = request.request(uri, options);
req = request.request(uri, options, callback);
req = request.request(uri, callback);
req = request.request(options);
req = request.request(options, callback);

req = request.get(uri);
req = request.get(uri, options);
req = request.get(uri, options, callback);
req = request.get(uri, callback);
req = request.get(options);
req = request.get(options, callback);

req = request.post(uri);
req = request.post(uri, options);
req = request.post(uri, options, callback);
req = request.post(uri, callback);
req = request.post(options);
req = request.post(options, callback);

req = request.put(uri);
req = request.put(uri, options);
req = request.put(uri, options, callback);
req = request.put(uri, callback);
req = request.put(options);
req = request.put(options, callback);

req = request.head(uri);
req = request.head(uri, options);
req = request.head(uri, options, callback);
req = request.head(uri, callback);
req = request.head(options);
req = request.head(options, callback);

req = request.patch(uri);
req = request.patch(uri, options);
req = request.patch(uri, options, callback);
req = request.patch(uri, callback);
req = request.patch(options);
req = request.patch(options, callback);

req = request.del(uri);
req = request.del(uri, options);
req = request.del(uri, options, callback);
req = request.del(uri, callback);
req = request.del(options);
req = request.del(options, callback);

req = request.forever(value, value);
jar = request.jar();
cookie = request.cookie(str);

var r = request.defaults(options);
r(str);
r.get(str);
r.post(str);

r(options);
r.get(options);
r.post(options);
