import Connection from "@xmpp/connection";
import XMPPError from "@xmpp/error";
import middleware, { Entity } from "@xmpp/middleware";
import sasl from "@xmpp/sasl";
import SASLError from "@xmpp/sasl/lib/SASLError.js";
import streamFeatures from "@xmpp/stream-features";
import { Element } from "@xmpp/xml";
import SASLAnonymous from "sasl-anonymous";
import SASLPlain from "sasl-plain";
import SASLScramSha1 from "sasl-scram-sha-1";
import SASLFactory from "saslmechanisms";

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

const saslMw = sasl({ streamFeatures: sf, saslFactory }, {}); // $ExpectType SASL
sasl({ streamFeatures: sf, saslFactory }, { username: "foo" }); // $ExpectType SASL
sasl({ streamFeatures: sf, saslFactory }, { password: "foo" }); // $ExpectType SASL
// $ExpectType SASL
sasl({ streamFeatures: sf, saslFactory }, async (cb, mech) => {
    cb; // $ExpectType (credentials: CredentialsObj) => Promise<void>
    mech; // $ExpectType string[]

    await cb({ username: "foo", password: "bar" });
});

class MyMechanism implements SASLFactory.Mechanism {
    name = "foo";

    response(cred: { [key: string]: any }) {
        return "bar";
    }

    challenge(chal: string) {}
}

saslMw.use("foo", MyMechanism); // $ExpectType Factory
saslMw.use(MyMechanism); // $ExpectType Factory
saslMw.use(SASLAnonymous); // $ExpectType Factory
saslMw.use(SASLPlain); // $ExpectType Factory
saslMw.use(SASLScramSha1); // $ExpectType Factory

const err = new SASLError("foo", "bar", new Element("foo"));
const xmppErr: XMPPError<"SASLError"> = err;
err.name; // $ExpectType "SASLError"
