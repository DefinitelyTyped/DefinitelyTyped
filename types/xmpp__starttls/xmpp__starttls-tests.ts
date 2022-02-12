import Connection = require('@xmpp/connection');
import middleware = require('@xmpp/middleware');
import starttls = require('@xmpp/starttls/client');
import { canUpgrade, upgrade } from '@xmpp/starttls/starttls';
import streamFeatures = require('@xmpp/stream-features');
import { Element } from '@xmpp/xml';
import * as net from 'net';

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

starttls({ streamFeatures: sf }); // $ExpectType Middleware<IncomingContext<Foo>>
canUpgrade(net.connect(8080)); // $ExpectType boolean
upgrade(net.connect(8080)); // $ExpectType TLSSocket
