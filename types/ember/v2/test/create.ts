import Ember from 'ember';
import { assertType } from './lib/assert';

const o = Ember.Object.create();
assertType<object>(o);

const o1 = Ember.Object.create({x: 9});
assertType<number>(o1.x);

const obj = Ember.Object.create({ a: 1 }, { b: 2 }, { c: 3 });
assertType<number>(obj.b);
assertType<number>(obj.a);
assertType<number>(obj.c);

export class Person extends Ember.Object.extend({
    fullName: Ember.computed('firstName', 'lastName', function() {
        return [this.firstName + this.lastName].join(' ');
    })
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
  fullName: 6
}) {}

const p4 = new PersonWithNumberName();
assertType<string>(p4.firstName);
assertType<number>(p4.fullName);
