import jid = require('@xmpp/jid');

let addr: jid.JID;
let str: string;
let bool: boolean;

addr = jid('alice@wonderland.net/rabbithole');
addr = jid('alice', 'wonderland.net', 'rabbithole');

addr.local = 'alice';
str = addr.local;
addr.setLocal('alice');
addr.setLocal('alice', true);
str = addr.getLocal();

addr.domain = 'wonderland.net';
str = addr.domain;
addr.setDomain('wonderland.net');
str = addr.getDomain();

addr.resource = 'rabbithole';
str = addr.resource;
addr.setResource('rabbithole');
str = addr.getResource();

str = addr.toString();
str = addr.toString(true);
addr = addr.bare();

bool = addr.equals(addr);

bool = jid.equal(addr, addr);

addr = jid.createJID('my', 'homies');
bool = jid.equal(addr, addr);
bool = jid.detectEscape('homies');
str = jid.escapeLocal('homies');
str = jid.unescapeLocal('homies');
addr = jid.parse('homies');
