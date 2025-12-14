import saslHashedToken, { Mechanism } from "@xmpp/sasl-ht-sha-256-none";
import SASLFactory = require("saslmechanisms");

const saslFactory = new SASLFactory();

saslHashedToken(saslFactory); // $ExpectType void
saslFactory.use(Mechanism);
