import { SASL } from "@xmpp/sasl";
import saslAnonymous from "@xmpp/sasl-anonymous";

saslAnonymous(null as any as SASL); // $ExpectType void
