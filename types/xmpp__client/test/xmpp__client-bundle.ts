// test type exports
type Opts = XMPP.Options;
type Cl = XMPP.Client;

const c = XMPP.client(); // $ExpectType Client
XMPP.client({ resource: 'foo' }); // $ExpectType Client
XMPP.client({ resource: XMPP.xml('foo') }); // $ExpectType Client
XMPP.client({ resource: async cb => {} }); // $ExpectType Client
XMPP.client({ credentials: { username: 'foo' } }); // $ExpectType Client
XMPP.client({ credentials: { password: 'foo' } }); // $ExpectType Client
XMPP.client({ credentials: async (cb, mech) => {} }); // $ExpectType Client
XMPP.client({ username: 'foo' }); // $ExpectType Client
XMPP.client({ password: 'foo' }); // $ExpectType Client
XMPP.client({ domain: 'foo' }); // $ExpectType Client
XMPP.client({ service: 'foo.bar' }); // $ExpectType Client
XMPP.client({ lang: 'en' }); // $ExpectType Client

c.entity; // $ExpectType Client
c.reconnect; // $ExpectType Reconnect<Client>
c.middleware; // $ExpectType Middleware<Client>
c.streamFeatures; // $ExpectType StreamFeatures<Client>
c.iqCaller; // $ExpectType IQCaller<Client>
c.iqCallee; // $ExpectType IQCallee<Client>
c.starttls; // $ExpectType Middleware<IncomingContext<Client>>
c.sasl; // $ExpectType SASL
c.streamManagement; // $ExpectType StreamManagement
c.mechanisms; // $ExpectType ({ plain: undefined; } | { anonymous: undefined; })[]

XMPP.jid('foo');
XMPP.jid(null, 'foo', 'bar');

XMPP.xml('foo');
XMPP.xml('foo', { foo: 'bar' }, 'bar');
