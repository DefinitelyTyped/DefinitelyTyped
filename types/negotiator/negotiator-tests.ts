/// <reference types="node" />
import Negotiator = require('negotiator');
import * as http from 'http';

const request = {
    headers: {
        Accept: 'text/html, application/*;q=0.2, image/jpeg;q=0.8',
        'Accept-Language': 'en;q=0.8, es, pt',
        'Accept-Charset': 'utf-8, iso-8859-1;q=0.8, utf-7;q=0.2',
        'Accept-Encoding': 'gzip, compress;q=0.2, identity;q=0.5',
    }
};

const negotiator = new Negotiator(request);

const availableMediaTypes = ['text/html', 'text/plain', 'application/json'];
// $ExpectType string[]
negotiator.mediaTypes();
negotiator.mediaTypes(availableMediaTypes);
// $ExpectType string | undefined
negotiator.mediaType();
negotiator.mediaType(availableMediaTypes);

const availableLanguages = ['en', 'es', 'fr'];
// $ExpectType string[]
negotiator.languages();
negotiator.languages(availableLanguages);
// $ExpectType string | undefined
negotiator.language();
negotiator.language(availableLanguages);

const availableCharsets = ['utf-8', 'iso-8859-1', 'iso-8859-5'];
// $ExpectType string[]
negotiator.charsets();
negotiator.charsets(availableCharsets);
// $ExpectType string | undefined
negotiator.charset();
negotiator.charset(availableCharsets);

const availableEncodings = ['identity', 'gzip'];
// $ExpectType string[]
negotiator.encodings();
negotiator.encodings(availableEncodings);
// $ExpectType string | undefined
negotiator.encoding();
negotiator.encoding(availableEncodings);

http.createServer((req, res) => {
    new Negotiator(req);
});
