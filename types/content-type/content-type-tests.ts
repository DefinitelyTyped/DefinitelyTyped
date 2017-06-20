import contentType = require('content-type');
import express = require('express');

let obj = contentType.parse('image/svg+xml; charset=utf-8');

console.log(obj.type);  // => 'image/svg+xml'
console.log(obj.parameters.charset);  // => 'utf-8'

let req: express.Request;
obj = contentType.parse(req);

let res: express.Response;
obj = contentType.parse(res);

let str: string = contentType.format({type: 'image/svg+xml'});

let media: contentType.MediaType;
contentType.format(media);
