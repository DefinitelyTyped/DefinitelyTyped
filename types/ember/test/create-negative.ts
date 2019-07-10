import { assertType } from './lib/assert';
import Ember from 'ember';
import { PersonWithNumberName, Person } from './create';

Person.create({ firstName: 99 }); // $ExpectError
Person.create({}, { firstName: 99 }); // $ExpectError
Person.create({}, {}, { firstName: 99 }); // $ExpectError

const p4 = new PersonWithNumberName();

// assertType<Ember.ComputedProperty<string, string>>(p4.fullName); // $ExpectError
