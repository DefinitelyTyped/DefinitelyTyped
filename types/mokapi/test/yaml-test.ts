import { JSONValue } from "mokapi";
import { parse, stringify } from "mokapi/yaml";

// @ts-expect-error
parse(1);
parse("");
const json: JSONValue = parse("");

// @ts-expect-error
const n1: number = stringify(1);
const s1: string = stringify({});
stringify("foo");
