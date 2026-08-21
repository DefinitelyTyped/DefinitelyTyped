import { SASL } from "@xmpp/sasl";
import saslPlain from "@xmpp/sasl-plain";

saslPlain(null as any as SASL); // $ExpectType void
