import PlainMechanism = require('sasl-plain');
import { Mechanism } from 'sasl-plain';
import { Factory } from 'saslmechanisms';

new Factory().use(PlainMechanism);
new Factory().use(Mechanism);

// $ExpectType "PLAIN"
PlainMechanism.prototype.name;
// $ExpectType true
PlainMechanism.prototype.clientFirst;

const m = new PlainMechanism();

// $ExpectType "PLAIN"
m.name;
// $ExpectType true
m.clientFirst;
// $ExpectType string
m.response({ username: 'u', password: 'pw' });
m.response({ username: 'u', password: 'pw', authzid: 'a' });
// $ExpectType PlainMechanism
m.challenge('challenge');
