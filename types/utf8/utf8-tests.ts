import * as utf8 from "utf8";

utf8.encode("\x49"); // $ExpectType string
utf8.encode("\uD800\uDC01"); // $ExpectType string
utf8.decode("\xC2\x49"); // $ExpectType string
utf8.decode("\xF0\x90\x80\x81"); // $ExpectType string
utf8.version; // $ExpectType string
