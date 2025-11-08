import SASLFactory = require("saslmechanisms");
import { SASL } from "@xmpp/sasl";

declare const Mechanism: SASLFactory.MechanismStatic;

export { Mechanism };

export default function saslHashedToken(sasl: SASL): void;
