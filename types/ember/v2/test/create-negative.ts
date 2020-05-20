import { assertType } from './lib/assert';
import Ember from 'ember';
import { PersonWithNumberName, Person } from './create';

const p3 = Person.create({ firstName: 99 }); // $ExpectError
const p2b = Person.create({}, { firstName: 99 }); // $ExpectError
const p2c = Person.create({}, {}, { firstName: 99 }); // $ExpectError

const p4 = new PersonWithNumberName();
