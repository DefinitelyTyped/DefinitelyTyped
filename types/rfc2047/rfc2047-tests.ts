import * as rfc2047 from "rfc2047";

rfc2047.decode(""); // $ExpectType string
rfc2047.encode(""); // $ExpectType string
