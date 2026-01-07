import Connection from "@xmpp/connection";
import debug, { hideSensitive } from "@xmpp/debug";
import { Element } from "@xmpp/xml";

debug(null as any as Connection); // $ExpectType void
debug(null as any as Connection, true); // $ExpectType void
hideSensitive(new Element("foo")); // $ExpectType Element
