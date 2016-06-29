/// <reference path="content-type.d.ts" />
/// <reference path="../express/express.d.ts" />

import contentType = require('content-type');
import express = require('express');


var obj = contentType.parse('image/svg+xml; charset=utf-8');

console.log(obj.type);  // => 'image/svg+xml'
console.log(obj.parameters.charset);  // => 'utf-8'


var req: express.Request;
obj = contentType.parse(req);

var res: express.Response;
obj = contentType.parse(res);

var str: string = contentType.format({type: 'image/svg+xml'});

