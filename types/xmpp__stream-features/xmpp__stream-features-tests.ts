import Connection from "@xmpp/connection";
import middleware, { Entity } from "@xmpp/middleware";
import streamFeatures, { StreamFeatures } from "@xmpp/stream-features";
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

const mw = middleware({ entity: new Foo({ service: "foo", domain: "foo.bar" }) });
const sf = streamFeatures({ middleware: mw }); // $ExpectType StreamFeatures<Foo>
// $ExpectType Middleware<IncomingContext<Foo>>
sf.use("foo", "ns", (ctx, next, features) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    features; // $ExpectType Element

    return Promise.resolve();
});
// $ExpectType Middleware<IncomingContext<Foo>>
sf.use("foo", undefined, (ctx, next, features) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    features; // $ExpectType Element

    return Promise.resolve();
});
