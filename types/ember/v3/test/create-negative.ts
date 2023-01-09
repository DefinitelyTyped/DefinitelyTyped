import { assertType } from './lib/assert';
import Ember from 'ember';
import { PersonWithNumberName, Person } from './create';

// @ts-expect-error
Person.create({ firstName: 99 });
// @ts-expect-error
Person.create({}, { firstName: 99 });
// @ts-expect-error
Person.create({}, {}, { firstName: 99 });

const p4 = new PersonWithNumberName();

// assertType<Ember.ComputedProperty<string, string>>(p4.fullName); // @ts-expect-error
