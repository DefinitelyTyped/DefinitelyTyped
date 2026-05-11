import Ember from "ember";
import { Person, PersonWithNumberName } from "./create";
import { assertType } from "./lib/assert";

// @ts-expect-error
const p3 = Person.create({ firstName: 99 });
// @ts-expect-error
const p2b = Person.create({}, { firstName: 99 });
// @ts-expect-error
const p2c = Person.create({}, {}, { firstName: 99 });

const p4 = new PersonWithNumberName();
