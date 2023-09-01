import { decode, encode } from "@xmpp/base64";

encode("foo"); // $ExpectType string
decode("foo"); // $ExpectType string
