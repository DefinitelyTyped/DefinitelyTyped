import Connection = require('@xmpp/connection');
import debug = require('@xmpp/debug');
import { Element } from '@xmpp/xml';

debug(null as any as Connection); // $ExpectType void
debug(null as any as Connection, true); // $ExpectType void
debug.hideSensitive(new Element('foo')); // $ExpectType Element
debug.hideSensitive = el => {
    el; // $ExpectType Element
    return el;
};
