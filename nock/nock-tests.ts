/// <reference path="nock.d.ts" />

import nock = require('nock');

var inst: nock.Scope;
var str: string;
var bool: boolean;
var data: string;
var num: number;
var obj: {};
var value: any;
var regex: RegExp;
var options: nock.Options;
var headers: Object;

inst = inst.head(str);
inst = inst.get(str);
inst = inst.get(str, data);
inst = inst.post(str);
inst = inst.post(str, data);
inst = inst.put(str);
inst = inst.put(str, data);

inst = inst.delete(str);
inst = inst.delete(str, data);

inst = inst.intercept(str, str);
inst = inst.intercept(str, str, str);
inst = inst.intercept(str, str, str, value);

inst = inst.reply(num);
inst = inst.reply(num, str);

inst = inst.reply(num, str, headers);
inst = inst.reply(num, obj, headers);
inst = inst.reply(num, (uri: string, body: string) => {
	return str;
});
inst = inst.reply(num, (uri: string, body: string) => {
	return str;
}, headers);
inst = inst.replyWithFile(num, str);

inst = inst.defaultReplyHeaders(value);
inst = inst.matchHeader(str, str);

inst = inst.filteringPath(regex, str);
inst = inst.filteringPath((path: string) => {
	return str;
});
inst = inst.filteringRequestBody(regex, str);
inst = inst.filteringRequestBody((path: string) => {
	return str;
});

inst = inst.persist();
inst = inst.log(() => {

});

inst.done();
bool = inst.isDone();
inst.restore();
