import { getProxyForUrl } from "proxy-from-env";

// $ExpectType string
getProxyForUrl("http://microsoft.github.io/TypeSearch/");
