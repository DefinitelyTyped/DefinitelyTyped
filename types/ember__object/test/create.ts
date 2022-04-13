import { assertType } from './lib/assert';
import EmberObject, { computed } from '@ember/object';
import ComputedProperty from '@ember/object/computed';

/**
 * Zero-argument case
 */
const o = EmberObject.create();
// create returns an object
assertType<object>(o);
// object returned by create type-checks as an instance of Ember.Object
assertType<boolean>(o.isDestroyed); // from instance
assertType<boolean>(o.isDestroying); // from instance
assertType<(key: keyof EmberObject) => any>(o.get); // from prototype

/**
 * One-argument case
 */
const o1 = EmberObject.create({ x: 9, y: 'hello', z: false });
assertType<number>(o1.x);
assertType<string>(o1.y);
o1.y; // $ExpectType string
o1.z; // $ExpectType boolean

const obj = EmberObject.create({ a: 1 }, { b: 2 }, { c: 3 });
assertType<number>(obj.b);
assertType<number>(obj.a);
assertType<number>(obj.c);

export class Person extends EmberObject {
    fullName = computed('firstName', 'lastName', function () {
        return [this.firstName + this.lastName].join(' ');
    });
    declare firstName: string;
    declare lastName: string;
    declare age: number;
}
const p = new Person();

assertType<string>(p.firstName);
assertType<ComputedProperty<string>>(p.fullName);
assertType<string>(p.get('fullName'));

const p2 = Person.create({ firstName: 'string' });
const p2b = Person.create({}, { firstName: 'string' });
const p2c = Person.create({}, {}, { firstName: 'string' });

export class PersonWithNumberName extends Person.extend({
    fullName: 6,
}) {}

const p4 = new PersonWithNumberName();
assertType<string>(p4.firstName);
assertType<number>(p4.fullName);
