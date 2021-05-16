import * as base64 from "base-64";
import * as utf8 from "utf8";

base64.encode(utf8.encode("foo © bar 𝌆 baz")); // $ExpectType string

base64.decode("Zm9vIMKpIGJhciDwnYyGIGJheg=="); // $ExpectType string
utf8.decode(base64.decode("Zm9vIMKpIGJhciDwnYyGIGJheg==")); // $ExpectType string

base64.version; // $ExpectType string
