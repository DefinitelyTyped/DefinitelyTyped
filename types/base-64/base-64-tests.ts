import * as base64 from 'base-64';
import * as utf8 from 'utf8';

let text = 'foo © bar 𝌆 baz';
let bytes = utf8.encode(text);
let encoded = base64.encode(bytes);
// → 'Zm9vIMKpIGJhciDwnYyGIGJheg=='

encoded = 'Zm9vIMKpIGJhciDwnYyGIGJheg==';
bytes = base64.decode(encoded);
text = utf8.decode(bytes);

const version = base64.version;
