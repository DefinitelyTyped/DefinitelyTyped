import Connection = require('@xmpp/connection');
import { EventEmitter } from '@xmpp/events';
import reconnect = require('@xmpp/reconnect');
import { Element } from '@xmpp/xml';

// test type exports
type R<T extends Connection> = reconnect.Reconnect<T>;
type RE = reconnect.ReconnectEvents;

class Foo extends Connection {
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

const rec = reconnect({ entity }); // $ExpectType Reconnect<Foo>
const e: EventEmitter = rec;
rec.entity; // $ExpectType Foo
rec.delay; // $ExpectType number
rec.scheduleReconnect(); // $ExpectType void
rec.reconnect(); // $ExpectType Promise<void>
rec.start(); // $ExpectType void
rec.stop(); // $ExpectType void

new rec.constructor(entity); // $ExpectType ReconnectCls<Foo>

rec.addListener('reconnected', () => {});
rec.addListener('reconnecting', () => {});

rec.on('reconnected', () => {});
rec.on('reconnecting', () => {});

rec.once('reconnected', () => {});
rec.once('reconnecting', () => {});

rec.prependListener('reconnected', () => {});
rec.prependListener('reconnecting', () => {});

rec.prependOnceListener('reconnected', () => {});
rec.prependOnceListener('reconnecting', () => {});

rec.removeListener('reconnected', () => {});
rec.removeListener('reconnecting', () => {});

rec.off('reconnected', () => {});
rec.off('reconnecting', () => {});

rec.emit('reconnected');
rec.emit('reconnecting');
