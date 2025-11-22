import Connection from "@xmpp/connection";
import middleware, { Entity } from "@xmpp/middleware";
import streamFeatures from "@xmpp/stream-features";
import streamManagement from "@xmpp/stream-management";
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

const entity = new Foo({ service: "foo", domain: "foo.bar" });
const mw = middleware({ entity });
const sf = streamFeatures({ middleware: mw });

const sm = streamManagement({ streamFeatures: sf, entity, middleware: mw }); // $ExpectType StreamManagement
sm.allowResume; // $ExpectType boolean
sm.preferredMaximum; // $ExpectType number | null
sm.enabled; // $ExpectType boolean
sm.id; // $ExpectType string
sm.outbound; // $ExpectType number
sm.inbound; // $ExpectType number
sm.max; // $ExpectType number | null
