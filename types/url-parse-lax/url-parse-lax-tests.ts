import urlParseLax from "url-parse-lax";

// $ExpectType UrlObject
urlParseLax("sindresorhus.com");

// $ExpectType UrlObject
urlParseLax("[2001:db8::]:8000");

// $ExpectType UrlObject
urlParseLax("definitelytyped.org", { https: true });
