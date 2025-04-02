import gitUp = require("git-up");

// test type exports
type PU = gitUp.ParsedUrl;

const parsedUrl = gitUp("git@github.com:IonicaBizau/node-parse-url.git"); // $ExpectType ParsedUrl

parsedUrl.protocols; // $ExpectType Protocol[]
parsedUrl.port; // $ExpectType string
parsedUrl.resource; // $ExpectType string
parsedUrl.user; // $ExpectType string
parsedUrl.pathname; // $ExpectType string
parsedUrl.hash; // $ExpectType string
parsedUrl.search; // $ExpectType string
parsedUrl.href; // $ExpectType string
parsedUrl.protocol; // $ExpectType Protocol
parsedUrl.token; // $ExpectType string
parsedUrl.query; // $ExpectType Record<string, string>
parsedUrl.parse_failed; // $ExpectType boolean
