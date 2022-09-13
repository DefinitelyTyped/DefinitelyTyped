import { Client, client, jid, Options, xml } from '@xmpp/client';
import * as rn from '@xmpp/client/react-native';
import * as browser from '@xmpp/client/browser';
import * as browserBundle from '@xmpp/client/dist/xmpp';
import * as browserBundleMin from '@xmpp/client/dist/xmpp.min';
import getDomain = require('@xmpp/client/lib/getDomain');
import { Client as ClientCore } from '@xmpp/client-core';
import { Element } from '@xmpp/xml';

// test type exports
type Opts = Options;
type Cl = Client;
type Opts2 = rn.Options;
type Cl2 = rn.Client;
type Opts3 = browser.Options;
type Cl3 = browser.Client;
type Opts4 = browserBundle.Options;
type Cl4 = browserBundle.Client;
type Opts5 = browserBundleMin.Options;
type Cl5 = browserBundleMin.Client;

const c = client(); // $ExpectType Client
client({ resource: 'foo' }); // $ExpectType Client
client({ resource: new Element('foo') }); // $ExpectType Client
client({ resource: async cb => {} }); // $ExpectType Client
client({ credentials: { username: 'foo' } }); // $ExpectType Client
client({ credentials: { password: 'foo' } }); // $ExpectType Client
client({ credentials: async (cb, mech) => {} }); // $ExpectType Client
client({ username: 'foo' }); // $ExpectType Client
client({ password: 'foo' }); // $ExpectType Client
client({ domain: 'foo' }); // $ExpectType Client
client({ service: 'foo.bar' }); // $ExpectType Client
client({ lang: 'en' }); // $ExpectType Client

const rnC = rn.client(); // $ExpectType Client
const browserC = browser.client(); // $ExpectType Client
const browserBundleC = browserBundle.client(); // $ExpectType Client
const browserBundleMinC = browserBundleMin.client(); // $ExpectType Client

const cc: ClientCore = c;
c.entity; // $ExpectType Client
c.reconnect; // $ExpectType Reconnect<Client>
c.middleware; // $ExpectType Middleware<Client>
c.streamFeatures; // $ExpectType StreamFeatures<Client>
c.iqCaller; // $ExpectType IQCaller<Client>
c.iqCallee; // $ExpectType IQCallee<Client>
c.starttls; // $ExpectType Middleware<IncomingContext<Client>>
c.sasl; // $ExpectType SASL
c.streamManagement; // $ExpectType StreamManagement
c.mechanisms; // $ExpectType ({ scramsha1: undefined; } | { plain: undefined; } | { anonymous: undefined; })[]

rnC.mechanisms; // $ExpectType ({ plain: undefined; } | { anonymous: undefined; })[]
browserC.mechanisms; // $ExpectType ({ plain: undefined; } | { anonymous: undefined; })[]
browserBundleC.mechanisms; // $ExpectType ({ plain: undefined; } | { anonymous: undefined; })[]
browserBundleMinC.mechanisms; // $ExpectType ({ plain: undefined; } | { anonymous: undefined; })[]

getDomain('foo.bar'); // $ExpectType string

jid('foo');
jid(null, 'foo', 'bar');
rn.jid('foo');
rn.jid(null, 'foo', 'bar');
browser.jid('foo');
browser.jid(null, 'foo', 'bar');
browserBundle.jid('foo');
browserBundle.jid(null, 'foo', 'bar');
browserBundleMin.jid('foo');
browserBundleMin.jid(null, 'foo', 'bar');

xml('foo');
xml('foo', { foo: 'bar' }, 'bar');
rn.xml('foo');
rn.xml('foo', { foo: 'bar' }, 'bar');
browser.xml('foo');
browser.xml('foo', { foo: 'bar' }, 'bar');
browserBundle.xml('foo');
browserBundle.xml('foo', { foo: 'bar' }, 'bar');
browserBundleMin.xml('foo');
browserBundleMin.xml('foo', { foo: 'bar' }, 'bar');
