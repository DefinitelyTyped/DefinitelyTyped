/// <reference path="qajax.d.ts" />

// Based on https://github.com/gre/qajax/blob/master/test/qajax.js

function resetDefaults () {
    Qajax.defaults.logs = true;
    Qajax.defaults.timeout = 1000;
    Qajax.defaults.method = "GET";
    Qajax.defaults.headers = {};
    Qajax.defaults.base = "";
}

var sample01url = "/test/dataset/sample01.json";
var sample01json = [
  { "name": "Jerome", "age": 20 },
  { "name": "Gerard", "age": 30 },
  { "name": "Martine", "age": 43 }
];

var emptyUrl = "/test/dataset/empty";

function urlWithOptions (url : string, options : any) {
  return url+"?"+Qajax.serialize(options);
}

Qajax;
Qajax.filterStatus;
Qajax.filterSuccess;
Qajax.getJSON;
Qajax.serialize({ foo: 123, bar: "toto" });
Qajax.getJSON(sample01url).then((res) => true, (err) => true);
Qajax(sample01url).then(Qajax.filterSuccess).then(Qajax.toJSON);
Qajax(emptyUrl, { params: { status: 404 } }).then(Qajax.filterSuccess).then(Qajax.toJSON);
Qajax({method: "POST", url: "/ECHO", data: "1234567890\nazerty\nuiopqsdfghjklm\nwxcvbn\n"}).then(Qajax.filterSuccess);
Qajax({method: "POST", url: "/ECHO", data: { foo: 123, bar: { value: 42 }, arr: [1, 2, 3] }}).then(Qajax.filterSuccess).then(Qajax.toJSON);
Qajax({ url: emptyUrl, params: { status: 201 } }).then(Qajax.filterStatus(200));
Qajax({method: "POST", url: emptyUrl, params: { status: 500 }}).then(Qajax.filterSuccess).then(Qajax.toJSON);

var cancellationD = Q.defer();
var cancellation = cancellationD.promise;
Qajax({ cancellation: cancellation, url: urlWithOptions(emptyUrl, { latency: 400 }) }).then(Qajax.filterSuccess).then(Qajax.toJSON);

Qajax.defaults.timeout = 200;
Qajax({method: "DELETE", url: sample01url, params: { latency: 500 }});

resetDefaults();
Qajax({method: "POST", url: sample01url, params: { latency: 300 }, timeout: 2000});

Qajax.defaults.timeout = 200;
Qajax({method: "DELETE", url: sample01url, params: { latency: 500 }, timeout: 0});

resetDefaults();
Qajax({headers: { "X-Hello": "world" }, method: "GET", url: "/ECHO_HEADERS"}).then(Qajax.filterSuccess).then(Qajax.toJSON);
Qajax({headers: { "X-Hi": "world" }, method: "GET", url: "/ECHO_HEADERS"}).then(Qajax.filterSuccess).then(Qajax.toJSON);
Qajax.defaults.headers = {"X-Foo": "bar"};
Qajax({method: "GET", url: "/ECHO_HEADERS"}).then(Qajax.filterSuccess).then(Qajax.toJSON);

resetDefaults();
Qajax("sample01.json", {base: "/test/dataset/"}).then(Qajax.filterSuccess).then(Qajax.toJSON);
Qajax.defaults.base = "/test/dataset/";
Qajax("empty").then(Qajax.filterSuccess);

resetDefaults();
Qajax.defaults.method = "POST";
Qajax("/ECHO", { data: "1234567890\nazerty\nuiopqsdfghjklm\nwxcvbn\n", responseType: "text/plain" }).then(Qajax.filterSuccess);

resetDefaults();
Qajax.getJSON(urlWithOptions(sample01url, { latency: 50 })).then((res) => true, (err) => true, () => true);
