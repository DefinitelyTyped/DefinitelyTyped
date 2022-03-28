import { SASL } from '@xmpp/sasl';
import saslPlain = require('@xmpp/sasl-plain');

saslPlain(null as any as SASL); // $ExpectType void
