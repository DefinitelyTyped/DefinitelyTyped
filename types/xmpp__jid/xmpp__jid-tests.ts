import {JID} from '@xmpp/jid';

/*
 * All return an instance of JID.JID, the new operator is optional.
 */
let addr = new JID('alice@wonderland.net/rabbithole');          // OK
addr = new JID('alice', 'wonderland.net', 'rabbithole');    // BEST; see section on escaping below

/*
 * local
 */
addr.local = 'alice';
addr.local;      // alice
// same as
addr.setLocal('alice');
addr.getLocal(); // alice

/*
 * domain
 */
addr.domain = 'wonderland.net';
addr.domain;      // wonderland.net
// same as
addr.setDomain('wonderland.net');
addr.getDomain(); // wonderland.net

/*
 * resource
 */
addr.resource = 'rabbithole';
addr.resource;      // rabbithole
// same as
addr.setResource('rabbithole');
addr.getResource(); // rabbithole

addr.toString(); // alice@wonderland.net/rabbithole
addr.bare();     // returns a JID without resource

const some_jid = new JID('is', 'a', 'test');
addr.equals(some_jid); // returns true if the two JIDs are equal, false otherwise
