import ExternalMechanism = require('sasl-external');
import { Mechanism } from 'sasl-external';
import { Factory } from 'saslmechanisms';

new Factory().use(ExternalMechanism);
new Factory().use(Mechanism);

// $ExpectType "EXTERNAL"
ExternalMechanism.prototype.name;
// $ExpectType true
ExternalMechanism.prototype.clientFirst;

const m = new ExternalMechanism();

// $ExpectType "EXTERNAL"
m.name;
// $ExpectType true
m.clientFirst;
// $ExpectType string
m.response({ authzid: 'a' });
// $ExpectType void
m.challenge('challenge');
