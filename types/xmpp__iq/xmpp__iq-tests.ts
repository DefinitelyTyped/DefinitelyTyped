import Connection = require('@xmpp/connection');
import iqCallee = require('@xmpp/iq/callee');
import iqCaller = require('@xmpp/iq/caller');
import middleware = require('@xmpp/middleware');
import { Element } from '@xmpp/xml';

// test type exports
type IQCallee<TEntity extends middleware.Entity> = iqCallee.IQCallee<TEntity>;
type IQCaller<TEntity extends middleware.Entity> = iqCaller.IQCaller<TEntity>;

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

const ent = new Foo({ service: 'foo', domain: 'foo.bar' });
const mw = middleware({ entity: ent });

const callee = iqCallee({ middleware: mw, entity: ent }); // $ExpectType IQCallee<Foo>
callee.get('foo', 'bar', (ctx, next) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    return next();
});
callee.set('foo', 'bar', (ctx, next) => {
    ctx; // $ExpectType IncomingContext<Foo>
    next; // $ExpectType Next
    return next();
});

const caller = iqCaller({ middleware: mw, entity: ent }); // $ExpectType IQCaller<Foo>
caller.entity; // $ExpectType Foo
caller.handlers; // $ExpectType Map<string, Deferred<Element>>
caller.middleware; // $ExpectType Middleware<Foo>
caller.get(new Element('foo')); // $ExpectType Promise<Element | undefined>
caller.get(new Element('foo'), 'bar'); // $ExpectType Promise<Element | undefined>
caller.get(new Element('foo'), 'bar', 10); // $ExpectType Promise<Element | undefined>
caller.set(new Element('foo')); // $ExpectType Promise<Element | undefined>
caller.set(new Element('foo'), 'bar'); // $ExpectType Promise<Element | undefined>
caller.set(new Element('foo'), 'bar', 10); // $ExpectType Promise<Element | undefined>
caller.request(new Element('foo')); // $ExpectType Promise<Element>
caller.request(new Element('foo'), 10); // $ExpectType Promise<Element>
caller.start(); // $ExpectType void
