import { SASL } from '@xmpp/sasl';
import saslAnonymous = require('@xmpp/sasl-anonymous');

saslAnonymous(null as any as SASL); // $ExpectType void
