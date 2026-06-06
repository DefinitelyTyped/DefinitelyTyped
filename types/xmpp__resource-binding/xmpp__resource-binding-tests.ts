import Connection from "@xmpp/connection";
import iqCaller from "@xmpp/iq/caller.js";
import middleware, { Entity } from "@xmpp/middleware";
import resourceBinding from "@xmpp/resource-binding";
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

resourceBinding({ streamFeatures: sf, iqCaller: caller }); // $ExpectType void
resourceBinding({ streamFeatures: sf, iqCaller: caller }, new Element("foo")); // $ExpectType void
// $ExpectType void
resourceBinding({ streamFeatures: sf, iqCaller: caller }, async bind => {
    bind; // $ExpectType (resource: Node) => Promise<string>
    const jid = await bind(new Element("foo")); // $ExpectType string
});
