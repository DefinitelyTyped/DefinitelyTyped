import { SASL } from "@xmpp/sasl";
import saslScramSha1 from "@xmpp/sasl-scram-sha-1";

saslScramSha1(null as any as SASL); // $ExpectType void
