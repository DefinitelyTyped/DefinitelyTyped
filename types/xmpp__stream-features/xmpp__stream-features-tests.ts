import Connection = require('@xmpp/connection');
import middleware = require('@xmpp/middleware');
import streamFeatures = require('@xmpp/stream-features');
import route = require('@xmpp/stream-features/route');
import { Element } from '@xmpp/xml';

// test type exports
type StreamFeatures<TEntity extends middleware.Entity> = streamFeatures.StreamFeatures<TEntity>;

class Foo extends Connection implements middleware.Entity {
    domain?: string;
    hookOutgoing?: (stanza: Element) => Promise<void>;

    headerElement() {
        return new Element('foo');
    }

    socketParameters(service: string) {
        return null;
    }
}

const mw = middleware({ entity: new Foo({ service: 'foo', domain: 'foo.bar' }) });
const sf = streamFeatures({ middleware: mw }); // $ExpectType StreamFeatures<Foo>
// $ExpectType Middleware<IncomingContext<Foo>>
sf.use('foo', 'ns', (ctx, next, features) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    features; // $ExpectType Element

    return Promise.resolve();
});
// $ExpectType Middleware<IncomingContext<Foo>>
sf.use('foo', undefined, (ctx, next, features) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    features; // $ExpectType Element

    return Promise.resolve();
});

route(); // $ExpectType (context: IncomingContext<Entity>, next: Next) => Promise<any>
route()(null as any as middleware.IncomingContext<Foo>, async () => {}); // $ExpectType Promise<any>
