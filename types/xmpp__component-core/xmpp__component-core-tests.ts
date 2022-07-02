import { Component, SocketParameters, jid, xml } from '@xmpp/component-core';
import ConnectionTCP = require('@xmpp/connection-tcp');

// test type exports
type Comp = Component;
type SockParams = SocketParameters;

const comp = new Component({ service: 'foo', domain: 'foo.bar' });
const connTcp: ConnectionTCP = comp;
const params = comp.socketParameters('foo'); // $ExpectType SocketParameters
params.port; // $ExpectType number
params.host; // $ExpectType string
comp.authenticate('foo', 'bar'); // $ExpectType Promise<void>

xml('foo');
jid('foo@bar.baz');
