import { Component, component, jid, Options, xml } from '@xmpp/component';
import { Component as ComponentCore } from '@xmpp/component-core';

// test type exports
type Opts = Options;
type Cl = Component;

const c = component({}); // $ExpectType Component
component({ password: 'foo' }); // $ExpectType Component
// $ExpectType Component
component({
    password: async auth => {
        auth; // $ExpectType (password: string) => Promise<void>
        await auth('foo');
    },
});
component({ domain: 'foo' }); // $ExpectType Component
component({ service: 'foo.bar' }); // $ExpectType Component

const cc: ComponentCore = c;
c.entity; // $ExpectType Component
c.reconnect; // $ExpectType Reconnect<Component>
c.middleware; // $ExpectType Middleware<Component>
c.iqCaller; // $ExpectType IQCaller<Component>
c.iqCallee; // $ExpectType IQCallee<Component>

jid('foo');
jid(null, 'foo', 'bar');

xml('foo');
xml('foo', { foo: 'bar' }, 'bar');
