import parse = require("url-parse");

const url1 = new URL("foo/bar", "https://github.com/");
const url2 = parse("https://github.com/foo/bar?baz=true");
const url3 = parse("https://github.com/foo/bar", true, true);
const url4 = parse("foo/bar", "https://github.com/");
const url5 = parse("foo/bar", "https://github.com/", () => "queryParserOverride");

url2.hash;
url2.hostname;
url2.query.baz;

url3.slashes;
url3.set("protocol", "http://");

parse.extractProtocol("https://github.com/foo/bar");
parse.location("https://github.com/foo/bar");
parse.qs;
