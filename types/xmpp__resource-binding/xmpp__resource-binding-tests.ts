import Connection = require('@xmpp/connection');
import iqCaller = require('@xmpp/iq/caller');
import middleware = require('@xmpp/middleware');
import resourceBinding = require('@xmpp/resource-binding');
import streamFeatures = require('@xmpp/stream-features');
import { Element } from '@xmpp/xml';

// test type exports
type Resource = resourceBinding.Resource;
type ResourceFn = resourceBinding.ResourceFn;

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

resourceBinding({ streamFeatures: sf, iqCaller: caller }); // $ExpectType void
resourceBinding({ streamFeatures: sf, iqCaller: caller }, new Element('foo')); // $ExpectType void
// $ExpectType void
resourceBinding({ streamFeatures: sf, iqCaller: caller }, async bind => {
    bind; // $ExpectType (resource: Node) => Promise<string>
    const jid = await bind(new Element('foo')); // $ExpectType string
});
