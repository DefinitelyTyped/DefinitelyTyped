import Connection = require('@xmpp/connection');
import middleware = require('@xmpp/middleware');
import Context = require('@xmpp/middleware/lib/Context');
import IncomingContext = require('@xmpp/middleware/lib/IncomingContext');
import OutgoingContext = require('@xmpp/middleware/lib/OutgoingContext');
import StanzaError = require('@xmpp/middleware/lib/StanzaError');
import { Element } from '@xmpp/xml';

// test type exports
type E = middleware.Entity;
type Res<T extends E> = middleware.Middleware<T>;
type IC<T extends E> = middleware.IncomingContext<T>;
type OC<T extends E> = middleware.OutgoingContext<T>;
type Err = StanzaError;

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

const entity = new Foo({ service: 'foo', domain: 'foo.bar' });

const res = middleware({ entity }); // $ExpectType Middleware<Foo>
// $ExpectType (ctx: IncomingContext<Foo>, next: Next) => Promise<void>
res.use(async (ctx, next) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    await next();

    ctx.stanza; // $ExpectType Element
    ctx.entity; // $ExpectType Foo
    ctx.name; // $ExpectType string
    ctx.id; // $ExpectType string
    ctx.type; // $ExpectType string
    ctx.from; // $ExpectType JID | null
    ctx.to; // $ExpectType JID | null
    ctx.local; // $ExpectType string
    ctx.domain; // $ExpectType string
    ctx.resource; // $ExpectType string
});
// $ExpectType (ctx: OutgoingContext<Foo>, next: Next) => Promise<void>
res.filter(async (ctx, next) => {
    ctx; // $ExpectType OutgoingContext<Foo>
    next; // $ExpectType Next
    await next();

    ctx.stanza; // $ExpectType Element
    ctx.entity; // $ExpectType Foo
    ctx.name; // $ExpectType string
    ctx.id; // $ExpectType string
    ctx.type; // $ExpectType string
    ctx.from; // $ExpectType JID | null
    ctx.to; // $ExpectType JID | null
    ctx.local; // $ExpectType string
    ctx.domain; // $ExpectType string
    ctx.resource; // $ExpectType string
});

const err = new StanzaError('foo');
new StanzaError('foo', 'bar');
new StanzaError('foo', 'bar', new Element('el'));
new StanzaError('foo', 'bar', new Element('el'), 'baz');

err.name; // $ExpectType "StanzaError"
err.type; // $ExpectType string | undefined

let ctx = new Context<Foo>(entity, new Element('foo'));
ctx.stanza; // $ExpectType Element
ctx.entity; // $ExpectType Foo
ctx.name; // $ExpectType string
ctx.id; // $ExpectType string
ctx.type; // $ExpectType string
ctx.from; // $ExpectType JID | null
ctx.to; // $ExpectType JID | null
ctx.local; // $ExpectType string
ctx.domain; // $ExpectType string
ctx.resource; // $ExpectType string

const oCtx = new OutgoingContext<Foo>(entity, new Element('foo'));
ctx = oCtx;
const iCtx = new IncomingContext<Foo>(entity, new Element('foo'));
ctx = iCtx;
