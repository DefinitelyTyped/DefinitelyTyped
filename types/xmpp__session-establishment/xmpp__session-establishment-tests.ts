import Connection = require('@xmpp/connection');
import iqCaller = require('@xmpp/iq/caller');
import middleware = require('@xmpp/middleware');
import sessionEstablishment = require('@xmpp/session-establishment');
import streamFeatures = require('@xmpp/stream-features');
import { Element } from '@xmpp/xml';

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
const sf = streamFeatures({ middleware: mw }); // $ExpectType StreamFeatures<Foo>
const caller = iqCaller({ middleware: mw, entity: ent }); // $ExpectType IQCaller<Foo>

sessionEstablishment({ streamFeatures: sf, iqCaller: caller }); // $ExpectType void
