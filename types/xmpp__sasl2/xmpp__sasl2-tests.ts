import Connection from "@xmpp/connection";
import middleware, { Entity } from "@xmpp/middleware";
import sasl2, { CredentialsFactory, SASL2 } from "@xmpp/sasl2";
import streamFeatures from "@xmpp/stream-features";
import xml, { Element } from "@xmpp/xml";
import SASLFactory = require("saslmechanisms");

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
const sf = streamFeatures({ middleware: mw });

const saslFactory = new SASLFactory();

const onAuthenticate: CredentialsFactory<Foo> = (callback, mechanisms, fast, entity) => {
    return callback(
        {},
        mechanisms[0],
        xml("user-agent"),
    );
};

const saslMw = sasl2({ streamFeatures: sf, saslFactory }, onAuthenticate); // $ExpectType SASL2

saslMw.use(
    "foo",
    async element => {
        element; // $ExpectType Element
    },
    async element => {
        element; // $ExpectType Element
    },
);
