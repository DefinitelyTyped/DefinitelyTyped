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
var filterfn: (url:string)=>boolean;

inst = inst.head(str);

inst = inst.get(str);
inst = inst.get(str, data);
inst = inst.get(regex);
inst = inst.get(regex, data);
inst = inst.get(filterfn);
inst = inst.get(filterfn, data);

inst = inst.patch(str);
inst = inst.patch(str, str);
inst = inst.patch(str, obj);
inst = inst.patch(str, regex);
inst = inst.patch(regex);
inst = inst.patch(regex, str);
inst = inst.patch(regex, obj);
inst = inst.patch(regex, regex);
inst = inst.patch(filterfn);
inst = inst.patch(filterfn, str);
inst = inst.patch(filterfn, obj);
inst = inst.patch(filterfn, regex);

inst = inst.post(str);
inst = inst.post(str, data);
inst = inst.post(str, obj);
inst = inst.post(str, regex);
inst = inst.post(regex);
inst = inst.post(regex, data);
inst = inst.post(regex, obj);
inst = inst.post(regex, regex);
inst = inst.post(filterfn);
inst = inst.post(filterfn, data);
inst = inst.post(filterfn, obj);
inst = inst.post(filterfn, regex);

inst = inst.put(str);
inst = inst.put(str, data);
inst = inst.put(str, obj);
inst = inst.put(str, regex);
inst = inst.put(regex);
inst = inst.put(regex, data);
inst = inst.put(regex, obj);
inst = inst.put(regex, regex);
inst = inst.put(filterfn);
inst = inst.put(filterfn, data);
inst = inst.put(filterfn, obj);
inst = inst.put(filterfn, regex);

inst = inst.delete(str);
inst = inst.delete(str, data);
inst = inst.delete(str, obj);
inst = inst.delete(str, regex);
inst = inst.delete(regex);
inst = inst.delete(regex, data);
inst = inst.delete(regex, obj);
inst = inst.delete(regex, regex);
inst = inst.delete(filterfn);
inst = inst.delete(filterfn, data);
inst = inst.delete(filterfn, obj);
inst = inst.delete(filterfn, regex);

inst = inst.merge(str);
inst = inst.merge(str, data);
inst = inst.merge(str, obj);
inst = inst.merge(str, regex);
inst = inst.merge(regex);
inst = inst.merge(regex, data);
inst = inst.merge(regex, obj);
inst = inst.merge(regex, regex);
inst = inst.merge(filterfn);
inst = inst.merge(filterfn, data);
inst = inst.merge(filterfn, obj);
inst = inst.merge(filterfn, regex);

inst = inst.query(obj);
inst = inst.query(bool);

inst = inst.intercept(str, str);
inst = inst.intercept(str, str, str);
inst = inst.intercept(str, str, obj);
inst = inst.intercept(str, str, regex);
inst = inst.intercept(str, str, str, value);
inst = inst.intercept(str, str, obj, value);
inst = inst.intercept(str, str, regex, value);
inst = inst.intercept(regex, str);
inst = inst.intercept(regex, str, str);
inst = inst.intercept(regex, str, obj);
inst = inst.intercept(regex, str, regex);
inst = inst.intercept(regex, str, str, value);
inst = inst.intercept(regex, str, obj, value);
inst = inst.intercept(regex, str, regex, value);
inst = inst.intercept(filterfn, str);
inst = inst.intercept(filterfn, str, str);
inst = inst.intercept(filterfn, str, obj);
inst = inst.intercept(filterfn, str, regex);
inst = inst.intercept(filterfn, str, str, value);
inst = inst.intercept(filterfn, str, obj, value);
inst = inst.intercept(filterfn, str, regex, value);

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
inst = inst.matchHeader(str, regex);
inst = inst.matchHeader(str, (val: string) => true);

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
