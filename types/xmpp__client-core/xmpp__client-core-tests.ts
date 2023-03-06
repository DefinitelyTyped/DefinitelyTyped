import { Client, xml, jid } from '@xmpp/client-core';
import Connection = require('@xmpp/connection');
import { Element } from '@xmpp/xml';

// test type exports
type C = Client;

const client = new Client({ service: 'foo', domain: 'foo.bar' });
const conn: Connection = client;
client.transports; // $ExpectType (typeof Connection)[]

client.Transport; // $ExpectType typeof Connection | undefined
client.send(new Element('foo')); // $ExpectType Promise<void>
client.send(new Element('foo'), 'bar', 1); // $ExpectType Promise<void>
client.sendMany([new Element('foo')]); // $ExpectType Promise<void>
client.sendMany(new Set([new Element('foo')])); // $ExpectType Promise<void>
client.sendMany([new Element('foo')], 'bar', 1); // $ExpectType Promise<void>
client.sendMany(new Set([new Element('foo')]), 'bar', 1); // $ExpectType Promise<void>
client.header(new Element('foo')); // $ExpectType string
client.header(new Element('foo'), 'bar', 1); // $ExpectType string
client.headerElement(); // $ExpectType Element
client.headerElement('bar', 1); // $ExpectType Element
client.footer(new Element('foo')); // $ExpectType string
client.footer(new Element('foo'), 'bar', 1); // $ExpectType string
client.footerElement(); // $ExpectType Element
client.footerElement('bar', 1); // $ExpectType Element
client.socketParameters('foo'); // $ExpectType unknown
client.socketParameters('foo', 'bar', 1); // $ExpectType unknown

xml('foo');
jid('foo@bar.baz');
