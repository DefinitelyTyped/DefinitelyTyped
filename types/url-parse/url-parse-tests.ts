import UrlParse = require("url-parse");

const parse = UrlParse.default;

const url = new URL('https://github.com/foo/bar');
const url2 = parse('https://github.com/foo/bar', true);

parse.extractProtocol("");
parse.location("");
parse.qs;
