/// <reference types="node" />

import * as contentType from 'content-type';
import * as http from 'http';

const mediaType = contentType.parse('image/svg+xml; charset=utf-8');
mediaType; // $ExpectType ParsedMediaType
mediaType.type; // $ExpectType string
mediaType.parameters; // $ExpectType { [key: string]: string; }

http.createServer((req, res) => {
    contentType.parse(req);
    contentType.parse(res);
});

// $ExpectType string
contentType.format({type: 'image/svg+xml'});
contentType.format({type: 'image/svg+xml', parameters: {charset: 'utf-8'}});
contentType.format(mediaType);
