import { Person, PersonWithNumberName } from "./create";
import { assertType } from "./lib/assert";

// @ts-expect-error
Person.create({ firstName: 99 });
// @ts-expect-error
Person.create({}, { firstName: 99 });
// @ts-expect-error
Person.create({}, {}, { firstName: 99 });

const p4 = new PersonWithNumberName();
