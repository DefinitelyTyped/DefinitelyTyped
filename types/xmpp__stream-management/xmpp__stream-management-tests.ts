import Connection = require('@xmpp/connection');
import middleware = require('@xmpp/middleware');
import streamFeatures = require('@xmpp/stream-features');
import streamManagement = require('@xmpp/stream-management');
import { Element } from '@xmpp/xml';

// test type exports
type StreamManagement = streamManagement.StreamManagement;

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
