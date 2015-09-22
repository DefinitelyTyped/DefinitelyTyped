/// <reference path="form-data.d.ts" />

import formData = require('form-data');

var value: any;
var fd = new formData.FormData();
var obj: Object = fd.getHeaders();
value = fd.pipe(value);
