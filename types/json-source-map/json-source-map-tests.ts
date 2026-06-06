import { parse, stringify } from "json-source-map";

const stringifyResult = stringify({ foo: "bar" }, null, 2);
// $ExpectType string
const json = stringifyResult.json;
// $ExpectType Pointers
const stringifyPointers = stringifyResult.pointers;

const parseResult = parse("{ \"foo\": \"bar\" }");
// $ExpectType unknown
const data = parseResult.data;
// $ExpectType Pointers
const parsePointers = parseResult.pointers;
