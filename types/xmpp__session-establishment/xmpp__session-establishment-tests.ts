import Connection from "@xmpp/connection";
import iqCaller from "@xmpp/iq/caller.js";
import middleware, { Entity } from "@xmpp/middleware";
import sessionEstablishment from "@xmpp/session-establishment";
import streamFeatures from "@xmpp/stream-features";
import { Element } from "@xmpp/xml";

class Foo extends Connection implements Entity {
    domain?: string;
    hookOutgoing?: (stanza: Element) => Promise<void>;

    headerElement() {
        return new Element("foo");
    }

    socketParameters(service: string) {
        return null;
    }
}

const ent = new Foo({ service: "foo", domain: "foo.bar" });
const mw = middleware({ entity: ent });
const sf = streamFeatures({ middleware: mw }); // $ExpectType StreamFeatures<Foo>
const caller = iqCaller({ middleware: mw, entity: ent }); // $ExpectType IQCaller<Foo>

sessionEstablishment({ streamFeatures: sf, iqCaller: caller }); // $ExpectType void
