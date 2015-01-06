/// <reference path="nock.d.ts" />

import nock = require('nock');

var inst: nock.Scope;
var str: string;
var strings: string[];
var bool: boolean;
var data: string;
var num: number;
var obj: {};
var objects: Object[];
var value: any;
var regex: RegExp;
var options: nock.Options;
var headers: Object;

inst = inst.head(str);

inst = inst.get(str);
inst = inst.get(str, data);

inst = inst.patch(str);
inst = inst.patch(str, str);
inst = inst.patch(str, obj);
inst = inst.patch(str, regex);

inst = inst.post(str);
inst = inst.post(str, data);
inst = inst.post(str, obj);
inst = inst.post(str, regex);

inst = inst.put(str);
inst = inst.put(str, data);
inst = inst.put(str, obj);
inst = inst.put(str, regex);

inst = inst.delete(str);
inst = inst.delete(str, data);
inst = inst.delete(str, obj);
inst = inst.delete(str, regex);

inst = inst.merge(str);
inst = inst.merge(str, data);
inst = inst.merge(str, obj);
inst = inst.merge(str, regex);

inst = inst.intercept(str, str);
inst = inst.intercept(str, str, str);
inst = inst.intercept(str, str, obj);
inst = inst.intercept(str, str, regex);
inst = inst.intercept(str, str, str, value);
inst = inst.intercept(str, str, obj, value);
inst = inst.intercept(str, str, regex, value);

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

inst = inst.times(4);
inst = inst.once();
inst = inst.twice();
inst = inst.thrice();

inst = inst.defaultReplyHeaders(value);
inst = inst.matchHeader(str, str);

inst = inst.delay(num);
inst = inst.delayConnection(num);

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

objects = inst.pendingMocks();

nock.recorder.rec();
nock.recorder.rec(true);
nock.recorder.rec({
	dont_print: true,
	output_objects: true
});

strings = nock.recorder.play();
objects = nock.recorder.play();