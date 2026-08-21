import { lookup } from "zipcode-to-timezone";

// $ExpectType string | null
const stringLookup = lookup("10001");

// $ExpectType string | null
const numberLookup = lookup(10001);

// @ts-expect-error
const noArg = lookup();

// @ts-expect-error
const wrongType = lookup([]);
