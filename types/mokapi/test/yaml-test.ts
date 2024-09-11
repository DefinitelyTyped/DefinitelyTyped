import { JSONValue } from "mokapi";
import { parse, stringify } from "mokapi/yaml";

// @ts-expect-error
parse(1);
parse("");
const person = parse("");
person.name;

// @ts-expect-error
const n1: number = stringify(1);
const s1: string = stringify({});
stringify("foo");
