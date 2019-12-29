import Fct = require('saslmechanisms');
import { Factory, MechanismStatic, Mechanism } from 'saslmechanisms';

const Mech: MechanismStatic = null as any;

const factory = new Fct();
new Factory();
new Factory.Factory();

// $ExpectType Factory
factory.use(Mech);
factory.use('Mech', Mech);

const mech: Mechanism | null = factory.create(['Mech']);
if (mech) {
    // $ExpectType string
    mech.name;
    // $ExpectType string
    mech.response({ foo: 'bar' });
    // $ExpectType void
    mech.challenge('challenge');
}
