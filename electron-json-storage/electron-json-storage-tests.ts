/// <reference types="electron" />

import electron = require('electron');
import storage = require('electron-json-storage');

storage.set("foo", { "foo": "bar" }, function(err: any) { });

storage.get("foo", function(err: any, data: Object) {
	console.log(JSON.stringify(data));
});

storage.has("foo", function(err: any, hasKey: boolean) {
	console.log("hasKey?: %s", hasKey);
});

storage.keys(function(err: any, keys: string[]) {
	console.log(keys);
});

storage.remove("foo", function(err: any) {
	console.log(err);
});

storage.clear(function(err: any) {
	console.log(err);
});

storage.has("foo", function(err: any, data: Object) {
	console.log(data);
});
