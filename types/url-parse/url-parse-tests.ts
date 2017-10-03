import UrlParse = require("url-parse");

const URL = UrlParse.URL;
const parse = UrlParse.default;

const url1 = new URL('https://github.com/foo/bar');
const url2 = new URL('foo/bar', "https://github.com/", true);
const url3 = new URL('foo/bar', {}, function() { return "1337"; });

const url4 = parse('https://github.com/foo/bar', true);

parse.extractProtocol("");
parse.location("");
parse.qs;