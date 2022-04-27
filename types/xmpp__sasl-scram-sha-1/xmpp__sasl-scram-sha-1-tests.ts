import { SASL } from '@xmpp/sasl';
import saslScramSha1 = require('@xmpp/sasl-scram-sha-1');

saslScramSha1(null as any as SASL); // $ExpectType void
