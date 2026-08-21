import * as http from "http";
import originalUrl = require("original-url");

// test type exports
type OriginalUrl = originalUrl.OriginalUrl;

declare const req: http.IncomingMessage;

const url = originalUrl(req); // $ExpectType OriginalUrl

url.raw; // $ExpectType string | undefined
url.protocol; // $ExpectType string
url.hostname; // $ExpectType string | undefined
url.port; // $ExpectType number | undefined
url.pathname; // $ExpectType string | undefined
url.search; // $ExpectType string | undefined
url.hash; // $ExpectType string | undefined
url.full; // $ExpectType string | undefined
