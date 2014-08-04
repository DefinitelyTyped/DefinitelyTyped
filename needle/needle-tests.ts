/// <reference path="needle.d.ts" />

import needle = require("needle");

var url = "";
var options = {};
var callback = (err, resp) => {};

needle.head(url, options, callback);
needle.get(url, options, callback);
needle.post(url, data, options, callback);
needle.put(url, data, options, callback);
needle.delete(url, data, options, callback);
needle.request(method, url, data, options, callback);
