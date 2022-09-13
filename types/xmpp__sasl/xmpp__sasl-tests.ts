import Connection = require('@xmpp/connection');
import XMPPError = require('@xmpp/error');
import middleware = require('@xmpp/middleware');
import sasl = require('@xmpp/sasl');
import SASLError = require('@xmpp/sasl/lib/SASLError');
import streamFeatures = require('@xmpp/stream-features');
import { Element } from '@xmpp/xml';
import SASLFactory = require('saslmechanisms');
import SASLAnonymous = require('sasl-anonymous');
import SASLPlain = require('sasl-plain');
import SASLScramSha1 = require('sasl-scram-sha-1');

// test type exports
type Credentials = sasl.Credentials;
type CredentialsObj = sasl.CredentialsObj;
type CredentialsFactory = sasl.CredentialsFactory;
type SASL = sasl.SASL;
type Err = SASLError;

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

const mw = middleware({ entity: new Foo({ service: 'foo', domain: 'foo.bar' }) });
const sf = streamFeatures({ middleware: mw });

const saslMw = sasl({ streamFeatures: sf }, {}); // $ExpectType SASL
sasl({ streamFeatures: sf }, { username: 'foo' }); // $ExpectType SASL
sasl({ streamFeatures: sf }, { password: 'foo' }); // $ExpectType SASL
// $ExpectType SASL
sasl({ streamFeatures: sf }, async (cb, mech) => {
    cb; // $ExpectType (credentials: CredentialsObj) => Promise<void>
    mech; // $ExpectType string

    await cb({ username: 'foo', password: 'bar' });
});

class MyMechanism implements SASLFactory.Mechanism {
    name = 'foo';

    response(cred: { [key: string]: any }) {
        return 'bar';
    }

    challenge(chal: string) {}
}

saslMw.use('foo', MyMechanism); // $ExpectType Factory
saslMw.use(MyMechanism); // $ExpectType Factory
saslMw.use(SASLAnonymous); // $ExpectType Factory
saslMw.use(SASLPlain); // $ExpectType Factory
saslMw.use(SASLScramSha1); // $ExpectType Factory

const err = new SASLError('foo', 'bar', new Element('foo'));
const xmppErr: XMPPError<'SASLError'> = err;
err.name; // $ExpectType "SASLError"
