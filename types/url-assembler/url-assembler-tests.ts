import UrlAssembler = require('url-assembler');
UrlAssembler('http://goggle.com').segment('string');
const f = new UrlAssembler('https://foo/bar/');

function printUrl(u: UrlAssembler) {
    return u.toJSON();
}
