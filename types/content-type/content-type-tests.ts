import contentType = require('content-type');
import express = require('express');

let obj = contentType.parse('image/svg+xml; charset=utf-8');

console.log(obj.type);  // => 'image/svg+xml'
console.log(obj.parameters.charset);  // => 'utf-8'

declare const req: express.Request;
obj = contentType.parse(req);

declare const res: express.Response;
obj = contentType.parse(res);

const str: string = contentType.format({type: 'image/svg+xml'});

declare const media: contentType.MediaType;
contentType.format(media);
