import AnonymousMechanism = require('sasl-anonymous');
import { Mechanism } from 'sasl-anonymous';
import { Factory } from 'saslmechanisms';

new Factory().use(AnonymousMechanism);
new Factory().use(Mechanism);

// $ExpectType "ANONYMOUS"
AnonymousMechanism.prototype.name;
// $ExpectType true
AnonymousMechanism.prototype.clientFirst;

const m = new AnonymousMechanism();

// $ExpectType "ANONYMOUS"
m.name;
// $ExpectType true
m.clientFirst;
// $ExpectType string
m.response({ trace: 't' });
// $ExpectType void
m.challenge('challenge');
