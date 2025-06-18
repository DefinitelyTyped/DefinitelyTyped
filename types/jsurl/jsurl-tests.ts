import { parse, stringify, tryParse } from "jsurl";

// $ExpectType string
const stringifyResult = stringify({});

// $ExpectType object
const parseResultDefault = parse("");
// $ExpectType { foo: string; bar: number; }
const parseResultGeneric = parse<{
    foo: string;
    bar: number;
}>("");

// $ExpectType object
const tryParseResultNoDefault = tryParse("");

// $ExpectType { foo: string; }
const tryParseResult = tryParse("", {
    foo: "bar",
});

// @ts-expect-error -- invalid default value
const tryParseResultInvalid = tryParse("", "notAnObject");
