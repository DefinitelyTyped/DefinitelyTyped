import UrlParse = require("url-parse");

const URL = UrlParse.default;
const parse = UrlParse.parse;

const url1 = new URL('https://github.com/foo/bar');
const url2 = new URL('foo/bar', "https://github.com/", true);
const url3 = new URL('foo/bar', {}, function() {});

const url4 = parse('https://github.com/foo/bar', true);
