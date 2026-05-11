import Connection from "@xmpp/connection";
import middleware, { Entity } from "@xmpp/middleware";
import starttls from "@xmpp/starttls";
import { canUpgrade, upgrade } from "@xmpp/starttls/starttls.js";
import streamFeatures from "@xmpp/stream-features";
import { Element } from "@xmpp/xml";
import * as net from "net";

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

const mw = middleware({ entity: new Foo({ service: "foo", domain: "foo.bar" }) });
const sf = streamFeatures({ middleware: mw }); // $ExpectType StreamFeatures<Foo>

starttls({ streamFeatures: sf }); // $ExpectType Middleware<IncomingContext<Foo>>
canUpgrade(net.connect(8080)); // $ExpectType boolean
upgrade(net.connect(8080)); // $ExpectType TLSSocket
