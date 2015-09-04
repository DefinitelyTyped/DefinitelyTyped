/// <reference path="universal-analytics.d.ts" />

var ui:UniversalAnalytics;

var str:string;
var num:number;
var value:any;
var bool:boolean;
var params:Object;
var x:any;

var client:UniversalAnalytics.Client = ui('UA-123-00');
client = client.debug();
client.send();

client = client.pageview(str);
client.pageview(str, (err:any) => {});
client = client.pageview(params);
client.pageview(params, (err:any) => {});
client = client.pageview(str, str);
client.pageview(str, str, (err:any) => {});
client = client.pageview(str, str, str);
client.pageview(str, str, str, (err:any) => {});


client = client.event(str, str);
client.event(str, str, (err:any) => {});
client = client.event(str, str, str);
client.event(str, str, str, (err:any) => {});
client = client.event(str, str, str, value);
client.event(str, str, str, value, (err:any) => {});
client.event(str, str, str, value, params, (err:any) => {});
client = client.event(params);
client.event(params, (err:any) => {});


client = client.transaction(str);
client.transaction(str, (err:any) => {});
client = client.transaction(str, num);
client.transaction(str, num, (err:any) => {});
client = client.transaction(str, num, num);
client.transaction(str, num, num, (err:any) => {});
client = client.transaction(str, num, num, num);
client.transaction(str, num, num, num, (err:any) => {});
client = client.transaction(str, num, num, num, str);
client.transaction(str, num, num, num, str, (err:any) => {});
client = client.transaction(params);
client.transaction(params, (err:any) => {});


client = client.item(num);
client.item(num, (err:any) => {});
client = client.item(num, num);
client.item(num, num, (err:any) => {});
client = client.item(num, num, num);
client.item(num, num, num, (err:any) => {});
client = client.item(num, num, num, str);
client.item(num, num, num, str, (err:any) => {});
client = client.item(num, num, num, str, str);
client.item(num, num, num, str, str, (err:any) => {});
client = client.item(num, num, num, str, str, params);
client.item(num, num, num, str, str, params, (err:any) => {});
client = client.item(params);
client.item(params, (err:any) => {});


client = client.exception(str);
client.exception(str, (err:any) => {});
client = client.exception(str, bool);
client.exception(str, bool, (err:any) => {});
client = client.exception(params);
client.exception(params, (err:any) => {});


client = client.timing(str);
client.timing(str, (err:any) => {});
client = client.timing(str, str);
client.timing(str, str, (err:any) => {});
client = client.timing(str, str, num);
client.timing(str, str, num, (err:any) => {});
client = client.timing(str, str, num, str);
client.timing(str, str, num, str, (err:any) => {});
client = client.timing(params);
client.timing(params, (err:any) => {});


x = client.middleware(str, {});
