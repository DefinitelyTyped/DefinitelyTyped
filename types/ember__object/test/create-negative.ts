import { assertType } from './lib/assert';
import { PersonWithNumberName, Person } from './create';

Person.create({ firstName: 99 }); // $ExpectError
Person.create({}, { firstName: 99 }); // $ExpectError
Person.create({}, {}, { firstName: 99 }); // $ExpectError

const p4 = new PersonWithNumberName();
