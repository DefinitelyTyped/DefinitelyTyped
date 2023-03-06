import jid = require('@xmpp/jid');

// test type exports
type JID = jid.JID;

const addr = jid('alice@wonderland.net/rabbithole'); // $ExpectType JID
jid('alice', 'wonderland.net'); // $ExpectType JID
jid(null, 'wonderland.net'); // $ExpectType JID
jid(undefined, 'wonderland.net'); // $ExpectType JID
jid('alice', 'wonderland.net', 'rabbithole'); // $ExpectType JID
jid('alice', 'wonderland.net', null); // $ExpectType JID
jid('alice', 'wonderland.net', undefined); // $ExpectType JID

jid.jid('alice@wonderland.net/rabbithole'); // $ExpectType JID
jid.jid('alice', 'wonderland.net'); // $ExpectType JID
jid.jid(null, 'wonderland.net'); // $ExpectType JID
jid.jid(undefined, 'wonderland.net'); // $ExpectType JID
jid.jid('alice', 'wonderland.net', 'rabbithole'); // $ExpectType JID
jid.jid('alice', 'wonderland.net', null); // $ExpectType JID
jid.jid('alice', 'wonderland.net', undefined); // $ExpectType JID

addr.local = 'alice';
addr.local; // $ExpectType string
addr.setLocal('alice'); // $ExpectType void
addr.setLocal('alice', true); // $ExpectType void
addr.getLocal(); // $ExpectType string

addr.domain = 'wonderland.net';
addr.domain; // $ExpectType string
addr.setDomain('wonderland.net'); // $ExpectType void
addr.getDomain(); // $ExpectType string

addr.resource = 'rabbithole';
addr.resource; // $ExpectType string
addr.setResource('rabbithole'); // $ExpectType void
addr.getResource(); // $ExpectType string

addr.toString(); // $ExpectType string
addr.toString(true); // $ExpectType string
addr.bare(); // $ExpectType JID

addr.equals(addr); // $ExpectType boolean

jid.equal(addr, addr); // $ExpectType boolean

jid.equal(addr, addr); // $ExpectType boolean
jid.detectEscape('homies'); // $ExpectType boolean
jid.escapeLocal('homies'); // $ExpectType string
jid.unescapeLocal('homies'); // $ExpectType string
jid.parse('homies'); // $ExpectType JID

class MyJID extends jid.JID {}
