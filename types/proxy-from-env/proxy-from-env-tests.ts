import { getProxyForUrl } from "proxy-from-env";
import { parse } from "url";

// $ExpectType string
getProxyForUrl("http://microsoft.github.io/TypeSearch/");

// $ExpectType string
getProxyForUrl(parse("http://microsoft.github.io/TypeSearch/"));
