import Ember from 'ember';
import { assertType } from './lib/assert';
import { UnwrapComputedPropertyGetter } from "@ember/object/-private/types";

/**
 * Zero-argument case
 */
const o = Ember.Object.create();
// create returns an object
assertType<object>(o);
// object returned by create type-checks as an instance of Ember.Object
assertType<boolean>(o.isDestroyed); // from instance
assertType<boolean>(o.isDestroying); // from instance
assertType<<K extends keyof Ember.Object>(key: K) => UnwrapComputedPropertyGetter<Ember.Object[K]>>(o.get); // from prototype

/**
 * One-argument case
 */
const o1 = Ember.Object.create({ x: 9, y: 'hello', z: false });
assertType<number>(o1.x);
assertType<string>(o1.y);
o1.y; // $ExpectType string
o1.z; // $ExpectType boolean

const obj = Ember.Object.create({ a: 1 }, { b: 2 }, { c: 3 });
assertType<number>(obj.b);
assertType<number>(obj.a);
assertType<number>(obj.c);

export class Person extends Ember.Object.extend({
    fullName: Ember.computed('firstName', 'lastName', function () {
        return [this.firstName + this.lastName].join(' ');
    }),
}) {
    firstName: string;
    lastName: string;
    age: number;
}
const p = new Person();

assertType<string>(p.firstName);
assertType<Ember.ComputedProperty<string>>(p.fullName);
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
