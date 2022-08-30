import { assertType } from './lib/assert';
import { PersonWithNumberName, Person } from './create';

// @ts-expect-error
Person.create({ firstName: 99 });
// @ts-expect-error
Person.create({}, { firstName: 99 });
// @ts-expect-error
Person.create({}, {}, { firstName: 99 });

const p4 = new PersonWithNumberName();
